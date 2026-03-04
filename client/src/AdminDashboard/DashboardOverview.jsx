import { useEffect, useState } from "react";
import axios from "axios";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
} from "recharts";

const COLORS = ["#22c55e", "#a855f7", "#f97316"]; // green, purple, orange

function DashboardOverview() {
  const [counts, setCounts] = useState({
    totalUsers: 0,
    totalBookings: 0,
    confirmed: 0,
    pending: 0,
    cancelled: 0,
    activeToday: 0,
    newUsersMonth: 0,
    cancellationRate: 0,
  });

  const [bookingsTrend, setBookingsTrend] = useState([]);
  const [recentBookings, setRecentBookings] = useState([]);

  useEffect(() => {
    // Dashboard counts
    axios
      .get("https://hotel-backend-a9o4.onrender.com/dashboardCounts")
      .then((res) => {
        const data = res.data;
        const cancellationRate =
          data.totalBookings > 0
            ? ((data.cancelled / data.totalBookings) * 100).toFixed(1)
            : 0;
        setCounts({ ...data, cancellationRate });
      })
      .catch((err) => console.log(err));

    // Bookings trend (last 7 days)
    axios
      .get("https://hotel-backend-a9o4.onrender.com/bookingsTrend") // backend should provide last 7 days data
      .then((res) => setBookingsTrend(res.data))
      .catch((err) => console.log(err));

    // Recent bookings
    axios
      .get("https://hotel-backend-a9o4.onrender.com/recentBookings") // backend: last 5 bookings
      .then((res) => setRecentBookings(res.data))
      .catch((err) => console.log(err));

    // Active bookings today
    axios
      .get("https://hotel-backend-a9o4.onrender.com/activeToday") // backend: bookings with today's date
      .then((res) =>
        setCounts((prev) => ({ ...prev, activeToday: res.data.count })),
      )
      .catch((err) => console.log(err));

    // New users this month
    axios
      .get("https://hotel-backend-a9o4.onrender.com/newUsersMonth") // backend: new users this month
      .then((res) =>
        setCounts((prev) => ({ ...prev, newUsersMonth: res.data.count })),
      )
      .catch((err) => console.log(err));
  }, []);

  const pieData = [
    { name: "Confirmed", value: counts.confirmed },
    { name: "Pending", value: counts.pending },
    { name: "Cancelled", value: counts.cancelled },
  ];

  return (
    <div className="p-6 min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-8 text-center text-[#a31313]">
        <i className="fa-solid fa-user mr-2"></i> Dashboard
      </h1>

      {/* CARDS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
        <Card
          title="Total Users"
          value={counts.totalUsers}
          icon="fa-users"
          bg="bg-sky-500"
        />
        <Card
          title="Total Bookings"
          value={counts.totalBookings}
          icon="fa-table"
          bg="bg-indigo-500"
        />
        <Card
          title="Confirmed"
          value={counts.confirmed}
          icon="fa-circle-check"
          bg="bg-green-500"
        />
        <Card
          title="Pending"
          value={counts.pending}
          icon="fa-clock"
          bg="bg-purple-500"
        />
        <Card
          title="Cancelled"
          value={counts.cancelled}
          icon="fa-xmark"
          bg="bg-orange-500"
        />
        <Card
          title="Active Today"
          value={counts.activeToday}
          icon="fa-calendar-day"
          bg="bg-teal-500"
        />
        <Card
          title="New Users This Month"
          value={counts.newUsersMonth}
          icon="fa-user-plus"
          bg="bg-pink-500"
        />
        <Card
          title="Cancellation %"
          value={`${counts.cancellationRate}%`}
          icon="fa-exclamation-triangle"
          bg="bg-red-500"
        />
      </div>

      {/* PIE & LINE CHARTS */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-10">
        {/* Pie Chart */}
        <div className="bg-white rounded-xl shadow-md p-6">
          <h2 className="text-lg font-semibold mb-4 text-center">
            Booking Status Distribution
          </h2>
          <div className="w-full h-[300px]">
            <ResponsiveContainer>
              <PieChart>
                <Pie
                  data={pieData}
                  cx="50%"
                  cy="50%"
                  outerRadius={100}
                  dataKey="value"
                  label
                >
                  {pieData.map((entry, index) => (
                    <Cell key={index} fill={COLORS[index]} />
                  ))}
                </Pie>
                <Tooltip />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Line Chart */}
        <div className="bg-white rounded-xl shadow-md p-6">
          <h2 className="text-lg font-semibold mb-4 text-center">
            Bookings Over Last 7 Days
          </h2>
          <div className="w-full h-[300px]">
            <ResponsiveContainer>
              <LineChart data={bookingsTrend}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="count"
                  stroke="#22c55e"
                  strokeWidth={2}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Recent Bookings Table */}
      <div className="bg-white rounded-xl shadow-md p-6">
        <h2 className="text-lg font-semibold mb-4 text-center">
          Recent Bookings
        </h2>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200 text-center">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-4 py-2">Name</th>
                <th className="px-4 py-2">Email</th>
                <th className="px-4 py-2">Mobile</th>
                <th className="px-4 py-2">Date</th>
                <th className="px-4 py-2">Time</th>
                <th className="px-4 py-2">Guests</th>
                <th className="px-4 py-2">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {recentBookings.map((b) => (
                <tr key={b.tId}>
                  <td className="px-4 py-2">
                    {b.firstName} {b.middleName} {b.lastName}
                  </td>
                  <td className="px-4 py-2">{b.email}</td>
                  <td className="px-4 py-2">{b.mobileNumber}</td>
                  <td className="px-4 py-2">{b.dateOfBooking}</td>
                  <td className="px-4 py-2">{b.timeOfBooking}</td>
                  <td className="px-4 py-2">{b.numOfGuests}</td>
                  <td className="px-4 py-2">{b.Status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

// Reusable Card component
const Card = ({ title, value, icon, bg }) => (
  <div
    className={`${bg} text-white p-6 rounded-xl shadow-lg flex items-center gap-4`}
  >
    <i className={`fa-solid ${icon} text-3xl`}></i>
    <div>
      <p className="text-sm">{title}</p>
      <h2 className="text-2xl font-bold">{value}</h2>
    </div>
  </div>
);

export default DashboardOverview;
