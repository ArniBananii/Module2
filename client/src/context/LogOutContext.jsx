import React from "react";
import { createContext } from "react";
import { useNavigate } from "react-router-dom";

export const LogOutContext = createContext();

export const LogOutContextProvider = (props) => {
  const navigate = useNavigate();
  const logOut = () => {
    localStorage.clear();
    navigate("/login");
  };

  return (
    <LogOutContext.Provider value={{ logOut }}>
      {props.children}
    </LogOutContext.Provider>
  );
};
