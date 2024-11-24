import { ShowPassword } from "@/assets/Svg";
import Button from "@/common/components/form-fields/Button";
import Input from "@/common/components/form-fields/Input";
import { btnShowType } from "@/common/types";
import { SignupData } from "../types/constants";
import { Link } from "react-router-dom";
import { AuthRoutesPath } from "@/modules/auth/types";
import { ISignupFormProps } from "../types";

const SignupForm = (props: ISignupFormProps) => {
  const { control, errors, changeStepHandler } = props;

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
              changeStepHandler("2");
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
