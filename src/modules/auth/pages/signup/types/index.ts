import { FormControlProp, UserRoles } from "@/common/types";
import { FieldErrors } from "react-hook-form";

export interface ISignupFormProps {
  control: FormControlProp;
  errors: FieldErrors;
  changeStepHandler: (newStep: string) => void;
}

export interface IRoleSelectionProps {
  userRoleHandler: (role: UserRoles) => void;
  changeStepHandler: (newStep: string) => void;
}
