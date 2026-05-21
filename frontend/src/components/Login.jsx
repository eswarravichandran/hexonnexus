import React, { useState } from 'react'
import '../styles/Login.css'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { toast } from 'react-toastify';

const Login = () => {

    const navigate = useNavigate();
    const [showTab, setShowTab] = useState(false);
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });
    
    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value,});
    };
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        
        try {
            const response = await axios.post("http://localhost:5000/api/auth/login", formData);
            if(response.data) {
                localStorage.setItem("token", response.data.token);
                toast.success("Login Success!");
                navigate("/");
            }
        }
        catch (error) {
            toast.error('Login failed!');
        }
    };

    return (
        <>
            <div className='login'>
                <div className='login-card'>
                    <div>
                        <h2>Please login to access</h2>
                        <div className='login-form'>
                            <div>
                                <label>Email</label>
                                <input type='email' name='email' placeholder='Enter Email' onChange={handleChange} required/>
                            </div>
                            <div>
                                <label>Password</label>
                                <input type='password' name='password' placeholder='Enter Password' onChange={handleChange} required/>
                            </div>
                            <div>
                                <button type='submit' onClick={handleSubmit}>Login</button>
                                <h4 onClick={() => setShowTab(!showTab)}>Forgot password? Click here</h4>
                            </div>
                            { showTab && (
                                <>
                                <div>
                                    <label>Please enter valid email</label>
                                    <input type='email' name='remail' placeholder='Enter Email' required/>
                                </div>
                                <div>
                                    <button type='submit'>Send Reset Link</button>
                                </div>
                                </>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login