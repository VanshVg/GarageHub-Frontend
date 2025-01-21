import React, { Suspense } from "react";

import { IRoute } from "@/common/types";
import { DashboardRoutesPath } from "./types";

const Dashboard = React.lazy(() => import("@/modules/dashboard/Dashboard"));
const RequiresAuth = React.lazy(
  () => import("@/modules/dashboard/components/RequiresAuth")
);

const applySuspenseForAuth = (routes: IRoute[]): IRoute[] => {
  return routes.map((route: IRoute) => ({
    ...route,
    element: (
      <Suspense>
        <RequiresAuth>{route.element}</RequiresAuth>
      </Suspense>
    ),
  }));
};

export const DashboardRoutes = applySuspenseForAuth([
  {
    path: DashboardRoutesPath.Dashboard,
    element: <Dashboard />,
  },
]);
