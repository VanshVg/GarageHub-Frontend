import React, { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { CmsRoutesPath } from "./types";
import { IRoute } from "@/types";

const CmsNavbar = React.lazy(() => import("@/modules/cms-pages/components/CmsNavbar"));
const HomePage = React.lazy(() => import("@/modules/cms-pages/pages/home/Index"));
const AboutUsPage = React.lazy(() => import("@/modules/cms-pages/pages/about-us/Index"));
const ServicesPage = React.lazy(() => import("@/modules/cms-pages/pages/services/Index"));
const ContactUsPage = React.lazy(() => import("@/modules/cms-pages/pages/contact-us/Index"));

const applySuspense = (routes: IRoute[]): IRoute[] => {
  return routes.map((route: IRoute) => ({
    ...route,
    element: <Suspense>{route.element}</Suspense>,
  }));
};

export const RequiresUnAuthForCMS = () => {
  return (
    <>
      <Suspense>
        <CmsNavbar />
        <Outlet />
      </Suspense>
    </>
  );
};

export const CMSRoutes = applySuspense([
  {
    path: CmsRoutesPath.Home,
    element: <HomePage />,
  },
  {
    path: CmsRoutesPath.AboutUs,
    element: <AboutUsPage />,
  },
  {
    path: CmsRoutesPath.Services,
    element: <ServicesPage />,
  },
  {
    path: CmsRoutesPath.ContactUs,
    element: <ContactUsPage />,
  },
]);
