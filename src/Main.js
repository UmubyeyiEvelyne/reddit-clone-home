import React from 'react'
import './Main.css'
import SideNav from './SideNav'
import Posts from './Posts'
import useFetch from './useFetch'

function Main() {
    // console.log(props)
    const {data: posts,isPending,error} = useFetch("http://localhost:3005/posts");

    return (
        <div className="main ">
            <SideNav />
            {posts &&  <Posts posts= {posts}/>}        
        </div>
    )
}

export default Main
