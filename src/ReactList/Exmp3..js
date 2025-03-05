import React from "react";

function Exmp3(){
    let student=[{id:1,name:"Raj",city:"Bangalore",skill:"ReactJS"},{
        id:2,name:"Virat",city:"Mysore",skill:"Java"
    },{
        id:3,name:"Rohit",city:"Mumbai",skill:"Python"
    }]
   student[2].city="Delhi"
    return(
        <>
          <h1>Definition List</h1>
          <dl>
            {student.map((ele,index)=>{
                return(
                    <>
                      <dt key={index}>Student {ele.id}</dt>
                      <dd>Iam {ele.name}, Iam from {ele.city}. I know {ele.skill} skill</dd>
                    </>
                )
            })}
          </dl>
        
        
        </>
    )
}
export default Exmp3