import React from 'react'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from './App'
import Retrive from './Retrive';


const router = createBrowserRouter([
    {
        path : "/",
        element : <App />
    },
    {
        path : "/retrive",
        element : <Retrive />
    }
]);



function Rout() {
  return <RouterProvider router={router} />
}

export default Rout