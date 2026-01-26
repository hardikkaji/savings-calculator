import { SliderInput } from "./slider-input";

export function MonthlySavingsForm() {
  return (
    <div className="mx-auto flex flex-col gap-8 md:w-3xl sm:w-full">
      <SliderInput
        label="Starting amount"
        id="starting-amount"
        prefix="kr"
        min={0}
        max={1000000}
        step={2500}
        placeholder="Enter amount"
        name="startingAmount"
      />
      <SliderInput
        label="Investment per month"
        id="investment-per-month"
        prefix="kr"
        min={500}
        max={100000}
        step={500}
        placeholder="Enter amount"
        name="investedAmount"
      />
      <SliderInput
        label="Expected annual return (%)"
        id="expected-annual-return"
        prefix="%"
        min={0}
        max={100}
        step={1}
        placeholder="Enter percentage"
        name="expectedReturn"
      />
      <SliderInput
        label="Time period"
        id="time-period"
        prefix="Years"
        min={1}
        max={50}
        step={1}
        placeholder="Enter percentage"
        name="timePeriod"
      />
    </div>
  );
}
