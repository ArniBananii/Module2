import React from "react";
import useFetch from "../util/useFetch";

function ProfileScreen() {
  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2MmI1OWVmZmNmMWJhMDdlNzMyYWYwZWIiLCJpc3MiOiJSaXNlLVRDRyIsImlhdCI6MTY1NjU5Mzk0NiwiZXhwIjoxNjU2NzY2NzQ2fQ.KGfFVLRkvKaiuXIIzKWr5G59s1pfEaI01z39SQ2g_7I";
  const myHeaders = new Headers();
  myHeaders.append("Authorization", `Bearer ${token}`);
  const requestOptions = {
    method: "GET",
    headers: myHeaders,
  };

  const { response, isLoading, error } = useFetch(
    "http://localhost:3001/api/v1/profile",
    requestOptions
  );
  console.log("response profile", response);
  console.log("isLoading", isLoading);
  console.log("error", error);

  return (
    <div>
      ProfileScreen
      {
        <div>
          <p>{!isLoading ? response.userName : "loading"}</p>
          <p>{!isLoading ? response.email : "Loading"}</p>
        </div>
      }
    </div>
  );
}

export default ProfileScreen;
