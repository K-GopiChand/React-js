import React, { useEffect, useRef } from "react";
function Exp4(){
    let inputRef=useRef()
    let input1Ref=useRef()

    useEffect(()=>{
        inputRef.current.focus()
        input1Ref.current.style.backgroundColor="pink"
        return()=>{
            //clean up code
        }
    },[])
    return(
        <>
          <h1>UseRef hook example</h1>
          <input type="text" ref={inputRef}/>
          <input type="text" ref={input1Ref}/>
        </>
    )
}

export default Exp4