import VideoSlider from "./VideoSlider";
import RestaurantVedio from "../assets/RestaurantVideo.mp4";
import MassimoBottura from "../assets/OwnerMassimoBottura.jpg";
import JoeBastianich from "../assets/RestaurantManager.png";
import GualtieroMarchesi from "../assets/HeadChef.png";
import CarloCracco from "../assets/CarloCracco.jpg";
import AntoninoCannavacciuolo from "../assets/LineCook.jpg";
import GiadaDeLaurentiis from "../assets/GiadaDeLaurentiis.png";

function AboutUs() {
  const videos = [RestaurantVedio];

  const teamMembers = [
    { name: "Massimo Bottura", role: "Owner", image: MassimoBottura },
    {
      name: "Joe Bastianich",
      role: "Restaurant Manager",
      image: JoeBastianich,
    },
    { name: "Gualtiero Marchesi", role: "Head Chef", image: GualtieroMarchesi },
    { name: "Carlo Cracco", role: "Sous Chef", image: CarloCracco },
    {
      name: "Antonino Cannavacciuolo",
      role: "Line Cook",
      image: AntoninoCannavacciuolo,
    },
    {
      name: "Giada De Laurentiis",
      role: "Host",
      image: GiadaDeLaurentiis,
    },
  ];

  return (
    <div>
      <div className="relative h-full">
        {/* Video Slider */}
        <VideoSlider slides={videos} />

        <div className="absolute inset-0 flex justify-center items-center bg-black/45 pointer-events-none">
          <h1 className="menu-name text-7xl text-white drop-shadow-xl">
            ABOUT US
          </h1>
        </div>
      </div>

      {/* Our Team Section */}
      <div className="p-6 border-2 border-[#CC9F35D6] m-10 rounded-2xl">
        <h1 className="text-center text-4xl mb-5">Our Team</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 px-4">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="
        bg-white/10 
        backdrop-blur-md
        p-4 
        rounded-2xl 
        shadow-lg 
        border border-[#CC9F35]/40 
        transition 
        hover:scale-105 
        hover:shadow-2xl 
        duration-300
        w-120   
        mx-auto    
      "
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-70 h-90 object-cover rounded-xl shadow-md mx-auto"
              />
              <h3 className="text-xl font-semibold text-center mt-4 text-black">
                {member.name}
              </h3>
              <p className="text-center text-[#956a06] mt-2">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
