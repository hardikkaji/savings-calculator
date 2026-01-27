import { useIntl } from "react-intl";
import { SliderInput } from "./slider-input";
import { messages } from "./messages";
import { useStore } from "~/useStore";
import { currencySymbols } from "~/lib/currency-symbols";
import { useCallback } from "react";

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
        min={0}
        max={1000000}
        step={2500}
        placeholder={intl.formatMessage(messages.enterAmount)}
        name="startingAmount"
      />
      <SliderInput
        label={intl.formatMessage(messages.investmentPerMonth)}
        id="investment-per-month"
        prefix={currencySymbol}
        min={500}
        max={100000}
        step={500}
        placeholder={intl.formatMessage(messages.enterAmount)}
        name="investedAmount"
      />
      <SliderInput
        label={intl.formatMessage(messages.expectedAnnualReturn)}
        id="expected-annual-return"
        prefix={intl.formatMessage(messages.percent)}
        min={0}
        max={100}
        step={1}
        placeholder={intl.formatMessage(messages.enterPercentage)}
        name="expectedReturn"
      />
      <SliderInput
        label={intl.formatMessage(messages.timePeriod)}
        id="time-period"
        prefix={intl.formatMessage(messages.years)}
        min={1}
        max={50}
        step={1}
        placeholder={intl.formatMessage(messages.enterPercentage)}
        name="timePeriod"
      />
    </div>
  );
}
