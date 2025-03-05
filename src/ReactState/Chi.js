import React from "react";

class Chi extends React.Component{
    render(){
        return(
            <>
            <h3>This is Child component</h3>
            <h3>{this.props.content}</h3>

            <button onClick={this.props.click}>Click here</button>
            
            
            </>
        )
    }
}
export default Chi