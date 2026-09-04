import { Link } from "react-router-dom";
import { footerLinks, siteConfig, socialLinks } from "../../data/mockData";

export function Footer() {
  return (
    <footer className="border-t border-hairline bg-paper">
      <div className="mx-auto max-w-7xl px-5 py-16 md:px-8 lg:px-12">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12">
          <div className="md:col-span-5">
            <h3 className="font-serif text-2xl text-ink">{siteConfig.name}</h3>
            <p className="mt-2 text-sm tracking-wide text-ink-soft">
              {siteConfig.locations}
            </p>
          </div>

          <div className="md:col-span-4">
            <h4 className="text-xs font-semibold uppercase tracking-[0.18em] text-ink">
              Commissions &amp; Press
            </h4>
            <a
              href={`mailto:${siteConfig.email}`}
              className="mt-3 inline-block text-sm text-ink-soft underline decoration-hairline underline-offset-4 transition-colors hover:text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            >
              {siteConfig.email}
            </a>
          </div>

          <div className="md:col-span-3">
            <h4 className="text-xs font-semibold uppercase tracking-[0.18em] text-ink">
              Curated Feeds
            </h4>
            <ul className="mt-3 space-y-2">
              {socialLinks.map((social) => (
                <li key={social.label}>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-ink-soft underline decoration-hairline underline-offset-4 transition-colors hover:text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                  >
                    {social.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-hairline pt-6 md:flex-row md:items-center md:justify-between">
          <p className="text-xs text-ink-soft">{siteConfig.footerRights}</p>
          <nav aria-label="Footer navigation">
            <ul className="flex gap-6">
              {footerLinks.map((item) => (
                <li key={item.label}>
                  <Link
                    to={item.path}
                    className="text-xs text-ink-soft transition-colors hover:text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
}
