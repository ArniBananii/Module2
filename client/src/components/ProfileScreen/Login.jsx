import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../../Constants/Local";
import "../../style/Login.css";

export default function Login() {
  const [loginUser, setLoginUser] = useState({});

  const navigate = useNavigate();

  const handleChangeHandler = (e) => {
    setLoginUser({ ...loginUser, [e.target.name]: e.target.value });
  };

  const logIn = async () => {
    let urlencoded = new URLSearchParams();
    urlencoded.append("email", loginUser.email);
    urlencoded.append("password", loginUser.password);

    let requestOptions = {
      method: "POST",
      body: urlencoded,
    };

    try {
      const response = await fetch(`${BASE_URL}/login`, requestOptions);
      const result = await response.json();
      const { token, user } = result;
      console.log("user", user.userName);
      if (token) {
        localStorage.setItem("token", token);
        localStorage.setItem("user", user.userName);

        navigate(`/profile/${user.userName}`);
      } else {
        console.log("error seting token");
      }
    } catch (error) {
      console.log("login error", error);
    }
  };
  return (
    <div>
      <h2>Login</h2>

      <div className="container">
        <div>
          <label htmlFor="email">Email</label>
          <input
            id="Login-email"
            type="email"
            value={loginUser.email ? loginUser.email : ""}
            name="email"
            onChange={handleChangeHandler}
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            id="login-password"
            type="password"
            value={loginUser.password ? loginUser.password : ""}
            name="password"
            onChange={handleChangeHandler}
          />
        </div>
        <button onClick={logIn}>Login</button>
      </div>
    </div>
  );
}
