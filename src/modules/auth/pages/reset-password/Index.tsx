import Input from "@/common/components/form-fields/Input";
import { ResetPasswordData } from "./types/constants";
import Button from "@/common/components/form-fields/Button";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthRoutesPath } from "../../types";
import { btnShowType } from "@/common/types";
import { yupResolver } from "@hookform/resolvers/yup/src/yup.js";
import { SubmitHandler, useForm } from "react-hook-form";
import { IResetPassword } from "./types";
import { resetPasswordValidationSchema } from "./validation-schema/resetPasswordSchema";
import { ShowPassword } from "@/assets/Svg";
import { useEffect } from "react";
import { useResetPasswordApi } from "../../services";
import { CmsRoutesPath } from "@/modules/cms-pages/types";

const ResetPassword = () => {
  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm<IResetPassword>({
    mode: "onChange",
    resolver: yupResolver(resetPasswordValidationSchema),
  });

  const location = useLocation();
  const navigate = useNavigate();
  const { resetPasswordApi, isSuccess: resetPasswordSuccess } =
    useResetPasswordApi();

  useEffect(() => {
    if (!location?.state?.token) {
      navigate(AuthRoutesPath.Login);
    }
  }, [location]);

  const onSubmit: SubmitHandler<IResetPassword> = async (values) => {
    await resetPasswordApi(
      { password: values.password },
      location?.state?.token
    );
  };

  useEffect(() => {
    if (resetPasswordSuccess) {
      navigate(CmsRoutesPath.Home);
    }
  }, [resetPasswordSuccess]);

  return (
    <>
      <div className="text-center">
        <h1 className="text-3xl font-bold leading-normal">
          {ResetPasswordData.heading}
        </h1>
        <p className="text-md mt-2">{ResetPasswordData.subHeading}</p>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className=" pt-6 md:pt-9 pb-14">
          <Input
            className=""
            placeholder="**********"
            name="password"
            type="password"
            control={control}
            errors={errors}
            autoComplete="new-password"
            inputEndIcon={<ShowPassword />}
          />
          <Input
            className=""
            placeholder="**********"
            name="confirmPassword"
            type="password"
            control={control}
            errors={errors}
            autoComplete="new-password"
            inputEndIcon={<ShowPassword />}
          />
          <Button
            showType={btnShowType.Primary}
            btnName="Submit"
            btnClass="mt-6 flex mx-auto"
            type="submit"
          />
          <div className="flex justify-center gap-2 text-lg mt-6">
            <Link
              className="underline hover:text-blue-700 cursor-pointer"
              to={AuthRoutesPath.Login}
            >
              Back to Login?
            </Link>
          </div>
        </div>
      </form>
    </>
  );
};

export default ResetPassword;
