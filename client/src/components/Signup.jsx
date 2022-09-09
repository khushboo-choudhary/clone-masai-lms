import React, { useState, useContext } from 'react'
import logo from './images/Masai.png'
import './styles/Login.css'
import axios from 'axios';
import { useNavigate } from 'react-router';
import { AuthContext } from './context/AuthContext';

const Signup = () => {

    const navigate = useNavigate()

    const {setUserName, setToken} = useContext(AuthContext);
   
    const [signup, setSignup] = useState({
        name: "",
        email:"",
        password:""
    })

// get the email and password value here
    const handleChange = (e) => {
        const {id, value} = e.target
        setSignup({...signup, [id]:value})

    }

// submit the value
    const handleSubmit = (e) => {
        e.preventDefault();
    
        axios.post('https://lms-app-123.herokuapp.com/signup',signup).then(({data})=>{
            console.log("data",data)
            console.log(data.user.name)
            console.log(data.user.email)
            console.log(data.user.password)

            if(data.user.email === "admin"){
                alert('Welcome to the Admin page')
                navigate('/Admin')
            }
            else if(data.user.email !== "admin"){
                alert('Account Created Successfully')
                setToken(data.token)
                setUserName(data.user.name)
                navigate('/Login')
                
            }
           

        }).catch((e)=>{
                console.log(e.message)
        })


    }

  return (
    <>
        <div className='Login'>
            <img src={logo} alt="" className='MasaiLogo' />
            
            <div className='contentBox'>
            <form onSubmit={handleSubmit}>
                <label>Name</label> <br />
                <input type="text" required className='inputBox' id='name' onChange={handleChange} /><br />
                <label>Email</label> <br />
                <input type="email" required className='inputBox' id='email' onChange={handleChange}/><br />
                <label>Password</label><br />
                <input type="password" required className='inputBox' id='password' onChange={handleChange}/><br />
                <input type="checkbox" name="" id="" />
                <label>Remember Me</label>
                <div className='buttonBox'>
                    <button className='button' onClick={handleSubmit}>Sign Up</button>
                    <button className='button' onClick={handleSubmit}>Log In</button>
                </div>
                </form>
            </div>
           
        </div>
    </>
  )
}

export default Signup