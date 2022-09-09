import React from 'react'
import { useState } from 'react'
import axios from 'axios'

const Lectures = () => {

    const [lecture, setLecture] = useState(
        {
            name:"",
            creator:"",
            topic:"",
            date:"",
            time:"",
            link:""
        }
    )

    const handleChange = (e) => {
        const {id, value} = e.target;
        setLecture({...lecture, [id]:value})
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(lecture)

        axios.post('https://lms-app-123.herokuapp.com/lecture', lecture).then((res)=>{
         console.log("res : " + res.data)
          alert('Lecture added');
          e.target.reset();
        }).catch((e)=>{
          console.log(e)
        })
    }


  return (
    <>
        <div className='mainBox'>
            <h1 className='nameHead'>Lectures</h1>
              <form onSubmit={handleSubmit}>

                <div className='divideInput'>
                  <div><label>Topic Name :</label></div>
                  <div><input type="text" id='name' className='inpBox' onInput={handleChange} required/></div>
                </div>

                <div className='divideInput'> 
                  <div><label>Creator Name:</label></div>
                  <div><input type="text" id='creator' className='inpBox'  onInput={handleChange} required /></div>
                </div>
                <div className='divideInput'>
                  <div><label>Topic ( Coding / DSA )</label></div>
                  <div><input type="text" id='topic' className='inpBox'  onInput={handleChange} required/></div>
                </div>
                <div className='divideInput'>
                  <div><label>Date:</label></div>
                  <div><input type="Date" id='date' className='inpBox'  onInput={handleChange} required /></div>
                </div>
                <div className='divideInput'>
                  <div><label>Time:</label></div>
                  <div><input type="time" id='time' className='inpBox' onInput={handleChange} required /></div>
                </div>
                <div className='divideInput'>
                  <div><label>Link:</label></div>
                  <div><input type="link" id='link' className='inpBox'  onInput={handleChange} required/></div>
                </div>

                <input type="submit" value="Submit" className='submitBtn'  />

  
              </form>
            </div>
    </>
  )
}

export default Lectures