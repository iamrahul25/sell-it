const stats = [
  { value: "3", label: "Active Listings" },
  { value: "2", label: "Sold Items" },
  { value: "12", label: "Reviews" },
  { value: "4.8", label: "Rating" },
];

export function ProfileStats() {
  return (
    <section className="grid grid-cols-2 overflow-hidden rounded-2xl border border-line bg-white shadow-[0_2px_12px_rgba(15,23,42,.04)] sm:grid-cols-4">
      {stats.map((stat, index) => (
        <div
          key={stat.label}
          className={`px-4 py-5 text-center ${
            index % 2 ? "" : "border-r border-line"
          } ${index >= 2 ? "border-t border-line sm:border-t-0" : ""} ${
            index > 0 ? "sm:border-l sm:border-line" : ""
          }`}
        >
          <p className="text-2xl font-bold text-brand">{stat.value}</p>
          <p className="mt-1 text-xs font-medium text-muted">{stat.label}</p>
        </div>
      ))}
    </section>
  );
}
