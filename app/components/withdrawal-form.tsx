import { useIntl } from "react-intl";
import { SliderInput } from "./slider-input";
import { messages } from "./messages";
import { useStore } from "~/useStore";
import { currencySymbols } from "~/lib/currency-symbols";
import { WITHDRAWAL_CONFIG } from "~/app-config";

export function WithdrawalForm() {
  const intl = useIntl();
  const currency = useStore((state) => state.currency);
  const currencySymbol = currencySymbols[currency] || "kr";

  return (
    <div className="mx-auto flex flex-col gap-8 w-full">
      <SliderInput
        label={intl.formatMessage(messages.totalInvestment)}
        id="withdrawal-total-investment"
        prefix={currencySymbol}
        min={WITHDRAWAL_CONFIG.totalInvestment.min}
        max={WITHDRAWAL_CONFIG.totalInvestment.max}
        step={WITHDRAWAL_CONFIG.totalInvestment.step}
        placeholder={intl.formatMessage(messages.enterAmount)}
        name="withdrawalTotalInvestment"
      />
      <SliderInput
        label={intl.formatMessage(messages.withdrawalPerMonth)}
        id="withdrawal-per-month"
        prefix={currencySymbol}
        min={WITHDRAWAL_CONFIG.withdrawalPerMonth.min}
        max={WITHDRAWAL_CONFIG.withdrawalPerMonth.max}
        step={WITHDRAWAL_CONFIG.withdrawalPerMonth.step}
        placeholder={intl.formatMessage(messages.enterAmount)}
        name="withdrawalPerMonth"
      />
      <SliderInput
        label={intl.formatMessage(messages.withdrawalExpectedReturnRate)}
        id="expected-return-rate"
        prefix={intl.formatMessage(messages.percent)}
        min={WITHDRAWAL_CONFIG.expectedReturnRate.min}
        max={WITHDRAWAL_CONFIG.expectedReturnRate.max}
        step={WITHDRAWAL_CONFIG.expectedReturnRate.step}
        placeholder={intl.formatMessage(messages.enterPercentage)}
        name="expectedReturnRate"
      />
      <SliderInput
        label={intl.formatMessage(messages.timePeriodYears)}
        id="time-period-years"
        prefix={intl.formatMessage(messages.years)}
        min={WITHDRAWAL_CONFIG.timePeriod.min}
        max={WITHDRAWAL_CONFIG.timePeriod.max}
        step={WITHDRAWAL_CONFIG.timePeriod.step}
        placeholder={intl.formatMessage(messages.enterPercentage)}
        name="timePeriodYears"
      />
    </div>
  );
}
