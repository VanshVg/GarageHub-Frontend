import { LogoutIcon, SidebarIcon } from "@/assets/Svg";
import { MainLogo } from "@/common/types/constants";
import useSidebar from "@/hooks/useSidebar";
import { useLocation, useNavigate } from "react-router-dom";

const Sidebar = () => {
  const { sidebarElements } = useSidebar();
  const navigate = useNavigate();
  const location = useLocation();

  console.log(location);

  return (
    <div className="h-[100vh] w-[291px] bg-slate-800 py-5 flex flex-col">
      <div className="flex justify-between px-5 gap-3 mb-[80px]">
        <img src={MainLogo} className="h-[70px] w-[70px]" />
        <div className="mt-6 hover: cursor-pointer">
          <SidebarIcon />
        </div>
      </div>
      {sidebarElements.map((element, index) => (
        <div
          className={
            "flex justify-left p-2 pl-10 gap-4 mr-14 mt-5 rounded-r-md hover:bg-primaryButton hover:text-black cursor-pointer transition-colors duration-300 " +
            (location.pathname === element.path
              ? "bg-primaryButton text-black"
              : "text-white")
          }
          onClick={() => {
            navigate(element.path);
          }}
          key={`${element.name}_${index}`}
        >
          <div>
            {element.icon && (
              <element.icon
                color={
                  location.pathname === element.path
                    ? ""
                    : "rgba(255, 255, 255, 1)"
                }
              />
            )}
          </div>
          <h2 className="text-[18px] font-semibold">{element.name}</h2>
        </div>
      ))}
      <div className="self-stretch mt-auto mb-[80px]">
        <div
          className={
            "flex justify-left p-2 pl-10 gap-4 mr-14 mt-5 rounded-r-md hover:bg-primaryButton hover:text-black cursor-pointer transition-colors duration-300 text-white"
          }
        >
          <div>
            <LogoutIcon />
          </div>
          <h2 className="text-[18px] font-semibold">Logout</h2>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
