import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Home/Home/Home";
import Contact from "../Home/Contact/Contact";
import Login from "../Home/Login/Login";
import SignUp from "../Home/SignUp/SignUp";
import Blog from "../Home/Blog/Blog";
import Testimonial from "../Home/Testimonial/Testimonial";
import NotFound from "../Layout/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        path: "/testimonial",
        element: <Testimonial></Testimonial>,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound></NotFound>,
  },
]);
