import { useFormikContext } from "formik";
import React, { useState } from "react";
import TextField from "@mui/material/TextField";

export const ExpirationDateInput = ({ name, label }: any) => {
  const { values, setFieldValue } = useFormikContext();
  //@ts-ignore
  const [formattedValue, setFormattedValue] = useState(values[name]);

  const handleInputChange = (event: any) => {
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
