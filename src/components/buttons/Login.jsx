import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUserAuth } from "../../context/UserAuthContext";
import $ from 'jquery';


const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  
  const { logIn, googleSignIn } = useUserAuth();
  const navigate = useNavigate();
  
  if(window.isRegiLogin){
    $('#LoginBut').hide(); 
  }
  else{
    $('#LoginBut').show();
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await logIn(email, password);
      window.isRegiLogin = true;
      $('#LoginModal .btn-close').click();
      navigate("/");     
     
    
    } catch (err) {
      setError(err.message);
    }
  };

  const handleGoogleSignIn = async (e) => {
    e.preventDefault();
    try {
      await googleSignIn();
      window.isRegiLogin = true;
      $('#LoginModal .btn-close').click();
      navigate("/");
    } catch (error) {
      console.log(error.message);
    }
  };
    return (
        <div>    
            <button type="button" className="btn btn-primary ms-auto" data-bs-toggle="modal" data-bs-target="#LoginModal" id="LoginBut">
              <span className='fa fa-sign-in me-2'></span>Login
            </button>
        {/* Modal */}
        <div className="modal fade" id="LoginModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">Login</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
              </div>
              
              <div className="modal-body">
              <h3>{error && <h4 className="text-danger">Your Email or Password Incorrect</h4>}</h3>
              
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                  <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={(e) => setEmail(e.target.value)}/>
               </div>
               <div className="mb-3">
                   <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                   <input type="password" className="form-control" id="exampleInputPassword1"  onChange={(e) => setPassword(e.target.value)}/>
               </div>
              <button type="submit" className="btn btn-outline-primary w-100">Submit</button>
              </form>
              
            </div>
            
              <h2 className='text-center'>OR</h2><br/>
              <button className="btn btn-primary w-80 mb-4" onClick={handleGoogleSignIn}>
                   <span className='fa fa-google me-2'></span>Sign in with Google 
              </button>
              
            </div>
          </div>
        </div>
        </div>
    )
}

export default Login;