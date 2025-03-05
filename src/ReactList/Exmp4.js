import React from "react";

function Exmp4(){
    let stack=[{
        stackname:"Java Full stack",
        subject1:"Core Java",
        subject2:"J2EE",
        subject3:"Spring",
        subject4:"Springboot"
    }]


    return(
        <>
          <h1>Nested List</h1>
          <ol>
            {stack.map((ele,index)=>{
                return (
                    <>
                       <li key={index}>{ele.stackname}</li>
                       <ul type="circle" key={index}>
                        <li>{ele.subject1}</li>
                        <li>{ele.subject2}</li>
                        <li>{ele.subject3}</li>
                        <li>{ele.subject4}</li>
                       </ul>
                    
                    </>
                )
            })}
          </ol>
        
        
        </>
    )
}
export default Exmp4