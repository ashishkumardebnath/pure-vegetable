import "./App.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./page/Routes/Routes";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import AnimCursor from "./page/components/AnimCursor/AnimCursor";

function App() {
  useEffect(() => {
    Aos.init({
      duration: 1200,
      easing: "ease-in-out",
    });
  });

  return (
    <div className=" max-w-screen-xl mx-auto ">
      <AnimCursor></AnimCursor>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
