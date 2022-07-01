import React from "react";

function SignUp(props) {
  const { userName, email, password, avatarPicture } = props;
  return (
    <div>hello</div>
    // <div>
    //   <h2>Register</h2>
    //   <div className="container">
    //     <div>
    //       <label htmlFor="username">Username</label>
    //       <input
    //         id="username"
    //         type="text"
    //         value={newUser.userName ? newUser.userName : ""}
    //         name="userName"
    //         onChange={handleChangeHandler}
    //       />
    //     </div>
    //     <div>
    //       <label htmlFor="email">Email</label>
    //       <input
    //         id="email"
    //         type="email"
    //         value={newUser.email ? newUser.email : ""}
    //         name="email"
    //         onChange={handleChangeHandler}
    //       />
    //     </div>
    //     <div>
    //       <label htmlFor="password">Password</label>
    //       <input
    //         id="password"
    //         type="password"
    //         value={newUser.password ? newUser.password : ""}
    //         name="password"
    //         onChange={handleChangeHandler}
    //       />
    //     </div>
    //     <form>
    //       <input type="file" onChange={attachFileHandler} />
    //       <button onClick={submitForm}>Upload picture</button>
    //     </form>
    //     {newUser.avatarPicture && (
    //       <img src={newUser.avatarPicture} alt="userPic" />
    //     )}
    //   </div>
    //   <button onClick={signUp}>Signup</button>
    // </div>
  );
}

export default SignUp;
