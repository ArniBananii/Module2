import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { LogOutContext } from "../context/LogOutContext";

import { getUser } from "../util/getUser";

export default function NavBar() {
  const { logOut } = useContext(LogOutContext);
  let user = getUser();

  return (
    <div className="Navbar-style">
      <nav>
        <Link to="/">Cards</Link> |
        <Link to={user ? `/profile/${user}` : "/login"}>Profile</Link> |
        {user ? " " : <Link to="/signup">Signup</Link>}
        {user ? <button onClick={logOut}>Logout</button> : ""}
      </nav>
    </div>
  );
}
