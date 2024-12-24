import { AuthRoutesPath } from "@/modules/auth/types";
import { getAuth } from "@/redux/slices/authSlice";
import { ReactNode } from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const RequiresAuth = ({ children }: { children: ReactNode }) => {
  const { isAuthenticated } = useSelector(getAuth);

  if (!isAuthenticated) {
    return <Navigate to={AuthRoutesPath.Login} />;
  } else {
    {
      children;
    }
  }
};

export default RequiresAuth;
