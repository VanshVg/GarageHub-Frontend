import { passwordValidation } from "@/common/validations";
import * as Yup from "yup";

export const resetPasswordValidationSchema = Yup.object().shape({
  password: passwordValidation,
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password")], "Passwords must match")
    .required("Confirm Password is required!"),
});
