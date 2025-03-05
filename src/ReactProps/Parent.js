import React from "react";
import Child from "./Child";

function Parent(){

    let age=20
    return(
      <>
           <h1>This is parent component</h1>
            <Child name="Virat" city="Mumbai" age={age}/>
            <Child name="Sachin" city="Bangalore" age={age}/>      
      
      </>


    )
}

export default Parent