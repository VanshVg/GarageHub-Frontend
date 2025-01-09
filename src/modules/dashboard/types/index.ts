export enum DashboardRoutesPath {
  Dashboard = "/dashboard",
  Settings = "/settings",
}

export enum CustomerDashboardRoutesPath {
  Garages = "/garages",
  Vehicle = "/vehicles",
  Appointments = "/appointments",
}

export enum OwnerDashboardRoutesPath {
  Garage = "/garage",
  Appointments = "/appointments",
  Services = "/garage-services",
  CustomerSupport = "/customer-support",
}

export interface ISidebar {
  name: string;
  path: string;
  icon?: ({
    className,
    color,
  }: {
    className?: string;
    color?: string;
  }) => JSX.Element;
}

export interface ISidebarElementProps {
  element: ISidebar;
  onClickHandler?: () => void;
}
