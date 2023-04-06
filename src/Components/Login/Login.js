import React, { useState } from "react";
import "./Login.css";
import { FormControl, FormLabel } from "@chakra-ui/react";

// import Navbar from "../Navbar/Navbar";
import { Link, Navigate, useNavigate } from "react-router-dom";
function Login() {
  const navigate = useNavigate();
  const [details, setDetails] = useState({
    userName: "",
    password: "",
  });

  const handleDetails = (event) => {
    const { name, value } = event.target;
    const newDetails = { ...details, [name]: value };
    setDetails(newDetails);
  };


  const handleLogin = async (event) => {
    // console.log(data)
    event.preventDefault();
    const data = `"${details.userName},${details.password}"`
    console.log(data.toString)
    console.log(data)
    const local_data = localStorage.getItem("user")
    console.log(local_data)
    if(data.toString() == local_data){
      navigate("/landing")
    }else{
      alert("enter correct credentials")
    }
  }
 

  return (
    <>
      <div className="Scontainer">
        <div className="SloginContainer">
          <div className="login" style={{fontWeight: 800, marginBottom:"10px"}}>Login</div>
          <div className="SuserName">
            <label htmlFor="">EmailID</label>
            <div className="Sinput">
              <input
                type="text"
                value={details.userName}
                name="userName"
                onChange={handleDetails}
              />
            </div>
          </div>
          <div className="Spassword">
            <label htmlFor="">Password</label>
            <div className="Sinput">
              <input
                type="text"
                value={details.password}
                name="password"
                onChange={handleDetails}
              />
            </div>
          </div>
          <button className="SloginButton" onClick={handleLogin}>
            Login
          </button>
          <div>
          <Link to="/signup">Click to Go on Signup page</Link>
          </div>
        </div>
      </div>
      </>
  );
}

export default Login;
