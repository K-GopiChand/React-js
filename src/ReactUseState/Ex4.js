import React,{useState} from "react";

function Ex4(){
    const[data,setData]=useState({name:"raj",city:"mumbai",age:"25",skill:"reactjs",isStudent:true})
    let change=()=>{
        setData({...data,name:"virat",age:37,city:"delhi"})
    }
    return(
        <>
        <h1>Example for storing initial value as OBJECT</h1>
        <h3>My name is {data.name}</h3>
        <h4>Iam from {data.city}</h4>
        <h4>Iam {data.age} years old</h4>
        <h3>I know {data.skill}</h3>
        <h2>{data.isStudent?<p>Yes</p>:<p>No</p>}</h2>
        <button onClick={change}>change</button>

        </>
    )
}
export default  Ex4