import { useFormikContext } from "formik";
import React, { useState, useEffect } from "react";
import TextField from "@mui/material/TextField";
import { InputProps, FormValues } from "./types";

const formatCreditCardNumber = (inputValue: string) => {
  if (typeof inputValue !== "undefined" && inputValue !== null) {
    const numericValue = inputValue.replace(/\D/g, "");
    const formattedValue = numericValue.replace(/(\d{4})/g, "$1 ").trim();
    return formattedValue;
  }
  return "";
};

export const CreditCardInput: React.FC<InputProps> = ({ name, label }) => {
  const { setFieldValue, values } = useFormikContext<FormValues>();
  const [formattedValue, setFormattedValue] = useState<string>(
    formatCreditCardNumber(values[name])
  );

  useEffect(() => {
    setFormattedValue(formatCreditCardNumber(values[name]));
  }, [values[name]]);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;
    const formattedInputValue = formatCreditCardNumber(inputValue);
    setFormattedValue(formattedInputValue);
    setFieldValue(name, inputValue);
  };

  return (
    <TextField
      name={name}
      value={formattedValue}
      onChange={handleInputChange}
      variant="filled"
      id={name}
      label={label}
      inputProps={{ maxLength: 19 }}
    />
  );
};
