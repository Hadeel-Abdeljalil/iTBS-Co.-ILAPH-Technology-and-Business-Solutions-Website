import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import Home from '../Components/web/Home/Home';
import WebLayout from './WebLayout';

import Oracle from '../Components/web/Services/Oracle';
import Msql from '../Components/web/Services/Msql';
import Data from '../Components/web/Services/Data';
import Cloud from '../Components/web/Services/Cloud';
import Ebusiness from '../Components/web/Services/Ebusiness';
import Security from '../Components/web/Services/Security';
import Software from '../Components/web/Services/Software';
import Solutions from '../Components/web/Services/Solutions';
import Web from '../Components/web/Services/Web';

export const router =createBrowserRouter([
{
    path:"/",
    element:<WebLayout/>,
    children:[
            {
                path:'/',
                element: <Home/>
            },
            {
                path:'Oracle',
                element: <Oracle/>
            },
            {
                path:'Msql',
                element: <Msql/>
            },
            {
                path:'Data',
                element: <Data/>
            },
            {
                path:'Cloud',
                element: <Cloud/>
            },
            {
                path:'Ebusiness',
                element: <Ebusiness/>
            },
            {
                path:'Security',
                element: <Security/>
            },
            {
                path:'Software',
                element: <Software/>
            },
            {
                path:'Solutions',
                element: <Solutions/>
            },
            {
                path: 'Web',
                element: <Web/>
            }
    ]
},

]);

