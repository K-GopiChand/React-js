import React,{useState} from "react";
function Ex1(){
    const[state,setState]=useState(100)
    const[data,setdata]=useState({name:"Gopi",age:"23"})
    const[image,setImage]=useState('https://www.pixelstalk.net/wp-content/uploads/2016/10/HD-free-disney-cars-pictures.jpg')
    return(
        <>
        <h1>Example for useState hook for defining state</h1>
        <h3>{state}</h3>
        <h2>My name is {data.name} and my age is {data.age}</h2>
        <img src={image} alt="no image" height={200} width={300}/>

        </>
    )
}
export default Ex1