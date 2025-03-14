import React, { use, useEffect, useRef } from "react";
function Exp5(){
    let input1=useRef()
    let input2=useRef()
    let input3=useRef()

    let click1=()=>{
        input1.current.focus()
        input1.current.style.backgroundColor="orange"
        input2.current.style.backgroundColor=""
        input3.current.style.backgroundColor=""
    }
    let click2=()=>{
        input2.current.focus()
        input1.current.style.backgroundColor=""
        input2.current.style.backgroundColor="blue"
        input3.current.style.backgroundColor=""
    }
    let click3=()=>{
        input3.current.focus()
        input1.current.style.backgroundColor=""
        input2.current.style.backgroundColor=""
        input3.current.style.backgroundColor="green"
    }

   
    return(
        <div style={{margin:"50px auto",textAlign:"center"}}>
            <h1>UseRef hook example</h1>
            <button onClick={click1}>Click here 1</button> 
            <input type="text" ref={input1}/><br/><br/>
            <button onClick={click2}>Click here 2</button> 
            <input type="text" ref={input2}/><br/><br/>
            <button onClick={click3}>Click here 3</button> 
            <input type="text" ref={input3}/><br/><br/>
        </div>
    )
}

export default Exp5