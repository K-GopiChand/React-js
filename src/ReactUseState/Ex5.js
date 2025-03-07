import React,{useState} from "react";
import './ex5.css'
function Ex5(){
    const[username,setUsername]=useState('')
    const[password,setPassword]=useState('')
    const[error,setError]=useState(false)

    let submit=(event)=>{
        event.preventDefault()
        console.log(username)
        console.log(password)
        setError(true)
    }
    return(
        <>
        <div className="container">
            <form className="formcontainer">
                <label>Enter username</label>
                <input type="text" name="username" value={username}
                onChange={(e)=>setUsername(e.target.value)}/>
                <br/><br/>
                <label>Password</label>
                <input type="password" name="password" value={password}
                onChange={(e)=>setPassword(e.target.value)}/><br/><br/>
                <button onClick={submit}>Login</button>
            </form>
            {error&&<h1>sucess</h1>}
        </div>
        </>
    )
}
export default Ex5