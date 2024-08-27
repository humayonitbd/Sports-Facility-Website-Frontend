
import FacilityBooking from "../pages/Dashboard/User/FacilityBooking/FacilityBooking";
import UserDashboard from "../pages/Dashboard/User/UserDashboard/UserDashboard";
import { MdSpaceDashboard } from "react-icons/md";
import { GrCompliance } from "react-icons/gr";

export const userdashboardPaths = [
  {
    index: true,
    element: <UserDashboard />,
  },
  {
    name: "Dashboard",
    path: "dashboard",
    element: <UserDashboard />,
    icon: MdSpaceDashboard,
  },
  {
    name: "Booking-Facility",
    path: "booking-facility",
    element: <FacilityBooking />,
    icon: GrCompliance,
  },
];
