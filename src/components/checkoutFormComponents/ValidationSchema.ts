import * as Yup from "yup";

const currentYear = new Date().getFullYear();
const currentMonth = new Date().getMonth() + 1;
const maxYear = currentYear + 5;

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
    .min(19, "Credit card must be at least 16 characters")
    .required("Required"),
  expiration: Yup.string()
    .matches(/^(0[1-9]|1[0-2])\/\d{2}$/, "Expiration date must be valid")
    .test("exp-date", "Expiration date must be valid", (value) => {
      if (!value) return false;
      const [month, year] = value.split("/").map(Number);
      const fullYear = 2000 + year;
      if (
        fullYear < currentYear ||
        fullYear > maxYear ||
        (fullYear === currentYear && month < currentMonth)
      ) {
        return false;
      }
      return true;
    })
    .required("Required"),
  securityCode: Yup.string()
    .matches(/^[0-9]*$/, "Security code must contain only digits")
    .min(3, "Security code must be at least 3 numbers")
    .max(4, "Security code must be at most 4 numbers")
    .required("Required"),
  nameOnCard: Yup.string()
    .matches(/^[A-Za-z\s]+$/, "Only alphabetic characters allowed")
    .required("Required"),
});
