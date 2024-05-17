import * as Yup from "yup";

export const validationSchema = Yup.object().shape({
  email: Yup.string().email("Email is not valid").required("Required"),
  firstName: Yup.string()
    .matches(/^[A-Za-z]+$/, "Only alphabetic characters allowed")
    .required("Required"),
  lastName: Yup.string()
    .matches(/^[A-Za-z]+$/, "Only alphabetic characters allowed")
    .required("Required"),
  address: Yup.string().required("Required"),
  city: Yup.string()
    .matches(/^[A-Za-z]+$/, "Only alphabetic characters allowed")
    .required("Required"),
  stateProvince: Yup.string().required("Required"),
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
    .min(3, "Security code must at least 3 characters")
    .max(4, "Security code must have max 4 characters")
    .required("Required"),
  nameOnCard: Yup.string()
    .matches(/^[A-Za-z]+$/, "Only alphabetic characters allowed")
    .required("Required"),
});
