import React from 'react'
import Header from "../src/component/Header/Header"
import Footer from "../src/component/footer/Footer"
import { Outlet } from 'react-router-dom'

function Layout() {
  return (
    <>
    <Header></Header>
    <Outlet></Outlet>
    <Footer></Footer>
    
    </>
  )
}

export default Layout
