import React, { Suspense } from "react";

import { IRoute } from "@/common/types";
import { AuthRoutesPath } from "./types";
import { useSelector } from "react-redux";
import { getAuth } from "@/redux/slices/authSlice";
import { Navigate, Outlet, useNavigate } from "react-router-dom";
import { MainLogo } from "@/common/types/constants";
import { CmsRoutesPath } from "../cms-pages/types";

const Login = React.lazy(() => import("@/modules/auth/pages/login/Index"));
const Signup = React.lazy(() => import("@/modules/auth/pages/signup/Index"));

const applySuspense = (routes: IRoute[]): IRoute[] => {
  return routes.map((route: IRoute) => ({
    ...route,
    element: <Suspense>{route.element}</Suspense>,
  }));
};

export const RequiresUnAuthForAuth = () => {
  const { isAuthenticated } = useSelector(getAuth);
  const navigate = useNavigate();

  if (isAuthenticated) {
    return <Navigate to={""} />;
  } else {
    return (
      <div className="bg-gray-900 text-white flex justify-center min-h-screen py-20 px-4">
        <div className="w-full md:w-[600px]">
          <div className="flex justify-center">
            <img
              src={MainLogo}
              className="h-32 w-32 cursor-pointer mb-8"
              alt="GarageHub Logo"
              onClick={() => {
                navigate(CmsRoutesPath.Home);
              }}
            />
          </div>
          <div className="relative z-[99] border-[3px] border-gray-700 rounded-xl bg-gray-800 p-6 shadow-lg">
            <div className="absolute inset-0 -z-10 blur-[80px] bg-gradient-to-r from-primaryButton via-yellow to-transparent rounded-full opacity-30"></div>
            <Suspense>
              <Outlet />
            </Suspense>
          </div>
        </div>
      </div>
    );
  }
};

export const AuthRoutes = applySuspense([
  {
    path: AuthRoutesPath.Login,
    element: <Login />,
  },
  {
    path: AuthRoutesPath.Signup,
    element: <Signup />,
  },
]);
