import { UserRoles } from "@/common/types";
import { ISidebar } from "@/modules/dashboard/types";
import {
  CustomerSidebarElements,
  OwnerSidebarElements,
} from "@/modules/dashboard/types/constants";
import { getAuth } from "@/redux/slices/authSlice";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const useSidebar = () => {
  const [sidebarElements, setSidebarElements] = useState<ISidebar[]>(
    CustomerSidebarElements
  );
  const { userData } = useSelector(getAuth);

  useEffect(() => {
    if (userData?.role === UserRoles.Owner) {
      setSidebarElements(OwnerSidebarElements);
    } else {
      setSidebarElements(CustomerSidebarElements);
    }
  }, [userData?.role]);

  return { sidebarElements };
};

export default useSidebar;
