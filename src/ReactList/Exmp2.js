import React from "react";

function Exmp2(){
    let cars=["Benz","BMW","Audi","RR"]
    let names=["Virat","Rohit","Dhoni","Sachin"]
    cars.push("Maruti suzuki")
    cars.splice(1,1)

    return(
     <>
     <h1>List Key Map Example</h1>
     <ol type="i">
        {names.map((ele,index)=>{
            return <li key={index}>{ele}</li>

        })}
     </ol>
     <ul type="square">
        {cars.map((ele,index)=>{
            return <li key={index}>{ele}</li>
        })}


     </ul>
     
     </>
    )
}

export default Exmp2