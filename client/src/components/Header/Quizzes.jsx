import React from 'react'
import Navbar from './Navbar'


const Quizzes = () => {

  return (
    <>
        <Navbar/>
        
        <div className='navBox'>
                <div>
                    <p className='schedule'>Quizzes</p>
                </div>
                <div>
                    <button className='button'>BOOKMARKS</button>
                    <button className='button'>REFER & EARN</button>
                </div>

        </div>
    </>
  )
}

export default Quizzes