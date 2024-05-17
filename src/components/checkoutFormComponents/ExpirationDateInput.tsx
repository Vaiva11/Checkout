import { useFormikContext } from "formik";
import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import { InputProps, FormValues } from "./types";

export const ExpirationDateInput = ({ name, label }: InputProps) => {
  const { setFieldValue, values } = useFormikContext<FormValues>();
  const [formattedValue, setFormattedValue] = useState<string>(
    values[name] || ""
  );

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;
    let formattedInputValue = inputValue.replace(/\D/g, "");
    if (formattedInputValue.length > 2) {
      formattedInputValue =
        formattedInputValue.slice(0, 2) + "/" + formattedInputValue.slice(2);
    }
    setFormattedValue(formattedInputValue);
    setFieldValue(name, formattedInputValue);
  };

  return (
    <TextField
      name={name}
      value={formattedValue}
      onChange={handleInputChange}
      variant="filled"
      id={name}
      label={label}
      inputProps={{ maxLength: 5 }}
    />
  );
};
