import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../img/logo.png";
import axios from 'axios'

function Login() {
  const [signup, setSignup] = useState({
    name: "",
    password: "",
    email: "",
  });


  const [message, setMessage] = useState("");
  console.log("Message:", message);

  const [errors, setErrors] = useState({});

  const handleSignup = async (e) => {
    e.preventDefault();
    console.log("Signup button clicked");
    const validationErrors = validate();
    setErrors(validationErrors);
    setMessage("");
    if (Object.keys(validationErrors).length === 0) {
      const url = "http://localhost:2345/signup";
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(signup),
      });

      const json = await response.json();
      console.log(json);

      if (response.status === 200) {
        setMessage("User Registered Successfully. Please Login to continue.");
      } else if (response.status === 409) {
        setMessage("Email is already registered.");
        setErrors({ email: "Email is already registered" });
      } else {
        setMessage("User Not Registered Successfully");
      }
      
    }
  };

  
  const validate = () => {
    const errors = {};
    if (!signup.name.trim()) {
      errors.name = "Name is required";
    }
    if (!signup.email) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(signup.email)) {
      errors.email = "Email is invalid";
    }
    if (!signup.password) {
      errors.password = "Password is required";
    } else if (signup.password.length < 6) {
      errors.password = "Password must be at least 6 characters";
    }
    return errors;
  };

  const onInputChange = (e) => {
    const { name, value } = e.target;
    setSignup((prevSignup) => ({
      ...prevSignup,
      [name]: value,
    }));
  };

  return (
    <div className="min-h-screen bg-[#e3e6f3] text-gray-900 flex justify-center">
      <div className="max-w-screen-xl m-0 sm:m-10 bg-[#e3e6f3] shadow sm:rounded-lg flex justify-center flex-1">
        <div className="w-4/5 h-[125vh] md:h-auto md:w-[50%] lg:w-[41.66666%] p-6 sm:p-12 bg-white mt-10 md:mt-4 mb-10">
          <div>
            <div
              className="center flex flex-col flex-shrink-0 items-center"
              style={{
                display: "flex",
                alignContent: "center",
                justifyContent: "center",
              }}
            >
              <Link
                to="/"
                style={{
                  color: "#003135",
                  fontSize: "20px",
                  marginLeft: "50px",
                }}
              >
                <img src={Logo} className="logo w-40 pb-3" alt="" />
              </Link>
              <p className="mt-2 text-xl font-semibold bg-[#088178] text-transparent bg-clip-text italic">
                "Unlock Your Style"
              </p>
            </div>
          </div>
          <div className="mt-2 flex flex-col items-center mt-[-2.75rem]">
            <div className="w-full flex-1 mt-1">
              <div className="my-12 border-b-2  text-center">
                <div className="leading-none px-2 inline-block text-sm text-gray-600 tracking-wide font-medium bg-white transform translate-y-1/2">
                  Sign up with e-mail
                </div>
              </div>
              <div className="mx-auto max-w-xs">
                <input
                  className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                  type="text"
                  name="name"
                  value={signup.name}
                  placeholder="Name"
                  onChange={onInputChange}
                />
                {errors.name && (
                  <p className="text-red-600 text-sm">{errors.name}</p>
                )}

                <input
                  className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                  type="password"
                  name="password"
                  value={signup.password}
                  placeholder="Password"
                  onChange={onInputChange}
                />
                {errors.password && (
                  <p className="text-red-600 text-sm">{errors.password}</p>
                )}

                <input
                  className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                  type="email"
                  name="email"
                  value={signup.email}
                  placeholder="Email"
                  onChange={onInputChange}
                />
                {errors.email && (
                  <p className="text-red-600 text-sm">{errors.email}</p>
                )}
                <button
                  className="mt-5 tracking-wide font-semibold bg-indigo-500 text-gray-100 w-full py-4 rounded-lg hover:bg-indigo-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none"
                  onClick={(e) => handleSignup(e)}
                >
                  <span className="ml-3">Sign Up</span>
                </button>
                <p
                  className="mt-6 text-xs text-gray-600 text-center"
                  style={{ fontSize: "15px" }}
                >
                  Already have an account:
                  <Link
                    to="/login"
                    className="border-b border-gray-500 border-dotted text-blue-700 ml-1"
                  >
                    Login
                  </Link>
                </p>
              </div>
              {message && (
                <p className="mt-2 text-center text-sm text-red-600">
                  {message}
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
