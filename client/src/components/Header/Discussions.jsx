import React from 'react'
import Navbar from './Navbar'


const Discussions = () => {

  return (
    <>
        <Navbar/>
        
        <div className='navBox'>
                <div>
                    <p className='schedule'>Discussions</p>
                </div>
                <div>
                    <button className='button'>BOOKMARKS</button>
                    <button className='button'>REFER & EARN</button>
                </div>

        </div>
    </>
  )
}

export default Discussions