import { Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { IRoute } from "./common/types";

import { CMSRoutes, RequiresUnAuthForCMS } from "./modules/cms-pages/routes";
import { AuthRoutes, RequiresUnAuthForAuth } from "./modules/auth/routes";

const applySuspense = (routes: IRoute[]): IRoute[] => {
  return routes.map((route: IRoute) => ({
    ...route,
    element: <Suspense>{route.element}</Suspense>,
  }));
};

const RouterComponent = () => {
  const routesForCMS = applySuspense([
    {
      element: <RequiresUnAuthForCMS />,
      children: CMSRoutes,
    },
  ]);

  const routesForAuth = applySuspense([
    {
      element: <RequiresUnAuthForAuth />,
      children: AuthRoutes,
    },
  ]);

  const router = createBrowserRouter([...routesForCMS, ...routesForAuth]);

  return <RouterProvider router={router} />;
};

export default RouterComponent;
