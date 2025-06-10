import React, { useState, useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Typography } from "@mui/material";
import { toast } from "react-toastify";
import { AuthContext } from "../api/AuthContext";

function Login() {
  const navigate = useNavigate();
  const { setUser } = useContext(AuthContext);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const inputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const url = "http://localhost:2345/userlogin";
    const requestData = {
      email: formData.email,
      password: formData.password,
    };

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(requestData),
      });

      const query = await response.json();
      console.log(query);

      if (response.status === 200) {
        toast.success("Login Successful!", {
          position: "top-center",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: false,
          progress: undefined,
        });

        setTimeout(() => {
          const userObject = {
            accesstoken: query.accesstoken,
            refreshtoken: query.refreshtoken,
            name: query.name,
            _id: query._id,
          };

          sessionStorage.setItem("user", JSON.stringify(userObject));

          setUser({
            name: query.name,
            userId: query._id,
            accesstoken: query.accesstoken,
            refreshtoken: query.refreshtoken,
          });

          navigate("/");
        }, 2000);
      } else {
        toast.error(query.message || "Something went wrong", {
          position: "top-center",
          autoClose: 3000,
        });
      }
    } catch (error) {
      console.error("Login failed:", error);
      toast.error("Login failed. Please try again.", {
        position: "top-center",
        autoClose: 3000,
      });
    }
  };

  return (
    <div className="min-h-screen bg-[#e3e6f3] text-gray-900 flex justify-center">
      <div className="max-w-screen-xl m-0 sm:m-10 bg-[#e3e6f3] flex justify-center flex-1">
        <div className="w-4/5 h-[60vh] md:h-auto md:w-[50%] lg:w-[41.66666%] p-12 pt-18 lg:p-16 bg-white mt-10 md:mt-3">
          <div className="text-center mb-8">
            <Typography variant="h4">Login</Typography>
          </div>
          <div className="mt-6">
            <form onSubmit={handleSubmit}>
              <input
                className="w-full px-4 py-2 mb-8 border rounded"
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={inputChange}
                required
              />
              <input
                className="w-full px-4 py-2 mb-8 border rounded"
                type="password"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={inputChange}
                required
              />
              <button
                className="w-full py-2 bg-indigo-500 text-white rounded hover:bg-indigo-700"
                type="submit"
              >
                Login
              </button>
            </form>
            <div className="mt-4 text-center">
              <p>
                Don't have an account?{" "}
                <Link to="/signup" className="text-blue-600 hover:underline">
                  Signup
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
