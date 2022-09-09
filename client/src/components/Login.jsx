import React, { useState, useContext } from 'react'
import logo from './images/Masai.png'
import './styles/Login.css'
import axios from 'axios';
import { useNavigate } from 'react-router';
import { AuthContext } from './context/AuthContext';

const Login = () => {

    const navigate = useNavigate()

    const {setUserName, setToken} = useContext(AuthContext);
   
    const [login, setLogin] = useState({
        email:"",
        password:""
    })

// get the email and password value here
    const handleChange = (e) => {
        const {id, value} = e.target
        setLogin({...login, [id]:value})

    }

// submit the value
    const handleSubmit = (e) => {
        e.preventDefault();
    
        axios.post('https://lms-app-123.herokuapp.com/login',login).then(({data})=>{
            console.log("data",data)
            console.log(data.user.email)
            console.log(data.user.password)

            if(data.user.email === "admin"){
                alert('Welcome to the Admin page')
                navigate('/Admin')
            }
            else if(data.user.email !== "admin"){
                alert('Login Successfully')
                setToken(data.token)
                setUserName(data.user.name)
                navigate('/LandingPage')
                
            }
            else{
                alert('Wrong Credentials!')
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
                <label>Email</label> <br />
                <input type="email" className='inputBox' id='email' onChange={handleChange} required/><br />
                <label>Password</label><br />
                <input type="password" className='inputBox' id='password' onChange={handleChange} required/><br />
                <input type="checkbox" name="" id="" />
                <label>Remember Me</label>
                <div className='buttonBox'>
                    <p className='forget'>Forgot your password?</p>
                    <button className='button'>LOG IN</button>
                </div>
                </form>
            </div>
           
        </div>
    </>
  )
}

export default Login