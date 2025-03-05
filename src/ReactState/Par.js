import React from "react";
import Chi from "./Chi";

class Par extends React.Component{
    constructor(){
        super()
        this.state={
            message:"Welcome to React js class"
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
           <h1>This is parent componet</h1>
           <Chi content={this.state.message} click={()=>this.changeContent()}/>

          
          </>

        )
    }
}
export default Par