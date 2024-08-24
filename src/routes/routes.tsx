import { createBrowserRouter } from "react-router-dom";
import { routeGenerator } from "../utils/routeGenerator";
import AdminLayout from "../components/layout/AdminLayout";
import { admindashboardPaths } from "./admin.dashboard.routes";
import { userdashboardPaths } from "./user.dashboard.routes";
import Register from "../pages/Login/Register/Register";
import App from "../App";
import { navbarPaths } from "./main.routes";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: routeGenerator(navbarPaths),
  },

  {
    path: "/user",
    element: <AdminLayout />,
    children: routeGenerator(userdashboardPaths),
  },
  {
    path: "/admin",
    element: <AdminLayout />,
    children: routeGenerator(admindashboardPaths),
  },
  {
    path: "register",
    element: <Register />,
  },
]);

export default router;
