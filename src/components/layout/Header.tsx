import { useEffect, useState } from "react";
import clsx from "clsx";
import { Link, NavLink } from "react-router-dom";
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

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={clsx(
        "fixed inset-x-0 top-0 z-50 h-20 transition-all duration-300",
        scrolled
          ? "border-b border-hairline bg-paper/90 backdrop-blur-md"
          : "border-b border-transparent bg-transparent",
      )}
    >
      <div className="mx-auto flex h-full max-w-7xl items-center justify-between px-5 md:px-8 lg:px-12">
        <Link
          to="/"
          className="group flex items-center gap-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
          aria-label="Benarfa Production — Home"
        >
          <img
            src={images.logo}
            alt="Benarfa Production wordmark"
            className="h-9 w-auto transition-transform duration-300 group-hover:scale-[1.02]"
          />
          <span className="hidden text-xs font-medium uppercase tracking-[0.25em] text-ink lg:inline">
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
            className="rounded-full bg-accent-strong px-5 py-2 text-sm font-medium tracking-wide text-white transition-colors duration-300 hover:bg-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
          >
            Inquire
          </Link>
          <img
            src={images.avatar}
            alt="Photographer profile"
            className="hidden h-9 w-9 rounded-full object-cover ring-1 ring-hairline md:block"
          />
        </div>
      </div>
    </header>
  );
}
