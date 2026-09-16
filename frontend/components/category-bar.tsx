import { CategoryIcon } from "@/components/category-icon";
import { categories } from "@/lib/data";

export function CategoryBar() {
  return (
    <section className="mx-auto max-w-[1240px] px-4 py-6">
      <div className="no-scrollbar overflow-x-auto rounded-2xl border border-line">
        <ul className="flex min-w-max items-start justify-between gap-1 px-2 py-4">
          {categories.map((category) => (
            <li key={category._id}>
              <a
                href={`/category/${category.slug}`}
                className="group flex w-[78px] flex-col items-center gap-2 rounded-xl px-1 py-1"
              >
                <span
                  className="grid size-12 place-items-center rounded-full text-ink transition group-hover:scale-105"
                  style={{ backgroundColor: category.accent }}
                >
                  <CategoryIcon name={category.icon} className="size-5" />
                </span>
                <span className="text-center text-xs font-medium leading-tight text-ink group-hover:text-brand">
                  {category.name}
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
