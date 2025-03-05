import React from "react";

function Login(){
    return(
      <>
 <div className="login">
    <center> <form>
   <h1>Login page</h1>
    <label>enter mail</label><br></br>
    <input type="text" placeholder="enter your mail"></input><br></br><br></br>
    <label>enter your password</label><br></br>
    <input type="password" placeholder="enter your password"></input><br></br><br></br>
    <button>login</button>
  </form>
  </center>
  </div>
      
      </>

    )
}

export default Login