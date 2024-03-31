import React from 'react'
import Sidenav from './Template/Sidenav'
import Topnav from './Template/Topnav'

const Home = () => {
  // 1.whenver this home page opens title will be home
 document.title="Home"

  return (
    <>
    {/* keep this in flex to get in row side by side */}
    <Sidenav/>
    <div className='w-[80%] h-full'>
      {/* it should be inside div because it is part of home sectio which is in top */}
    <Topnav/>
    </div>
   
    
    </>
  )
}

export default Home
