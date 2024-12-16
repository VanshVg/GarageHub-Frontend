import React, { Suspense } from "react";

import { IRoute } from "@/common/types";
import { AuthRoutesPath } from "./types";
import OtpVerification from "./pages/otp-verification/Index";
import ForgotPassword from "./pages/forgot-password/Index";

const Login = React.lazy(() => import("@/modules/auth/pages/login/Index"));
const Signup = React.lazy(() => import("@/modules/auth/pages/signup/Index"));

const applySuspense = (routes: IRoute[]): IRoute[] => {
  return routes.map((route: IRoute) => ({
    ...route,
    element: <Suspense>{route.element}</Suspense>,
  }));
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
  {
    path: AuthRoutesPath.OtpVerification,
    element: <OtpVerification />,
  },
  {
    path: AuthRoutesPath.ForgotPassword,
    element: <ForgotPassword />,
  },
]);
