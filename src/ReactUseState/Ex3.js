import React,{useState} from "react";

function Ex3(){
    const[imageurl,setImageurl]=useState('https://res.cloudinary.com/practicaldev/image/fetch/s--qo_Wp38Z--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/i/e0nl7ziy1la7bpwj7rsp.png')
    let changeAngular=()=>{
        setImageurl('https://www.liblogo.com/img-logo/an271a55f-angular-logo-angular-logo-transparent-png-stickpng.png')
    }
    let changeReact=()=>{
        setImageurl('https://res.cloudinary.com/practicaldev/image/fetch/s--qo_Wp38Z--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/i/e0nl7ziy1la7bpwj7rsp.png')
    }
    return(
        <div style={{margin:"50px auto",width:"500px",boxShadow:"0px 0px 10px black",textAlign:"center",padding:"10px" }}>
        <h1>Example for changing image</h1>
        <div>
            <img src={imageurl} alt="no image" height={300} width={300}></img>
        </div>
        <button style={{margin:"20px"}} onClick={changeReact}>React</button>
        <button style={{margin:"20px"}} onClick={changeAngular}>Angular</button>

        </div>
    )
}
export default Ex3