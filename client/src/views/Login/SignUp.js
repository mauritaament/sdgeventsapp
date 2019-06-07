import React, {useState} from "react";
import {SignUpAuth} from "../../services/AuthFirebaseService.js";
import {Link} from 'react-router-dom'

export default function SignUp(props){
  let [email,setEmail]=useState("email");
  let [password,setPassword]=useState("password");

  async function onClickSignUp(e){
    e.preventDefault(); //HTML5 has builtin default behaviors that needs to me overriden
    try {
      SignUpAuth.SignUpAuth(email, password)

    }
    catch {

    }
  }
  return (
      <div>
        <h3>Sign Up</h3>
        <form className="needs-validation" noValidate>
          <div className="form-group">
            <label>email</label>

            <input type="email" className='form-control' placeholder="email" name="email"  value ={email} onChange={(e)=>setEmail(e.target.value)}/>
          </div>

          <div className="form-group">
            <label>Password</label>

            <input type="password" className="form-control" placeholder="Password" name="password"  value={password} onChange={(e)=>setPassword(e.target.value)}/>
          </div>
          <button className="btn btn-primary" onClick={(e)=>onClickSignUp(e)}>Sign Up</button>
          <p>
            Go back to <Link to="/login">Log In</Link>
          </p>
        </form>
      </div>
  );

}