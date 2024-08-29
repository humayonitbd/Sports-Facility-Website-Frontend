// import { NavLink } from "react-router-dom";
// import { TSidebarItem, TUserPath } from "../types/route.type";
// import { MdSpaceDashboard } from "react-icons/md";
// export const dbSideItemGenerator = (items: TUserPath[], role?: string) => {
//   const navbarItems = items.reduce((acc: TSidebarItem[], item) => {
//     if (item.path && item.name) {
//       acc.push({
//         key: item.name,
//         label: (
//           <NavLink style={{ fontSize: "18px" }} to={`/${role}/${item.path}`}>
//             <MdSpaceDashboard
//               style={{ fontSize: "18px", marginRight: "2px" }}
//             />
//             {item.name}
//           </NavLink>
//         ),
//       });
//     }

//     if (item.children) {
//       acc.push({
//         key: `${item.name}`,
//         label: item.name,
//         children: item?.children?.map((child) => {
//           if (child.name) {
//             return {
//               key: child.name,
//               label: (
//                 <NavLink  to={`/${role}/${child.path}`}>{child.name}</NavLink>
//               ),
//             };
//           }
//         }),
//       });
//     }

//     return acc;
//   }, []);

//   return navbarItems;
// };



// import { NavLink } from "react-router-dom";
// import { TSidebarItem, TUserPath } from "../types/route.type";

// export const dbSideItemGenerator = (items: TUserPath[], role?: string) => {
//   const navbarItems = items.reduce((acc: TSidebarItem[], item) => {
//     if (item.path && item.name) {
//       acc.push({
//         key: item.name,
//         label: (
//           <NavLink style={{ fontSize: "18px" }} to={`/${role}/${item.path}`}>
//             {item.icon && (
//               <item.icon style={{ fontSize: "18px", marginRight: "8px" }} />
//             )}
//             {item.name}
//           </NavLink>
//         ),
//       });
//     }

//     if (item.children) {
//       acc.push({
//         key: `${item.name}`,
//         label: item.name,
//         children: item.children.map((child) => {
//           if (child.name) {
//             return {
//               key: child.name,
//               label: (
//                 <NavLink
//                   style={{ fontSize: "18px", color:"white" }}
//                   to={`/${role}/${child.path}`}
//                 >
//                   {child.icon && (
//                     <child.icon
//                       style={{ fontSize: "18px", marginRight: "8px" }}
//                     />
//                   )}
//                   {child.name}
//                 </NavLink>
//               ),
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

export const dbSideItemGenerator = (
  items: TUserPath[],
  role?: string
): TSidebarItem[] => {
  return items.reduce((acc: TSidebarItem[], item) => {
    // Add top-level items
    if (item.path && item.name) {
      acc.push({
        key: item.path, // Use path for a unique key
        label: (
          <NavLink style={{ fontSize: "18px" }} to={`/${role}/${item.path}`}>
            {item.icon && (
              <item.icon style={{ fontSize: "18px", marginRight: "8px" }} />
            )}
            {item.name}
          </NavLink>
        ),
      });
    }

    // Add child items
    if (item.children) {
      acc.push({
        key: `${item.path}-parent`, // Use path for a unique parent key
        label: item.name || "", // Default to empty string if name is undefined
        children: item.children
          .map((child) => {
            // Ensure both path and name are present
            if (child.path && child.name) {
              return {
                key: child.path, // Use path for a unique key
                label: (
                  <NavLink
                    style={{ fontSize: "18px", color: "white" }}
                    to={`/${role}/${child.path}`}
                  >
                    {child.icon && (
                      <child.icon
                        style={{ fontSize: "18px", marginRight: "8px" }}
                      />
                    )}
                    {child.name}
                  </NavLink>
                ),
              } as TSidebarItem; // Type assertion to TSidebarItem
            }
            return null; // Return null for invalid children
          })
          .filter((item): item is TSidebarItem => item !== null), // Filter out nulls
      });
    }

    return acc;
  }, []);
};
