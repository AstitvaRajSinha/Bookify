import React from 'react'
import SideBar from './SideBar'
import { Outlet } from 'react-router-dom'
const DashBoardLayout = () => {
  return (
    <div className='flex'>
        <SideBar />
        <Outlet />
    </div>
  )
}

export default DashBoardLayout