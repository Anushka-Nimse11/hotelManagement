import { useState } from "react";
import axios from "axios";
import "./Registration.css";

function Registration({ close, openLogin }) {
  let [reg, setReg] = useState({
    name: "",
    email: "",
    password: "",
    address: "",
    mobileNo: "",
  });

  let handleInput = (event) => {
    let fieldName = event.target.name;
    let newValue = event.target.value;

    setReg((currData) => {
      return { ...currData, [fieldName]: newValue };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:5000/registration", reg)
      .then((res) => alert("Registration successfully"))
      .catch((err) => alert(err));

    setReg({
      name: "",
      email: "",
      password: "",
      address: "",
      mobileNo: "",
    });
  };

  return (
    <div className="fixed inset-0 flex justify-center items-center bg-opacity-60 z-50 registration">
      <div className="bg-[#161615ff] p-5 rounded-lg w-[20rem] relative registration-container">
        <button
          onClick={close}
          className="absolute top-2 right-2 text-white text-xl hover:text-gray-400"
        >
          ✕
        </button>

        <h2 className="text-center text-xl font-bold mb-5 registration-heading">
          Registration
        </h2>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-3 registration-form"
        >
          <input
            type="text"
            name="name"
            placeholder="Name"
            required
            value={reg.name}
            onChange={handleInput}
            className="registration-input"
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            required
            value={reg.email}
            onChange={handleInput}
            className="registration-input"
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            required
            value={reg.password}
            onChange={handleInput}
            className="registration-input"
          />

          <input
            type="text"
            name="address"
            placeholder="Address"
            required
            value={reg.address}
            onChange={handleInput}
            className="registration-input"
          />

          <input
            type="text"
            placeholder="Phone Number"
            name="mobileNo"
            required
            value={reg.mobileNo}
            onChange={handleInput}
            className="registration-input"
          />

          <button type="submit" className="registration-button">
            Registration
          </button>
        </form>

        <p className="text-center mt-4 text-gray-300 registration-login">
          Go for login:{" "}
          <span
            onClick={() => {
              close();
              openLogin();
            }}
            className="login-link"
          >
            Login
          </span>
        </p>
      </div>
    </div>
  );
}

export default Registration;
