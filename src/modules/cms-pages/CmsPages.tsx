import React, { Suspense } from "react";
import { Outlet } from "react-router-dom";

const CmsNavbar = React.lazy(
  () => import("@/modules/cms-pages/components/CmsNavbar")
);

const CmsPages = () => {
  return (
    <>
      <Suspense>
        <CmsNavbar />
        <Outlet />
      </Suspense>
    </>
  );
};

export default CmsPages;
