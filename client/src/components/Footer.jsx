// import "./Footer.css";
// import footer from "../assets/footer.jpg";
// import {
//   FaPhoneAlt,
//   FaMapMarkerAlt,
//   FaClock,
//   FaInstagram,
//   FaFacebook,
// } from "react-icons/fa";

// function Footer() {
//   return (
//     <footer className="footer" style={{ backgroundImage: `url(${footer})` }}>
//       <div className="footer-container">
//         <div className="footer-section">
//           <div className="footer-sectioni">
//             <i className="fa-solid fa-utensils"></i>
//             <h3>Bella Zaika</h3>
//           </div>

//           <p>Delicious food with a cozy ambiance.</p>
//         </div>

//         <div className="footer-section">
//           <h4>Contact Us</h4>
//           <p>
//             <FaPhoneAlt /> +91 98765 43210
//           </p>
//           <p>
//             <FaMapMarkerAlt /> Near City Center Mall, Nashik, Maharashtra
//           </p>
//           <p>
//             <FaClock /> 10:00 AM - 11:00 PM (All Days)
//           </p>
//         </div>

//         <div className="footer-section">
//           <h4>Follow Us</h4>
//           <div className="social-icons flex">
//             <a href="#">
//               <FaInstagram />
//             </a>
//             <a href="#">
//               <FaFacebook />
//             </a>
//           </div>
//         </div>
//       </div>

//       <div className="footer-bottom">
//         © 2025 Bella Zaika Restaurant | All Rights Reserved.
//       </div>
//     </footer>
//   );
// }

// export default Footer;
import footer from "../assets/footer.jpg";
import {
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaClock,
  FaInstagram,
  FaFacebook,
} from "react-icons/fa";

function Footer() {
  return (
    <footer
      className="
    relative 
    text-[#f5deb3] 
    font-poppins 
    py-[60px] pt-[60px] pb-[40px]

    bg-cover 
    bg-center
  "
      style={{ backgroundImage: `url(${footer})` }}
    >
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#111] to-[#262525] opacity-90 z-[-1]"></div>

      {/* Footer Container */}
      <div className="relative flex justify-around flex-wrap gap-[25px] text-left px-[30px]">
        {/* Logo & Description */}
        <div className="flex flex-col gap-[6px] min-w-[200px]">
          <div className="flex items-center gap-[6px] text-[29px] mr-auto">
            <i className="fa-solid fa-utensils text-[25px] text-white"></i>
            <h3>Bella Zaika</h3>
          </div>
          <p className="opacity-80 my-[6px]">
            Delicious food with a cozy ambiance.
          </p>
        </div>

        {/* Contact Section */}
        <div className="flex flex-col gap-[6px] min-w-[200px]">
          <h4 className="mb-[10px]">Contact Us</h4>
          <p className="flex items-center gap-[8px] opacity-80 my-[6px]">
            <FaPhoneAlt className="text-[#f5deb3]" /> +91 9876543210
          </p>
          <p className="flex items-center gap-[8px] opacity-80 my-[6px]">
            <FaMapMarkerAlt className="text-[#f5deb3]" /> 45 Roma Lane, Koregaon
            Park, Pune, Maharashtra - 411001
          </p>
          <p className="flex items-center gap-[8px] opacity-80 my-[6px]">
            <FaClock className="text-[#f5deb3]" /> 10:00 AM - 11:00 PM (All
            Days)
          </p>
        </div>

        {/* Social Media */}
        <div className="flex flex-col gap-[6px] min-w-[150px]">
          <h4 className="mb-[10px]">Follow Us</h4>
          <div className="flex gap-[12px] text-[1.3rem]">
            <a
              href="#"
              className="transition duration-300 hover:text-[#ffb703]"
            >
              <FaInstagram />
            </a>
            <a
              href="#"
              className="transition duration-300 hover:text-[#ffb703]"
            >
              <FaFacebook />
            </a>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="relative text-center mt-[25px] border-t border-[#555] pt-[10px] text-[0.9rem] opacity-75">
        © 2025 Bella Zaika Restaurant | All Rights Reserved.
      </div>
    </footer>
  );
}

export default Footer;
