import { useNavigate } from "react-router-dom";

import { CmsRoutesPath } from "../types";
import { navbarData } from "../types/constants";
import Button from "@/common/components/form-fields/Button";
import { btnShowType } from "@/common/types";
import { MainLogo, ProjectTitle } from "@/common/types/constants";

const CmsNavbar = () => {
  const navigate = useNavigate();

  return (
    <div className="flex justify-between items-center py-4 px-8 bg-slate-800">
      <div className="flex items-center">
        <img
          src={MainLogo}
          className="h-20 w-20 cursor-pointer"
          alt="Logo"
          onClick={() => {
            navigate(CmsRoutesPath.Home);
          }}
        />
        <h1
          className="text-white font-bold text-[28px] ml-[12px]"
          onClick={() => {
            navigate(CmsRoutesPath.Home);
          }}
        >
          {ProjectTitle}
        </h1>
      </div>
      <div className="flex gap-8 text-white text-lg items-center">
        {navbarData?.navigationMenu?.map(
          (item: { name: string; path: CmsRoutesPath }, index: number) => (
            <div
              className="cursor-pointer hover:underline"
              key={index}
              onClick={() => {
                navigate(item.path);
              }}
            >
              {item.name}
            </div>
          )
        )}
      </div>
      <div className="flex gap-4 items-center">
        {navbarData?.buttons?.map(
          (item: { name: string; path: string }, index: number) => (
            <Button
              key={index}
              btnName={item.name}
              showType={btnShowType.Primary}
              onClickHandler={() => navigate(item.path)}
            />
          )
        )}
      </div>
    </div>
  );
};

export default CmsNavbar;
