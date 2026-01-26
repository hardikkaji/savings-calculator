import { useStore } from "~/useStore";
import { currencySymbols } from "~/lib/currency-symbols";
import { SettingsDialog } from "./settings-dialog";

const languageFlags: Record<string, string> = {
  en: "🇬🇧",
  sv: "🇸🇪",
};

export function Header() {
  const { language, currency } = useStore();

  return (
    <nav className="bg-primary fixed w-full z-20 top-0 start-0 border-b border-default shadow-2xs">
      <div className="max-w-7xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src="./logo.png" className="h-10" alt="Savings Calculator" />
          <span className="self-center text-xl text-heading font-semibold whitespace-nowrap text-zinc-100">
            Calculators
          </span>
        </a>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 text-zinc-100">
            <span className="text-lg">{languageFlags[language]} | </span>
            <span className="text-sm font-medium">
              {currencySymbols[currency]} - {currency}
            </span>
          </div>
          <SettingsDialog />
        </div>
      </div>
    </nav>
  );
}
