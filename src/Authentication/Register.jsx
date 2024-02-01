import React  from "react";

function RegisterPage(){
    return(
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
    <div className="textfield">
      <label>Confirm UserPassword</label>
      <input type="text" placeholder="Password" />
    </div>
    <button>Sign Up</button>
  </div>
  </div>  
    )
  }
  export default  RegisterPage;