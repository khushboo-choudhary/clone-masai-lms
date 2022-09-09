import React from 'react'
import Navbar from './Header/Navbar'

const LandingPage = () => {
  return (
    <>
        <Navbar/>
        
        <div className='navBox'>
                <div>
                    <p className='schedule'>Today's Schedule</p>
                </div>
                <div>
                    <button className='button'>BOOKMARKS</button>
                    <button className='button'>REFER & EARN</button>
                </div>

        </div>
    </>
  )
}

export default LandingPage