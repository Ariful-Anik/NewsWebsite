import React from 'react';
import { createBrowserRouter, Navigate } from 'react-router-dom';
import HomeLayout from '../layouts/HomeLayout';

const router = createBrowserRouter([
    {
      path: "/",
      element: <HomeLayout></HomeLayout>,
      children:[
        {
            path:'/',
            element: <Navigate to='/category/01'></Navigate>
        },
        {
            path:'/category/:id',
            element: <h2>cate</h2>,
            loader: ({params})=> fetch(`https://openapi.programming-hero.com/api/news/category/${params.id}`)

        }
      ]
    },
    {
        path:"/news",
        element: <h1>News</h1>,
    },
    {
        path: "/auth",
        element: <h1>login</h1>
    },
    {
        path: "*",
        element: <h1>Error</h1>,
    }
  ]);

  export default router;