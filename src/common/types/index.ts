import { MouseEvent, ReactNode } from "react";
import { Control, FieldErrors, FieldValues, Path } from "react-hook-form";
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

export type FormControlProp<T extends FieldValues = FieldValues> = Control<T>;

export type IInputProps<T extends FieldValues> = {
  name: Path<T>;
  className?: string;
  inputEndIcon?: ReactNode;
  InputLeftIcon?: ReactNode;
  control?: FormControlProp<T>;
  errors?: FieldErrors;
  placeholder?: string;
  type?: string;
  autoComplete?: string;
  textLabelName?: string;
  isDisabled?: boolean;
  labelColor?: string;
};

export type ITextAreaProps<T extends FieldValues> = {
  name: Path<T>;
  className?: string;
  inputEndIcon?: ReactNode;
  InputLeftIcon?: ReactNode;
  control?: FormControlProp<T>;
  errors?: FieldErrors;
  placeholder?: string;
  autoComplete?: string;
  textLabelName?: string;
  isDisabled?: boolean;
};

export enum UserRoles {
  Customer = "Customer",
  Owner = "Owner",
}
