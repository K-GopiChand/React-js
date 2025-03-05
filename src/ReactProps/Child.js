import React from "react";

function Child(props){

    let age=20
    return(
      <>
           <h1>This is Child component</h1>
           <p>My name is {props.name}</p>
           <p>Iam from {props.city}</p>
           <h4>My age is {props.age}</h4>

      
      
      </>


    )
}

export default Child