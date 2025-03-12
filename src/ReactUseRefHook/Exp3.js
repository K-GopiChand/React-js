import React, { useRef } from "react";

function Exp3(){
    let divContainer=useRef()
    let res=divContainer.current
    res.style.color="blue"
    console.log(res)

    let para=useRef()
    let result=para.current
    result.style.color="red"
    console.log(result)

    return(
        <div>
            <h1>useRef example</h1>
            <div ref={divContainer}>
                Hello welcome to react js class
            </div>
            <p ref={para}>Hello how are you</p>
        </div>
    )
}
export default Exp3