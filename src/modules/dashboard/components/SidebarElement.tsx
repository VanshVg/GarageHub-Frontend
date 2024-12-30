import { useNavigate } from "react-router-dom";
import { ISidebarElementProps } from "../types";
import { useState } from "react";

const SidebarElement = (props: ISidebarElementProps) => {
  const { element, onClickHandler } = props;

  const [isActive, setIsActive] = useState<boolean>(false);

  const navigate = useNavigate();

  return (
    <div
      className={
        "flex justify-left p-2 pl-10 gap-4 mr-14 mt-5 rounded-r-md hover:bg-primaryButton hover:text-black cursor-pointer transition-colors duration-300 " +
        (location.pathname === element.path
          ? "bg-primaryButton text-black"
          : "text-white")
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
              location.pathname === element.path || isActive
                ? ""
                : "rgba(255, 255, 255, 1)"
            }
          />
        )}
      </div>
      <h2 className="text-[18px] font-semibold">{element.name}</h2>
    </div>
  );
};

export default SidebarElement;
