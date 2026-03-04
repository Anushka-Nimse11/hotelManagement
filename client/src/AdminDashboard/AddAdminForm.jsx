import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function AddAdminForm() {
  const navigate = useNavigate();

  const [reg, setReg] = useState({
    name: "",
    email: "",
    password: "",
    address: "",
    mobileNo: "",
  });

  const handleInput = (e) => {
    setReg({ ...reg, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post("https://hotel-backend-a9o4.onrender.com/addAdmin", reg)
      .then(() => {
        alert("Admin added successfully");
        navigate("/adminDashboard/adminManagement");
      })
      .catch((err) => alert(err));
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      {/* Card */}
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg border">
        {/* Header */}
        <div className="border-b px-6 py-4">
          <h1 className="text-xl font-bold text-gray-800">Add New Admin</h1>
          <p className="text-sm text-gray-500">
            Fill in the details to create a new admin account
          </p>
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="px-6 py-6 grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {/* Name */}
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">
              Full Name
            </label>
            <input
              type="text"
              name="name"
              onChange={handleInput}
              required
              className="w-full rounded-lg border px-3 py-2 focus:ring-2 focus:ring-red-400 focus:outline-none"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              onChange={handleInput}
              required
              className="w-full rounded-lg border px-3 py-2 focus:ring-2 focus:ring-red-400 focus:outline-none"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">
              Password
            </label>
            <input
              type="password"
              name="password"
              onChange={handleInput}
              required
              className="w-full rounded-lg border px-3 py-2 focus:ring-2 focus:ring-red-400 focus:outline-none"
            />
          </div>

          {/* Mobile */}
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">
              Mobile Number
            </label>
            <input
              type="text"
              name="mobileNo"
              onChange={handleInput}
              required
              className="w-full rounded-lg border px-3 py-2 focus:ring-2 focus:ring-red-400 focus:outline-none"
            />
          </div>

          {/* Address */}
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-600 mb-1">
              Address
            </label>
            <textarea
              name="address"
              rows="3"
              onChange={handleInput}
              required
              className="w-full rounded-lg border px-3 py-2 focus:ring-2 focus:ring-red-400 focus:outline-none resize-none"
            />
          </div>

          {/* Buttons */}
          <div className="md:col-span-2 flex justify-end gap-4 mt-4">
            <button
              type="button"
              onClick={() => navigate(-1)}
              className="px-6 py-2 rounded-lg border hover:bg-gray-100 transition"
            >
              Cancel
            </button>

            <button
              type="submit"
              className="px-6 py-2 rounded-lg bg-[#a31313] text-white hover:bg-red-700 transition shadow"
            >
              Save Admin
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddAdminForm;
