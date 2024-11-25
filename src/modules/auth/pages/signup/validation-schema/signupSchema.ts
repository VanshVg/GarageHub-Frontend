import { emailValidation, passwordValidation } from "@/common/validations";
import * as Yup from "yup";

export const signUpValidationSchema = Yup.object().shape({
  firstName: Yup.string()
    .required("First name  is required")
    .matches(/^[a-zA-Z0-9]+$/, "Must be alphanumeric"),
  lastName: Yup.string()
    .required("Last name  is required")
    .matches(/^[a-zA-Z0-9]+$/, "Must be alphanumeric"),
  email: emailValidation,
  password: passwordValidation,
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password")], "Passwords must match")
    .required("Confirm Password is required!"),
});
