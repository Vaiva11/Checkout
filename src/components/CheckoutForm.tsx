import styled from "styled-components";
import { Formik, Field, Form } from "formik";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import { LargeTitle, XsBody, SmBody } from "../components/Typography";
import { ArrowDown } from "../images/ArrowDown";
import { Lock } from "../images/Lock";
import { device } from "../theme/Device";
import { ExpirationDateInput } from "./checkoutFormComponents/ExpirationDateInput";
import { PaymentMethods } from "./checkoutFormComponents/PaymentMethods";
import {
  countries,
  statesByCountry,
} from "./checkoutFormComponents/CountriesData";
import { CreditCardInput } from "./checkoutFormComponents/CreditCardInput";
import { validationSchema } from "./checkoutFormComponents/ValidationSchema";
import { StyledInput } from "./checkoutFormComponents/StyledInput";
import { StateType } from "./checkoutFormComponents/CountriesData";
import useIsMobile from "../hooks/useIsMobile";
import { FormInitialValues } from "./checkoutFormComponents/FormInitialValues";

const LeftSection = styled.div`
  width: 100%;
  color: ${({ theme }) => `${theme.colors.darkGray}`};
`;

const FormWrapper = styled(Form)`
  min-width: 100%;
`;

const Section = styled.div`
  padding-top: ${({ theme }) => `${theme.spacings.size2}`};
  background: ${({ theme }) => `${theme.colors.white}`};

  @media ${device.mobile} {
    margin-bottom: ${({ theme }) => `${theme.spacings.lg}`};
    padding: ${({ theme }) => `${theme.spacings.lg}`};
    border-top: solid 1px ${({ theme }) => `${theme.colors.borderDivider}`};
    border-bottom: solid 1px ${({ theme }) => `${theme.colors.borderDivider}`};
  }
`;

const InputRow = styled.div`
  display: flex;
  justify-content: space-between;
  gap: ${({ theme }) => theme.spacings.md};
`;

const SubmitButton = styled.button`
  width: 100%;
  background: ${({ theme }) => `${theme.colors.green}`};
  padding: ${({ theme }) => `${theme.spacings.lg} ${theme.spacings.size2}`};
  color: ${({ theme }) => `${theme.colors.white}`};
  text-transform: uppercase;
  border-radius: ${({ theme }) => theme.spacings.xs};
  border: none;
  margin-top: ${({ theme }) => `${theme.spacings.lg}`};
  font-size: ${({ theme }) => theme.fontSizes.mdTitle};
  font-weight: 700;
  line-height: ${({ theme }) => theme.lineHeights.lg};
  box-shadow: 0px 4px 10px 0px rgba(67, 40, 16, 0.24);
  letter-spacing: 1.26px;
  cursor: pointer;
  font-family: Poppins;

  @media ${device.mobile} {
    padding: ${({ theme }) => `${theme.spacings.md} ${theme.spacings.size2}`};
    font-size: ${({ theme }) => theme.fontSizes.smBody};
    letter-spacing: 0.98px;
    margin-top: ${({ theme }) => `${theme.spacings.md}`};
  }
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
  padding: ${({ theme }) => theme.spacings.md};
  border-left: solid 1px ${({ theme }) => `${theme.colors.borderDivider}`};
  border-right: solid 1px ${({ theme }) => `${theme.colors.borderDivider}`};
  border-bottom: solid 1px ${({ theme }) => `${theme.colors.borderDivider}`};
  border-radius: 0 0 6px 6px;
`;

const ArrowIconWrapper = styled.div`
  margin-right: ${({ theme }) => `${theme.spacings.lg}`};
`;

const Error = styled.div`
  color: ${({ theme }) => `${theme.colors.red}`};
  font-size: ${({ theme }) => `${theme.fontSizes.xsBody}`};
  margin-top: ${({ theme }) => theme.spacings.xs};
`;

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

export const CheckoutForm = () => {
  const isMobile = useIsMobile();
  return (
    <LeftSection>
      <Formik
        initialValues={FormInitialValues}
        validationSchema={validationSchema}
        onSubmit={(values: UserInfoType) => {
          const serializedValues = JSON.stringify(values);
          localStorage.setItem("userInfo", serializedValues);
        }}
      >
        {({ errors, touched, values }) => (
          <FormWrapper>
            <Section>
              <LargeTitle pt={[2, 2, 0]}>Contact</LargeTitle>
              <StyledInput pt={["12px", "12px", 3]}>
                <Field
                  as={TextField}
                  variant="filled"
                  id="email"
                  name="email"
                  label="Email Address"
                />
                {errors.email && touched.email && <Error>{errors.email}</Error>}
              </StyledInput>
            </Section>
            <Section>
              <LargeTitle>Delivery</LargeTitle>
              <InputRow>
                <StyledInput pt={["12px", "12px", 3]}>
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
                </StyledInput>
                <StyledInput pt={["12px", "12px", 3]}>
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
                </StyledInput>
              </InputRow>
              <StyledInput>
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
              </StyledInput>
              {isMobile && (
                <StyledInput>
                  <Field
                    as={TextField}
                    variant="filled"
                    id="city"
                    name="city"
                    label="City"
                  />
                  {errors.city && touched.city && <Error>{errors.city}</Error>}
                </StyledInput>
              )}
              <InputRow>
                {!isMobile && (
                  <StyledInput>
                    <Field
                      as={TextField}
                      variant="filled"
                      id="city"
                      name="city"
                      label="City"
                    />
                    {errors.city && touched.city && (
                      <Error>{errors.city}</Error>
                    )}
                  </StyledInput>
                )}
                <StyledInput pt={["12px", "12px", 3]}>
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
                      statesByCountry[values.country].map(
                        (state: StateType) => (
                          <MenuItem key={state.value} value={state.value}>
                            {state.label}
                          </MenuItem>
                        )
                      )}
                  </Field>
                  {errors.stateProvince && touched.stateProvince && (
                    <Error>{errors.stateProvince}</Error>
                  )}
                </StyledInput>
                <StyledInput pt={["12px", "12px", 3]}>
                  <Field
                    as={TextField}
                    variant="filled"
                    id="zip"
                    name="zip"
                    label="ZIP / Postal Code"
                  />
                  {errors.zip && touched.zip && <Error>{errors.zip}</Error>}
                </StyledInput>
              </InputRow>
              <StyledInput pt={"12px"}>
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
              </StyledInput>
            </Section>
            <Section>
              <LargeTitle>Payment</LargeTitle>
              <XsBody mt={2} variant="lightGray">
                All transactions are secure and encrypted.
              </XsBody>
              <PaymentMethods />
              <GrayInputWrapper>
                <StyledInput pt={0}>
                  <CreditCardInput name="cardNumber" label="Card number" />
                  {errors.cardNumber && touched.cardNumber && (
                    <Error>{errors.cardNumber}</Error>
                  )}
                </StyledInput>
                <InputRow>
                  <StyledInput pt={"12px"}>
                    <ExpirationDateInput
                      name="expiration"
                      label="Expiration (MM/YY)"
                    />
                    {errors.expiration && touched.expiration && (
                      <Error>{errors.expiration}</Error>
                    )}
                  </StyledInput>
                  <StyledInput pt={"12px"}>
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
                  </StyledInput>
                </InputRow>
                <StyledInput pt={"12px"}>
                  <Field
                    as={TextField}
                    variant="filled"
                    id="nameOnCard"
                    name="nameOnCard"
                    label="Name on card"
                  />
                  {errors.nameOnCard && touched.nameOnCard && (
                    <Error>{errors.nameOnCard}</Error>
                  )}
                </StyledInput>
              </GrayInputWrapper>
              <SubmitButton type="submit">complete order</SubmitButton>
              <DisclaimerWrapper>
                <Lock />
                <SmBody variant="lightGray">
                  All transactions are secure and encrypted
                </SmBody>
              </DisclaimerWrapper>
            </Section>
          </FormWrapper>
        )}
      </Formik>
    </LeftSection>
  );
};
