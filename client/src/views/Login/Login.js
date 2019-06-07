import React from "react";
import Cookies from 'universal-cookie'
import * as COOKIENAMES from '../../helpers/CookieNames'
import {FireBaseAuthentication} from "../../services/AuthFirebaseService.js";
import history from "../../helpers/history";
const cookies = new Cookies();

export default class Login extends React.Component {
  constructor (props) {
    super(props);
    this.state={
      email:"",
      password:"",
      favorites: [],
      currentLocation: {},
      selectedLocation: {}
    };
  }

  handleFormChange(e){
    this.setState({[e.target.name]: e.target.value})
  }

  onClickLoginSubmit(e){
    e.preventDefault(); //HTML5 has builtin default behaviors that needs to me overriden
    FireBaseAuthentication.auth(this.state).then(resp => {
      try {
        if (resp.user) {
          cookies.set(COOKIENAMES.AUTHENTICATED, true)
          history.push('/home')
        }
        else{
          console.log("unable to login")
        }
      }
      catch
      {
        //TODO: input validation: find a way to catch and output errors on screen on the form.
      }
    });
  }

  render() {
    return (
        <div>
          <h3>Welcome, Please Login</h3>
          <form className="needs-validation" noValidate>
            <div className="form-group">
              <label>email</label>
              <input type="email" className='form-control' placeholder="email" name="email"  value ={this.state.email} onChange={(e)=>this.handleFormChange(e)}/>
            </div>

            <div className="form-group">
              <label>Password</label>
              <input type="password" className="form-control" placeholder="Password" name="password"  value={this.state.password} onChange={(e)=>this.handleFormChange(e)}/>
            </div>
            <div className="form-group form-check">
              <input type="checkbox" className="form-check-input" id="exampleCheck1" />
              <label className="form-check-label" htmlFor="exampleCheck1">Remember Me</label>
            </div>

            <button className="btn btn-primary" onClick={(e)=>this.onClickLoginSubmit(e)}>Login</button>

            <div>
              <br />
              Don't have an account?<a href="./SignUp"> Sign Up</a>
            </div>
          </form>
        </div>
    );
  }
};
