import React from 'react'
import Navbar from '../Navbar'
import { Outlet } from 'react-router-dom'

export default function RootLayout() {
  return (
    <div className='Root'>
        <Navbar />

        <Outlet />
    </div>
  )
}
