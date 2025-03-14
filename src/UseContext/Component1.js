import React, { createContext, useState } from "react";
import Component2 from "./Component2";

 export let ContextData=createContext()
function Component1(){
    var name="Gopi chand"
    let age=23
    let handleInc=()=>{
           setNum((prev)=>prev+1)
    }
    let handleDec=()=>{
        setNum((prev)=>prev-1)
    }

    const[num,setNum]=useState(0)
    return(
        <div style={{margin:"50px auto",height:"700px",width:"700px",textAlign:"center",boxShadow:"0px 0px 10px black"}}>
            <h1>Component1</h1>
            <h3>My name is {name}</h3>
            <h4>fav number is {num}</h4>
            <button onClick={handleInc}>Increment Value</button><br/><br/>
            <button onClick={handleDec}>Decrement Value</button>


            <ContextData.Provider value={[name,age,num]}>
                <Component2 />
            </ContextData.Provider>
            
        </div>
    )
}

export default Component1