import React from "react";

function Lists(){
    return(
      <>
         <h1>Ordered List</h1>
           <ol>
            <li>Benz</li>
            <li>BMW</li>
            <li>Audi</li>
            <li>Range Rover</li>
           </ol>

           <h1>Unordered List</h1>
           <ul>
            <li>Virat</li>
            <li>Rohit</li>
            <li>Dhoni</li>
            <li>Sachin</li>
           </ul>  

           <h1>Nested List</h1>
           <ol>
            <li>Java Full stack</li>
            <ul>
            <li>Core Java</li>
            <li>J2EE</li>
            <li>Spring</li>
            <li>Springboot</li>
            </ul>
            
           </ol>

      </>
    

    )
}

export default Lists