import {
     createBrowserRouter,
     
   } from "react-router-dom";
import Layout from "../layout/Layout";
import Home from "../../pages/Home/Home";
import FnAnimation from "../../pages/FnAnimation/FnAnimation";

   const router = createBrowserRouter([
     {
       path: "/",
       element: <Layout></Layout>,
       children:[
          {
               path: '/',
               element: <Home></Home>
          },
          {
            path: '/fnAnimation',
            element: <FnAnimation></FnAnimation>
          }
       ]
     }
   ]);


export default router