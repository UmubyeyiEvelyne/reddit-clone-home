import React from "react";
import "./App.css";
import SideNav from "./SideNav";
import Header from "./Header";
import Main from "./Main";
import Posts from "./Posts";
import SignUp from "./SignUp";
import useFetch from "./useFetch";
import CreatePost from "./CreatePost";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  const {data: posts,isPending,error} = useFetch("http://localhost:3005/posts");
  return (
    <div className="App container w-100 p-3 mt-0">
      <Router> 
        <Header />
        <div className="body">
        {/* <Main>       */}
          <Switch>  
            <Route exact path="/">
              <SideNav />
              {posts &&  <Posts posts= {posts}/>}
            </Route> 
            <Route exact path="/create">
              <CreatePost/> 
            </Route>
            <Route exact path="/signup">
              <SignUp/> 
            </Route>
          </Switch>
          </div>
        {/* </Main> */}
      </Router>
    </div>
  );
}

export default App;
