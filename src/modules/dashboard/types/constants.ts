import {
  AppointmentsIcon,
  CarIcon,
  CustomerSupportIcon,
  GarageIcon,
  HomeIcon,
  ServicesIcon,
  SettingsIcon,
} from "@/assets/Svg";
import {
  CustomerDashboardRoutesPath,
  DashboardRoutesPath,
  ISidebar,
  OwnerDashboardRoutesPath,
} from ".";

export const OwnerSidebarElements: ISidebar[] = [
  {
    name: "Home",
    path: DashboardRoutesPath.Dashboard,
    icon: HomeIcon,
  },
  {
    name: "Garage",
    path: OwnerDashboardRoutesPath.Garage,
    icon: GarageIcon,
  },
  {
    name: "Services",
    path: OwnerDashboardRoutesPath.Services,
    icon: ServicesIcon,
  },
  {
    name: "Appointments",
    path: OwnerDashboardRoutesPath.Appointments,
    icon: AppointmentsIcon,
  },
  {
    name: "Support",
    path: OwnerDashboardRoutesPath.CustomerSupport,
    icon: CustomerSupportIcon,
  },
  {
    name: "Settings",
    path: DashboardRoutesPath.Settings,
    icon: SettingsIcon,
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
