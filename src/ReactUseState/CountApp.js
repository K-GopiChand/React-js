import React, {useState} from "react";

function CountApp(){
    const[num,setNum]=useState(0)
    let incNum=()=>{
          setNum(num+1)
    }
    return(
        <div style={{margin:"50px auto",width:"500px",boxShadow:"0px 0px 10px black",textAlign:"center",padding:"10px"}}>
            <h1>Count App</h1>
            <h3>The count value is {num}</h3>
            <button onClick={incNum}> Increase count</button>

        </div>
       
    )
}
export default CountApp