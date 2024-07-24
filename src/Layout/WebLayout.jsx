import React from 'react'
import Navbar from '../Components/Shared/Navbar/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../Components/Shared/Footer/Footer'

export default function WebLayout() {
  return (
    <>
    <Navbar/>
    <Outlet/>
    <Footer/>
    </>
  )
}
