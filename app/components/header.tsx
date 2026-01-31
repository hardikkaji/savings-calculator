import { useState } from "react";
import { Menu } from "lucide-react";
import { NavLink } from "react-router";
import { useStore } from "~/useStore";
import { currencySymbols } from "~/lib/currency-symbols";
import { SettingsDialog } from "./settings-dialog";

const languageFlags: Record<string, string> = {
  en: "🇬🇧",
  sv: "🇸🇪",
};

export function Header() {
  const currency = useStore((state) => state.currency);
  const language = useStore((state) => state.language);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-primary fixed w-full z-20 top-0 start-0 border-b border-default shadow-2xs">
      <div className="max-w-7xl flex flex-wrap items-center justify-between mx-auto p-4 gap-3">
        <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-8">
          <a
            href="#"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img src="./logo.png" className="h-10" alt="Savings Calculator" />
            <span className="self-center text-xl text-heading font-semibold whitespace-nowrap text-zinc-100">
              Calculators
            </span>
          </a>
          <ul className="hidden sm:flex items-center gap-4 text-zinc-100 text-sm">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `font-medium hover:text-zinc-200 ${
                    isActive ? "text-white underline underline-offset-4" : ""
                  }`
                }
              >
                Savings
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/withdrawal"
                className={({ isActive }) =>
                  `font-medium hover:text-zinc-200 ${
                    isActive ? "text-white underline underline-offset-4" : ""
                  }`
                }
              >
                Withdrwal
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="flex items-center gap-2 sm:gap-4">
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-md border border-zinc-200/30 px-2.5 py-1.5 text-zinc-100 hover:bg-zinc-100/10 sm:hidden"
            onClick={() => setIsMenuOpen((prev) => !prev)}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
          >
            <Menu className="size-5" aria-hidden="true" />
            <span className="sr-only">Toggle menu</span>
          </button>
          <div className="flex items-center gap-2 text-zinc-100">
            <span className="text-lg">{languageFlags[language]} | </span>
            <span className="text-sm font-medium">
              {currencySymbols[currency]} - {currency}
            </span>
          </div>
          <SettingsDialog />
        </div>
      </div>
      <div
        id="mobile-menu"
        className={`sm:hidden ${isMenuOpen ? "block" : "hidden"} border-t border-default bg-primary`}
      >
        <ul className="max-w-7xl mx-auto px-4 py-3 flex flex-col gap-2 text-zinc-100 text-sm">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                `font-medium hover:text-zinc-200 ${
                  isActive ? "text-white underline underline-offset-4" : ""
                }`
              }
              onClick={() => setIsMenuOpen(false)}
            >
              Savings
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/withdrawal"
              className={({ isActive }) =>
                `font-medium hover:text-zinc-200 ${
                  isActive ? "text-white underline underline-offset-4" : ""
                }`
              }
              onClick={() => setIsMenuOpen(false)}
            >
              Withdrwal
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}
