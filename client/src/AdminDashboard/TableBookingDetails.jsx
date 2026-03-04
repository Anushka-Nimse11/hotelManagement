import { useEffect, useState } from "react";
import axios from "axios";

function TableBookingDetails() {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/TableBookingDetails")
      .then((res) => {
        const dataWithDefaultStatus = res.data.map((b) => ({
          ...b,
          Status: b.Status || "Pending",
        }));
        setBookings(dataWithDefaultStatus);
      })
      .catch((err) => console.log(err));
  }, []);

  const updateStatus = (id, status) => {
    axios
      .put(`http://localhost:5000/updateBookingStatus/${id}`, {
        status,
      })
      .then(() => {
        setBookings((prev) =>
          prev.map((b) => (b.tId === id ? { ...b, Status: status } : b))
        );
      })
      .catch((err) => console.log(err));
  };

  return (
    /* Content wrapper matches AdminDashboard */
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-6 text-[#a31313] text-center">
        🍽️ Table Booking Details
      </h1>

      <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200">
        <div className="overflow-x-auto">
          <table className="w-full border-collapse border border-gray-300 text-sm text-gray-700">
            <thead className="bg-[#fdecec] text-[#a31313]">
              <tr>
                <th className="px-4 py-3 border border-gray-300 text-center">
                  ID
                </th>
                <th className="px-4 py-3 border border-gray-300">Full Name</th>
                <th className="px-4 py-3 border border-gray-300 text-center">
                  Mobile
                </th>
                <th className="px-4 py-3 border border-gray-300 text-center">
                  Date
                </th>
                <th className="px-4 py-3 border border-gray-300 text-center">
                  Time
                </th>
                <th className="px-4 py-3 border border-gray-300 text-center">
                  Guests
                </th>
                <th className="px-4 py-3 border border-gray-300 text-center">
                  Special Request
                </th>
                <th className="px-4 py-3 border border-gray-300 text-center">
                  Status
                </th>
                <th className="px-4 py-3 border border-gray-300 text-center">
                  Action
                </th>
              </tr>
            </thead>

            <tbody>
              {bookings.length > 0 ? (
                bookings.map((item) => (
                  <tr key={item.tId} className="hover:bg-red-50 transition">
                    <td className="px-4 py-3 border border-gray-300 text-center font-medium">
                      {item.tId}
                    </td>
                    <td className="px-4 py-3 border border-gray-300">
                      {item.firstName} {item.middleName} {item.lastName}
                    </td>
                    <td className="px-4 py-3 border border-gray-300 text-center">
                      {item.mobileNumber}
                    </td>
                    <td className="px-4 py-3 border border-gray-300 text-center whitespace-nowrap">
                      {item.dateOfBooking?.split("T")[0]}
                    </td>
                    <td className="px-4 py-3 border border-gray-300 text-center">
                      {item.timeOfBooking}
                    </td>
                    <td className="px-4 py-3 border border-gray-300 text-center font-semibold">
                      {item.numOfGuests}
                    </td>
                    <td className="px-4 py-3 border border-gray-300 text-center max-w-[260px] break-words">
                      {item.specialRequest || "—"}
                    </td>
                    <td className="px-4 py-3 border border-gray-300 text-center">
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-semibold
                    ${
                      item.Status === "Confirmed"
                        ? "bg-green-100 text-green-700"
                        : item.Status === "Cancelled"
                        ? "bg-red-100 text-red-700"
                        : "bg-yellow-100 text-yellow-700"
                    }`}
                      >
                        {item.Status}
                      </span>
                    </td>
                    <td className="px-4 py-3 border border-gray-300 text-center">
                      <select
                        value={item.Status || "Pending"} // default to Pending if Status is falsy
                        onChange={(e) => updateStatus(item.tId, e.target.value)}
                        className="border rounded px-2 py-1 text-sm"
                      >
                        <option value="Pending">Pending</option>
                        <option value="Confirmed">Confirmed</option>
                        <option value="Cancelled">Cancelled</option>
                      </select>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan="9"
                    className="text-center text-gray-500 py-8 font-medium border border-gray-300"
                  >
                    No booking data available
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

export default TableBookingDetails;
