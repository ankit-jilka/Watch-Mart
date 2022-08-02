import React from 'react'
 import { useUserAuth } from "../context/UserAuthContext";
import { Link, useNavigate } from "react-router-dom";
import $ from 'jquery';

const Profile = () => {
     const { logOut, user } = useUserAuth();
    const navigate = useNavigate();
    return (
    <div>
            <img  id="profileId" src={process.env.PUBLIC_URL+"/imgs/hi.jpg"} alt="sorry"/>
            <h2 id="greeting">Hello {user.email}</h2>
            
    </div>
  )
}

export default Profile
