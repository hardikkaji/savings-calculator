import { useState, useEffect } from "react";
import { useIntl } from "react-intl";
import { Settings } from "lucide-react";
import {
  AlertDialog,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogCancel,
} from "~/components/ui/alert-dialog";
import { Button } from "~/components/ui/button";
import { Label } from "~/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "~/components/ui/select";
import { messages } from "./messages";
import type { SupportedLang, SupportedCurrency } from "~/types";

const SUPPORTED_LANGUAGES: { label: string; value: SupportedLang }[] = [
  { label: "English", value: "en" },
  { label: "Swedish", value: "sv" },
];

const SUPPORTED_CURRENCIES: { label: string; value: SupportedCurrency }[] = [
  { label: "SEK", value: "SEK" },
  { label: "USD", value: "USD" },
  { label: "EUR", value: "EUR" },
  { label: "GBP", value: "GBP" },
  { label: "NOK", value: "NOK" },
  { label: "INR", value: "INR" },
];

export function SettingsDialog() {
  const intl = useIntl();
  const [language, setLanguage] = useState<SupportedLang>("en");
  const [currency, setCurrency] = useState<SupportedCurrency>("SEK");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const savedLang = localStorage.getItem("language") as SupportedLang;
    const savedCurrency = localStorage.getItem("currency") as SupportedCurrency;

    if (savedLang) setLanguage(savedLang);
    if (savedCurrency) setCurrency(savedCurrency);
  }, []);

  const handleSave = () => {
    localStorage.setItem("language", language);
    localStorage.setItem("currency", currency);
    window.location.reload();
  };

  return (
    <AlertDialog open={open} onOpenChange={setOpen}>
      <AlertDialogTrigger asChild>
        <Button
          variant="outline"
          size="icon"
          className="rounded-full w-10 h-10"
          title="Settings"
        >
          <Settings className="h-4 w-4" />
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>
            {intl.formatMessage(messages.settings)}
          </AlertDialogTitle>
        </AlertDialogHeader>
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <Label>{intl.formatMessage(messages.language)}</Label>
            <Select
              value={language}
              onValueChange={(v) => setLanguage(v as SupportedLang)}
            >
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {SUPPORTED_LANGUAGES.map((lang) => (
                  <SelectItem key={lang.value} value={lang.value}>
                    {lang.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="flex flex-col gap-2">
            <Label>{intl.formatMessage(messages.currency)}</Label>
            <Select
              value={currency}
              onValueChange={(v) => setCurrency(v as SupportedCurrency)}
            >
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {SUPPORTED_CURRENCIES.map((curr) => (
                  <SelectItem key={curr.value} value={curr.value}>
                    {curr.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="flex gap-3 justify-end">
            <AlertDialogCancel>
              {intl.formatMessage(messages.cancel)}
            </AlertDialogCancel>
            <Button onClick={handleSave}>
              {intl.formatMessage(messages.save)}
            </Button>
          </div>
        </div>
      </AlertDialogContent>
    </AlertDialog>
  );
}
