import React from "react";

function Resetpass(){
    return(
      <>
     <div className="forget">
<center>
  <form>
    <h1>Forgot password</h1>
    <input type="email" placeholder="enter your mail"></input><br></br><br></br>
    <label>enter password</label><br></br>
    <input type="text" placeholder="enter password"></input><br></br><br></br>
    <label>enter confirm password</label><br></br>
    <input type="password" placeholder="enter confirm password"></input><br></br><br></br>
    <button>Reset Password</button>
  </form>
</center>
</div>
      
      </>

    )
}

export default Resetpass