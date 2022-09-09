import React from 'react'
import Navbar from './Header/Navbar'
import './styles/LectureDetails.css'
import './styles/Lecture.css'

const AssignmentsDetails = () => {

    const data = JSON.parse(localStorage.getItem("AssignmentData"))
    console.log('data:', data.password)
  
  return (
    <>
        <Navbar/>
        <div className='navBox'>
        <div className='content'>
                  <p className='topic' style={{ color: "#5046e5",fontSize: "18px" }}>{data.name}  <button style={{
                    backgroundColor: "#e0e7ff", color: "#864e0e",
                    border: "none",
                    padding: "5px",
                    borderRadius:"5px",
                    fontSize:"12px"
                  }}>ASSIGNMENT</button> <button style={{
                    backgroundColor: "#fef9c3", color: "#724c3c",border: "none",
                    padding: "5px",
                    borderRadius:"5px",
                    fontSize:"12px"}}>CODING</button></p>
                  <p className='desc' style={{ fontSize: "14px" }}><b>{data.creator} </b> {data.date}, - {data.time}</p>
                </div>
        </div>
        <div className='mainDetails' key={data.name}>
            <p className='classLink'>{data.name}</p>
            
            <span><b>Link for the Assignment</b></span>
            <br />
            <br />
            <button style={{backgroundColor:"#fef9c3", border:"none"}}><a  className='classLink2' href={data.link} target="_blank" rel="noreferrer">Click to Open Link</a></button>
            <br />
            <br />
            <span><b>Password :</b></span><p>{data.password}</p>
        </div>
        
    </>
  )
}

export default AssignmentsDetails