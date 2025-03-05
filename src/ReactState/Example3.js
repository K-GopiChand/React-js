import React from "react";
 

class Example3 extends React.Component{
    constructor(){
        super()
        this.state={
           
            url:"https://th.bing.com/th/id/OIP.K-4RqDC6zFrpAG31ayDDOgHaHa?rs=1&pid=ImgDetMain"
        }
    }
    changeToAngular(){
        this.setState({
            url:"https://cdn.searchenginejournal.com/wp-content/uploads/2019/04/the-seo-guide-to-angular-1520x800.png"
        })     
    }
    changeToReact(){
        this.setState({
            url:"https://th.bing.com/th/id/OIP.K-4RqDC6zFrpAG31ayDDOgHaHa?rs=1&pid=ImgDetMain"
        })
    }
    render(){
        return(
            <>
            <div style={{height:"500px",width:"400px",margin:"50px auto",padding:"20px",textAlign:"center",boxShadow:"0px 0px 10px black"}}>

                <img src={this.state.url} alt="no image" height={250} width={250}/><br/><br/>

                <button onClick={()=>this.changeToReact()} style={{margin:"50px"}}>React</button> <br/>
                <button onClick={()=>this.changeToAngular()} style={{margin:"50px"}}>Angular</button>




            </div>
            
            
            </>
        )
    }

}
export default Example3