import axios from 'axios'
import React, { useState } from 'react'


const Assignments = () => {

  const [assignment, setAssignment] = useState(
    {
        name:"",
        creator:"",
        type:"",
        date:"",
        time:"",
        link:"",
        password:""
    }
)

const handleChange = (e) => {
  e.preventDefault();
    const {id, value} = e.target
   
    setAssignment({...assignment, [id]:value})
}

const handleSubmit = (e) => {
    e.preventDefault()
    console.log(assignment)
    
    axios.post('https://lms-app-123.herokuapp.com/assignment', assignment).then((res)=>{
     
      alert('Assignment added');
      e.target.reset();
      
    }).catch((e)=>{
      console.log(e.message)
    })
 
}


  return (
    <>
        <div className='mainBox'>
          <h1 className='nameHead'>Assignments</h1>
              <form onSubmit={handleSubmit}>

                <div className='divideInput'>
                  <div><label>Name :</label></div>
                  <div><input type="text" className='inpBox' id='name' onInput={handleChange} required/></div>
                </div>

                <div className='divideInput'> 
                  <div><label>Creator Name:</label></div>
                  <div><input type="text" className='inpBox' id='creator'  onInput={handleChange} required /></div>
                </div>
                <div className='divideInput'>
                  <div><label>Type:</label></div>
                  <div><input type="text" className='inpBox' id='type'  onInput={handleChange} required/></div>
                </div>
                <div className='divideInput'>
                  <div><label>Date:</label></div>
                  <div><input type="Date" className='inpBox' id='date' onInput={handleChange} required /></div>
                </div>
                <div className='divideInput'>
                  <div><label>Time:</label></div>
                  <div><input type="time" className='inpBox' id='time' onInput={handleChange} required /></div>
                </div>
                <div className='divideInput'>
                  <div><label>Link:</label></div>
                  <div><input type="link" className='inpBox' id='link' onInput={handleChange} required /></div>
                </div>
                <div className='divideInput'>
                  <div><label>Password:</label></div>
                  <div><input type="text" className='inpBox' id='password'  onInput={handleChange} required/></div>
                </div>

                <input type="submit" value="Submit" className='submitBtn'/>

  
              </form>
            </div>
    </>
  )
}

export default Assignments