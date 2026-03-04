import TableBooking from "../pages/TableBooking";
import MyBookings from "./MyBookings";

function UserDashboard() {
  const userEmail = sessionStorage.getItem("userEmail");

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold text-center mb-8">My Dashboard</h1>

      {/* Book Table Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Book a Table</h2>
        <TableBooking />
      </section>

      {/* My Bookings Section */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">My Bookings</h2>
        {userEmail ? (
          <MyBookings />
        ) : (
          <p className="text-center text-gray-500">
            Please login to see your bookings.
          </p>
        )}
      </section>
    </div>
  );
}

export default UserDashboard;
