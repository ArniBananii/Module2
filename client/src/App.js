import React from "react";
import HomeScreen from "./view/HomeScreen";
import ProfileScreen from "./view/ProfileScreen";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SearchParamContextProvider } from "../src/context/SearchParamContext.jsx";
import Login from "./components/ProfileScreen/Login.jsx";
import ProtectedRoute from "./context/ProtectedRoute.jsx";
import SignUp from "./components/ProfileScreen/SignUp.jsx";
import NavBar from "./components/NavBar.jsx";
import { LogOutContextProvider } from "./context/LogOutContext";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <LogOutContextProvider>
          <NavBar />
          <Routes>
            <Route
              path="/"
              element={
                <SearchParamContextProvider>
                  <HomeScreen />
                </SearchParamContextProvider>
              }
            ></Route>

            <Route
              path="/profile/:user"
              element={
                <ProtectedRoute>
                  <ProfileScreen />
                </ProtectedRoute>
              }
            ></Route>
            <Route path="/login" element={<Login />}></Route>

            <Route path="/signup" element={<SignUp />}></Route>
          </Routes>
        </LogOutContextProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
