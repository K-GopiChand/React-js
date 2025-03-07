import React,{useState} from "react";
import './ex5.css'
function Validation(){
    const[formData,setformData]=useState({
        name:'',
        phone:'',
        email:'',password:'',confirmpass:''
    })
    const[formError,setFormError]=useState(false)
    const[passErr,setPassErr]=useState(false)
    const[success,setSuccess]=useState(false)
   const handleChange = (event)=>{
          let name=event.target.name
          let value=event.target.value
          setformData({...formData,[name]:value})
     }
     let handleSubmit=(event)=>{
        event.preventDefault()
        console.log(formData)
        if(formData.name=='' || formData.phone==''|| formData.email==''|| formData.password==''|| formData.confirmpass==''){
            setFormError(true)
        }
        else if(formData.password!==formData.confirmpass){
              setPassErr(true)
              setFormError(false)
        }
        else{
            setSuccess(true)
            setFormError(false)
            setPassErr(false)

        }
     }


    return(
        <>
         
        <div className="container">
        <h1>Registration page</h1>
            <form className="formcontainer" onSubmit={handleSubmit}>
                <label>Enter username</label>
                <input type="text" name="name" value={formData.name}
                onChange={handleChange}/>
                <br/><br/>
                <label>Phone number</label>
                <input type="tel" name="phone" value={formData.phone}
                onChange={handleChange}/>
                <br/><br/>
                <label>Email ID</label>
                <input type="email" name="email" value={formData.email}
                onChange={handleChange}/>
                <br/><br/>
                <label>Password</label>
                <input type="password" name="password" value={formData.password}
                onChange={handleChange}/><br/><br/>
                <label>Confirm password</label>
                <input type="password" name="confirmpass" value={formData.confirmpass}
                onChange={handleChange}/>
                <br/><br/>
                <button type="submit">Submit</button>
            </form>
            <center>
                <p>{formError && "Please fil all the fields"}</p>
                <p>{passErr && "Password does not match"}</p>
                <p>{success && "Form submitted successfully"}</p>
            </center>
        </div>
        </>
    )
}
export default Validation