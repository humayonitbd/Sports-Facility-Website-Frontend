import AdminDashboard from "../pages/Dashboard/Admin/AdminDashboard/AdminDashboard";
import AllBookings from "../pages/Dashboard/Admin/BookingManagement/AllBookings/AllBookings";
import CreateFacility from "../pages/Dashboard/Admin/FacilityManagement/CreateFacility/CreateFacility";
import Facility from "../pages/Dashboard/Admin/FacilityManagement/Facility/Facility";
import CreateAdmin from "../pages/Dashboard/Admin/UserManagement/CreateAdmin/CreateAdmin";
import { MdSpaceDashboard } from "react-icons/md";

export const admindashboardPaths = [
  {
    index: true,
    element: <AdminDashboard />,
  },
  {
    name: "Dashboard",
    path: "dashboard",
    element: <AdminDashboard />,
    icon: MdSpaceDashboard,
  },

  {
    name: "Facility Management",
    children: [
      {
        name: "Create Facility",
        path: "create-facility",
        element: <CreateFacility />,
      },
      {
        name: "Facilities",
        path: "facilities",
        element: <Facility />,
      },
    ],
  },
  {
    name: "Booking Management",
    children: [
      {
        name: "Bookings",
        path: "bookings",
        element: <AllBookings />,
      },
    ],
  },
  {
    name: "Users Management",
    children: [
      {
        name: "Create Admin",
        path: "create-admin",
        element: <CreateAdmin />,
      },
    ],
  },
];
