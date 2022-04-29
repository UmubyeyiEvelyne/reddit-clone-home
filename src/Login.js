// import axios from 'axios';
import React from "react";
import { useState} from 'react';

const UserLogin = () => {
    const [ username, setUsername ] = useState();
    const [ password, setPassword ] = useState();
    

    const handleSubmit = (e) => {
        e.preventDefault();

        const user = {username, password};
        console.log(user);
       
        
    };
    
    return (
        <div className="container mt-5 mb-5 col-lg-6"  style={{border: '1px solid rgb(252, 69, 4)'}}>
        <h1 className="text-center mt-5 mb-3"  style={{color: 'rgb(252, 69, 4)'}}>LOG IN</h1>            
        <div className="row justify-content-center my-5 me-2 ms-2">
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label for="username" className="text-left mb-3">Username:</label>
                        <input type="text"
                            className="form-control mb-3"
                            id="username" 
                            placeholder="username"
                            value = {username}
                            onChange={(e) => setUsername(e.target.value)}/>
                    </div>
                    <div className="form-group">
                        <label for="password" className="mb-3">Password:</label><br/> 
                        <input 
                        type="password" 
                        className="form-control mb-3" 
                        value = {password} 
                        id="password"
                        onChange={(e) => setPassword(e.target.value)}/> 
                    </div>
  
                    <button type="submit" className="btn btn-primary col-md-12 mt-4 mb-5" style={{backgroundColor: 'rgb(252, 69, 4)', color: '#fff',border:'none'}}>login</button>
                    <p className="text-center">Don't have an account? <a href="/signup" style={{color: 'rgb(252, 69, 4)'}}>Sign up</a></p>
                </form>
            </div>
        </div>
    );
}

export default UserLogin;