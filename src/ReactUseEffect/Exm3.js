import React, { useEffect, useState } from "react";
function Exm3(){
    const[data,setData]=useState(null)
    console.log(data)
    useEffect(()=>{
            //side effect
             let fetchData=async ()=>{
                try{
                    let response=await fetch('https://fakestoreapi.com/products')
                    let result=await response.json()
                    setData(result)
                }
                catch(error){
                    console.log("error while fetching data:"+error)
                }
             }
             fetchData()


            return()=>{
                //clean up
            }

    },[])
    return(
        <div>
            <h1>API calling using useEffect</h1>
            {data?<div><pre>{JSON.stringify(data,null,20)}</pre></div>:<p>Loading!....</p>}
        </div>
    )
}
export default Exm3