import { CustomerIcon, GarageOwnerIcon } from "@/assets/Svg";
import { IRoleSelectionProps } from "../types";
import { RoleSelectionData } from "../types/constants";

const RoleSelection = (props: IRoleSelectionProps) => {
  //   const { userRoleHandler, changeStepHandler } = props;

  return (
    <div className="pb-12">
      <div>
        <h1 className="text-3xl font-bold leading-normal">
          {RoleSelectionData.heading}
        </h1>
        <p className="text-md mt-2">{RoleSelectionData.subHeading}</p>
      </div>
      <div className="flex justify-center gap-16 mt-12">
        <div className="bg-white rounded-lg p-2 hover:scale-110 transition-transform duration-300 cursor-pointer">
          <CustomerIcon />
          <h2 className="text-slate-800 font-bold mt-2">Customer</h2>
        </div>
        <div className="bg-white rounded-lg p-2 hover:scale-110 transition-transform duration-300 cursor-pointer">
          <GarageOwnerIcon />
          <h2 className="text-slate-800 font-bold mt-2">Garage Owner</h2>
        </div>
      </div>
    </div>
  );
};

export default RoleSelection;
