import Dashboard from "../pages/Dashboard/Admin/Dashboard/Dashboard";
import Facility from "../pages/Dashboard/Admin/Facility/Facility";

export const admindashboardPaths = [
  {
    index: true, // Default path for the dashboard
    element: <Dashboard />,
  },
  {
    name: "Dashboard",
    path: "dashboard", // Default path for the dashboard
    element: <Dashboard />,
  },
  {
    name: "Facility",
    path: "facility", // Default path for the dashboard
    element: <Facility />,
  },
  {
    name: "Admin Management",
    children: [
      {
        name: "Create Student",
        path: "facility",
        element: <Facility />,
      },
    ],
  },
];
