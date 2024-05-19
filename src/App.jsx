import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import SignUp from "../Pages/SignUp";
import APOD from "../Pages/APOD";
import MarsRover from "../Pages/MarsRover";
//import Earth from "../Pages/Earth";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" exact element={<Login />} />
        <Route path="/" exact element={<Home />} />

        <Route path="/signup" exact element={<SignUp />} />
        <Route path="/apod" exact element={<APOD />} />
        <Route path="/marsrover" exact element={<MarsRover />} />
      </Routes>
    </Router>
  );
};

export default App;
/*
import React, { useState } from "react";
import axios from "axios";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:5001/api/users/login",
        {
          email,
          password,
        }
      );
      console.log(response.data);
      localStorage.setItem("accessToken", response.data.accessToken);
      // Redirect to home page after successful login
      window.location.href = "/apod";
    } catch (error) {
      console.error("Login error:", error.response.data);
      setError(error.response.data.error);
    }
  };

  return (
    <div>
      <h2>Login</h2>
      {error && <p>{error}</p>}
      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
*/
