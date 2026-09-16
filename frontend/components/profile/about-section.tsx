import { Pencil } from "lucide-react";

export function AboutSection({
  value,
  editing,
  onEdit,
  onChange,
}: {
  value: string;
  editing: boolean;
  onEdit: () => void;
  onChange: (value: string) => void;
}) {
  return (
    <section className="rounded-2xl border border-line bg-white p-5 shadow-[0_2px_12px_rgba(15,23,42,.04)] sm:p-6">
      <div className="flex items-center justify-between">
        <h2 className="font-bold">About Me</h2>
        <button
          type="button"
          onClick={onEdit}
          className="grid size-8 place-items-center rounded-full text-muted transition hover:bg-brand-soft hover:text-brand"
          aria-label={editing ? "Finish editing about me" : "Edit about me"}
        >
          <Pencil className="size-4" />
        </button>
      </div>
      {editing ? (
        <>
          <textarea
            value={value}
            maxLength={250}
            rows={4}
            onChange={(event) => onChange(event.target.value)}
            className="mt-4 w-full resize-none rounded-xl border border-line p-3 text-sm leading-relaxed outline-none focus:border-brand"
          />
          <p className="mt-1 text-right text-[11px] text-muted">{value.length}/250</p>
        </>
      ) : (
        <p className="mt-3 text-sm leading-7 text-muted">{value}</p>
      )}
    </section>
  );
}
