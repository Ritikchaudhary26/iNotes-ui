import React, { useState } from 'react'
import img3 from "../Images/images3.png"
const Register = () => {
  const [credentials,setCredentials]=useState({name:"",email:"",password: "",cpassword: ""})
  
  const handleSubmit= async(e)=>{
    e.preventDefault();
    console.log("here")
    const {name,email,password} = credentials;
    const response = await fetch("http://localhost:5000/api/auth/createuser",{
      method:'POST',
      headers:{
        "Content-Type": "application/json",
        
      },
      body:JSON.stringify({name,email,password})
    });
    const json = await response.json()
    console.log(json)
    
    if (json.success) {
      localStorage.setItem('token',json.authtoken)
      window.location="/Main"
    } else {
      alert("Register your account with valid credentials")
    }

  }
  const handleChange =(e)=>{
    setCredentials({...credentials,[e.target.name]:e.target.value})
  }
  return (
    
    <section className="Form my-4 mx-5 ">
    <div className="container">
      <div className="row content  no-gutters" >
        
        <div className="col-lg-5 x-5 pt-5 pl-5">
        <img src={img3} className="img-fluid"/>
        </div>
        <div className="col-lg-7 px-5 pt-5">
          <h1 className="font-weight-bold py-3">Sign-Up</h1>
          <h4>Create your account</h4>
          <form onSubmit={handleSubmit}>
          <div className="form-row">
              <div className="col-lg-7">
                    <input type="name" placeholder=" Your Name" alt="" id='name' name='name' className="form-control my-2 p-3" onChange={handleChange}/>
              </div>
            </div>
            <div className="form-row">
              <div className="col-lg-7">
                    <input type="email" placeholder=" Email-address" alt=""  id="email" name='email' className="form-control my-2 p-3" onChange={handleChange}/>
              </div>
            </div>
            <div className="form-row">
              <div className="col-lg-7">
                    <input type="password" placeholder="Password" alt="" id='password' name='password' className="form-control my-2 p-3" onChange={handleChange} minLength={5} required/>
              </div>
            </div>
            <div className="form-row">
              <div className="col-lg-7">
                    <input type="password" placeholder="Confirm Password"  id="cpassword" name='cpassword' alt="" className="form-control my-2 p-3" onChange={handleChange} minLength={5} required/>
              </div>
            </div>
            <div className="form-row">
              <div className="col-lg-7 p-2">
                    <button type="submit" className="btn1 ">Sign-Up</button>
              </div>
            </div>

         
          </form>
        </div>
      </div>
    </div>
    
  </section>
  
);
  
}

export default Register
