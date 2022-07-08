import React from "react";
import HomeScreen from "./view/HomeScreen";
import ProfileScreen from "./view/ProfileScreen";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SearchParamContextProvider } from "../src/context/SearchParamContext.jsx";

function App() {
  return (
    <div className="App">
      <SearchParamContextProvider>
        <HomeScreen />
      </SearchParamContextProvider>
      {/* <BrowserRouter>
        <Route path="/" element={<HomeScreen />}>
          {" "}
        </Route>
        <Route path="/profile/:userId"> </Route>
        <ProfileScreen />
      </BrowserRouter> */}
    </div>
  );
}

export default App;
