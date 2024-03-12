import {
     createBrowserRouter,
     
   } from "react-router-dom";
import Layout from "../layout/Layout";
import Home from "../../pages/Home/Home";
import FnAnimation from "../../pages/FnAnimation/FnAnimation";
import ButtonAnimation from "../../pages/Button-Animation/ButtonAnimation";

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
          },
          {
            path: '/btnAnimation',
            element: <ButtonAnimation></ButtonAnimation>
          }
       ]
     }
   ]);


export default router