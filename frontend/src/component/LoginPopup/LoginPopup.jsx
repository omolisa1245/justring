import React from 'react'
import './LoginPopup.css'
import { RxCross2 } from "react-icons/rx";
import { useState } from 'react';
import axios from "axios"

const LoginPopup = ({ setShowLogin }) => {


    const [curState, setCurState] = useState("signup")
    const [token, setToken] = useState("")
    const [data, setData] = useState({
        name: "",
        email: "",
        password: ""
    });

    const onChangeHandler = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setData(data => ({ ...data, [name]: value }))
    }

    const onLogin = async (event) => {
        event.preventDefault()
       try {
         if (curState === "signup") {
            const response = await axios.post("http://localhost:5000/api/user/register", data)
            if (response.data.success) {
                setToken(response.data.token);
                localStorage.setItem("token", response.data.token);
                setShowLogin(false)
            }
            else {
                alert(response.data.message)
            }
        } else {
            const response = await axios.post("http://localhost:5000/api/user/login", data)
            if (response.data.success) {
                setToken(response.data.token);
                localStorage.setItem("token", response.data.token);
                setShowLogin(false)
            }
            else {
                alert(response.data.message)
            }
        }
       } catch (error) {
         console.log('Error creating user');
       }

    }
    return (
        <div className='login-popup'>
            <form onSubmit={onLogin} className='login-popup-container'>
                <div className="login-popup-title">
                    <h2>{curState}</h2>
                    < RxCross2 onClick={() => setShowLogin(false)} className='cross-icon' />
                </div>
                <div className="login-popup-input">
                    {curState === "Login" ? <></> : <input name='name' onChange={onChangeHandler} value={data.name} type="text" placeholder='Your name' required />}
                    <input name='email' onChange={onChangeHandler} value={data.email} type="Email" placeholder='Your email' required />
                    <input name='password' onChange={onChangeHandler} value={data.password} type="Password" placeholder='Your Password' required />
                </div>
                <button type='submit' >{curState === "signup" ? "Create-account" : "Login"}</button>
                <div className="login-popup-condition">
                    <input type="checkbox" required />
                    <p>By checking this box, you are agreeing to our terms of service.</p>
                </div>
                {curState === "Login"
                    ? <p>Create a new accout? <span onClick={() => setCurState("signup")}>Click here</span></p>
                    : <p>Already have an account? <span onClick={() => setCurState("Login")}>Login here</span></p>
                }


            </form>
        </div>
    )
}

export default LoginPopup