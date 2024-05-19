import React, { useState } from "react";
import axios from "axios"; // Import Axios

import PasswordInput from "../src/components/PasswordInput";
import { Link, useNavigate } from "react-router-dom";
import Button from "../src/components/Button";
import { validateEmail } from "../src/utils/helper";
import Header from "../src/components/Header";

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState(""); // State for success message
  const navigate = useNavigate();

  const handlesignUp = async (e) => {
    e.preventDefault();
    if (!name || !email || !password) {
      setError("All fields are mandatory");
      return;
    }
    setError("");

    try {
      console.log("working1");
      const response = await axios.post(
        "http://localhost:5001/api/users/register",
        {
          username: name,
          email: email,
          password: password,
        }
      );
      console.log("working2");
      if (response.data && response.data.error) {
        setError(response.data.message);
      } else {
        setSuccessMessage("Account created successfully!");
        navigate("/login");
        setTimeout(() => {
          setName("");
          setEmail("");
          setPassword("");
          setSuccessMessage("");
        }, 3000);
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
        custompaddings
        id="login"
      >
        <div className="container flex justify-center">
          <div className="p-0.5 rounded-2xl bg-[conic-gradient(var(--tw-gradient-stops))] from-purple-600 via-pink-600 to-blue-600">
            <div className="bg-n-8 rounded-[1rem]">
              <div className="items-center justify-center mb-3">
                <div className="w-96 rounded px-7 py-10">
                  <form onSubmit={handlesignUp}>
                    <h4 className="text-2xl text-center mb-3">Sign Up</h4>

                    <div className="flex items-center bg-transparent border-[1.5px] px-5 rounded mb-3">
                      <input
                        type="text"
                        placeholder="Name"
                        className="relative w-full text-sm bg-transparent px-1 rounded py-3 outline-none"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                      />
                    </div>
                    <div className="flex items-center bg-transparent border-[1.5px] px-5 rounded mb-3">
                      <input
                        type="text"
                        placeholder="Email"
                        className="relative w-full text-sm bg-transparent px-1 rounded py-3 outline-none"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>
                    <PasswordInput
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                    {error && (
                      <p className="mb-3 text-color-3 text-xs pb-1">{error}</p>
                    )}
                    {successMessage && (
                      <p className="mb-3 text-color-3 text-xs pb-1">
                        {successMessage}
                      </p>
                    )}
                    <div className="text-center relative mt-20 mb-3 md:mb[6rem] lg:mb:[6rem] left-1/2 w-[234%] -translate-x-1/2">
                      <Button type="submit" onClick={{ handlesignUp }} white>
                        Create Account
                      </Button>
                    </div>
                    <p className="text-sm text-center">
                      Already have an account ?{" "}
                      <Link to="/login" className="text-primary underline">
                        Log In
                      </Link>
                    </p>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
