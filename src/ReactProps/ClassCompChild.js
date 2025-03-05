import React from "react";
class ClassCompChild extends React.Component{
 
    render(){
        return(
           <>
           <h1>This is Child Class Component</h1>
           <h1>The car name is {this.props.name}</h1>
           <h4>Color of the car is {this.props.color}</h4>
           <h4>Car available : {this.props.isAvailable ? <h1>true</h1>: <h1>false</h1>}</h4>
           
           
           
           </>
      


        )
    }



}

export default ClassCompChild