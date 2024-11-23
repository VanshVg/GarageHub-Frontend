import { MainLogo } from "@/common/types/constants";
import { getAuth } from "@/redux/slices/authSlice";
import { useSelector } from "react-redux";
import { Navigate, Outlet, useNavigate } from "react-router-dom";
import { Suspense } from "react";

import { CmsRoutesPath } from "../cms-pages/types";

const Auth = () => {
  const { isAuthenticated } = useSelector(getAuth);
  const navigate = useNavigate();

  if (isAuthenticated) {
    return <Navigate to={""} />;
  } else {
    return (
      <div className="bg-white bg-authPattern flex justify-center min-h-screen py-20 px-4">
        <div className="w-full md:w-[600px]">
          <img
            src={MainLogo}
            className="h-28 w-28 cursor-pointer p-1 bg-gray-900 rounded-full mx-auto mb-8"
            alt="GarageHub Logo"
            onClick={() => {
              navigate(CmsRoutesPath.Home);
            }}
          />
          <div className="bg-gray-900 text-white border-[1px] border-gray-700 rounded-xl p-6">
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

export default Auth;
