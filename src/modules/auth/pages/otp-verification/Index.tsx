import Button from "@/common/components/form-fields/Button";
import { btnShowType } from "@/common/types";
import OtpInputField from "./components/OtpInputField";
import { useEffect, useState } from "react";
import { OtpVerificationData } from "./types/constants";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthRoutesPath } from "../../types";
import { useOtpVerificationApi, useResendOtpApi } from "../../services";

const OtpVerification = () => {
  const [otp, setOtp] = useState<string>();

  const location = useLocation();
  const navigate = useNavigate();
  const { resendOtpApi } = useResendOtpApi();
  const { otpVerificationApi, isSuccess: otpVerificationSuccess } =
    useOtpVerificationApi();

  const dataChangeHandler = (value: string) => {
    setOtp(value);
  };

  useEffect(() => {
    if (!location?.state?.token) {
      navigate(AuthRoutesPath.Login);
    }
  }, [location]);

  const resendOtpHandler = async () => {
    await resendOtpApi(location?.state?.token);
  };

  const otpVerificationHandler = async () => {
    await otpVerificationApi({ otp }, location?.state?.token);
  };

  useEffect(() => {
    if (otpVerificationSuccess) {
      if (location?.state?.newUser) {
        navigate(AuthRoutesPath.Login);
      } else {
        navigate(AuthRoutesPath.ResetPassword, {
          state: { token: location?.state?.token },
        });
      }
    }
  }, [otpVerificationSuccess]);

  return (
    <div className="pb-12 text-center">
      <div>
        <h1 className="text-3xl font-bold leading-normal">
          {OtpVerificationData.heading}
        </h1>
        <p className="text-md mt-2">{OtpVerificationData.subHeading}</p>
        <div className="flex justify-center mt-8 mb-8 text-darkSlatePrimary text-center">
          <OtpInputField
            value={otp as string}
            onChangeHandler={dataChangeHandler}
          />
        </div>
      </div>

      <Button
        showType={btnShowType.Primary}
        btnName="Verify"
        btnClass="mt-6"
        type="button"
        onClickHandler={otpVerificationHandler}
      />

      <div className="flex justify-center gap-2 text-lg mt-6">
        <p
          className="underline hover:text-blue-700 cursor-pointer"
          onClick={resendOtpHandler}
        >
          Resend OTP ?
        </p>
      </div>

      {!location?.state?.newUser && (
        <div className="flex justify-center gap-2 text-lg mt-6">
          <Link
            className="underline hover:text-blue-700 cursor-pointer"
            to={AuthRoutesPath.Login}
          >
            Back to Login?
          </Link>
        </div>
      )}
    </div>
  );
};

export default OtpVerification;
