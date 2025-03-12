import React, { useEffect, useState } from "react";
function Exm4(){
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
            <h1>Data fetching in list format</h1>
            {error && <p>Error while fetching data</p>}
            {!error&& data &&(
                <ul>
                {data.map((ele,index)=>{
                    return(
                        <li key={index}>
                            <h1>{ele.title}</h1>
                            <p>{ele.description}</p>
                            <h3>{ele.price}</h3>
                            <h3>{ele.category}</h3>

                        </li>
                    )
                })}
                </ul>
            )}
            
        </div>
    )
}
export default Exm4