const FOOTER_LINKS = [
  {
    title: "Marketplace",
    links: ["Browse Listings", "Post Your Ad", "Categories", "Pricing Guide"],
  },
  {
    title: "Company",
    links: ["About Sell-it", "Sustainability", "Careers", "Blog"],
  },
  {
    title: "Support",
    links: ["Help Centre", "Safety Tips", "Contact Us", "Report a Listing"],
  },
];

export function SiteFooter() {
  return (
    <footer className="mx-auto max-w-[1240px] px-4 py-10">
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-[1.4fr_repeat(3,1fr)]">
        <div>
          <div className="flex items-center gap-2">
            <span className="grid size-8 place-items-center rounded-lg bg-brand text-sm font-bold text-white">
              S
            </span>
            <span className="text-base font-bold tracking-tight">Sell-it</span>
          </div>
          <p className="mt-3 max-w-xs text-xs leading-relaxed text-muted">
            A community marketplace for buying and selling pre-owned items. Give
            your unused things a second life.
          </p>
        </div>

        {FOOTER_LINKS.map((group) => (
          <div key={group.title}>
            <h3 className="text-xs font-semibold uppercase tracking-wide text-ink">
              {group.title}
            </h3>
            <ul className="mt-3 space-y-2">
              {group.links.map((link) => (
                <li key={link}>
                  <a href="#" className="text-xs text-muted transition hover:text-brand">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <p className="mt-8 border-t border-line pt-5 text-xs text-muted">
        © {new Date().getFullYear()} Sell-it. Buy. Sell. Reuse. Better Together.
      </p>
    </footer>
  );
}
