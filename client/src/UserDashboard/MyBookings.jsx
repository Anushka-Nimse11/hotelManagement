import { useEffect, useState } from "react";
import axios from "axios";

function MyBookings() {
  const userEmail = sessionStorage.getItem("userEmail");
  const [bookings, setBookings] = useState([]);
  const [editingId, setEditingId] = useState(null);
  const [formData, setFormData] = useState({
    firstName: "",
    middleName: "",
    lastName: "",
    mobileNumber: "",
    dateOfBooking: "",
    timeOfBooking: "",
    numOfGuests: "",
    specialRequest: "",
  });
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (!userEmail) return;
    fetchBookings();
  }, [userEmail]);

  const fetchBookings = () => {
    axios
      .get(`http://localhost:5000/bookings?email=${userEmail}`)
      .then((res) => setBookings(res.data))
      .catch((err) => console.log(err));
  };

  const deleteBooking = (id) => {
    if (!window.confirm("Delete this booking?")) return;

    axios.delete(`http://localhost:5000/deleteBooking/${id}`).then(() => {
      setBookings(bookings.filter((b) => b.tId !== id));
    });
  };

  const startEditing = (booking) => {
    setEditingId(booking.tId);
    setFormData({
      firstName: booking.firstName,
      middleName: booking.middleName,
      lastName: booking.lastName,
      mobileNumber: booking.mobileNumber,
      dateOfBooking: booking.dateOfBooking,
      timeOfBooking: booking.timeOfBooking,
      numOfGuests: booking.numOfGuests,
      specialRequest: booking.specialRequest || "",
    });
    setErrors({});
  };

  const cancelEditing = () => {
    setEditingId(null);
    setFormData({
      firstName: "",
      middleName: "",
      lastName: "",
      mobileNumber: "",
      dateOfBooking: "",
      timeOfBooking: "",
      numOfGuests: "",
      specialRequest: "",
    });
    setErrors({});
  };

  const validate = () => {
    const newErrors = {};
    const today = new Date();
    const selectedDate = new Date(formData.dateOfBooking);
    const [hour, minute] = formData.timeOfBooking.split(":").map(Number);

    // Name validation: First letter capitalized
    const capitalizeName = (name) =>
      name ? name.charAt(0).toUpperCase() + name.slice(1) : "";

    formData.firstName = capitalizeName(formData.firstName);
    formData.middleName = capitalizeName(formData.middleName);
    formData.lastName = capitalizeName(formData.lastName);

    if (!formData.firstName.trim())
      newErrors.firstName = "First Name is required";
    if (!formData.lastName.trim()) newErrors.lastName = "Last Name is required";

    // Mobile number: 10 digits
    if (!/^\d{10}$/.test(formData.mobileNumber))
      newErrors.mobileNumber = "Enter valid 10-digit mobile number";

    // Date: present or future
    if (!formData.dateOfBooking) newErrors.dateOfBooking = "Date is required";
    else if (selectedDate.setHours(0, 0, 0, 0) < today.setHours(0, 0, 0, 0))
      newErrors.dateOfBooking = "Date cannot be in the past";

    // Time: 10 AM to 11 PM
    if (!formData.timeOfBooking) newErrors.timeOfBooking = "Time is required";
    else if (hour < 10 || (hour === 23 && minute > 0) || hour > 23)
      newErrors.timeOfBooking = "Time must be between 10:00 and 23:00";

    // Number of guests
    if (!formData.numOfGuests || formData.numOfGuests <= 0)
      newErrors.numOfGuests = "Guests must be at least 1";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const updateBooking = (id) => {
    if (!validate()) return;

    axios
      .put(`http://localhost:5000/updateBooking/${id}`, {
        ...formData,
        email: userEmail,
      })
      .then(() => {
        fetchBookings();
        cancelEditing();
      })
      .catch((err) => console.log(err));
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="p-4 bg-gray-100">
      <h2 className="text-2xl text-center font-bold mb-6 text-red-600">
        My Bookings
      </h2>

      {bookings.length === 0 ? (
        <p className="text-gray-600 text-center">No bookings found.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
            <thead className="bg-gray-900 text-white">
              <tr>
                <th className="px-4 py-2 text-left">First Name</th>
                <th className="px-4 py-2 text-left">Middle Name</th>
                <th className="px-4 py-2 text-left">Last Name</th>
                <th className="px-4 py-2 text-left">Mobile</th>
                <th className="px-4 py-2 text-left">Date</th>
                <th className="px-4 py-2 text-left">Time</th>
                <th className="px-4 py-2 text-left">Guests</th>
                <th className="px-4 py-2 text-left">Special Request</th>
                <th className="px-4 py-2 text-left">Status</th>
                <th className="px-4 py-2 text-left">Action</th>
              </tr>
            </thead>

            <tbody>
              {bookings.map((b) => (
                <tr
                  key={b.tId}
                  className="border-b hover:bg-gray-50 transition-colors"
                >
                  <td className="px-4 py-2">
                    {editingId === b.tId ? (
                      <div>
                        <input
                          type="text"
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleChange}
                          className="border px-2 py-1 rounded w-full"
                        />
                        {errors.firstName && (
                          <p className="text-red-500 text-sm">
                            {errors.firstName}
                          </p>
                        )}
                      </div>
                    ) : (
                      b.firstName
                    )}
                  </td>
                  <td className="px-4 py-2">
                    {editingId === b.tId ? (
                      <input
                        type="text"
                        name="middleName"
                        value={formData.middleName}
                        onChange={handleChange}
                        className="border px-2 py-1 rounded w-full"
                      />
                    ) : (
                      b.middleName
                    )}
                  </td>
                  <td className="px-4 py-2">
                    {editingId === b.tId ? (
                      <div>
                        <input
                          type="text"
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleChange}
                          className="border px-2 py-1 rounded w-full"
                        />
                        {errors.lastName && (
                          <p className="text-red-500 text-sm">
                            {errors.lastName}
                          </p>
                        )}
                      </div>
                    ) : (
                      b.lastName
                    )}
                  </td>
                  <td className="px-4 py-2">
                    {editingId === b.tId ? (
                      <div>
                        <input
                          type="text"
                          name="mobileNumber"
                          value={formData.mobileNumber}
                          onChange={handleChange}
                          className="border px-2 py-1 rounded w-full"
                        />
                        {errors.mobileNumber && (
                          <p className="text-red-500 text-sm">
                            {errors.mobileNumber}
                          </p>
                        )}
                      </div>
                    ) : (
                      b.mobileNumber
                    )}
                  </td>
                  <td className="px-4 py-2">
                    {editingId === b.tId ? (
                      <div>
                        <input
                          type="date"
                          name="dateOfBooking"
                          value={formData.dateOfBooking}
                          onChange={handleChange}
                          className="border px-2 py-1 rounded w-full"
                        />
                        {errors.dateOfBooking && (
                          <p className="text-red-500 text-sm">
                            {errors.dateOfBooking}
                          </p>
                        )}
                      </div>
                    ) : (
                      new Date(b.dateOfBooking).toLocaleDateString()
                    )}
                  </td>
                  <td className="px-4 py-2">
                    {editingId === b.tId ? (
                      <div>
                        <input
                          type="time"
                          name="timeOfBooking"
                          value={formData.timeOfBooking}
                          onChange={handleChange}
                          className="border px-2 py-1 rounded w-full"
                        />
                        {errors.timeOfBooking && (
                          <p className="text-red-500 text-sm">
                            {errors.timeOfBooking}
                          </p>
                        )}
                      </div>
                    ) : (
                      b.timeOfBooking
                    )}
                  </td>
                  <td className="px-4 py-2">
                    {editingId === b.tId ? (
                      <div>
                        <input
                          type="number"
                          name="numOfGuests"
                          value={formData.numOfGuests}
                          onChange={handleChange}
                          className="border px-2 py-1 rounded w-full"
                        />
                        {errors.numOfGuests && (
                          <p className="text-red-500 text-sm">
                            {errors.numOfGuests}
                          </p>
                        )}
                      </div>
                    ) : (
                      b.numOfGuests
                    )}
                  </td>
                  <td className="px-4 py-2">
                    {editingId === b.tId ? (
                      <input
                        type="text"
                        name="specialRequest"
                        value={formData.specialRequest}
                        onChange={handleChange}
                        className="border px-2 py-1 rounded w-full"
                      />
                    ) : (
                      b.specialRequest || "-"
                    )}
                  </td>
                  <td className="px-4 py-2 font-semibold">{b.Status}</td>
                  <td className="px-4 py-2 space-x-2">
                    {b.Status !== "Confirmed" && (
                      <>
                        {editingId === b.tId ? (
                          <>
                            <button
                              onClick={() => updateBooking(b.tId)}
                              className="bg-green-600 hover:bg-green-700 text-white px-3 py-1 rounded"
                            >
                              Save
                            </button>
                            <button
                              onClick={cancelEditing}
                              className="bg-gray-500 hover:bg-gray-600 text-white px-3 py-1 rounded"
                            >
                              Cancel
                            </button>
                          </>
                        ) : (
                          <>
                            <button
                              onClick={() => startEditing(b)}
                              className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded"
                            >
                              Edit
                            </button>
                            <button
                              onClick={() => deleteBooking(b.tId)}
                              className="bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded"
                            >
                              Delete
                            </button>
                          </>
                        )}
                      </>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default MyBookings;
