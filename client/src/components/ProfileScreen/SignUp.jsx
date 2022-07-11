import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../../Constants/Local";

function SignUp(props) {
  const [newUser, setNewUser] = useState({});
  const [loginFail, setLoginFail] = useState(null);
  let navigate = useNavigate();
  const handleChangeHandler = (e) => {
    setNewUser({ ...newUser, [e.target.name]: e.target.value });
  };

  const signUp = async () => {
    //verify all necessary fields are filled
    // verify email / password length and strength with Reßgex

    let urlencoded = new URLSearchParams();
    urlencoded.append("userName", newUser.userName);
    urlencoded.append("email", newUser.email);
    urlencoded.append("password", newUser.password);

    let requestOptions = {
      method: "POST",
      body: urlencoded,
    };
    try {
      const response = await fetch(`${BASE_URL}/signup`, requestOptions);
      if (response.status === 200) {
        navigate("/login", { replace: true });
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
          //! Pic upload comes later
          {/* <form>
          <input type="file" onChange={attachFileHandler} />
          <button onClick={submitForm}>Upload picture</button>
        </form>
        {newUser.avatarPicture && (
          <img src={newUser.avatarPicture} alt="userPic" />
        )} */}
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
