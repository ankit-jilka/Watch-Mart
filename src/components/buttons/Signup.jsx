import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUserAuth } from "../../context/UserAuthContext";
import $ from 'jquery';

const Signup = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [password, setPassword] = useState("");
  const [uname, setUname] = useState("");
  
  const { signUp } = useUserAuth();
  let navigate = useNavigate();

    if(window.isRegiLogin){      
      $("#registerBut").hide();
    }
    else{
      $("#registerBut").show();
    }

    const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await signUp(email, password);
      window.isRegiLogin = true;
       $('#signModal .btn-close').click();
       navigate("/Watch-Mart");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <>
        <button type="button" className="btn btn-primary ms-4 me-3" data-bs-toggle="modal" data-bs-target="#signModal" id="registerBut">
          <span className='fa fa-user-plus me-2'></span>Register
        </button>
        
        {/* Modal */}
        <div className="modal fade" id="signModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">Register</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
              </div>
              <div className="modal-body">
              <h3>{error && <h4 className="text-danger">Email already in use</h4>}</h3>
              <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">UserName</label>
                    <input type="text" className="form-control" id="unameField"  onChange={(e) => setUname(e.target.value)}/>
                  </div>
                  <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="emailField" aria-describedby="emailHelp" onChange={(e) => setEmail(e.target.value)}/>
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                  </div>
                  <div className="mb-3">
                      <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                      <input type="password" className="form-control" id="pwdField"  onChange={(e) => setPassword(e.target.value)}/>
                  </div>

                <button type="submit" className="btn btn-outline-primary w-100">Register</button>
              </form>
              </div>
    
            </div>
          </div>
        </div>
    </>
  )
}

export default Signup
