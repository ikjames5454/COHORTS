import React from 'react'
import Nav from '../component/Nav/Nav'
import { Outlet } from 'react-router-dom'
import Hero from '../component/Hero/Hero'

const Layout = () => {
  return (
    <>
    <Nav/>
    <Hero/>
    <Outlet/>
    </>
  )
}

export default Layout