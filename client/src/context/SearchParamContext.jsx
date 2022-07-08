import React from "react";
import { createContext, useState } from "react";

export const SearchParamContext = createContext();

export const SearchParamContextProvider = (props) => {
  const [searchParams, setSearchParams] = useState([]);

  return (
    <SearchParamContext.Provider value={{ searchParams, setSearchParams }}>
      {props.children}
    </SearchParamContext.Provider>
  );
};
