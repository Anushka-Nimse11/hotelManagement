import { Routes, Route, useLocation, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AboutUs from "./pages/AboutUs";
import Menu from "./pages/Menu";
import Visit from "./pages/Visit";
import UserDashboard from "./UserDashboard/UserDashboard";
import AdminDashboard from "./AdminDashboard/AdminDashboard";
// import AddMenuItem from "./AdminDashboard/AddMenuItem";
// import ViewMenuItem from "./AdminDashboard/ViewMenuItem";
import TableBookingDetails from "./AdminDashboard/TableBookingDetails";
import AddAdminForm from "./AdminDashboard/AddAdminForm";
import AdminManagement from "./AdminDashboard/AdminManagement";
import UpdateAdminForm from "./AdminDashboard/UpdateAdminForm";
import Dashboard from "./AdminDashboard/DashboardOverview";

function App() {
  const location = useLocation();
  const isAdminRoute = location.pathname.startsWith("/adminDashboard");

  // Check if logged-in user is admin
  const isAdmin = sessionStorage.getItem("UserType") === "Admin";

  return (
    <div>
      {!isAdminRoute && <Navbar />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutUs" element={<AboutUs />} />
        <Route path="/menu/*" element={<Menu />} />
        <Route path="/visit" element={<Visit />} />

        <Route path="/userDashboard" element={<UserDashboard />} />
        {/* Protected Admin Route */}
        <Route
          path="/adminDashboard/*"
          element={isAdmin ? <AdminDashboard /> : <Navigate to="/" />}
        >
          <Route index element={<Dashboard />} />
          {/* <Route path="AddMenuItem" element={<AddMenuItem />} />
          <Route path="ViewMenuItem" element={<ViewMenuItem />} /> */}
          <Route path="TableBookingDetails" element={<TableBookingDetails />} />
          <Route path="adminManagement" element={<AdminManagement />} />
          <Route path="addAdminForm" element={<AddAdminForm />} />
          <Route path="updateAdmin/:id" element={<UpdateAdminForm />} />
        </Route>
      </Routes>

      {!isAdminRoute && <Footer />}
    </div>
  );
}

export default App;
