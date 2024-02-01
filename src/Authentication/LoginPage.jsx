import React from "react";
import "./LoginCss.css";

function LoginPage(){
  return(
    <div className="fbody">
<div className="Login-Box">
<h3>Sign In</h3>
<div className="AllTextField">
  <div className="textfield">
    <label>UserEmail</label>
    <input type="text" placeholder="Email" />
  </div>
  <div className="textfield">
    <label>UserPassword</label>
    <input type="text" placeholder="Password" />
  </div>
  <button>Sign In</button>
</div>
</div>  
</div>
  )
}
export default  LoginPage;

