// import { NavLink } from "react-router-dom";
// import { TSidebarItem, TUserPath } from "../types/route.type";


// export const navbarItemGenerator = (items: TUserPath[]) => {
//   const navbarItems = items.reduce((acc: TSidebarItem[], item) => {
//     if (item.path && item.name) {
//       acc.push({
//         key: item.name,
//         label: <NavLink to={`/${item.path}`}>{item.name}</NavLink>,
//       });
//     }

//     if (item.children) {
//       acc.push({
//         key: `${item.name}-parent`,
//         label: item.name,
//         children: item?.children?.map((child) => {
//           if (child.name) {
//             return {
//               key: `${item.name}-${child.name}`,
//               label: <NavLink to={`/${child.path}`}>{child.name}</NavLink>,
//             };
//           }
//         }),
//       });
//     }

//     return acc;
//   }, []);

//   return navbarItems;
// };



import { NavLink } from "react-router-dom";
import { TSidebarItem, TUserPath } from "../types/route.type";

export const navbarItemGenerator = (items: TUserPath[]): TSidebarItem[] => {
  return items.reduce((acc: TSidebarItem[], item) => {
    if (item.path && item.name) {
      acc.push({
        key: item.path,
        label: <NavLink to={`/${item.path}`}>{item.name}</NavLink>,
      });
    }

    if (item.children) {
      acc.push({
        key: `${item.path}-parent`,
        label: item.name,
        children: item?.children
          .map((child) => {
            if (child?.path && child?.name) {
              return {
                key: `${item.path}-${child.path}`,
                label: <NavLink to={`/${child.path}`}>{child.name}</NavLink>,
              };
            }
            return null; // Ensure we handle cases where `child` might not have path or name
          })
          .filter((item) => item !== null) as TSidebarItem[], // Filter out nulls and assert type
      });
    }

    return acc;
  }, []);
};
