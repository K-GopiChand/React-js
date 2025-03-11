import React, { useEffect, useState } from "react";
import './Exm2.css'

function Exm2(){
    const[image,setImage]=useState('https://thumbs.dreamstime.com/z/no-image-available-icon-flat-vector-no-image-available-icon-flat-vector-illustration-132482953.jpg')
    let changeMale=()=>{
        setImage('https://i.pinimg.com/originals/97/31/02/9731022f0be7c965e880505461643850.jpg')
    }
    let changeFemale=()=>{
        setImage('https://i.pinimg.com/originals/b5/e6/d6/b5e6d6c39a235e9f7b2ec8ef12ee565d.jpg')
    }

    useEffect(()=>{
        //side effect
        console.log("Profile image is changed to "+image)
        return()=>{
            //clean up code
            console.log("image has been updated")
        }
    },[image])
    return(
        <div className="container">
            <div className="container1">
                <h1>Upload profile</h1>
                <img src={image} alt="no image"/>

            </div>
            <div className="container2">
                <h2>Choose the image</h2>
                <img src={image} alt="no image"/>
                <button id='btn' onClick={changeMale}>Male</button>
                <button id='btn' onClick={changeFemale}>Female</button>

            </div>
        </div>
    )
}
export default Exm2
