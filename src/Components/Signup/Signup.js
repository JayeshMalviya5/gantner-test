import React, { useState } from "react";
import "./Signup.css";
import { Link, useHistory, useNavigate } from 'react-router-dom';
function Signup() {
  const navigate = useNavigate();
  const [users, setUsers] = useState("");
  const [details, setDetails] = useState({
    userName: "",
    password: "",
    mobile: "",
  });

  const handleDetails = (event) => {
    const { name, value } = event.target;
    const newDetails = { ...details, [name]: value };
    setDetails(newDetails);
  };

  const saveDetails = () => {
    const data = `${details.userName},${details.password}`
    localStorage.setItem('user', JSON.stringify(data));
    // Redirect to dashboard
    navigate('/');

  };
  return (
    <>
      <div className="Scontainer">
        <div className="SloginContainer">
          <div className="login">Signup</div>
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
          <div className="Smobile">
            <label htmlFor="">Mobile</label>
            <div className="Sinput">
              <input
                type="text"
                value={details.mobile}
                name="mobile"
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
          <button className="SloginButton" onClick={saveDetails}>
            Signup
          </button>
          <div>
          <Link to="/">Click to Go on Login page</Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Signup;
