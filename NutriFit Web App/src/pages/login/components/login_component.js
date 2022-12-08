// import { useState } from 'react';
import  React, { Component } from "react";
import { Link } from "react-router-dom";
// import { useState } from 'react';
// const [isLoggedin, setIsLoggedin] = useState(false)

// const logout = () => {
//   localStorage.removeItem('token-info');
//   setIsLoggedin(false);
// }

// function logout (){
//   return (
//     localStorage.removeItem('token-info');
//   setIsLoggedin(false);

//   );
// }
// const logout = () => {
// 	return (
// 		<>
    
//     setIsLoggedin(false);
			
// 		</>
// 	);
// };



export default class Login extends Component {

  
  
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  
  handleSubmit(e) {
    e.preventDefault();
    const { email, password } = this.state;
    console.log(email, password);
    fetch("http://localhost:2010/login-user", {
      method: "POST",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "userRegister");
        if (data.status == "ok") {
          alert("login successful");
          window.localStorage.setItem("token", data.data);
          window.location.href = "/";
          // setIsLoggedin(true);
          // window.location.href = "";
          // <Link to="/" >
				  // </Link>
        }
      });
      
      
      
      
  }
  
  
  render() {
    return (
     
      
    <>
     {/* if (isLoggedin) {
      <>
      <h1>User is logged in</h1>
        <button onClickCapture={logout}>logout user</button>
      </>
     } else { */}
      
     
      
      <form className="loginsubmit" onSubmit={this.handleSubmit}>
        <h3>Sign In</h3>

        <div className="mb-3">
          <label>Email address</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
            onChange={(e) => this.setState({ email: e.target.value })}
          />
        </div>

        <div className="mb-3">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
            onChange={(e) => this.setState({ password: e.target.value })}
          />
        </div>

        <div className="mb-3">
          <div className="custom-control custom-checkbox">
            <input
              type="checkbox"
              className="custom-control-input"
              id="customCheck1"
            />
            <label className="custom-control-label" htmlFor="customCheck1">
              Remember me
            </label>
          </div>
        </div>

        <div className="d-grid">
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
        <p className="forgot-password text-right">
          <a href="/sign-up">Sign Up</a>
        </p>
      </form>
 
      
      </>
        // <>
        //   <h1>User is logged in</h1>
        //   <button onClickCapture={logout}>logout user</button>
        //   </>
        // )}
    );
  }
}
