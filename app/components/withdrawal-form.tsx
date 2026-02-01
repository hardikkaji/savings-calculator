import { useIntl } from "react-intl";
import { SliderInput } from "./slider-input";
import { messages } from "./messages";
import { useStore } from "~/useStore";
import { currencySymbols } from "~/lib/currency-symbols";

export function WithdrawalForm() {
  const intl = useIntl();
  const currency = useStore((state) => state.currency);
  const currencySymbol = currencySymbols[currency] || "kr";

  return (
    <div className="mx-auto flex flex-col gap-8 w-full">
      <SliderInput
        label="Total Investment"
        id="withdrawal-total-investment"
        prefix={currencySymbol}
        min={0}
        max={50000000}
        step={10000}
        placeholder={intl.formatMessage(messages.enterAmount)}
        name="withdrawalTotalInvestment"
      />
      <SliderInput
        label="Withdrawal per Month"
        id="withdrawal-per-month"
        prefix={currencySymbol}
        min={500}
        max={100000}
        step={500}
        placeholder={intl.formatMessage(messages.enterAmount)}
        name="withdrawalPerMonth"
      />
      <SliderInput
        label={intl.formatMessage(messages.expectedAnnualReturn)}
        id="expected-return-rate"
        prefix={intl.formatMessage(messages.percent)}
        min={0}
        max={100}
        step={1}
        placeholder={intl.formatMessage(messages.enterPercentage)}
        name="expectedReturnRate"
      />
      <SliderInput
        label="Time Period"
        id="time-period-years"
        prefix={intl.formatMessage(messages.years)}
        min={1}
        max={50}
        step={1}
        placeholder={intl.formatMessage(messages.enterPercentage)}
        name="timePeriodYears"
      />
    </div>
  );
}
