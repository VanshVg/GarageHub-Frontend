import { LogoutIcon, SidebarIcon } from "@/assets/Svg";
import { MainLogo } from "@/common/types/constants";
import useSidebar from "@/hooks/useSidebar";
import SidebarElement from "./SidebarElement";
import { Fragment } from "react/jsx-runtime";
import { useDispatch, useSelector } from "react-redux";
import { getSidebar, toggleSidebar } from "@/redux/slices/sidebarSlice";

const Sidebar = () => {
  const { sidebarElements } = useSidebar();
  const dispatch = useDispatch();

  return (
    <div className="h-[100vh] w-[291px] bg-slate-800 py-5 flex flex-col">
      <div className="flex justify-between px-5 gap-3 mb-[80px]">
        <img src={MainLogo} className="h-[70px] w-[70px] cursor-pointer" />
        <div
          className="mt-6 hover: cursor-pointer"
          onClick={() => {
            dispatch(toggleSidebar());
          }}
        >
          <SidebarIcon />
        </div>
      </div>
      {sidebarElements.map((element, index) => (
        <Fragment key={`${element.name}_${index}`}>
          <SidebarElement element={element} />
        </Fragment>
      ))}
      <div className="self-stretch mt-auto mb-[80px]">
        <SidebarElement
          element={{
            name: "Logout",
            icon: LogoutIcon,
            path: "",
          }}
          onClickHandler={() => {
            console.log("Logout called");
          }}
        />
      </div>
    </div>
  );
};

export default Sidebar;
