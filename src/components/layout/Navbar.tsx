import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Logo } from "@/components/brand/Logo";
import { useScrolled } from "@/hooks/useScrolled";
import { navItems } from "@/data/nav";

export function Navbar() {
  const scrolled = useScrolled(24);
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  // Close the mobile menu whenever the route changes.
  useEffect(() => setOpen(false), [pathname]);

  // Lock body scroll while the mobile menu is open.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled || open
          ? "border-b border-line bg-bg/85 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <nav
        aria-label="Main navigation"
        className="shell flex h-[76px] items-center justify-between gap-6"
      >
        <Link to="/" aria-label="Global One Media — home" className="shrink-0">
          <Logo size="1.5rem" />
        </Link>

        {/* Desktop links */}
        <ul className="hidden items-center gap-8 lg:flex">
          {navItems.map((item) => (
            <li key={item.to}>
              <NavLink
                to={item.to}
                className={({ isActive }) =>
                  `relative text-sm font-medium transition-colors hover:text-ink after:absolute after:-bottom-1.5 after:left-0 after:h-px after:bg-brand-bright after:transition-all after:duration-300 ${
                    isActive
                      ? "text-ink after:w-full"
                      : "text-muted after:w-0 hover:after:w-full"
                  }`
                }
              >
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>

        <Link
          to="/stations"
          className="hidden items-center justify-center gap-2 rounded-full bg-brand px-6 py-3 text-sm font-semibold text-ink shadow-[0_18px_40px_-18px_rgba(29,120,162,0.9)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-brand-bright lg:inline-flex"
        >
          Start Listening
        </Link>

        {/* Mobile toggle */}
        <button
          type="button"
          className="relative z-50 flex h-10 w-10 items-center justify-center rounded-lg ring-1 ring-line lg:hidden"
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">Toggle menu</span>
          <div className="relative h-4 w-5">
            <span
              className={`absolute left-0 h-0.5 w-5 bg-ink transition-all duration-300 ${
                open ? "top-2 rotate-45" : "top-0"
              }`}
            />
            <span
              className={`absolute left-0 top-2 h-0.5 w-5 bg-ink transition-all duration-300 ${
                open ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`absolute left-0 h-0.5 w-5 bg-ink transition-all duration-300 ${
                open ? "top-2 -rotate-45" : "top-4"
              }`}
            />
          </div>
        </button>
      </nav>

      {/* Mobile panel */}
      <div
        className={`overflow-hidden border-t border-line bg-bg/95 backdrop-blur-xl transition-[max-height,opacity] duration-300 lg:hidden ${
          open ? "max-h-[80vh] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="shell flex flex-col gap-1 py-6">
          {navItems.map((item) => (
            <li key={item.to}>
              <NavLink
                to={item.to}
                className="block rounded-lg px-3 py-3 text-lg font-semibold text-muted transition-colors hover:bg-surface hover:text-ink"
              >
                {item.label}
              </NavLink>
            </li>
          ))}
          <li className="mt-3 px-3">
            <Link
              to="/stations"
              className="flex w-full items-center justify-center rounded-full bg-brand px-6 py-3 text-sm font-semibold text-ink"
            >
              Start Listening
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}
