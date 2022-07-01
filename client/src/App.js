import HomeScreen from "./view/HomeScreen";
import ProfileScreen from "./view/ProfileScreen";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <HomeScreen />
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
