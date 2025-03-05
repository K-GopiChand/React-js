import React from "react";

class Example2 extends React.Component{
    constructor(){
        super()
        this.state={
            message:"Welcome to my class"
           
        }
    }
    changeContent(){
        this.setState({
            message:"Thankyou for visiting"
        })
    }
  
    render(){
        return(
        <>
          <h1>Example for changing state</h1>
          <h3>{this.state.message}</h3>
          
          <button onClick={()=>this.changeContent()}>Change state</button>

         

        
        </>


        )
    }
}

export default Example2