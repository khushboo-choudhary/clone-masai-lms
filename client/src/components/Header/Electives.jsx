import React from 'react'
import Navbar from './Navbar'


const Electives = () => {


  return (
    <>
        <Navbar/>
        
        <div className='navBox'>
                <div>
                    <p className='schedule'>Electives</p>
                </div>
                <div>
                    <button className='button'>BOOKMARKS</button>
                    <button className='button'>REFER & EARN</button>
                </div>

        </div>
    </>
  )
}

export default Electives