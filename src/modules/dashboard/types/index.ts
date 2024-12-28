export enum DashboardRoutesPath {
  Dashboard = "/dashboard",
}

export interface ISidebar {
  name: string;
  path?: string;
  icon?: ({ className }: { className?: string }) => JSX.Element;
}
