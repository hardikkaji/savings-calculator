import { useIntl } from "react-intl";
import { SliderInput } from "./slider-input";
import { messages } from "./messages";
import { useStore } from "~/useStore";
import { currencySymbols } from "~/lib/currency-symbols";
import { useCallback } from "react";
import { SAVINGS_CONFIG } from "~/app-config";

export function MonthlySavingsForm() {
  const intl = useIntl();
  const currency = useStore((state) => state.currency);
  const currencySymbol = currencySymbols[currency] || "kr";

  return (
    <div className="mx-auto flex flex-col gap-8 w-full">
      <SliderInput
        label={intl.formatMessage(messages.startingAmount)}
        id="starting-amount"
        prefix={currencySymbol}
        min={SAVINGS_CONFIG.startingAmount.min}
        max={SAVINGS_CONFIG.startingAmount.max}
        step={SAVINGS_CONFIG.startingAmount.step}
        placeholder={intl.formatMessage(messages.enterAmount)}
        name="startingAmount"
      />
      <SliderInput
        label={intl.formatMessage(messages.investmentPerMonth)}
        id="investment-per-month"
        prefix={currencySymbol}
        min={SAVINGS_CONFIG.investmentPerMonth.min}
        max={SAVINGS_CONFIG.investmentPerMonth.max}
        step={SAVINGS_CONFIG.investmentPerMonth.step}
        placeholder={intl.formatMessage(messages.enterAmount)}
        name="investedAmount"
      />
      <SliderInput
        label={intl.formatMessage(messages.expectedAnnualReturn)}
        id="expected-annual-return"
        prefix={intl.formatMessage(messages.percent)}
        min={SAVINGS_CONFIG.expectedAnnualReturn.min}
        max={SAVINGS_CONFIG.expectedAnnualReturn.max}
        step={SAVINGS_CONFIG.expectedAnnualReturn.step}
        placeholder={intl.formatMessage(messages.enterPercentage)}
        name="expectedReturn"
      />
      <SliderInput
        label={intl.formatMessage(messages.timePeriod)}
        id="time-period"
        prefix={intl.formatMessage(messages.years)}
        min={SAVINGS_CONFIG.timePeriod.min}
        max={SAVINGS_CONFIG.timePeriod.max}
        step={SAVINGS_CONFIG.timePeriod.step}
        placeholder={intl.formatMessage(messages.enterPercentage)}
        name="timePeriod"
      />
    </div>
  );
}
