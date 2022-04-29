import React, { Component }  from 'react';
import {MdOutlineArrowUpward,MdOutlineArrowDownward} from 'react-icons/md'
import {BiCommentDetail} from 'react-icons/bi'
import {ImArrowUp,ImArrowDown} from 'react-icons/im'
 
 
const Posts = ({posts}) => {
    return ( 
        <section className="posts"> 
            {posts.map((post) => (
            <div className="card mb-3" style={{"max-width": "950px","margin-left": "50px", "margin-right": "50px", "margin-top": "10px","padding-top":"20px","padding-bottom":"20px"}}>
                <div className="row g-0">
                    <div className="col-md-1" style={{"padding-left":"20px"}}>
                        <ImArrowUp className="up" style={{"font-color":"white"}}/>
                        <p style={{"margin-bottom":"0px"}}>{post.votes}</p>
                        <ImArrowDown className="down"/>
                    </div>
                    <div className="col-md-2">
                        <img src={post.picture} className="img-fluid rounded-start" alt="..." style={{"max-height":"200px"}}/>
                    </div>
                    <div className="col-md-8" style={{"text-align":"left","position":"relative"}}>
                        <div className="card-body">
                            <div style={{"display":"inline-block"}}>
                                <p style={{"display":"inline-block","padding-right":"20px" }}><small className="text-muted">Community: {post.community}</small></p>
                                <p style={{"display":"inline-block","padding-right":"20px"}}><small className="text-muted">posted by: {post.author}</small></p>
                                <p style={{"display":"inline-block","padding-right":"20px"}}><small className="text-muted">at: {post.date}</small></p>
                            </div>
                            <h5 className="card-title ">{post.title}</h5>
                            {/* <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>                      */}
                        </div>
                        <div className="comments d-inline-flex" style={{"text-align":"left","position":"absolute","bottom":"0px"}}>
                            <BiCommentDetail style={{"height":"25px","margin-left":"15px","margin-right":"10px"}}/>
                            <p style={{"margin-bottom":"0px"}}>{post.comments} comments</p>
                            </div>
                    </div>
                </div>
            </div>
            ))}
        </section>
     );
}
 
export default Posts;