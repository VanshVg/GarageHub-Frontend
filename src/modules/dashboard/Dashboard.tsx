import { getAuth } from "@/redux/slices/authSlice";
import { Suspense } from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import { AuthRoutesPath } from "../auth/types";

const Dashboard = () => {
  const { isAuthenticated } = useSelector(getAuth);

  if (!isAuthenticated) {
    return <Navigate to={AuthRoutesPath.Login} />;
  }

  return (
    <Suspense>
      <Outlet />
    </Suspense>
  );
};

export default Dashboard;
