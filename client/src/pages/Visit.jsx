import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Instagram,
  Facebook,
  Accessibility,
} from "lucide-react";
import visit from "../assets/Visit.jpg";

function Visit() {
  return (
    <div className="w-full">
      {/* Hero Visit Section */}
      <div className="relative w-full h-[48rem]">
        <img
          src={visit}
          alt="visit"
          className="absolute top-0 left-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 flex justify-center items-center bg-black/45 pointer-events-none">
          <p className="antialiased italic font-semibold text-3xl md:text-4xl max-w-[55%] text-center text-[#f5deb3] drop-shadow-[0_4px_10px_rgba(0,0,0,0.9)] leading-relaxed tracking-wide">
            "Step into the heart of Italy without leaving the city. From
            authentic recipes to warm Mediterranean hospitality, every part of
            the dining experience is crafted to make visitors feel special."
          </p>
        </div>
      </div>

      {/* Contact + Map Section */}
      <div className="w-full bg-[#faf7f2] py-12 px-6 flex justify-center">
        <div className="flex flex-wrap w-[90%] border-3 border-[#CC9F35D6] rounded-2xl p-6">
          {/* LEFT: Contact Info */}
          <div className="flex flex-col gap-5 text-lg text-[#333] pr-6 border-r-3 border-[#CC9F35D6] min-w-[280px]">
            {/* Address */}
            <div className="flex items-center gap-3">
              <MapPin className="text-red-600" />
              <p className="font-semibold">
                45 Roma Lane, Koregaon Park, Pune, Maharashtra – 411001
              </p>
            </div>

            {/* Mobile */}
            <div className="flex items-center gap-3">
              <Phone className="text-red-600" />
              <p className="font-semibold">+91 9876543210</p>
            </div>

            {/* Email */}
            <div className="flex items-center gap-3">
              <Mail className="text-red-600" />
              <p className="font-semibold">bellazaika@gmail.com</p>
            </div>

            {/* Opening Hours */}
            <div className="flex items-center gap-3">
              <Clock className="text-red-600" />
              <p className="font-semibold">Mon – Sun: 10:00 AM – 11:00 PM</p>
            </div>

            {/* Social Media */}
            <div className="flex items-center gap-4 mt-2">
              <Instagram className="text-pink-600 cursor-pointer" />
              <Facebook className="text-blue-600 cursor-pointer" />
            </div>

            {/* Special Notes */}
            <div className="flex flex-col gap-3 mt-4">
              <h3 className="font-bold text-[#CC9F35D6] text-lg">
                Special Notes:
              </h3>

              <div className="flex items-center gap-3">
                <MapPin className="text-red-600" />
                <p>Parking Available</p>
              </div>

              <div className="flex items-center gap-3">
                <Accessibility className="text-red-600" />
                <p>Wheelchair Accessible</p>
              </div>
            </div>
          </div>

          {/* RIGHT: Map */}
          <div className="w-[50%] h-[300px] mt-4 px-6 max-[768px]:w-full max-[480px]:px-0">
            <iframe
              className="w-[43rem] h-[22rem] rounded-xl border-3 border-[#CC9F35D6] shadow-lg"
              loading="lazy"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.1!2d73.868!3d18.519!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bf0b0ef1f1a3%3A0xa9b3df8b4f59!2sKoregaon%20Park%2C%20Pune%2C%20Maharashtra%20411001!5e0!3m2!1sen!2sin!4v1702240000000!5m2!1sen!2sin"
              title="Map"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Visit;
