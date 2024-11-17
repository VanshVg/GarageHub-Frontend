import { MouseEvent, ReactNode } from "react";
import { RouteObject } from "react-router-dom";

export type IRoute = {
  path?: string;
  element: JSX.Element;
  children?: RouteObject[];
};

export enum btnShowType {
  Primary = "primary",
  Teal = "teal",
  White = "white",
}

export interface IButtonProps {
  btnName: string;
  type?: "button" | "submit" | "reset";
  showType?: btnShowType;
  btnClass?: string;
  onClickHandler?: (e: MouseEvent<HTMLElement>) => void;
  isLoading?: boolean;
  loaderClass?: string;
  disabled?: boolean;
  BtnIconRight?: ReactNode;
  BtnIconLeft?: ReactNode;
  btnEndIcon?: ReactNode;
}
