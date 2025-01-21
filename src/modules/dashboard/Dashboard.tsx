import { getAuth } from "@/redux/slices/authSlice";
import { useSelector } from "react-redux";

import { UserRoles } from "@/common/types";

import CustomerDashboard from "./pages/customer-dashboard/Index";
import OwnerDashboard from "./pages/owner-dashboard/Index";

const Dashboard = () => {
  const { userData } = useSelector(getAuth);

  if (userData?.role === UserRoles.Customer) {
    return <CustomerDashboard />;
  } else {
    return <OwnerDashboard />;
  }
};

export default Dashboard;
