import Input from "@/common/components/form-fields/Input";
import { ForgotPasswordData } from "./types/constants";
import { AuthRoutesPath } from "../../types";
import { Link, useNavigate } from "react-router-dom";
import Button from "@/common/components/form-fields/Button";
import { btnShowType } from "@/common/types";
import { SubmitHandler, useForm } from "react-hook-form";
import { IForgotPassword } from "./types";
import { yupResolver } from "@hookform/resolvers/yup/src/yup.js";
import { forgotPasswordValidationSchema } from "./validation-schema/forgotPasswordSchema";
import { useForgotPasswordApi } from "../../services";

const ForgotPassword = () => {
  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm<IForgotPassword>({
    mode: "onChange",
    resolver: yupResolver(forgotPasswordValidationSchema),
  });

  const { forgotPasswordApi } = useForgotPasswordApi();
  const navigate = useNavigate();

  const onSubmit: SubmitHandler<IForgotPassword> = async (values) => {
    const { data } = await forgotPasswordApi(values);

    if (data?.data?.token) {
      navigate(`${AuthRoutesPath.OtpVerification}`, {
        state: { token: data?.data?.token },
      });
    }
  };

  return (
    <>
      <div className="text-center">
        <h1 className="text-3xl font-bold leading-normal">
          {ForgotPasswordData.heading}
        </h1>
        <p className="text-md mt-2">{ForgotPasswordData.subHeading}</p>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className=" pt-6 md:pt-9 pb-14">
          <Input
            className=""
            placeholder="Email"
            name="email"
            type="text"
            control={control}
            errors={errors}
            autoComplete={""}
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

export default ForgotPassword;
