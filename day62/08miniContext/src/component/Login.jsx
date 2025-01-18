import React, { useState, useContext } from "react";
import UserContext from "../context/UserContext";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { setUser } = useContext(UserContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    setUser({ username, password });
  };

  return (
    <>
      <div className="flex flex-wrap justify-center items-center flex-col mt-6 ">
        <h2 className="text-white text-3xl font-semibold mb-3">Login</h2>
        <input
          className="text-xl rounded-sm px-2 py-1 m-2"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          type="text"
          placeholder="username"
        />
        <input
          className="text-xl rounded-sm px-2 py-1 m-2"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="password"
        />
        <button
          className="text-xl text-black font-semibold bg-gray-100 mt-3 px-5 py-1 rounded-sm hover:bg-gray-700 hover:text-white duration-200"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </div>
    </>
  );
}

export default Login;
