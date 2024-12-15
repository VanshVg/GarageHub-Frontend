import { ShowPassword } from "@/assets/Svg";
import Button from "@/common/components/form-fields/Button";
import Input from "@/common/components/form-fields/Input";
import { btnShowType, IUser } from "@/common/types";
import { SignupData } from "../types/constants";
import { Link } from "react-router-dom";
import { AuthRoutesPath } from "@/modules/auth/types";
import { ISignupFormProps } from "../types";
import { useDispatch, useSelector } from "react-redux";
import { clearFormData, setFormData } from "@/redux/slices/signupSlice";
import { useForm, useWatch } from "react-hook-form";
import { RootState } from "@/redux/store";
import { useEffect } from "react";
import { yupResolver } from "@hookform/resolvers/yup/src/yup.js";
import { signUpValidationSchema } from "../validation-schema/signupSchema";
import { useSignupApi } from "@/modules/auth/services";

const SignupForm = (props: ISignupFormProps) => {
  const {
    control,
    formState: { errors },
    reset,
    trigger,
  } = useForm<IUser>({
    mode: "onChange",
    resolver: yupResolver(signUpValidationSchema),
  });

  const { changeStepHandler } = props;

  const defaultData = useSelector((state: RootState) => state.signup);

  const dispatch = useDispatch();
  const { signupApi, isSuccess: isSignUpSuccess } = useSignupApi();

  const formValues = useWatch({ control });

  useEffect(() => {
    if (defaultData?.formData !== null) {
      reset(defaultData?.formData);
    }
  }, [defaultData]);

  useEffect(() => {
    dispatch(clearFormData());
  }, []);

  useEffect(() => {
    if (isSignUpSuccess) {
      changeStepHandler(2);
    }
  }, [isSignUpSuccess]);

  const nextButtonHandler = async () => {
    const { firstName, lastName, email, password, confirmPassword } =
      formValues as IUser;

    const isValid = await trigger();

    if (!isValid) {
      return;
    }

    await signupApi({
      first_name: firstName,
      last_name: lastName,
      email,
      password,
    });

    dispatch(
      setFormData({
        firstName,
        lastName,
        email,
        password,
        confirmPassword,
      })
    );
  };

  return (
    <>
      <div>
        <h1 className="text-3xl font-bold leading-normal">
          {SignupData.heading}
        </h1>
        <p className="text-md mt-2">{SignupData.subHeading}</p>
      </div>
      <form>
        <div className=" pt-6 md:pt-9 pb-14">
          <div className="grid grid-cols-12 md:gap-2">
            <div className=" col-span-12 md:col-span-6">
              <Input
                className=""
                placeholder="First Name"
                name="firstName"
                type="text"
                control={control}
                errors={errors}
                autoComplete={""}
              />
            </div>
            <div className=" col-span-12 md:col-span-6">
              <Input
                className=""
                placeholder="Last Name"
                name="lastName"
                type="text"
                control={control}
                errors={errors}
                autoComplete={""}
              />
            </div>
          </div>
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
            btnName="Next"
            btnClass="mt-6 flex ml-auto"
            type="button"
            onClickHandler={() => {
              nextButtonHandler();
            }}
          />
          <div className="flex justify-center gap-2 text-lg mt-4">
            <p>Already a user? </p>
            <Link
              className="underline hover:text-blue-700 cursor-pointer"
              to={AuthRoutesPath.Login}
            >
              Login
            </Link>
          </div>
        </div>
      </form>
    </>
  );
};

export default SignupForm;
