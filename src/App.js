import React from "react";
import "./App.css";
import SideNav from "./SideNav";
import Header from "./Header";
import Main from "./Main";
import Posts from "./Posts";
import useFetch from "./useFetch";
import { BrowserRouter as Router} from "react-router-dom";

function App() {
  const {data: posts,isPending,error} = useFetch("http://localhost:3005/posts");
  return (
    <div className="App container mx-0">
      <Router> 
        <SideNav />
        <Main>
          <Header />
          {posts &&  <Posts posts= {posts}/>}
        </Main>
      </Router>
    </div>
  );
}

export default App;
