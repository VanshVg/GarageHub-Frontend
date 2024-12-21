import React, { Suspense } from "react";

import { IRoute } from "@/common/types";
import { AuthRoutesPath } from "./types";

const Login = React.lazy(() => import("@/modules/auth/pages/login/Index"));
const Signup = React.lazy(() => import("@/modules/auth/pages/signup/Index"));
const OtpVerification = React.lazy(
  () => import("@/modules/auth/pages/otp-verification/Index")
);
const ForgotPassword = React.lazy(
  () => import("@/modules/auth/pages/forgot-password/Index")
);
const ResetPassword = React.lazy(
  () => import("@/modules/auth/pages/reset-password/Index")
);

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
  {
    path: AuthRoutesPath.ResetPassword,
    element: <ResetPassword />,
  },
]);
