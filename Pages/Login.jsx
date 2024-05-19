import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Header from "../src/components/Header";
import PasswordInput from "../src/components/PasswordInput";
import Button from "../src/components/Button";
import { validateEmail } from "../src/utils/helper";

// Import Button component

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    console.log("working 1");

    if (!validateEmail(email)) {
      setError("Please enter a valid email address.");
      return;
    }
    if (!password) {
      setError("Please enter a valid password.");
      return;
    }
    setError("");

    // Login API call
    try {
      console.log("working 2");
      const response = await axios.post(
        "http://localhost:5001/api/users/login",
        {
          email: email,
          password: password,
        }
      );
      console.log("working 3");
      if (response.data && response.data.accessToken) {
        localStorage.setItem("token", response.data.accessToken);
        navigate("/apod"); // Capitalize Navigate and use it as a component
      }
    } catch (error) {
      if (
        error.response &&
        error.response.data &&
        error.response.data.message
      ) {
        setError(error.response.data.message);
      } else {
        setError("An unexpected error occurred. Please try again");
      }
    }
  };

  return (
    <>
      <Header />
      <div
        className="container justify-center pt-[12rem] -mt-[5rem]"
        id="login"
      >
        <div className="container flex justify-center pt-12 mt-[-5rem]">
          <div className="container flex justify-center">
            <div className="p-0.5 rounded-2xl bg-[conic-gradient(var(--tw-gradient-stops))] from-purple-600 via-pink-600 to-blue-600">
              <div className="bg-n-8 rounded-[1rem]">
                <div className="items-center justify-center mb-3">
                  <div className="w-96 rounded px-7 py-10">
                    <form onSubmit={handleLogin}>
                      <h4 className="text-2xl text-center mb-3">Login</h4>
                      <div className="flex items-center bg-transparent border-[1.5px] px-5 rounded mb-3">
                        <input
                          type="text"
                          placeholder="Email"
                          className="relative w-full text-sm bg-transparent px-5 rounded py-3 outline-none"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                        />
                      </div>
                      <PasswordInput
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                      {error && (
                        <p className="text-red-500 text-xs pb-1">{error}</p>
                      )}
                      <p className="text-center text-xs mt-4">
                        Not Registered yet?{" "}
                        <Link
                          to="/signup"
                          className="underline hover:text-color-1"
                        >
                          Create an Account
                        </Link>
                      </p>
                    </form>
                  </div>
                </div>
              </div>
              <div className="text-center relative mb-[4rem] md:mb-20 lg:mb:[6rem]">
                <div className="absolute left-1/2 w-[234%] -translate-x-1/2">
                  <Button type="submit" onClick={handleLogin}>
                    Login
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
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
