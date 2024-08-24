import { NavLink } from "react-router-dom";
import { TSidebarItem, TUserPath } from "../types/route.type";


export const navbarItemGenerator = (items: TUserPath[]) => {
  const navbarItems = items.reduce((acc: TSidebarItem[], item) => {
    if (item.path && item.name) {
      acc.push({
        key: item.name,
        label: <NavLink to={`/${item.path}`}>{item.name}</NavLink>,
      });
    }

    if (item.children && item.children.length > 0) {
      acc.push({
        key: `${item.name}-parent`,
        label: item.name,
        children: item?.children?.map((child) => {
          if (child.name) {
            return {
              key: `${item.name}-${child.name}`,
              label: <NavLink to={`/${child.path}`}>{child.name}</NavLink>,
            };
          }
        }),
      });
    }

    return acc;
  }, []);

  return navbarItems;
};
