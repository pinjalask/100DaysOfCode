import React from "react";
import UserContextProvider from "./context/UserContextProvider";
import Login from "./component/Login";
import Profile from "./component/Profile";

function App() {
  return (
    <UserContextProvider>
      <h1 className="text-white text-5xl font-semibold text-center">
        Context in React
      </h1>
      <Login />
      <Profile />
    </UserContextProvider>
  );
}

export default App;
