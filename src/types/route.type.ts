import { ReactNode } from "react";
import { IconType } from "react-icons";
export type TRoute = {
  path: string;
  element: ReactNode;
  children?: TRoute[];
};

export type TSidebarItem = {
      key: string;
      label: ReactNode;
      children?: TSidebarItem[];
    }| undefined;


export type TUserPath = {
  name?: string;
  path?: string;
  element?: React.ReactNode;
  icon?: IconType; 
  children?: TUserPath[];
};

