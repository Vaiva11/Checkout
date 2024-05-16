import styled from "styled-components";
import { Formik, Field, Form } from "formik";
import TextField from "@mui/material/TextField";
import * as Yup from "yup";
import { LargeTitle, XsBody, SmBody } from "../components/Typography";
import { Lock } from "../images/Lock";
import { Visa } from "../images/paymentMehtods/Visa";
import { Mastercard } from "../images/paymentMehtods/Mastercard";
import { Amex } from "../images/paymentMehtods/Amex";
import { DinersClub } from "../images/paymentMehtods/DinersClub";

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

const InputStyled = styled.div`
  padding-top: ${({ theme }) => `${theme.spacings.lg}`};
  width: 100%;
  input {
    border: solid 1px ${({ theme }) => `${theme.colors.borderDivider}`};
    border-radius: 6px;
    width: -webkit-fill-available;
    padding: ${({ theme }) => `${theme.spacings.lg}`};
    font-size: ${({ theme }) => `${theme.fontSizes.smBody}`};
    line-height: ${({ theme }) => `${theme.lineHeights.md}`};
  }
`;

const Input = styled.div`
  padding-top: ${({ theme }) => `${theme.spacings.lg}`};
  width: 100%;

  & .MuiTextField-root {
    width: 100%;
  }

  label {
    font-size: 14px;
    left: 4px;
  }
  & .MuiFilledInput-root {
    border: solid 1px ${({ theme }) => `${theme.colors.borderDivider}`};
    border-radius: 4px;
    background-color: white;
    font-size: ${({ theme }) => `${theme.fontSizes.smBody}`};
    color: ${({ theme }) => `${theme.colors.darkGray}`};
    line-height: 20px;
    border-radius: 6px;

    input {
      padding: 16px;
    }

    &::before,
    &::after {
      border-bottom: none !important;
      font-size: 10px;
    }

    &:hover {
      background-color: white;
    }

    &.Mui-focused {
      background-color: white;
    }
  }

  & .MuiInputLabel-root {
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

const PaymentCardWrapper = styled.div`
  width: 36px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: white;
  border: 1px solid ${({ theme }) => `${theme.colors.borderDivider}`};
  border-radius: 3px;
`;

const validationSchema = Yup.object().shape({
  email: Yup.string().email("Email is not valid").required("Required"),
  firstName: Yup.string().required("Required"),
  lastName: Yup.string().required("Required"),
  address: Yup.string().required("Required"),
  city: Yup.string().required("Required"),
  stateProvince: Yup.string(),
  zip: Yup.string().required("Required"),
  country: Yup.string().required("Required"),
  cardNumber: Yup.string().required("Required"),
  expiration: Yup.string().required("Required"),
  securityCode: Yup.string().required("Required"),
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
        country: "United States",
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
      {({ errors, touched }) => (
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
              {errors.email && touched.email && <div>{errors.email}</div>}
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
                  <div>{errors.firstName}</div>
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
                  <div>{errors.lastName}</div>
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
              {errors.address && touched.address && <div>{errors.address}</div>}
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
                {errors.city && touched.city && <div>{errors.city}</div>}
              </Input>
              <Input>
                <Field
                  as={TextField}
                  variant="filled"
                  id="stateProvince"
                  name="stateProvince"
                  label="State / Province"
                />
                {errors.stateProvince && touched.stateProvince && (
                  <div>{errors.stateProvince}</div>
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
                {errors.zip && touched.zip && <div>{errors.zip}</div>}
              </Input>
            </InputRow>
            <Input>
              <Field
                as={TextField}
                variant="filled"
                id="country"
                name="country"
                label="Country"
              />
              {errors.country && touched.country && <div>{errors.country}</div>}
            </Input>
          </Section>
          <Section>
            <LargeTitle>Payments</LargeTitle>
            <XsBody mt={2}>All transactions are secure and encrypted.</XsBody>
            <PaymentMethod>
              <SmBody>Credit Card</SmBody>
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
                  <SmBody fontWeight="500">+4</SmBody>
                </PaymentCardWrapper>
              </PaymentCards>
            </PaymentMethod>
            <GrayInputWrapper>
              <Input>
                <Field
                  as={TextField}
                  variant="filled"
                  id="cardNumber"
                  name="cardNumber"
                  label="Card Number"
                />
                {errors.cardNumber && touched.cardNumber && (
                  <div>{errors.cardNumber}</div>
                )}
              </Input>
              <InputRow>
                <Input>
                  <Field
                    as={TextField}
                    variant="filled"
                    id="expiration"
                    name="expiration"
                    label="Expiration (MM/YY)"
                  />
                  {errors.expiration && touched.expiration && (
                    <div>{errors.expiration}</div>
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
                    <div>{errors.securityCode}</div>
                  )}
                </Input>
              </InputRow>
              <Input>
                <Field
                  as={TextField}
                  variant="filled"
                  id="nameOnCard"
                  name="nameOnCard"
                  label="Name on card"
                />
                {errors.nameOnCard && touched.nameOnCard && (
                  <div>{errors.nameOnCard}</div>
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
