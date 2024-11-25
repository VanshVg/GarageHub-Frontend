import { UserRoles } from "@/common/types";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { setStep } from "@/redux/slices/signupSlice";

import SignupForm from "./components/SignupForm";
import RoleSelection from "./components/RoleSelection";

const Signup = () => {
  const formData = useSelector((state: RootState) => state.signup);

  const dispatch = useDispatch();

  const step = formData.step;

  const changeStepHandler = (newStep: number) => {
    dispatch(setStep(newStep));
  };

  const onSubmit = async () => {
    console.log(formData);
  };

  return (
    <div className="text-center px-6">
      {step === 1 && <SignupForm changeStepHandler={changeStepHandler} />}
      {step === 2 && (
        <RoleSelection
          changeStepHandler={changeStepHandler}
          userRole={formData.role as UserRoles}
          onSubmit={onSubmit}
        />
      )}
    </div>
  );
};

export default Signup;
