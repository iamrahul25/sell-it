const steps = [
  { number: 1, label: "Item Details" },
  { number: 2, label: "Photos" },
  { number: 3, label: "Review & Publish" },
];

export function SellProgress() {
  return (
    <ol className="flex min-w-[310px] items-start">
      {steps.map((step, index) => (
        <li key={step.number} className="relative flex flex-1 flex-col items-center">
          {index > 0 && (
            <span className="absolute right-1/2 top-4 h-px w-full bg-line" />
          )}
          <span
            className={`relative z-10 grid size-8 place-items-center rounded-full text-xs font-bold ${
              step.number === 1
                ? "bg-brand text-white shadow-[0_0_0_4px_rgba(10,159,74,.12)]"
                : "bg-slate-100 text-muted"
            }`}
          >
            {step.number}
          </span>
          <span
            className={`mt-2 text-center text-[11px] font-semibold ${
              step.number === 1 ? "text-ink" : "text-muted"
            }`}
          >
            {step.label}
          </span>
        </li>
      ))}
    </ol>
  );
}
