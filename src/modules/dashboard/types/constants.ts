import {
  AppointmentsIcon,
  CarIcon,
  CustomerSupportIcon,
  GarageIcon,
  HomeIcon,
  InventoryIcon,
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
    name: "Inventory",
    path: OwnerDashboardRoutesPath.Inventory,
    icon: InventoryIcon,
  },
  {
    name: "Settings",
    path: DashboardRoutesPath.Settings,
    icon: SettingsIcon,
  },
  {
    name: "Customer Support",
    path: OwnerDashboardRoutesPath.CustomerSupport,
    icon: CustomerSupportIcon,
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
