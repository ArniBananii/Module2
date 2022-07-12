import React, { useEffect } from "react";
import "../style/ProfileScreen_style.css";
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
    <>
      {!isLoading ? (
        <div className="container">
          <div className="Profile-display">
            <div className="Profile-image">
              <img
                style={{
                  width: "125px",
                  height: "125px",
                  borderRadius: "28px",
                }}
                src={response.avatarPicture}
                alt=""
              />
            </div>
            <div className="Profile-name">{response.userName}</div>
            <div className="Profile-email">{response.email}</div>
            <div className="collection-container"></div>
          </div>
        </div>
      ) : (
        <p>...Loading...</p>
      )}
    </>
  );
}

export default ProfileScreen;
