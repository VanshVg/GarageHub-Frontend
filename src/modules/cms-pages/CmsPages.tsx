import { clearFormData } from "@/redux/slices/signupSlice";
import React, { Suspense, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Outlet } from "react-router-dom";

const CmsNavbar = React.lazy(
  () => import("@/modules/cms-pages/components/CmsNavbar")
);

const CmsPages = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(clearFormData());
  }, []);

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
