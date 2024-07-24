import React from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.js'
import { RouterProvider } from "react-router-dom";
import {router} from './Layout/Router';


export default function App() {
  return (
    <RouterProvider router={router} />
)
}
