import { Suspense } from "react";
import { IRoute } from "./types";
import { CMSRoutes, RequiresUnAuthForCMS } from "./modules/cms-pages/routes";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

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
