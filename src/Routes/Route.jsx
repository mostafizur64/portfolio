import React from 'react';
import {
    createBrowserRouter,
    
  } from "react-router-dom";
import Main from '../Layouts/Main';
import Home from '../pages/Home/Home';
import MyProjects from '../pages/My-projects/MyProjects';
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
            path:'/',
            element:<Home></Home>
        },
        
      ]
    },
  ]);

export default router;