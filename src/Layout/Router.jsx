import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import Home from '../Components/web/Home/Home';
import WebLayout from './WebLayout';

export const router =createBrowserRouter([
{
    path:"/",
    element:<WebLayout/>,
    children:[
        {
            index: true,
            element: <Home/>
        },
        
    ]
}
]);

