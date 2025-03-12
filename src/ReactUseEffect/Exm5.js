import React, { useEffect, useState } from "react";
function Exm5(){
    const[data,setData]=useState(null)
    const[error,setError]=useState(false)
    console.log(data)
    useEffect(()=>{
            //side effect
             let fetchData=async ()=>{
                try{
                    let response=await fetch('https://fakestoreapi.com/products')
                    let result=await response.json()
                    setData(result)
                    setError(false)
                }
                catch(error){
                    console.log("error while fetching data:"+error)
                    setError(true)
                }
             }
             fetchData()


            return()=>{
                //clean up
            }

    },[])
    return(
        <div>
            <h1>Data fetching in Table format</h1>
            {error&&<p>Error while fetching data</p>}
            {!error && data && (
                <table border={1}>
                    <tr>
                        <th>Id</th>
                        <th>Title</th>
                        <th>Price</th>
                        <th>Description</th>
                        <th>Category</th>
                        <th>Image</th>
                        <th>Rating</th>
                        <th>Count</th>
                    </tr>
                    
                        {data.map((ele,index)=>{
                            return(
                                <tr key={index}>
                                    <td>{ele.id}</td>
                                    <td>{ele.title}</td>
                                    <td>{ele.price}</td>
                                    <td>{ele.description}</td>
                                    <td>{ele.category}</td>
                                    <td><img src={ele.image} height={100} width={100}></img></td>
                                    <td>{ele.rating.rate}</td>
                                    <td>{ele.rating.count}</td>

                                </tr>
                            )
                        })}
                    
                </table>
            )}
            
            
        </div>
    )
}
export default Exm5