import React, { Suspense, useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { IRoute } from "./common/types";

import CmsPages from "./modules/cms-pages/CmsPages";
import Auth from "./modules/auth/Auth";
import { CMSRoutes } from "./modules/cms-pages/routes";
import { AuthRoutes } from "./modules/auth/routes";
import { AuthRoutesPath } from "./modules/auth/types";
import { useDispatch } from "react-redux";
import { clearFormData } from "./redux/slices/signupSlice";
import Dashboard from "./modules/dashboard/Dashboard";
import { DashboardRoutesPath } from "./modules/dashboard/types";

const RequiresAuth = React.lazy(
  () => import("@/modules/dashboard/components/RequiresAuth")
);
const applySuspense = (routes: IRoute[]): IRoute[] => {
  return routes.map((route: IRoute) => ({
    ...route,
    element: <Suspense>{route.element}</Suspense>,
  }));
};

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

const RouterComponent = () => {
  const path = window.location.pathname;

  const dispatch = useDispatch();

  useEffect(() => {
    if (path !== AuthRoutesPath.Signup) {
      dispatch(clearFormData());
    }
  }, [path]);

  const routesForCMS = applySuspense([
    {
      element: <CmsPages />,
      children: CMSRoutes,
    },
  ]);

  const routesForAuth = applySuspense([
    {
      element: <Auth />,
      children: AuthRoutes,
    },
  ]);

  const routesForDashboard = applySuspenseForAuth([
    {
      path: DashboardRoutesPath.Dashboard,
      element: <Dashboard />,
    },
  ]);

  const router = createBrowserRouter([
    ...routesForCMS,
    ...routesForAuth,
    ...routesForDashboard,
  ]);

  return <RouterProvider router={router} />;
};

export default RouterComponent;
