import {
  AppointmentsIcon,
  CarIcon,
  GarageIcon,
  HomeIcon,
  SettingsIcon,
} from "@/assets/Svg";
import { CustomerDashboardRoutesPath, DashboardRoutesPath, ISidebar } from ".";

export const OwnerSidebarElements: ISidebar[] = [
  {
    name: "Home",
    path: DashboardRoutesPath.Dashboard,
  },
  {
    name: "Home",
    path: DashboardRoutesPath.Dashboard,
  },
  {
    name: "Home",
    path: DashboardRoutesPath.Dashboard,
  },
];

export const CustomerSidebarElements: ISidebar[] = [
  {
    name: "Home",
    path: DashboardRoutesPath.Dashboard,
    icon: HomeIcon,
  },
  {
    name: "Garages",
    path: CustomerDashboardRoutesPath.Garages,
    icon: GarageIcon,
  },
  {
    name: "Vehicles",
    path: CustomerDashboardRoutesPath.Vehicle,
    icon: CarIcon,
  },
  {
    name: "Appointments",
    path: CustomerDashboardRoutesPath.Appointments,
    icon: AppointmentsIcon,
  },
  {
    name: "Settings",
    path: DashboardRoutesPath.Settings,
    icon: SettingsIcon,
  },
];
