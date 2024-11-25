import { UserRoles } from "@/common/types";

export interface ISignupFormProps {
  changeStepHandler: (newStep: number) => void;
}

export interface IRoleSelectionProps {
  changeStepHandler: (newStep: number) => void;
  userRole: UserRoles;
  onSubmit: () => void;
}
