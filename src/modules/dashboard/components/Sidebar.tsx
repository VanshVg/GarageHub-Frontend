import { LogoutIcon, SidebarIcon } from "@/assets/Svg";
import { MainLogo } from "@/common/types/constants";
import useSidebar from "@/hooks/useSidebar";
import SidebarElement from "./SidebarElement";
import { Fragment } from "react/jsx-runtime";
import { useDispatch, useSelector } from "react-redux";
import { getSidebar, toggleSidebar } from "@/redux/slices/sidebarSlice";
import Tooltip from "@mui/material/Tooltip";

const Sidebar = () => {
  const { sidebarElements } = useSidebar();
  const dispatch = useDispatch();
  const { isSidebarOpen } = useSelector(getSidebar);

  return (
    <div className="relative flex">
      <div
        className={
          `h-[100vh] bg-slate-800 py-5 flex flex-col transition-all duration-300 ` +
          (isSidebarOpen ? "w-[291px]" : "w-[100px]")
        }
      >
        <div className="flex justify-center px-5 gap-3 mb-[60px] transition-all duration-300">
          <img
            src={MainLogo}
            className="h-[60px] w-[60px] cursor-pointer transition-all duration-300"
          />
        </div>
        {sidebarElements.map((element, index) => (
          <Fragment key={`${element.name}_${index}`}>
            {isSidebarOpen ? (
              <SidebarElement element={element} />
            ) : (
              <Tooltip title={element.name}>
                <div>
                  <SidebarElement element={{ ...element, name: "" }} />
                </div>
              </Tooltip>
            )}
          </Fragment>
        ))}
        <div className="self-stretch mt-auto mb-[80px] transition-all duration-300">
          {isSidebarOpen ? (
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
          ) : (
            <Tooltip title="Logout">
              <div>
                <SidebarElement
                  element={{
                    name: "",
                    icon: LogoutIcon,
                    path: "",
                  }}
                  onClickHandler={() => {
                    console.log("Logout called");
                  }}
                />
              </div>
            </Tooltip>
          )}
        </div>
      </div>

      <Tooltip title={isSidebarOpen ? "Collapse Sidebar" : "Expand Sidebar"}>
        <div
          className={
            "left-full flex items-center justify-center w-[40px] h-[40px] text-white rounded-full cursor-pointer transition-all duration-300"
          }
          onClick={() => {
            dispatch(toggleSidebar());
          }}
        >
          <SidebarIcon />
        </div>
      </Tooltip>
    </div>
  );
};

export default Sidebar;
