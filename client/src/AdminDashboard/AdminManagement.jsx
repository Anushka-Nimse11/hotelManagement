import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function AdminManagement() {
  const [admins, setAdmins] = useState([]);
  const navigate = useNavigate();

  const deactivateAdmin = (id) => {
    if (!window.confirm("Mark this admin as inactive?")) return;

    axios
      .put(`https://hotel-backend-a9o4.onrender.com/deactivateAdmin/${id}`)
      .then(() => fetchAdmins())
      .catch((err) => console.log(err));
  };

  const reactivateAdmin = (id) => {
    if (!window.confirm("Reactivate this admin?")) return;

    axios
      .put(`https://hotel-backend-a9o4.onrender.com/reactivateAdmin/${id}`)
      .then(() => fetchAdmins())
      .catch((err) => console.log(err));
  };

  const fetchAdmins = () => {
    axios
      .get("https://hotel-backend-a9o4.onrender.com/adminDetails")
      .then((res) => setAdmins(res.data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetchAdmins();
  }, []);

  return (
    /* Content wrapper */
    <div className="p-4">
      {/* Title */}
      <h1 className="text-2xl font-semibold mb-5 text-[#a31313] text-center">
        <i class="fa-solid fa-user"></i> Admin Management
      </h1>

      {/* Add Admin Button */}
      <div className="flex justify-end mb-4">
        <button
          onClick={() => navigate("/adminDashboard/addAdminForm")}
          className="bg-[#a31313] text-white px-4 py-2 rounded-md hover:bg-red-700 transition"
        >
          <i class="fa-solid fa-plus"></i> Add Admin
        </button>
      </div>

      {/* Card container */}
      <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200">
        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-sm text-gray-700">
            <thead className="bg-[#fdecec] text-[#a31313]">
              <tr>
                <th className="px-4 py-3 border text-center">ID</th>
                <th className="px-4 py-3 border">Name</th>
                <th className="px-4 py-3 border">Email</th>
                <th className="px-4 py-3 border text-center">Mobile</th>
                <th className="px-4 py-3 border">Address</th>
                <th className="px-4 py-3 border text-center">Status</th>
                <th className="px-4 py-3 border text-center">Action</th>
              </tr>
            </thead>

            <tbody>
              {admins.length > 0 ? (
                admins.map((admin) => (
                  <tr key={admin.UserId} className="hover:bg-red-50 transition">
                    <td className="px-4 py-3 border text-center font-medium">
                      {admin.UserId}
                    </td>

                    <td className="px-4 py-3 border">{admin.Name}</td>

                    <td className="px-4 py-3 border">{admin.Email}</td>

                    <td className="px-4 py-3 border text-center">
                      {admin.MobileNo}
                    </td>

                    <td className="px-4 py-3 border max-w-[260px] break-words">
                      {admin.Address}
                    </td>

                    <td className="px-4 py-3 border text-center">
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-semibold
      ${
        admin.Status === "Active"
          ? "bg-green-100 text-green-700"
          : "bg-red-100 text-red-700"
      }`}
                      >
                        {admin.Status}
                      </span>
                    </td>

                    <td className="px-4 py-3 border text-center space-x-2">
                      {/* Edit */}
                      <button
                        onClick={() =>
                          navigate(
                            `/adminDashboard/updateAdmin/${admin.UserId}`,
                          )
                        }
                        className="px-3 py-1 bg-blue-600 text-white rounded-md text-xs"
                      >
                        Edit
                      </button>

                      {/* Deactivate */}
                      {admin.Status === "Active" && (
                        <button
                          onClick={() => deactivateAdmin(admin.UserId)}
                          className="px-3 py-1 bg-red-600 text-white rounded-md text-xs"
                        >
                          Deactivate
                        </button>
                      )}

                      {/* Reactivate */}
                      {admin.Status === "Inactive" && (
                        <button
                          onClick={() => reactivateAdmin(admin.UserId)}
                          className="px-3 py-1 bg-green-600 text-white rounded-md text-xs"
                        >
                          Reactivate
                        </button>
                      )}
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan="5"
                    className="text-center text-gray-500 py-8 font-medium border"
                  >
                    No admin data available
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default AdminManagement;
