import { CustomerIcon, GarageOwnerIcon } from "@/assets/Svg";
import { IRoleSelectionProps } from "../types";
import { RoleSelectionData } from "../types/constants";
import { btnShowType, UserRoles } from "@/common/types";
import Button from "@/common/components/form-fields/Button";
import { useDispatch } from "react-redux";
import { clearUserRole, setRole } from "@/redux/slices/signupSlice";
import { useEffect, useState } from "react";

const RoleSelection = (props: IRoleSelectionProps) => {
  const { changeStepHandler, userRole, onSubmit } = props;

  const [isValid, setIsValid] = useState<boolean>(true);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(clearUserRole());
  }, []);

  return (
    <div className="pb-12">
      <div>
        <h1 className="text-3xl font-bold leading-normal">
          {RoleSelectionData.heading}
        </h1>
        <p className="text-md mt-2">{RoleSelectionData.subHeading}</p>
      </div>
      <div className="flex justify-center gap-16 mt-12">
        <div
          className={
            "rounded-lg border-[2px] w-[150px] py-4 hover:scale-110 transition-transform duration-300 cursor-pointer " +
            (userRole == UserRoles.Customer
              ? "scale-110 border-primaryButton bg-primaryButton"
              : "bg-white")
          }
          onClick={() => {
            setIsValid(true);
            dispatch(setRole({ role: UserRoles.Customer }));
          }}
        >
          <div className="flex justify-center">
            <CustomerIcon />
          </div>
          <h2 className={"font-bold mt-6 text-lg text-slate-800"}>
            {UserRoles.Customer}
          </h2>
        </div>
        <div
          className={
            "rounded-lg border-[2px] w-[150px] py-4 hover:scale-110 transition-transform duration-300 cursor-pointer " +
            (userRole == UserRoles.Owner
              ? "scale-110 border-primaryButton bg-primaryButton"
              : "bg-white")
          }
          onClick={() => {
            setIsValid(true);
            dispatch(setRole({ role: UserRoles.Owner }));
          }}
        >
          <div className="flex justify-center">
            <GarageOwnerIcon />
          </div>
          <h2 className={"font-bold mt-6 text-lg text-slate-800"}>
            {"Garage " + UserRoles.Owner}
          </h2>
        </div>
      </div>
      {!isValid && (
        <span className="block text-sm font-medium text-red-600 text-center mt-8">
          {RoleSelectionData.errorMessage}
        </span>
      )}
      <div className="flex justify-between mt-8">
        <Button
          showType={btnShowType.Primary}
          btnName="Prev"
          btnClass="mt-6"
          type="button"
          onClickHandler={() => {
            changeStepHandler(1);
          }}
        />
        <Button
          showType={btnShowType.Primary}
          btnName="Submit"
          btnClass="mt-6"
          type="button"
          onClickHandler={() => {
            if (!userRole) {
              setIsValid(false);
              return;
            }
            onSubmit();
          }}
        />
      </div>
    </div>
  );
};

export default RoleSelection;
