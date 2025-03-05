import React from "react";

function Exmp1(){

    let cars=["Benz","BMW","Audi","RR"]
    cars.unshift("Maruti suzuki")
    cars.splice(1,2)
    let names=["Virat","Rohit","Dhoni","Sachin"]
    names.pop()
    let persons=[{name:"raj", city:"bangalore"},{name:"Virat" ,city:"mumbai" },{name:"Sachin",city:"mysore"}]
      let personList =  persons.map((ele,index)=>{
              return <h4>Iam {ele.name} ,Iam from {ele.city}</h4>
        }) 

    let  carsList=cars.map((ele,index)=>{
        return <li>{ele}</li>
    })  

    let namesList=names.map((ele,index)=>{
         return <li>{ele}</li>
    })


    return(
        <>
           <h1>React List Example</h1>
           <ol type="A">
              {carsList}
            </ol>     

            <ul typeof="circle">
               {namesList}    
            </ul>     
            <h2>List of persons</h2>
             <ul>
              {personList}
            </ul>  
         
        
        </>
    )
}

export default Exmp1