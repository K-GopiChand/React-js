import React from "react";
function DefaultProp(props){
    return(
        <>
        <h1>Welcome to {props.class} class</h1>
        <h3>Hello, {props.name}</h3>
        
        </>


    )
}
DefaultProp.defaultProps={
    class:"Not available",
    name:"Stranger"
}

export default DefaultProp