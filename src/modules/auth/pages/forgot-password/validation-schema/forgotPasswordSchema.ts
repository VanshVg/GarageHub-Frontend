import { emailValidation } from "@/common/validations";
import * as Yup from "yup";

export const forgotPasswordValidationSchema = Yup.object().shape({
  email: emailValidation,
});
