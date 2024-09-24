import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../components/Home/Home";
import Account from "../components/Profiles/Account";
import Courses from "../components/Pages/Courses/Courses";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main/>,
    children:[
      {
        path:"/",
        element:<Home/>
      },
      {
        path:"/account",
        element:<Account/>
      },
      {
        path:"/course",
        element:<Courses/>
      }
    ]
  },
]);
