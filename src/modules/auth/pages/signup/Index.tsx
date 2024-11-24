import { useForm } from "react-hook-form";
import SignupForm from "./components/SignupForm";
import { SignupData } from "./types/constants";
import { useSearchParams } from "react-router-dom";
import RoleSelection from "./components/RoleSelection";
import { useState } from "react";
import { UserRoles } from "@/common/types";

const Signup = () => {
  const {
    control,
    formState: { errors },
  } = useForm();

  const [searchParams, setSearchParams] = useSearchParams();
  const [userRole, setUserRole] = useState<UserRoles>();

  const step = searchParams.get("step");

  const changeStepHandler = (newStep: string) => {
    setSearchParams((params) => {
      params.set("step", newStep);
      return params;
    });
  };

  const userRoleHandler = (role: UserRoles) => {
    setUserRole(role);
  };

  return (
    <div className="text-center px-6">
      {step === "1" && (
        <SignupForm
          control={control}
          errors={errors}
          changeStepHandler={changeStepHandler}
        />
      )}
      {step === "2" && (
        <RoleSelection
          userRoleHandler={userRoleHandler}
          changeStepHandler={changeStepHandler}
        />
      )}
    </div>
  );
};

export default Signup;
