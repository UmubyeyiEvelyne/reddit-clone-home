// import axios from 'axios';
import React from "react";
import { useState} from 'react';

const SignUp = () => {
    const [ username, setUsername ] = useState();
    const [ email, setEmail ] = useState();
    const [ password, setPassword ] = useState();
    const [ confirmPassword, setConfirmPassword ] = useState();

    const handleSubmit = (e) => {
        e.preventDefault();

        const user = {username, email, password, confirmPassword};
        console.log(user);
       
        
    };
    
    return (
        <div className="container mt-5 mb-5 col-lg-6"  style={{border: '1px solid rgb(252, 69, 4)'}}>
            <h1 className="text-center mt-5 mb-3"  style={{color: 'rgb(252, 69, 4)'}}>SIGN UP</h1>
            <div className="row justify-content-center my-5 me-2 ms-2">
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label for="username" className="text-left mb-3">Username:</label>
                        <input type="text"
                            className="form-control mb-3"
                            id="username" 
                            placeholder="username"
                            value = {username}
                            onChange={(e) => setUsername(e.target.value)} required/>
                    </div>
                    <div className="form-group">
                        <label for="email" className="mb-3">Email:</label>
                        <input 
                        type="email" 
                        className="form-control mb-3" 
                        id="email" 
                        value = {email} 
                        placeholder="email"
                        onChange={(e) => setEmail(e.target.value)} required/>
                    </div>
                    <div className="form-group">
                        <label for="password" className="mb-3">Password:</label><br/> 
                        <input 
                        type="password" 
                        className="form-control mb-3" 
                        value = {password} 
                        id="password"
                        onChange={(e) => setPassword(e.target.value)} required/> 
                    </div>
                    <div className="form-group">
                        <label for="confirmPassword" className="mb-3">Confirm password:</label><br/>
                        <input 
                        type="password" 
                        className="form-control mb-3" 
                        value = {confirmPassword} 
                        id="confirmPassword"
                        onChange={(e) => setConfirmPassword(e.target.value)} required/>
                    </div>
                    <button type="submit" className="btn col-md-12 mt-4 mb-5"  style={{backgroundColor: 'rgb(252, 69, 4)', color: '#fff'}} >Sign up</button>
                    <p className="text-center">Already a redditor? <a href="/login"  style={{color: 'rgb(252, 69, 4)'}}>LOG IN</a></p>
                </form>
            </div>
        </div>
    );
}

export default SignUp;