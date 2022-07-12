import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { BASE_URL, DEFAULT_PICTURE, REGEX } from "../../Constants/Local";

function SignUp(props) {
  const [newUser, setNewUser] = useState({});
  const [loginFail, setLoginFail] = useState(null);
  let navigate = useNavigate();
  const handleChangeHandler = (e) => {
    setNewUser({ ...newUser, [e.target.name]: e.target.value });
  };

  const emailValidator = () => {
    if (REGEX.test(newUser.email)) {
      return true;
    } else {
      return false;
    }
  };
  const signUp = async () => {
    //verify all necessary fields are filled
    // verify email / password length and strength with Reßgex

    let urlencoded = new URLSearchParams();
    urlencoded.append("userName", newUser.userName);
    urlencoded.append("email", newUser.email);
    urlencoded.append("password", newUser.password);
    urlencoded.append("avatarPicture", DEFAULT_PICTURE);

    let requestOptions = {
      method: "POST",
      body: urlencoded,
    };
    try {
      if (emailValidator) {
        const response = await fetch(`${BASE_URL}/signup`, requestOptions);
        if (response.status === 200) {
          navigate("/login", { replace: true });
        }
      } else {
        console.log("error", "email not valid");
      }
    } catch (error) {
      console.log("error", error);
    }
  };
  return (
    <div>
      <form>
        <div className="Signup-style">
          <div>
            <label htmlFor="username">Username</label>
            <input
              id="username"
              type="text"
              value={newUser.userName ? newUser.userName : ""}
              name="userName"
              onChange={handleChangeHandler}
              placeholder="enter username"
              required
            />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              value={newUser.email ? newUser.email : ""}
              name="email"
              onChange={handleChangeHandler}
              placeholder="enter email"
              required
            />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input
              id="password"
              type="password"
              value={newUser.password ? newUser.password : ""}
              name="password"
              onChange={handleChangeHandler}
              placeholder="enter password"
              required
            />
          </div>
        </div>
        <button type="submit" onClick={signUp}>
          Signup
        </button>
        {loginFail && <p>That user already Exists</p>}
      </form>
    </div>
  );
}

export default SignUp;
