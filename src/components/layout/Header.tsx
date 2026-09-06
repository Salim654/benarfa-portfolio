import { useEffect, useState } from "react";
import clsx from "clsx";
import { Link, NavLink, useLocation } from "react-router-dom";
import { images, navLinks, siteConfig } from "../../data/mockData";

const navLinkClass = ({ isActive }: { isActive: boolean }) =>
  clsx(
    "relative pb-1 text-sm tracking-wide transition-colors duration-300",
    "after:absolute after:bottom-0 after:left-0 after:h-px after:bg-accent after:transition-all after:duration-300",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent",
    isActive
      ? "text-ink after:w-full"
      : "text-ink-soft after:w-0 hover:text-ink hover:after:w-full",
  );

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  useEffect(() => {
    closeMenu();
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header
      className={clsx(
        "fixed inset-x-0 top-0 z-50 h-20 transition-all duration-300",
        scrolled || menuOpen
          ? "border-b border-hairline bg-paper/90 backdrop-blur-md"
          : "border-b border-transparent bg-transparent",
      )}
    >
      <div className="mx-auto flex h-full max-w-7xl items-center justify-between px-5 md:px-8 lg:px-12">
        <Link
          to="/"
          className="group flex items-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
          aria-label="Benarfa Production — Home"
        >
          <span className="font-serif text-lg font-semibold uppercase tracking-[0.18em] text-ink transition-colors duration-300 group-hover:text-accent-strong">
            {siteConfig.name}
          </span>
        </Link>

        <nav
          className="hidden items-center gap-8 md:flex"
          aria-label="Primary navigation"
        >
          {navLinks.map((link) => (
            <NavLink key={link.path} to={link.path} end className={navLinkClass}>
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <Link
            to="/contact"
            className="hidden rounded-full bg-accent-strong px-5 py-2 text-sm font-medium tracking-wide text-white transition-colors duration-300 hover:bg-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 sm:inline-block md:inline-flex"
          >
            Inquire
          </Link>
          <img
            src={images.avatar}
            alt="Photographer profile"
            className="hidden h-9 w-9 rounded-full object-cover ring-1 ring-hairline md:block"
          />

          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full text-ink transition-colors duration-200 hover:bg-ink/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent md:hidden"
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
          >
            <svg
              className="h-6 w-6"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={1.8}
              strokeLinecap="round"
            >
              {menuOpen ? (
                <path d="M6 6l12 12M18 6L6 18" />
              ) : (
                <path d="M3 6h18M3 12h18M3 18h18" />
              )}
            </svg>
          </button>
        </div>
      </div>

      <div
        id="mobile-menu"
        className={clsx(
          "overflow-hidden border-t border-hairline bg-paper transition-[max-height,opacity] duration-300 ease-out md:hidden",
          menuOpen ? "max-h-96 opacity-100" : "max-h-0 border-t-0 opacity-0",
        )}
      >
        <nav
          className="flex flex-col gap-1 px-5 py-4"
          aria-label="Mobile navigation"
        >
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              end
              onClick={closeMenu}
              className={({ isActive }) =>
                clsx(
                  "rounded-lg px-3 py-3 text-base font-medium transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent",
                  isActive
                    ? "bg-accent/10 text-ink"
                    : "text-ink-soft hover:bg-ink/5 hover:text-ink",
                )
              }
            >
              {link.label}
            </NavLink>
          ))}
          <Link
            to="/contact"
            onClick={closeMenu}
            className="mt-2 rounded-full bg-accent-strong px-5 py-3 text-center text-sm font-medium tracking-wide text-white transition-colors duration-300 hover:bg-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
          >
            Inquire
          </Link>
        </nav>
      </div>
    </header>
  );
}
