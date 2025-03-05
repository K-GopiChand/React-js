import React,{use, useState} from "react";

function Ex2(){
    const[state,setState]=useState('Welcome to react class')
    const[content,setContent]=useState("hello how are you")
    let handlechange= ()=>{
        setContent("iam fine")
    }
    return(
        <>
        <h1>Example for changing the state</h1>
        {state}
        <button onClick={()=>setState('Thankyou for visiting')}>Click me</button>

        {content}
        <button onClick={handlechange}>Click me</button>


        </>
    )
}
export default Ex2