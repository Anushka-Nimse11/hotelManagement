// import { useState } from "react";
// import axios from "axios";
// import "./TableBooking.css";
// function TableBooking() {
//   let [table, setTable] = useState({
//     firstName: "",
//     middleName: "",
//     lastName: "",
//     mobileNumber: "",
//     dateOfBooking: "",
//     timeOfBooking: "",
//     numOfGuests: "",
//     specialRequest: "",
//   });

//   let handleInput = (event) => {
//     let fieldName = event.target.name;
//     let newValue = event.target.value;

//     setTable((currData) => {
//       return { ...currData, [fieldName]: newValue };
//     });
//   };

//   let handleSubmit = (event) => {
//     event.preventDefault();
//     axios
//       .post("https://hotel-backend-a9o4.onrender.com/booking", table)
//       .then((res) => alert("Table book successfully"))
//       .catch((err) => alert(err));

//     setTable({
//       firstName: "",
//       middleName: "",
//       lastName: "",
//       mobileNumber: "",
//       dateOfBooking: "",
//       timeOfBooking: "",
//       numOfGuests: "",
//       specialRequest: "",
//     });
//   };

//   return (
//     <div className="tableBooking">
//       <div className="tableBooking-container">
//         <h2 className="tableBooking-heading">Dine With Us</h2>
//         <form onSubmit={handleSubmit} className="tableBooking-form">
//           <div className="name-row">
//             <input
//               placeholder="First Name"
//               type="text"
//               id="firstName"
//               name="firstName"
//               required
//               value={table.firstName}
//               onChange={handleInput}
//               className="tableBooking-input"
//             />
//             <input
//               placeholder="Middle Name"
//               type="text"
//               id="middleName"
//               name="middleName"
//               value={table.middleName}
//               onChange={handleInput}
//               className="tableBooking-input"
//             />
//             <input
//               placeholder="Last Name"
//               type="text"
//               id="lastName"
//               name="lastName"
//               required
//               value={table.lastName}
//               onChange={handleInput}
//               className="tableBooking-input"
//             />
//           </div>

//           <br />
//           <label htmlFor="mobileNumber" className="tableBooking-label">
//             Mobile Number
//           </label>
//           <input
//             placeholder="Enter mobile number"
//             type="text"
//             id="mobileNumber"
//             name="mobileNumber"
//             required
//             value={table.mobileNumber}
//             onChange={handleInput}
//             className="tableBooking-input"
//           ></input>

//           <br />
//           <label htmlFor="dateOfBooking" className="tableBooking-label">
//             Date of Booking
//           </label>
//           <input
//             placeholder="Enter date of booking"
//             type="date"
//             id="dateOfBooking"
//             name="dateOfBooking"
//             required
//             value={table.dateOfBooking}
//             onChange={handleInput}
//             className="tableBooking-input"
//           ></input>

//           <br />
//           <label htmlFor="timeOfBooking" className="tableBooking-label">
//             Time of Booking
//           </label>
//           <input
//             placeholder="Enter time of booking"
//             type="time"
//             id="timeOfBooking"
//             name="timeOfBooking"
//             required
//             value={table.timeOfBooking}
//             onChange={handleInput}
//             className="tableBooking-input"
//           ></input>

//           <br />
//           <label htmlFor="numOfGuests" className="tableBooking-label">
//             Number of Guests
//           </label>
//           <input
//             placeholder="Enter number of guests"
//             type="number"
//             id="numOfGuests"
//             name="numOfGuests"
//             required
//             value={table.numOfGuests}
//             onChange={handleInput}
//             className="tableBooking-input"
//           ></input>

//           <br />
//           <label htmlFor="specialRequest" className="tableBooking-label">
//             Special Request
//           </label>
//           <textarea
//             placeholder="(optional, like seating preference or any occasion)"
//             type="text"
//             id="specialRequest"
//             name="specialRequest"
//             value={table.specialRequest}
//             onChange={handleInput}
//             className="tableBooking-textarea"
//           ></textarea>

//           <br />
//           <button type="submit" className="tableBooking-button">
//             Book Table
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default TableBooking;

import { useState } from "react";
import axios from "axios";
import "./TableBooking.css";

// present day or future day
const today = new Date().toISOString().split("T")[0];

function TableBooking() {
  let [table, setTable] = useState({
    firstName: "",
    middleName: "",
    lastName: "",
    email: sessionStorage.getItem("userEmail") || "", // logged-in user's email
    mobileNumber: "",
    dateOfBooking: "",
    timeOfBooking: "",
    numOfGuests: "",
    specialRequest: "",
  });

  // Capitalize first letter, rest small
  const formatName = (value) => {
    if (!value) return "";
    return value.charAt(0).toUpperCase() + value.slice(1).toLowerCase();
  };

  let handleInput = (event) => {
    let { name, value } = event.target;

    // Name formatting
    if (name === "firstName" || name === "middleName" || name === "lastName") {
      value = formatName(value);
    }

    // Allow only numbers & max 10 digits for mobile
    if (name === "mobileNumber") {
      value = value.replace(/\D/g, "").slice(0, 10);
    }

    // Guests should not be negative
    if (name === "numOfGuests") {
      if (value < 0) return;
    }

    setTable((currData) => ({ ...currData, [name]: value }));
  };

  let handleSubmit = (event) => {
    event.preventDefault();

    if (!table.email) {
      alert("🔐 Please login to book a table");
      return;
    }

    // Phone number validation
    if (table.mobileNumber.length !== 10) {
      alert("Mobile number must be exactly 10 digits");
      return;
    }

    // Guest validation
    if (table.numOfGuests <= 0) {
      alert("Number of guests must be greater than 0");
      return;
    }

    axios
      .post("https://hotel-backend-a9o4.onrender.com/booking", table)
      .then(() => {
        alert("Table booked successfully ✅");
        window.dispatchEvent(new Event("bookingAdded"));
      })
      .catch((err) => alert(err));

    setTable({
      firstName: "",
      middleName: "",
      lastName: "",
      email: table.email,
      mobileNumber: "",
      dateOfBooking: "",
      timeOfBooking: "",
      numOfGuests: "",
      specialRequest: "",
    });
  };

  return (
    <div className="tableBooking">
      <div className="tableBooking-container">
        <h2 className="tableBooking-heading">Dine With Us</h2>

        {!table.email && (
          <p style={{ color: "red", textAlign: "center" }}>
            Please login to book a table
          </p>
        )}
        <form onSubmit={handleSubmit} className="tableBooking-form">
          <div className="name-row">
            <input
              placeholder="First Name"
              type="text"
              name="firstName"
              required
              value={table.firstName}
              onChange={handleInput}
              className="tableBooking-input"
            />

            <input
              placeholder="Middle Name"
              type="text"
              name="middleName"
              value={table.middleName}
              onChange={handleInput}
              className="tableBooking-input"
            />

            <input
              placeholder="Last Name"
              type="text"
              name="lastName"
              required
              value={table.lastName}
              onChange={handleInput}
              className="tableBooking-input"
            />
          </div>

          <br />

          <label className="tableBooking-label">Mobile Number</label>
          <input
            type="text"
            name="mobileNumber"
            placeholder="10 digit mobile number"
            required
            value={table.mobileNumber}
            onChange={handleInput}
            className="tableBooking-input"
          />

          <br />

          <label className="tableBooking-label">Date of Booking</label>
          <input
            type="date"
            name="dateOfBooking"
            min={today}
            required
            value={table.dateOfBooking}
            onChange={handleInput}
            className="tableBooking-input"
          />

          <br />

          <label className="tableBooking-label">Time of Booking</label>
          <input
            type="time"
            name="timeOfBooking"
            min="10:00"
            max="23:00"
            required
            value={table.timeOfBooking}
            onChange={handleInput}
            className="tableBooking-input"
          />

          <br />

          <label className="tableBooking-label">Number of Guests</label>
          <input
            type="number"
            name="numOfGuests"
            min="1"
            required
            value={table.numOfGuests}
            onChange={handleInput}
            className="tableBooking-input"
          />

          <br />

          <label className="tableBooking-label">Special Request</label>
          <textarea
            name="specialRequest"
            value={table.specialRequest}
            onChange={handleInput}
            className="tableBooking-textarea"
          />

          <br />

          <button
            type="submit"
            className="tableBooking-button"
            disabled={!table.email}
          >
            Book Table
          </button>
        </form>
      </div>
    </div>
  );
}

export default TableBooking;
