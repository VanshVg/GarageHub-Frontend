import { RouteObject } from "react-router-dom";

export type IRoute = {
  path?: string;
  element: JSX.Element;
  children?: RouteObject[];
};
