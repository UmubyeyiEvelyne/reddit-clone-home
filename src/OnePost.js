// import useFetch from 'useFetch';
import {BiCommentDetail} from 'react-icons/bi'
import {ImArrowUp,ImArrowDown} from 'react-icons/im'
import React, { Component }  from 'react';
import { useState } from 'react';
 
const OnePost = ({posts}) => {
    const [ name, setName ] = useState();
    const [ comment, setComment ] = useState();
    const [ addedComment, setAddedComment ] = useState();
    const [commentor, setCommentor] = useState();
 
    const handleSubmit = (e) => {
        e.preventDefault();
 
        const names = {name}
        const comments = {comment};
 
        setAddedComment(comment);
        setCommentor(commentor);
 
        console.log(comments, names);
 
    };
    return(
        <div className="container mt-5 mb-5 p-5 " style={{ border: '1px solid rgb(252, 69, 4)'}}>
            <div className="card mb-3" style={{ border: '1px solid rgb(252, 69, 4)', "max-width": "950px","margin-left": "50px", "margin-right": "50px", "margin-top": "10px","padding-top":"20px","padding-bottom":"20px"}}>
                <div className="row g-0 ms-4 me-4">
                    <div className="row">
                        <div className="col-md-1">
                            <ImArrowUp className="up" style={{"font-color":"white"}}/>
                            <p style={{"margin-bottom":"0px"}}>votes{posts.votes}</p>
                            <ImArrowDown className="down"/>
                        </div>
                        <div className="col-md-3">
                            <img src={posts.picture} className="img-fluid rounded-start" alt="..." style={{"max-height":"200px"}}/>
                        </div>
                    </div>
                    <div className="col-md-7" style={{"text-align":"left","position":"relative"}}>
                        <div className="card-body">
                            {/* <div style={{"display":"inline-block"}}>
                                <p style={{"display":"inline-block","padding-right":"20px" }}><small className="text-muted">Community: {posts.community}</small></p>
                                <p style={{"display":"inline-block","padding-right":"20px"}}><small className="text-muted">posted by: {posts.author}</small></p>
                                <p style={{"display":"inline-block","padding-right":"20px"}}><small className="text-muted">at: {posts.date}</small></p>
                            </div> */}
                            <h5 className="card-title ">title {posts.title}</h5>
                            <p className="card-text mt-3 mb-5">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>                     
                        </div>
                        <div className="comments d-inline-flex" style={{"text-align":"left","position":"absolute","bottom":"0px"}}>
                            <BiCommentDetail style={{"height":"25px","margin-left":"20px","margin-right":"10px"}}/>
                            <p style={{"margin-bottom":"0px"}}>2{posts.comments} comments</p>
                            </div>
                    </div>
                    <div className="container mt-5 mb-5 col-lg-12 rounded ps-5 pe-5" style={{ border: '1px solid rgb(252, 69, 4)'}} > 
                        <div className="row justify-content-center">
                            <form onSubmit={handleSubmit}>
                                <div className="form-group">
                                    <label for="name" className="text-left mt-4 mb-3">Name</label>
                                    <input type="text"
                                        className="form-control mb-3"
                                        id="name" 
                                        placeholder="name"
                                        value = {name}
                                        onChange={(e) => setName(e.target.value)}/>
                                </div>
                                <div className="form-group">
                                    <label for="comment" className="text-left mb-3">Comment:</label>
                                    <textarea type="text"
                                        className="form-control mb-3"
                                        id="comment" 
                                        placeholder="comment"
                                        value = {comment}
                                        onChange={(e) => setComment(e.target.value)}/>
                                </div>
 
                                <button type="submit" className="btn col-md-12 mt-4 mb-4"  style={{backgroundColor: 'rgb(252, 69, 4)', color: '#fff'}}>Comment</button>
                            </form>
                        </div>
                    </div>
                </div>
 
            </div>
            {addedComment && 
            <div className="container rounded" style={{width: '90.5%', backgroundColor: '#fff', border: '1px solid rgb(252, 69, 4)'}}>
                <span >Name: </span> 
                <span >{name}</span><br></br>
                <span>Comment: </span> 
                <p style={{maxWidth: '100%'}}>{comment}</p>
            </div>}
 
        </div>
    );
}
 
export default OnePost;
