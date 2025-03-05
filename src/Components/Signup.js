import React from "react";

function Signup(){
    return(
      <>
 <div className="signup">
<center>
  <form>
    <h1>Sign up page</h1>
    <label>enter your name</label><br></br>
    <input type="text" placeholder="enter your name"></input><br></br><br></br>
    <label>enter your phone number</label><br></br>
    <input type="text" placeholder="enter your phone number"></input><br></br><br></br>
    <label>enter your mail</label><br></br>
    <input type="email" placeholder="enter your mail"></input><br></br><br></br>
    <label>enter password</label><br></br>
    <input type="text" placeholder="enter password"></input><br></br><br></br>
    <label>enter confirm password</label><br></br>
    <input type="password" placeholder="enter confirm password"></input><br></br><br></br>
    <button>submit</button>
  </form>
</center>
</div>
      
      </>

    )
}

export default Signup