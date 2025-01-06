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
    <div
      className={
        `h-[100vh] bg-slate-800 py-5 flex flex-col ` +
        (isSidebarOpen ? "w-[291px]" : "w-[100px]")
      }
    >
      <div className="flex justify-between px-5 gap-3 mb-[80px]">
        <img src={MainLogo} className="h-[30px] w-[30px] cursor-pointer" />
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
      <div className="self-stretch mt-auto mb-[80px]">
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
  );
};

export default Sidebar;
