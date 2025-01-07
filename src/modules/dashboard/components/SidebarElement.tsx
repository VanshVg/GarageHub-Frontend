import { useNavigate } from "react-router-dom";
import { ISidebarElementProps } from "../types";
import { useState } from "react";
import { useSelector } from "react-redux";
import { getSidebar } from "@/redux/slices/sidebarSlice";

const SidebarElement = (props: ISidebarElementProps) => {
  const { element, onClickHandler } = props;

  const [isActive, setIsActive] = useState<boolean>(false);

  const navigate = useNavigate();
  const { isSidebarOpen } = useSelector(getSidebar);

  return (
    <div
      className={
        "flex justify-left p-2 pl-10 gap-4 mt-5 rounded-r-md hover:bg-slate-700 cursor-pointer transition-all duration-300 " +
        (location.pathname === element.path
          ? "bg-primaryButton text-black hover:bg-primaryButton "
          : "text-white  ") +
        (isSidebarOpen ? "mr-14" : "mr-5")
      }
      onClick={() => {
        if (!onClickHandler) {
          navigate(element.path);
        } else {
          onClickHandler();
        }
      }}
      onMouseEnter={() => {
        setIsActive(true);
      }}
      onMouseLeave={() => {
        setIsActive(false);
      }}
    >
      <div>
        {element.icon && (
          <element.icon
            color={
              location.pathname === element.path ? "" : "rgba(255, 255, 255, 1)"
            }
          />
        )}
      </div>
      <h2 className="text-[18px] font-semibold transition-all duration-300">
        {element.name}
      </h2>
    </div>
  );
};

export default SidebarElement;
