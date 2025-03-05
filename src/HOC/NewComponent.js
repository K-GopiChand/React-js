import React from "react";

function WithAuthentication(WrappedComponent){
    let islog=true
    return (props)=>{
        if(islog){
            return <WrappedComponent islogged={islog}/>
        }
        else{
            return <div><h1>Please login to view the content</h1></div>
        }
    }
}


function AuthenticatedComponent(islogged){
    return(
        <div>
             {islogged?<h1>Welcome user you logged in</h1>:<h3>Please Log in</h3>}
        </div>
    )
}

let NewComponent=WithAuthentication(AuthenticatedComponent)

export default NewComponent