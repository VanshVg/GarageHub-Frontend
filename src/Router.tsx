import { Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { IRoute } from "./common/types";

import { CMSRoutes, RequiresUnAuthForCMS } from "./modules/cms-pages/routes";

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

  const router = createBrowserRouter([...routesForCMS]);

  return <RouterProvider router={router} />;
};

export default RouterComponent;
