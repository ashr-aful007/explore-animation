import {
     createBrowserRouter,
     
   } from "react-router-dom";
import Layout from "../layout/Layout";
import Home from "../../pages/Home/Home";
import FnAnimation from "../../pages/FnAnimation/FnAnimation";
import ButtonAnimation from "../../pages/Button-Animation/ButtonAnimation";
import KeyFreamAnimation from "../../pages/KeyFreamAnimation/KeyFreamAnimation";
import ClipPathAnimation from "../../pages/ClipPathAnimation/ClipPathAnimation";
import AnimationWithJs from "../../pages/AnimationWIthJS/AnimationWithJs";

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
          },
          {
            path: '/keyFreamAnimation',
            element: <KeyFreamAnimation></KeyFreamAnimation>
          },
          {
            path: '/clipPathAnimation',
            element: <ClipPathAnimation></ClipPathAnimation>
          },
          {
            path: '/animationWithJs',
            element: <AnimationWithJs></AnimationWithJs>
          }
       ]
     }
   ]);


export default router