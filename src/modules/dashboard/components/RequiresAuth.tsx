import { AuthRoutesPath } from "@/modules/auth/types";
import { getAuth } from "@/redux/slices/authSlice";
import { ReactNode } from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import Sidebar from "./Sidebar";

const RequiresAuth = ({ children }: { children: ReactNode }) => {
  const { isAuthenticated } = useSelector(getAuth);

  if (!isAuthenticated) {
    return <Navigate to={AuthRoutesPath.Login} />;
  } else {
    return (
      <div className="flex gap-5">
        <Sidebar />
        {children}
      </div>
    );
  }
};

export default RequiresAuth;
