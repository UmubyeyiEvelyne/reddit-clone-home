import React, { Component }  from 'react';
import { useState} from 'react';


function CreatePost() {
    const [ title, setTitle ] = useState();
    const [ caption, setCaption ] = useState();
    const [ image, setImage ] = useState();

    const handleSubmit = (e) => {
        e.preventDefault();

        const post = {title, caption, image};
        console.log(post);
       
        
    };
    
    return (
        <div className="container mt-5 mb-5 col-lg-6"  style={{border: '1px solid rgb(252, 69, 4)'}}>
            <h1 className="text-center mt-5 mb-3"  style={{color: 'rgb(252, 69, 4)'}}>CREATE POST</h1>
            <div className="row justify-content-center my-5 me-2 ms-2">
                {/* <div className="col-lg-"> */}
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label for="title" className="text-left mb-3">Title:</label>
                            <input type="text"
                             className="form-control mb-3"
                             id="title" 
                             placeholder="Title"
                             value = {title}
                             onChange={(e) => setTitle(e.target.value)} required/>
                        </div>
                        <div className="form-group">
                            <label for="caption" className="mb-3">Caption:</label>
                            <input 
                            type="text" 
                            className="form-control mb-3" 
                            id="caption" 
                            value = {caption} 
                            placeholder="Caption"
                            onChange={(e) => setCaption(e.target.value)} required/>
                        </div>
                        {/* <div className="form-group">
                            <label for="confirmNewPassword" className="mb-3">Link (optional):</label>
                            <input type="text" className="form-control mb-5" id="confirmNewPassword" value = {password} placeholder="Confirm new password"/>
                        </div> */}
                        <div className="form-group">
                            <label for="confirmNewPassword" className="mb-3">Image:</label><br/>
                            <div className="col-lg-12 border p-5 ps-2">
                                <input 
                                type="file" 
                                className="form-control-file" 
                                value = {image} 
                                id="image"
                                onChange={(e) => setImage(e.target.value)} required/>
                            </div>
                        </div>
                        <button type="submit" className="btn col-md-12 mt-4 mb-5"  style={{backgroundColor: 'rgb(252, 69, 4)', color: '#fff'}}>Post</button>
                    </form>
                {/* </div> */}
            </div>
        </div>
    );
}


export default CreatePost;