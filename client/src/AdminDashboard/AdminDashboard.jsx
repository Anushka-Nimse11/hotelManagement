import { Link, useNavigate, Outlet } from "react-router-dom";

function AdminDashboard() {
  const navigate = useNavigate();

  const handleLogout = () => {
    sessionStorage.removeItem("UserType");
    navigate("/");
  };

  return (
    <div className="flex h-screen bg-white text-gray-800">
      {/* Sidebar */}
      <div className="w-[18%] bg-[#120e0e] text-gray-200 p-5 shadow-xl">
        <h1 className="text-xl text-center font-bold text-white mb-8 tracking-wide">
          ADMIN PORTAL
        </h1>

        <nav className="space-y-4">
          <Link
            to="/adminDashboard"
            className="flex items-center gap-3 px-4 py-3 rounded-md hover:bg-[#374151] transition"
          >
            <i className="fa-solid fa-chart-line"></i> Dashboard Overview
          </Link>

          <Link
            to="/adminDashboard/TableBookingDetails"
            className="flex items-center gap-3 px-4 py-3 rounded-md hover:bg-[#374151] transition"
          >
            <i class="fa-solid fa-utensils"></i> Table Booking Manager
          </Link>

          <Link
            to="/adminDashboard/adminManagement"
            className="flex items-center gap-3 px-4 py-3 rounded-md hover:bg-[#374151]"
          >
            <i class="fa-solid fa-user"></i> Admin Management
          </Link>
        </nav>
      </div>

      {/* Main Section */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <div className="flex justify-between items-center px-8 py-3 bg-[#a31313] shadow">
          <div>
            <h2 className="text-lg font-semibold text-white">
              Admin Control Center
            </h2>
            <p className="text-xs text-red-100">
              Manage bookings & system data
            </p>
          </div>

          <button
            onClick={handleLogout}
            className="bg-white text-[#ee2626] px-4 py-2 rounded-md text-sm font-semibold hover:bg-red-100"
          >
            Logout
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 bg-[#f4f6f8] overflow-y-auto">
          <div className="bg-white rounded-xl shadow-md ">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;
