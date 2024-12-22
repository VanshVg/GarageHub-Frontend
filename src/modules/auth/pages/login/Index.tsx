import { SubmitHandler, useForm } from "react-hook-form";
import { btnShowType } from "@/common/types";
import Input from "@/common/components/form-fields/Input";
import { ShowPassword } from "@/assets/Svg";
import Button from "@/common/components/form-fields/Button";
import { Link } from "react-router-dom";
import { AuthRoutesPath } from "../../types";
import { loginValidationSchema } from "./validation-schema/loginSchema";
import { yupResolver } from "@hookform/resolvers/yup/src/yup.js";
import { ILoginForm } from "./types";
import { useLoginApi } from "../../services";
import { useDispatch } from "react-redux";
import { setCredentials, setUser } from "@/redux/slices/authSlice";
import { LoginData } from "./types/constants";

const Login = () => {
  const {
    control,
    formState: { errors },
    handleSubmit,
  } = useForm<ILoginForm>({
    mode: "onChange",
    resolver: yupResolver(loginValidationSchema),
  });

  const { loginApi } = useLoginApi();
  const dispatch = useDispatch();

  const onSubmit: SubmitHandler<ILoginForm> = async (values) => {
    const { email, password } = values;

    const { data } = await loginApi({
      email,
      password,
    });

    if (data) {
      dispatch(setCredentials({ token: data?.data?.accessToken }));
      dispatch(setUser({ userData: data?.data?.user }));
    }
  };

  return (
    <>
      <div className="text-center">
        <h1 className="text-3xl font-bold leading-normal">
          {LoginData.heading}
        </h1>
        <p className="text-md mt-2">{LoginData.subHeading}</p>
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
          <Button
            showType={btnShowType.Primary}
            btnName="Submit"
            btnClass="mt-6 flex mx-auto"
            type="submit"
          />
          <div className="flex justify-center gap-2 text-lg mt-6">
            <Link
              className="underline hover:text-blue-700 cursor-pointer"
              to={AuthRoutesPath.ForgotPassword}
            >
              Forgot Password?
            </Link>
          </div>
          <div className="flex justify-center gap-2 text-lg mt-4">
            <p>New user? </p>
            <Link
              className="underline hover:text-blue-700 cursor-pointer"
              to={AuthRoutesPath.Signup}
            >
              Signup
            </Link>
          </div>
        </div>
      </form>
    </>
  );
};

export default Login;
