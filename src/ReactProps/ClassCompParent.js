import React from "react";
import ClassCompChild from "./ClassCompChild";
class ClassCompParent extends React.Component{
 
    render(){
        return(
           <>
           <h1>This is Parent Class Component</h1>
           <ClassCompChild name="BMW" color="red" isAvailable={true} />
           <ClassCompChild name="Audi" color="black" isAvailable={false}/>
 
           
           
           
           </>
      


        )
    }



}

export default ClassCompParent