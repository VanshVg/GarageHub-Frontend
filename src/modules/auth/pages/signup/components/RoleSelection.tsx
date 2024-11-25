import { CustomerIcon, GarageOwnerIcon } from "@/assets/Svg";
import { IRoleSelectionProps } from "../types";
import { RoleSelectionData } from "../types/constants";
import { btnShowType, UserRoles } from "@/common/types";
import Button from "@/common/components/form-fields/Button";

const RoleSelection = (props: IRoleSelectionProps) => {
  const { userRoleHandler, changeStepHandler, userRole } = props;

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
            `bg-gray-200 rounded-lg p-2 border-[2px] hover:scale-110 transition-transform duration-300 cursor-pointer ` +
            (userRole == UserRoles.Customer
              ? "scale-110 border-primaryButton"
              : "")
          }
          onClick={() => {
            userRoleHandler(UserRoles.Customer);
          }}
        >
          <CustomerIcon />
          <h2
            className={
              "font-bold mt-4 " +
              (userRole === UserRoles.Customer
                ? "text-primaryButton"
                : "text-slate-800")
            }
          >
            Customer
          </h2>
        </div>
        <div
          className={
            "bg-gray-200 rounded-lg border-[2px] p-2 hover:scale-110 transition-transform duration-300 cursor-pointer " +
            (userRole == UserRoles.Owner
              ? "scale-110 border-primaryButton"
              : "")
          }
          onClick={() => {
            userRoleHandler(UserRoles.Owner);
          }}
        >
          <GarageOwnerIcon />
          <h2
            className={
              "font-bold mt-4 " +
              (userRole === UserRoles.Owner
                ? "text-primaryButton"
                : "text-slate-800")
            }
          >
            Garage Owner
          </h2>
        </div>
      </div>
      <div className="flex justify-between  mt-8">
        <Button
          showType={btnShowType.Primary}
          btnName="Prev"
          btnClass="mt-6"
          type="button"
          onClickHandler={() => {
            changeStepHandler("1");
          }}
        />
        <Button
          showType={btnShowType.Primary}
          btnName="Submit"
          btnClass="mt-6"
          type="button"
          onClickHandler={() => {
            // changeStepHandler("3");
          }}
        />
      </div>
    </div>
  );
};

export default RoleSelection;
