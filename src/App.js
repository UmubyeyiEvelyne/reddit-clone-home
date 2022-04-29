import React from "react";
import "./App.css";
import SideNav from "./SideNav";
import Header from "./Header";
import Main from "./Main";
import Posts from "./Posts";
import SignUp from "./SignUp";
import useFetch from "./useFetch";
import CreatePost from "./CreatePost";
import UserLogin from "./Login";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function Login() {
  return (
    <div className="App container w-100 p-3 mt-0">
      <Router> 
        <Header />       
          <Switch>  
            <Route exact path="/">
               <Main/>      
            </Route> 
            <Route exact path="/create">
              <CreatePost/> 
            </Route>
            <Route exact path="/signup">
              <SignUp/> 
            </Route>
            <Route exact path="/login">
              <UserLogin/> 
            </Route>
          </Switch>
      </Router>
    </div>
  );
}

export default Login;
