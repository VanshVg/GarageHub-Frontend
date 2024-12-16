import { emailValidation, passwordValidation } from "@/common/validations";
import * as Yup from "yup";

export const loginValidationSchema = Yup.object().shape({
  email: emailValidation,
  password: passwordValidation,
});
