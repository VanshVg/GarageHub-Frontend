import { Suspense, useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { IRoute } from "./common/types";

import CmsPages from "./modules/cms-pages/CmsPages";
import Auth from "./modules/auth/Auth";
import { CMSRoutes } from "./modules/cms-pages/routes";
import { AuthRoutes } from "./modules/auth/routes";
import { AuthRoutesPath } from "./modules/auth/types";
import { useDispatch } from "react-redux";
import { clearFormData } from "./redux/slices/signupSlice";

const applySuspense = (routes: IRoute[]): IRoute[] => {
  return routes.map((route: IRoute) => ({
    ...route,
    element: <Suspense>{route.element}</Suspense>,
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

  const router = createBrowserRouter([...routesForCMS, ...routesForAuth]);

  return <RouterProvider router={router} />;
};

export default RouterComponent;
