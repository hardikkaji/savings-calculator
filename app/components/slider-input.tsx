import React, { useCallback, useState } from "react";
import { Slider } from "@/components/ui/slider";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";
import { Field, FieldLabel } from "@/components/ui/field";
import { useStore, type StoreKey } from "~/useStore";

type SliderInputProps = {
  label: string | React.ReactNode;
  id: string;
  prefix?: string | React.ReactNode;
  min: number;
  max: number;
  step: number;
  placeholder: string;
  name: StoreKey;
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
  const setStoreValue = useStore((state) => state.setStoreValue);
  const fieldValue = useStore((state) => state[name]);

  const [value, setValue] = useState(fieldValue);

  const onInputChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const newValue = Number(event.target.value);
      setValue(newValue);
      setStoreValue(name, newValue);
    },
    [name, setStoreValue],
  );

  const onSliderChange = useCallback(
    (newValue: number[]) => {
      setValue(newValue[0]);
      setStoreValue(name, newValue[0]);
    },
    [name, setStoreValue],
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
