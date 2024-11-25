import { UserRoles } from "@/common/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

interface FormInterface {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
}
interface RoleInterface {
  role: UserRoles | null;
}

export interface SignupFormInterface extends RoleInterface {
  formData: FormInterface | null;
  step: number;
}

const initialState: SignupFormInterface = {
  formData: null,
  role: null,
  step: 1,
};

const signupSlice = createSlice({
  name: "signup",
  initialState,
  reducers: {
    setFormData(
      state: SignupFormInterface,
      action: PayloadAction<FormInterface>
    ) {
      const { firstName, lastName, email, password, confirmPassword } =
        action.payload;

      state = {
        ...state,
        formData: {
          firstName,
          lastName,
          email,
          password,
          confirmPassword,
        },
      };

      return state;
    },

    setRole(state: SignupFormInterface, action: PayloadAction<RoleInterface>) {
      state = {
        ...state,
        role: action.payload.role,
      };

      return state;
    },

    clearFormData(state: SignupFormInterface) {
      state.formData = null;

      return state;
    },

    clearUserRole(state: SignupFormInterface) {
      state.role = null;

      return state;
    },

    setStep(state: SignupFormInterface, action: PayloadAction<number>) {
      state.step = action.payload;

      return state;
    },
  },
});

export const { reducer: signupReducer } = signupSlice;

export const getSignupData = (state: RootState) => state.signup;

export const { setFormData, setRole, clearFormData, clearUserRole, setStep } =
  signupSlice.actions;

export default signupSlice;
