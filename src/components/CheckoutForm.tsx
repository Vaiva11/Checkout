import styled from "styled-components";
import React, { useState } from "react";
import { Formik, Field, Form, useFormikContext } from "formik";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import { MaskedInput, createDefaultMaskGenerator } from "react-hook-mask";
import * as Yup from "yup";
import { LargeTitle, XsBody, SmBody } from "../components/Typography";
import { Lock } from "../images/Lock";
import { Visa } from "../images/paymentMehtods/Visa";
import { Mastercard } from "../images/paymentMehtods/Mastercard";
import { Amex } from "../images/paymentMehtods/Amex";
import { DinersClub } from "../images/paymentMehtods/DinersClub";
import { ArrowDown } from "../images/ArrowDown";
import { BulletPoint } from "../images/BulletPoint";

const LeftSection = styled.div`
  margin-right: ${({ theme }) => `${theme.spacings.size3}`};
  margin-bottom: ${({ theme }) => `${theme.spacings.size1}`};
  width: 100%;
  color: ${({ theme }) => `${theme.colors.darkGray}`};
`;

const FormWrapper = styled(Form)`
  min-width: 100%;
`;

const Section = styled.div`
  padding-top: ${({ theme }) => `${theme.spacings.size2}`};
`;

const Input = styled.div`
  padding-top: ${({ theme }) => `${theme.spacings.lg}`};
  position: relative;
  width: 100%;

  & .MuiTextField-root {
    width: 100%;
  }

  label {
    font-size: 14px;
    left: 4px;
  }

  .MuiFilledInput-root {
    border: solid 1px ${({ theme }) => `${theme.colors.borderDivider}`};
    border-radius: 4px;
    background-color: white;
    font-size: ${({ theme }) => `${theme.fontSizes.smBody}`};
    color: ${({ theme }) => `${theme.colors.darkGray}`};
    line-height: 20px;
    border-radius: 6px;

    input {
      padding: ${({ theme }) => `${theme.spacings.lg}`};
    }

    &::before,
    &::after {
      border-bottom: none !important;
    }

    &:hover {
      background-color: white;
    }

    &.Mui-focused {
      background-color: white;
      input {
        padding-bottom: 8px !important;
        height: 28px;
      }
      svg {
        transition: transform 0.3s ease;
        transform: rotate(180deg);
      }
    }
    &.typed input {
      padding-bottom: 8px;
    }
  }

  .MuiInputLabel-root {
    &.Mui-focused {
      color: ${({ theme }) => `${theme.colors.lightGray}`} !important;
      font-size: 12px;
    }

    &.MuiInputLabel-shrink {
      font-size: 12px !important;
    }
  }
`;

const InputRow = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 16px;
`;

const SubmitButton = styled.button`
  width: 100%;
  background: ${({ theme }) => `${theme.colors.green}`};
  padding: ${({ theme }) => `${theme.spacings.lg} ${theme.spacings.size2}`};
  color: ${({ theme }) => `${theme.colors.white}`};
  text-transform: uppercase;
  border-radius: 4px;
  border: none;
  margin-top: ${({ theme }) => `${theme.spacings.lg}`};
  font-size: ${({ theme }) => theme.fontSizes.mdTitle};
  font-weight: 700;
  line-height: ${({ theme }) => theme.lineHeights.lg};
  box-shadow: 0px 4px 10px 0px rgba(67, 40, 16, 0.24);
  letter-spacing: 1.26px;
  cursor: pointer;
`;

const DisclaimerWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: ${({ theme }) => `${theme.spacings.lg}`};
  align-items: center;
  gap: ${({ theme }) => `${theme.spacings.sm}`};
`;

const GrayInputWrapper = styled.div`
  background: ${({ theme }) => `${theme.colors.bgLightGray}`};
  padding: 12px;
  border-left: solid 1px ${({ theme }) => `${theme.colors.borderDivider}`};
  border-right: solid 1px ${({ theme }) => `${theme.colors.borderDivider}`};
  border-bottom: solid 1px ${({ theme }) => `${theme.colors.borderDivider}`};
  border-radius: 0 0 6px 6px;
`;

const PaymentMethod = styled.div`
  background: ${({ theme }) => `${theme.colors.bgActive}`};
  border: solid 1px ${({ theme }) => `${theme.colors.borderActive}`};
  border-radius: 6px 6px 0 0;
  padding: ${({ theme }) => `${theme.spacings.lg}`};
  margin-top: ${({ theme }) => `${theme.spacings.lg}`};
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const PaymentCards = styled.div`
  display: flex;
  gap: 3px;
`;

const BulletPointWrapper = styled.div`
  display: flex;
  gap: ${({ theme }) => `${theme.spacings.lg}`};
`;

const PaymentCardWrapper = styled.div`
  width: 36px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: white;
  border: 1px solid ${({ theme }) => `${theme.colors.borderDivider}`};
  border-radius: 3px;
`;

const ArrowIconWrapper = styled.div`
  margin-right: ${({ theme }) => `${theme.spacings.lg}`};
`;

const Error = styled.div`
  color: red;
  font-size: ${({ theme }) => `${theme.fontSizes.xsBody}`};
  margin-top: 4px;
`;

const validationSchema = Yup.object().shape({
  email: Yup.string().email("Email is not valid").required("Required"),
  firstName: Yup.string()
    .matches(/^[a-z]+$/, "Only alphabetic characters allowed")
    .required("Required"),
  lastName: Yup.string()
    .matches(/^[a-z]+$/, "Only alphabetic characters allowed")
    .required("Required"),
  address: Yup.string().required("Required"),
  city: Yup.string()
    .matches(/^[a-z]+$/, "Only alphabetic characters allowed")
    .required("Required"),
  stateProvince: Yup.string(),
  zip: Yup.string()
    .matches(/^\d{5}$|^[A-Za-z]{2}-\d{5}$/, "Invalid postal code")
    .required("Required"),
  country: Yup.string().required("Required"),
  cardNumber: Yup.string()
    .min(19, "Credit card must at least 16 characters")
    .required("Required"),
  expiration: Yup.string()
    .min(5, "Expiration must at least 4 characters")
    .required("Required"),
  securityCode: Yup.string()
    .matches(
      /^[0-9a-zA-Z]*$/,
      "Security code must contain only digits and letters"
    )
    .min(3, "Security code must at least 4 characters")
    .required("Required"),
  nameOnCard: Yup.string().required("Required"),
});

type UserInfoType = {
  email: string;
  firstName: string;
  lastName: string;
  address: string;
  city: string;
  stateProvince: string;
  zip: string;
  country: string;
  cardNumber: string;
  expiration: string;
  securityCode: string;
  nameOnCard: string;
};

const countries = [
  { value: "UnitedStates", label: "United States" },
  { value: "Canada", label: "Canada" },
  { value: "Australia", label: "Australia" },
  { value: "UnitedKingdom", label: "United Kingdom" },
];

const statesByCountry: any = {
  UnitedStates: [
    { value: "NY", label: "New York" },
    { value: "CA", label: "California" },
  ],
  Canada: [
    { value: "ON", label: "Ontario" },
    { value: "QC", label: "Quebec" },
  ],
  Australia: [
    { value: "NSW", label: "New South Wales" },
    { value: "VIC", label: "Victoria" },
  ],
  UnitedKingdom: [
    { value: "ENG", label: "England" },
    { value: "SCT", label: "Scotland" },
  ],
};

const ExpirationDateInput = ({ name, label }: any) => {
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

const formatCreditCardNumber = (inputValue: any) => {
  if (typeof inputValue !== "undefined" && inputValue !== null) {
    const numericValue = inputValue.replace(/\D/g, "");
    const formattedValue = numericValue.replace(/(\d{4})/g, "$1 ").trim();
    return formattedValue;
  }
  return "";
};

const CreditCardInput = ({ name, label }: any) => {
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

export const CheckoutForm = () => (
  <LeftSection>
    <Formik
      initialValues={{
        email: "",
        firstName: "",
        lastName: "",
        address: "",
        city: "",
        stateProvince: "",
        zip: "",
        country: "UnitedStates",
        cardNumber: "",
        expiration: "",
        securityCode: "",
        nameOnCard: "",
      }}
      validationSchema={validationSchema}
      onSubmit={(values: UserInfoType) => {
        console.log("asd");
        console.log(values);
      }}
    >
      {({ errors, touched, values }) => (
        <FormWrapper>
          <Section>
            <LargeTitle>Contact</LargeTitle>
            <Input>
              <Field
                as={TextField}
                variant="filled"
                id="email"
                name="email"
                label="Email Address"
              />
              {errors.email && touched.email && <Error>{errors.email}</Error>}
            </Input>
          </Section>
          <Section>
            <LargeTitle>Delivery</LargeTitle>
            <InputRow>
              <Input>
                <Field
                  as={TextField}
                  variant="filled"
                  id="firstName"
                  name="firstName"
                  label="First Name"
                />
                {errors.firstName && touched.firstName && (
                  <Error>{errors.firstName}</Error>
                )}
              </Input>
              <Input>
                <Field
                  as={TextField}
                  variant="filled"
                  id="lastName"
                  name="lastName"
                  label="Last Name"
                />
                {errors.lastName && touched.lastName && (
                  <Error>{errors.lastName}</Error>
                )}
              </Input>
            </InputRow>
            <Input>
              <Field
                as={TextField}
                variant="filled"
                id="address"
                name="address"
                label="Address"
              />
              {errors.address && touched.address && (
                <Error>{errors.address}</Error>
              )}
            </Input>
            <InputRow>
              <Input>
                <Field
                  as={TextField}
                  variant="filled"
                  id="city"
                  name="city"
                  label="City"
                />
                {errors.city && touched.city && <Error>{errors.city}</Error>}
              </Input>
              <Input>
                <Field
                  as={TextField}
                  select
                  variant="filled"
                  id="stateProvince"
                  name="stateProvince"
                  label="State / Province"
                  fullWidth
                  SelectProps={{
                    IconComponent: () => (
                      <ArrowIconWrapper>
                        <ArrowDown />
                      </ArrowIconWrapper>
                    ),
                  }}
                >
                  {statesByCountry[values.country] &&
                    statesByCountry[values.country].map((state: any) => (
                      <MenuItem key={state.value} value={state.value}>
                        {state.label}
                      </MenuItem>
                    ))}
                </Field>
                {errors.stateProvince && touched.stateProvince && (
                  <Error>{errors.stateProvince}</Error>
                )}
              </Input>
              <Input>
                <Field
                  as={TextField}
                  variant="filled"
                  id="zip"
                  name="zip"
                  label="ZIP / Postal Code"
                />
                {errors.zip && touched.zip && <Error>{errors.zip}</Error>}
              </Input>
            </InputRow>
            <Input>
              <Field
                as={TextField}
                select
                variant="filled"
                id="country"
                name="country"
                label="Country"
                fullWidth
                SelectProps={{
                  IconComponent: () => (
                    <ArrowIconWrapper>
                      <ArrowDown />
                    </ArrowIconWrapper>
                  ),
                }}
              >
                {countries.map((state) => (
                  <MenuItem key={state.value} value={state.value}>
                    {state.label}
                  </MenuItem>
                ))}
              </Field>
              {errors.country && touched.country && (
                <Error>{errors.country}</Error>
              )}
            </Input>
          </Section>
          <Section>
            <LargeTitle>Payments</LargeTitle>
            <XsBody mt={2}>All transactions are secure and encrypted.</XsBody>
            <PaymentMethod>
              <BulletPointWrapper>
                <BulletPoint />
                <SmBody>Credit Card</SmBody>
              </BulletPointWrapper>
              <PaymentCards>
                <PaymentCardWrapper>
                  <Visa />
                </PaymentCardWrapper>
                <PaymentCardWrapper>
                  <Mastercard />
                </PaymentCardWrapper>
                <PaymentCardWrapper>
                  <Amex />
                </PaymentCardWrapper>
                <PaymentCardWrapper>
                  <DinersClub />
                </PaymentCardWrapper>
                <PaymentCardWrapper>
                  <SmBody fontWeight={500}>+4</SmBody>
                </PaymentCardWrapper>
              </PaymentCards>
            </PaymentMethod>
            <GrayInputWrapper>
              <Input>
                <CreditCardInput name="creditCard" label="Credit Card" />
                {errors.cardNumber && touched.cardNumber && (
                  <Error>{errors.cardNumber}</Error>
                )}
              </Input>
              <InputRow>
                <Input>
                  <ExpirationDateInput
                    name="expiration"
                    label="Expiration (MM/YY)"
                  />
                  {errors.expiration && touched.expiration && (
                    <Error>{errors.expiration}</Error>
                  )}
                </Input>
                <Input>
                  <Field
                    as={TextField}
                    variant="filled"
                    id="securityCode"
                    name="securityCode"
                    label="Security code"
                  />
                  {errors.securityCode && touched.securityCode && (
                    <Error>{errors.securityCode}</Error>
                  )}
                </Input>
              </InputRow>
              <Input>
                <Field
                  as={TextField}
                  variant="filled"
                  id="nameOnCard"
                  name="nameOnCard"
                  label="Name On Card"
                />
                {errors.nameOnCard && touched.nameOnCard && (
                  <Error>{errors.nameOnCard}</Error>
                )}
              </Input>
            </GrayInputWrapper>
          </Section>
          <SubmitButton type="submit">complete order</SubmitButton>
          <DisclaimerWrapper>
            <Lock />
            <SmBody isLight>All transactions are secure and encrypted</SmBody>
          </DisclaimerWrapper>
        </FormWrapper>
      )}
    </Formik>
  </LeftSection>
);
