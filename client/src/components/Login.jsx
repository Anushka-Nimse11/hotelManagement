import { useState } from "react";
import axios from "axios";
import "./Login.css";

import { useNavigate } from "react-router-dom";

function Login({ close, openRegister }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:5000/login", { email, password })
      .then((res) => {
        alert(res.data.message);

        sessionStorage.setItem("userEmail", email);
        sessionStorage.setItem("UserType", res.data.UserType);

        // Admin check
        if (res.data.UserType === "Admin") {
          close();
          navigate("/adminDashboard");
        } else {
          close();
          navigate("/"); // ✅ user dashboard
        }
      })
      .catch((err) => {
        alert(err.response?.data?.message || "Login failed");
      });
  };

  return (
    <div className="fixed inset-0 flex justify-center items-center bg-opacity-60 z-50 login-popup">
      <div className="bg-[#161615ff] p-5 rounded-lg w-[43%] relative login-container">
        <button
          onClick={close}
          className="absolute top-2 right-2 text-white text-xl hover:text-gray-400"
        >
          ✕
        </button>

        <h2 className="text-center text-xl font-bold mb-5 login-heading">
          Login
        </h2>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-3 login-form"
        >
          <input
            type="email"
            placeholder="Email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="login-input"
          />

          <input
            type="password"
            placeholder="Password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="login-input"
          />

          <button type="submit" className="login-button">
            Login
          </button>
        </form>

        <p className="text-center mt-4 text-gray-300 login-text">
          Go for registration:{" "}
          <span
            onClick={() => {
              close();
              openRegister();
            }}
            className="login-link"
          >
            Register
          </span>
        </p>
      </div>
    </div>
  );
}

export default Login;
