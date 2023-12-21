import { createBrowserRouter } from "react-router-dom";
import Mainpage from "../Mainpage";
import Error from "../Error/Error";
import Home from "../Home.jsx/Home";

import Signin from "../Register/Signin";
import Signup from "../Register/Signup";

import PrivateRepo from "../PrivateRepo/PrivateRepo";
import Daseboard from "../Daseboard.jsx/Daseboard";
import Userhome from "../Daseboard.jsx/User/Userhome";
import Addtask from "../Daseboard.jsx/User/Addtask";
import My_Task from "../Daseboard.jsx/User/My_Task";
import UserType from "../Daseboard.jsx/User/UserType";


const Mybrowser = createBrowserRouter([
  {
    path: "/",
    element: <Mainpage></Mainpage>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
   
      {
        path: '/login',
        element: <Signin></Signin>
      },
      {
        path: '/signup',
        element: <Signup></Signup>
      },
    
      {
        path: '/daseboard',
        element: <PrivateRepo><Daseboard></Daseboard></PrivateRepo>,
        children: [
          {
            path:'addtask',
            element:<Addtask></Addtask>
          },
          {
            path:'task',
            element:<My_Task></My_Task>
          },
          {
            path:'usert',
            element:<UserType></UserType>
          }
         
        ]
      }




    ]
  },
]);


export { Mybrowser }