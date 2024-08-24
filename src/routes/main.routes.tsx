import About from "../pages/About/About";
import Contact from "../pages/Contact/Contact";
import Facilities from "../pages/Facilities/Facilities";
import LandingPage from "../pages/LandingPage/LandingPage/LandingPage";
import Login from "../pages/Login/Login/Login";



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
