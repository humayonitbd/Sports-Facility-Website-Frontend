import Dashboard from "../pages/Dashboard/Admin/Dashboard/Dashboard";

export const userdashboardPaths = [
  {
    index: true, // Default path for the dashboard
    element: <Dashboard />,
  },
  {
    name: "Dashboard",
    path: "dashboard",
    element: <Dashboard />,
  },
  {
    name: "User Management",
    children: [
      {
        name: "Create Student",
        path: "dashboard",
        element: <Dashboard />,
      },
    ],
  },
];
