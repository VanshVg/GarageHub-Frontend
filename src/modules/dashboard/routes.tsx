import React, { Suspense } from "react";

import { IRoute } from "@/common/types";
import { DashboardRoutesPath } from "./types";

const Home = React.lazy(() => import("@/modules/dashboard/pages/home/Index"));

const applySuspense = (routes: IRoute[]): IRoute[] => {
  return routes.map((route: IRoute) => ({
    ...route,
    element: <Suspense>{route.element}</Suspense>,
  }));
};

export const DashboardRoutes = applySuspense([
  {
    path: DashboardRoutesPath.Dashboard,
    element: <Home />,
  },
]);
