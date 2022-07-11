import React, { useEffect } from "react";
import SignUp from "../components/ProfileScreen/SignUp.jsx";
import { BASE_URL } from "../Constants/Local.js";
import { getToken } from "../util/getToken.js";
import { getUser } from "../util/getUser.js";
import useFetch from "../util/useFetch";

function ProfileScreen() {
  let token = getToken();
  const user = getUser();
  console.log("user", user.userName);
  const header = new Headers();
  header.append("Authorization", `Bearer ${token}`);

  const requestOptions = {
    method: "GET",
    headers: header,
  };
  const { response, isLoading, error } = useFetch(
    `${BASE_URL}/profile`,
    requestOptions
  );
  console.log("response", response);
  return (
    <div>{!isLoading ? <p>{response.email}</p> : <p>...isLoading</p>}</div>
  );
}

export default ProfileScreen;
