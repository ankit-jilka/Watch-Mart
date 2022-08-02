import React from 'react'
import { useUserAuth } from "../../context/UserAuthContext";
import { Link, useNavigate } from "react-router-dom";
import $ from 'jquery';

const Uname = () => {
    const { logOut, user } = useUserAuth();
    const navigate = useNavigate();
   
    if(!window.isRegiLogin){     
        $("#unameBtn").hide();
    }
    else{
        $("#unameBtn").show();
    }

    const handleLogout = async () => {
        try {  
          await logOut();

          window.isRegiLogin = false;
          $("#unameBtn").hide();
          navigate("/");
        } catch (error) {
          console.log(error.message);
        }
      };

    return (
    <div className="dropdown">
    <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false" id="unameBtn">
        {user && user.email}
    </button>
    <ul className="dropdown-menu">
      <li><Link className="dropdown-item" to="/profile" >Profile</Link></li>
      <li><button className="dropdown-item" onClick={handleLogout}>Logout</button></li>
    </ul>
  </div>
  )
}

export default Uname
