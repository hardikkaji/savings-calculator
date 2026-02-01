import React, { useCallback, useState } from "react";
import { Slider } from "@/components/ui/slider";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";
import { Field, FieldLabel } from "@/components/ui/field";
import { useStore } from "~/useStore";

type WithdrawalFieldKey =
  | "withdrawalTotalInvestment"
  | "withdrawalPerMonth"
  | "expectedReturnRate"
  | "timePeriodYears";

type MonthlySavingsFieldKey =
  | "investedAmount"
  | "timePeriod"
  | "expectedReturn"
  | "startingAmount";

type SliderInputProps = {
  label: string | React.ReactNode;
  id: string;
  prefix?: string | React.ReactNode;
  min: number;
  max: number;
  step: number;
  placeholder: string;
  name: WithdrawalFieldKey | MonthlySavingsFieldKey;
};

export function SliderInput({
  label,
  id,
  prefix = "",
  min,
  max,
  step,
  placeholder,
  name,
}: SliderInputProps) {
  const setMonthlySavingsValue = useStore(
    (state) => state.setMonthlySavingsValue,
  );
  const setWithdrawalValue = useStore((state) => state.setWithdrawalValue);

  const isWithdrawalField = (
    key: WithdrawalFieldKey | MonthlySavingsFieldKey,
  ): key is WithdrawalFieldKey => {
    return [
      "withdrawalTotalInvestment",
      "withdrawalPerMonth",
      "expectedReturnRate",
      "timePeriodYears",
    ].includes(key);
  };

  const fieldValue = isWithdrawalField(name)
    ? useStore((state) => state[name as WithdrawalFieldKey])
    : useStore((state) => state[name as MonthlySavingsFieldKey]);

  const [value, setValue] = useState(fieldValue);

  const onInputChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const newValue = Number(event.target.value);
      setValue(newValue);
      if (isWithdrawalField(name)) {
        setWithdrawalValue(name as WithdrawalFieldKey, newValue);
      } else {
        setMonthlySavingsValue(name as MonthlySavingsFieldKey, newValue);
      }
    },
    [name, setMonthlySavingsValue, setWithdrawalValue],
  );

  const onSliderChange = useCallback(
    (newValue: number[]) => {
      setValue(newValue[0]);
      if (isWithdrawalField(name)) {
        setWithdrawalValue(name as WithdrawalFieldKey, newValue[0]);
      } else {
        setMonthlySavingsValue(name as MonthlySavingsFieldKey, newValue[0]);
      }
    },
    [name, setMonthlySavingsValue, setWithdrawalValue],
  );

  return (
    <div className="mx-auto grid w-full gap-3">
      <div className="flex items-center justify-between gap-2">
        <Field>
          <FieldLabel htmlFor="amount">{label}</FieldLabel>
        </Field>
        <span className="text-muted-foreground text-sm w-32">
          <InputGroup>
            <InputGroupInput
              id={id}
              placeholder={placeholder}
              value={value}
              onChange={onInputChange}
            />
            <InputGroupAddon align="inline-end">{prefix}</InputGroupAddon>
          </InputGroup>
        </span>
      </div>
      <Slider
        value={[value as number]}
        onValueChange={onSliderChange}
        min={min}
        max={max}
        step={step}
      />
    </div>
  );
}
