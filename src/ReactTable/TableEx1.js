import React from "react";
function TableEx1(){
    const data=[{
        Sno:1,EmployeeName:"Gopi",EmployeeAge:23,EmployeePlace:"Bangalore",EmployeeId:100,EmployeeDepartment:"Dev"
    },{
        Sno:2,EmployeeName:"Chand",EmployeeAge:23,EmployeePlace:"Mysore",EmployeeId:101,EmployeeDepartment:"HR"
    },{
        Sno:3,EmployeeName:"Virat",EmployeeAge:27,EmployeePlace:"Delhi",EmployeeId:102,EmployeeDepartment:"Marketing"
    },{
        Sno:4,EmployeeName:"Kohli",EmployeeAge:28,EmployeePlace:"Mumbai",EmployeeId:103,EmployeeDepartment:"Finance"
    },{
        Sno:5,EmployeeName:"Rohit",EmployeeAge:28,EmployeePlace:"Andhra",EmployeeId:104,EmployeeDepartment:"Design"
    }]
    return(
        <>
          <h1>Employee Table</h1>
          <table border={1}>
                            <tr>
                             <th>Sno</th>
                             <th>Employee Name</th>
                             <th>Employee Age</th>
                             <th>Employee Place</th>
                             <th>Employee ID</th>
                             <th>Employee Department</th>
                          </tr>
            {data.map((ele,index)=>{
                   return(
                        <>
                           <tr key={index}>
                             <td>{ele.Sno}</td>
                             <td>{ele.EmployeeName}</td>
                             <td>{ele.EmployeeAge}</td>
                             <td>{ele.EmployeePlace}</td>
                             <td>{ele.EmployeeId}</td>
                             <td>{ele.EmployeeDepartment}</td>
                          </tr>
                        </>
                   )
            })}
          </table>
        </>
    )
}
export default TableEx1