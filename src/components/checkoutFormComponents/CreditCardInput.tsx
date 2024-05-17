import { useFormikContext } from "formik";
import React, { useState } from "react";
import TextField from "@mui/material/TextField";

const formatCreditCardNumber = (inputValue: any) => {
  if (typeof inputValue !== "undefined" && inputValue !== null) {
    const numericValue = inputValue.replace(/\D/g, "");
    const formattedValue = numericValue.replace(/(\d{4})/g, "$1 ").trim();
    return formattedValue;
  }
  return "";
};

export const CreditCardInput = ({ name, label }: any) => {
  const { values, setFieldValue } = useFormikContext();
  const [formattedValue, setFormattedValue] = useState(
    //@ts-ignore
    formatCreditCardNumber(values[name])
  );

  const handleInputChange = (event: any) => {
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
