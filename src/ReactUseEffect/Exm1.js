import React, { useEffect, useState } from "react";

function Exm1(){
    const[count,setCount]=useState(0)
    let increment=()=>{
        setCount((prev)=>prev+1)
    }
    let decrement=()=>{
        setCount((prev)=>prev-1)
    }
    let reset=()=>{
        setCount(0)
    }

      useEffect(()=>{
          //side effect code
          console.log("component mount")
          document.title=`The count is ${count}`

          return()=>{
            console.log("component unMounted")
          }

      },[count])
    return(
        <div>
            <center>
                <h1>The count is {count}</h1>
            <button onClick={increment}>Increment</button>&nbsp;&nbsp;&nbsp;
            <button onClick={decrement}>Decrement</button>&nbsp;&nbsp;&nbsp;
            <button onClick={reset}>Reset</button>
            </center>


        </div>
    )
}
export default Exm1