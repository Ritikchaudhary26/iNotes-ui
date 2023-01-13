import React, { useState } from "react";
import img1 from "../Images/images.jpg"
import "./Login.css";
import { Alert, Nav } from "react-bootstrap";




const Loginscreen = () => {
  const [credentials,setCredentials]=useState({email:"",password: ""})
  
  const handleSubmit= async(e)=>{
    e.preventDefault();
    console.log("here")
    const response = await fetch("http://localhost:5000/api/auth/login",{
      method:'POST',
      headers:{
        "Content-Type": "application/json",
        
      },
      body:JSON.stringify({email:credentials.email,password: credentials.password})
    });
    const json = await response.json()
    console.log(json)
    
    if (json.success) {
      localStorage.setItem('token',json.authtoken)
      window.location="/Main" 
    } else {
      alert(   )
    }

  }
  const handleChange =(e)=>{
    setCredentials({...credentials,[e.target.name]:e.target.value})
  }
  return (
            <form onSubmit={handleSubmit}>
    <section className="Form my-4 mx-5 ">
      <div className="container">
        <div className="row content  no-gutters" >
          
          <div className="col-lg-5 x-5 pt-5 pl-5">
          <img src={img1} className="img-fluid" />
          <button className="btn"></button>   
          </div>
            
          <div className="col-lg-7 px-5 pt-5">
            <h1 className="font-weight-bold py-3">Login</h1>
            <h4>Sign into your account</h4>
              <div className="form-row">
                <div className="col-lg-7">
                      <input type="email"  placeholder=" Email-address" className="form-control my-2 p-3" value={credentials.email} id="email" onChange={handleChange} name="email" rules={{
              required:"Email is required",
            }}/>
                </div>
              </div>
              <div className="form-row">
                <div className="col-lg-7">
                      <input type="password" placeholder="**********"  className="form-control my-2 p-3" value={credentials.password} id='password' onChange={handleChange} name="password"/>
                </div>
              </div>
              <div className="form-row">
                <div className="col-lg-7 p-2">
                      <button type="submit" className="btn1 " >Login</button>
                </div>
              </div>

              <p className="" style={{cursor:"pointer", color:"blue" }}> <Nav.Link href="/Register">Click here to Sign-up</Nav.Link> </p>
            
          </div>
        </div>
      </div>
      
    </section> 
    </form>
  );
};

export default Loginscreen;
