import ProtectedRoute from "../components/layout/ProtectedRoute";
import About from "../pages/About/About";
import BookingFacility from "../pages/BookingFacility/BookingFacility";
import Contact from "../pages/Contact/Contact";
import Facilities from "../pages/Facilities/Facilities";
import FeaturedFacilityDetails from "../pages/FeaturedFacilities/FeaturedFacilityDetails";
import LandingPage from "../pages/LandingPage/LandingPage/LandingPage";
import Login from "../pages/Login/Login/Login";
import UpcomingEventsDetails from "../pages/UpcomingEventsDetails/UpcomingEventsDetails";



// const user = {
//   role: "user",
// };

export const navbarPaths = [
  {
    path: "/",
    element: <LandingPage />,
  },

  {
    path: "login",
    element: <Login />,
  },
  {
    name: "Facilities",
    path: "facilities",
    element: <Facilities />,
  },
  {
    path: "facilities/:id",
    element: <FeaturedFacilityDetails />,
  },
  {
    path: "booking/facility/:id",
    element: (
      <ProtectedRoute role="user">
        <BookingFacility />
      </ProtectedRoute>
    ),
  },
  {
    path: "upcomingEventDetails/:id",
    element: <UpcomingEventsDetails />,
  },
  {
    name: "About",
    path: "about",
    element: <About />,
  },
  {
    name: "Contact",
    path: "contact",
    element: <Contact />,
  },

  // {
  //   name: "User Management",
  //   children: [
  //     {
  //       name: "Create Student",
  //       path: "create-student",
  //       // element: <CreateStudent />,
  //     },
  //   ],
  // },
];
