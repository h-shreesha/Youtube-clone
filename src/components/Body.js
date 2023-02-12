import React from 'react'
import MainContainer from './MainContainer'
import SideBar from './Sidebar'

const Body = () => {
  return (
    <div className='flex'>
        <SideBar/>
        <MainContainer/>
    </div>
  )
}

export default Body