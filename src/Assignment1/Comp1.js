import React from "react";

function Comp1(){
    return(
        <>
           <div style={{textAlign:"center",display:"flex",flexDirection:"column",alignItems:"center",backgroundColor:"lightpink",boxShadow:"0px 0px 10px black",height:"550px",width:"50%",padding:"10px 10px"}}>
            
            <h1>LOREM IPSUM</h1>
            <p style={{textAlign:"center",paddingTop:"70px"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
id est vitae dolor rhoncus tristique. Maecenas metus quam,
rhoncus euismod lorem in, sollicitudin viverra eros. Donec
dictum luctus quam ut tristique. Curabitur nec faucibus purus.
Quisque congue sem nec justo mollis, in tincidunt erat pretium.
Sed pulvinar, massa ac porta viverra.</p>

           <button style={{color:"white",backgroundColor:"red",marginTop:"100px"}}>Click Me</button>

       </div>
        
        
        </>


    )
}

export default Comp1