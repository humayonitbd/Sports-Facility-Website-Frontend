// import { ReactNode } from "react";
// import { IconType } from "react-icons";

//  import { MenuProps } from "antd";


// // // export type TSidebarItem = MenuProps["items"][number]; 

// export interface TSidebarItem extends Required<MenuProps>['items'][number] {
//   key: string;
//   label: React.ReactNode;
//   children?: TSidebarItem[];
// }

// export type TRoute = {
//   path: string;
//   element: ReactNode;
//   children?: TRoute[];
// };

// // export type TSidebarItem = |{
// //       key: string;
// //       label: ReactNode;
// //       children?: TSidebarItem[];
// //     } | undefined;

    
// export type TUserPath = {
//   name?: string;
//   path?: string;
//   element?: React.ReactNode;
//   icon?: IconType; 
//   children?: TUserPath[];
// };


import { ReactNode } from "react";
import { IconType } from "react-icons";
// import { MenuProps } from "antd";

// Defining the type for sidebar items, including nested items
export interface TSidebarItem {
  key: string;
  label: ReactNode;
  children?: TSidebarItem[];
}

// Defining the route type
export type TRoute = {
  path: string;
  element: ReactNode;
  children?: TRoute[];
};

// Defining user paths including potential icon usage
export type TUserPath = {
  name?: string;
  path?: string;
  element?: React.ReactNode;
  icon?: IconType;
  children?: TUserPath[];
};
