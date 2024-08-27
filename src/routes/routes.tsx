import { createBrowserRouter } from "react-router-dom";
import { routeGenerator } from "../utils/routeGenerator";
import AdminLayout from "../components/layout/AdminLayout";
import { admindashboardPaths } from "./admin.dashboard.routes";
import { userdashboardPaths } from "./user.dashboard.routes";
import Register from "../pages/Login/Register/Register";
import App from "../App";
import { navbarPaths } from "./main.routes";
import ErrorPage from "../pages/SharedPage/ErrorPage/ErrorPage";
import ProtectedRoute from "../components/layout/ProtectedRoute";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: routeGenerator(navbarPaths),
  },

  {
    path: "/user",
    element: (
      <ProtectedRoute role="user">
        <AdminLayout />
      </ProtectedRoute>
    ),
    children: routeGenerator(userdashboardPaths),
  },
  {
    path: "/admin",
    element: (
      <ProtectedRoute role="admin">
        <AdminLayout />
      </ProtectedRoute>
    ),
    children: routeGenerator(admindashboardPaths),
  },
  {
    path: "register",
    element: <Register />,
  },
]);

export default router;
