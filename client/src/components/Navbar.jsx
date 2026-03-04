import "./Navbar.css";
import { useEffect, useState } from "react";
import { NavLink, useNavigate, useLocation } from "react-router-dom";
import Login from "./Login";
import Registration from "./Registration";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const [popupType, setPopupType] = useState(null);

  // Handle scroll event
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Set initial state based on current scroll
    handleScroll();

    // Cleanup
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Reset scroll position when route changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="hotel-name" onClick={() => navigate("/")}>
        <i className="fa-solid fa-utensils"></i>
        <p>Bella Zaika</p>
      </div>

      <div className="nav-content">
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/aboutUs">About us</NavLink>
          </li>
          <li>
            <NavLink to="/menu">Menu</NavLink>
          </li>
          <li>
            <NavLink to="/visit">Visit</NavLink>
          </li>

          <li>
            <button onClick={() => setPopupType("login")}>Login</button>
          </li>
        </ul>
      </div>

      {popupType === "login" && (
        <Login
          close={() => setPopupType(null)}
          openRegister={() => setPopupType("register")}
        />
      )}

      {popupType === "register" && (
        <Registration
          close={() => setPopupType(null)}
          openLogin={() => setPopupType("login")}
        />
      )}
    </div>
  );
}

export default Navbar;
