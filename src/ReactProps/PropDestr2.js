import React from "react";

function PropDestr2({name,age,city}){

    // let{name,age,city}=props
    return(
      <>
           
          
           <h1>This is Child component</h1>
           <p>My name is {name}</p>
           <p>Iam from {city}</p>
           <h4>My age is {age}</h4>

      
      
      </>


    )
}

export default PropDestr2