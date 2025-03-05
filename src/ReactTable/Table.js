import react from "react";
function Table(){
    const data=[{
        id:1,name:"Raj",age:25,gender:"male",skill:"ReactJS"
    },{
        id:2,name:"Riya",age:23,gender:"female",skill:"AngularJS"
    },{
        id:3,name:"Virat",age:37,gender:"male",skill:"VueJS"
    }]
    return(
        <>
        <h1>React Table example</h1>
        <table border={1}>
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Age</th>
                <th>Gender</th>
                <th>Skill</th>
            </tr>
            {data.map((ele,index)=>{
                return(
                    <>
                    <tr key={index}>
                        <td>{ele.id}</td>
                        <td>{ele.name}</td>
                        <td>{ele.age}</td>
                        <td>{ele.gender}</td>
                        <td>{ele.skill}</td>

                    </tr>
                    </>
                )

            })}
        </table>
        </>
    )
}
export default Table