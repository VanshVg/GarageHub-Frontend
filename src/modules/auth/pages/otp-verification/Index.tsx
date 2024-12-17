import Button from "@/common/components/form-fields/Button";
import { btnShowType } from "@/common/types";
import OtpInputField from "./components/OtpInputField";
import { useState } from "react";
import { OtpVerificationData } from "./types/constants";

const OtpVerification = () => {
  const [otp, setOtp] = useState<string>();

  const dataChangeHandler = (value: string) => {
    console.log(value);
    setOtp(value);
  };

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
        // onClickHandler={() => {
        //   if (!userRole) {
        //     setIsValid(false);
        //     return;
        //   }
        //   onSubmit();
        // }}
      />
    </div>
  );
};

export default OtpVerification;
