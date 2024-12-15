import { UserRoles } from "@/common/types";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { setStep } from "@/redux/slices/signupSlice";

import SignupForm from "./components/SignupForm";
import RoleSelection from "./components/RoleSelection";
import { useUpdateRoleApi } from "../../services";
import { useNavigate } from "react-router-dom";
import { AuthRoutesPath } from "../../types";

const Signup = () => {
  const formData = useSelector((state: RootState) => state.signup);

  const dispatch = useDispatch();
  const { updateRoleApi } = useUpdateRoleApi();
  const navigate = useNavigate();

  const step = formData.step;

  const changeStepHandler = (newStep: number) => {
    dispatch(setStep(newStep));
  };

  const onSubmit = async () => {
    const { data } = await updateRoleApi({
      role: formData.role,
      email: formData?.formData?.email,
    });
    if (data?.data?.token) {
      navigate(`${AuthRoutesPath.OtpVerification}?auth=${data?.data?.token}`);
    }
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
