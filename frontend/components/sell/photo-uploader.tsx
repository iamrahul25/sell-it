"use client";

import { ChangeEvent, DragEvent, useRef, useState } from "react";
import Image from "next/image";
import {
  ArrowLeft,
  ArrowRight,
  ImagePlus,
  Images,
  Star,
  X,
} from "lucide-react";
import type { UploadedPhoto } from "@/lib/sell";

export function PhotoUploader({
  photos,
  setPhotos,
}: {
  photos: UploadedPhoto[];
  setPhotos: React.Dispatch<React.SetStateAction<UploadedPhoto[]>>;
}) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [isDragging, setIsDragging] = useState(false);

  function addFiles(files: FileList | File[]) {
    const validFiles = Array.from(files)
      .filter((file) => ["image/jpeg", "image/png", "image/webp"].includes(file.type))
      .slice(0, 10 - photos.length);

    setPhotos((current) => [
      ...current,
      ...validFiles.map((file) => ({
        id: `${file.name}-${file.lastModified}-${crypto.randomUUID()}`,
        file,
        previewUrl: URL.createObjectURL(file),
      })),
    ]);
  }

  function handleInput(event: ChangeEvent<HTMLInputElement>) {
    if (event.target.files) addFiles(event.target.files);
    event.target.value = "";
  }

  function handleDrop(event: DragEvent<HTMLDivElement>) {
    event.preventDefault();
    setIsDragging(false);
    addFiles(event.dataTransfer.files);
  }

  function removePhoto(id: string) {
    setPhotos((current) => {
      const removed = current.find((photo) => photo.id === id);
      if (removed) URL.revokeObjectURL(removed.previewUrl);
      return current.filter((photo) => photo.id !== id);
    });
  }

  function movePhoto(index: number, direction: 1 | -1) {
    setPhotos((current) => {
      const target = index + direction;
      if (target < 0 || target >= current.length) return current;
      const reordered = [...current];
      [reordered[index], reordered[target]] = [reordered[target], reordered[index]];
      return reordered;
    });
  }

  function setCover(index: number) {
    setPhotos((current) => {
      const reordered = [...current];
      const [photo] = reordered.splice(index, 1);
      reordered.unshift(photo);
      return reordered;
    });
  }

  return (
    <section className="rounded-2xl border border-line bg-white p-5 shadow-[0_2px_12px_rgba(15,23,42,.04)] sm:p-6">
      <div className="flex items-start gap-3">
        <span className="grid size-9 shrink-0 place-items-center rounded-lg bg-brand-soft text-brand">
          <Images className="size-5" />
        </span>
        <div>
          <h2 className="font-bold">Upload Photos</h2>
          <p className="mt-0.5 text-xs text-muted">
            Add clear photos to get more responses.
          </p>
        </div>
      </div>

      <input
        ref={inputRef}
        type="file"
        accept="image/jpeg,image/png,image/webp"
        multiple
        onChange={handleInput}
        className="hidden"
      />

      <div
        onDragOver={(event) => {
          event.preventDefault();
          setIsDragging(true);
        }}
        onDragLeave={() => setIsDragging(false)}
        onDrop={handleDrop}
        className={`mt-5 rounded-xl border-2 border-dashed p-6 text-center transition ${
          isDragging ? "border-brand bg-brand-soft" : "border-line bg-slate-50/60"
        }`}
      >
        <span className="mx-auto grid size-12 place-items-center rounded-full bg-white text-brand shadow-sm">
          <ImagePlus className="size-6" />
        </span>
        <p className="mt-3 text-sm font-bold">Drag & drop photos here</p>
        <p className="mt-1 text-xs text-muted">or click to upload</p>
        <button
          type="button"
          onClick={() => inputRef.current?.click()}
          disabled={photos.length >= 10}
          className="mt-4 rounded-lg border border-brand px-4 py-2 text-xs font-bold text-brand transition hover:bg-brand-soft disabled:opacity-50"
        >
          Choose Photos
        </button>
      </div>

      {photos.length > 0 && (
        <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4">
          {photos.map((photo, index) => (
            <div
              key={photo.id}
              className="group relative aspect-square overflow-hidden rounded-xl border border-line bg-slate-100"
            >
              <Image
                src={photo.previewUrl}
                alt={`Uploaded photo ${index + 1}`}
                fill
                unoptimized
                sizes="160px"
                className="object-cover"
              />
              {index === 0 && (
                <span className="absolute bottom-2 left-2 rounded-full bg-brand px-2 py-1 text-[10px] font-bold text-white">
                  Cover
                </span>
              )}
              <button
                type="button"
                onClick={() => removePhoto(photo.id)}
                aria-label={`Delete photo ${index + 1}`}
                className="absolute right-2 top-2 grid size-7 place-items-center rounded-full bg-ink/75 text-white"
              >
                <X className="size-4" />
              </button>
              <div className="absolute inset-x-2 bottom-2 ml-auto flex w-fit gap-1 opacity-0 transition group-hover:opacity-100">
                {index > 0 && (
                  <>
                    <button
                      type="button"
                      onClick={() => setCover(index)}
                      aria-label={`Set photo ${index + 1} as cover`}
                      className="grid size-7 place-items-center rounded-full bg-white text-brand shadow"
                    >
                      <Star className="size-3.5" />
                    </button>
                    <button
                      type="button"
                      onClick={() => movePhoto(index, -1)}
                      aria-label={`Move photo ${index + 1} left`}
                      className="grid size-7 place-items-center rounded-full bg-white text-ink shadow"
                    >
                      <ArrowLeft className="size-3.5" />
                    </button>
                  </>
                )}
                {index < photos.length - 1 && (
                  <button
                    type="button"
                    onClick={() => movePhoto(index, 1)}
                    aria-label={`Move photo ${index + 1} right`}
                    className="grid size-7 place-items-center rounded-full bg-white text-ink shadow"
                  >
                    <ArrowRight className="size-3.5" />
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      )}

      <p className="mt-3 text-xs text-muted">
        Add at least 3 photos. You can upload up to 10 photos (JPG, PNG, WebP).
        <span className="ml-1 font-semibold text-ink">{photos.length}/10</span>
      </p>
    </section>
  );
}
