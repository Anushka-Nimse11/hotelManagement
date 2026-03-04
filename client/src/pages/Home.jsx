// import TableBooking from "./TableBooking";
// import mainBG from "../assets/mainBackgroundA.jpg";
// import restaurant from "../assets/resturant1.jpg";
// import Containt from "./Containt";

// function Home() {
//   return (
//     <div>
//       <div>
//         <div
//           className="h-[40rem] bg-cover bg-center bg-no-repeat "
//           style={{ backgroundImage: `url(${mainBG})` }}
//         ></div>
//       </div>

//       <Containt />

//       {/* Restaurant Section */}
//       <div
//         className="flex justify-evenly items-center flex-wrap p-5
//       max-[768px]:flex-col max-[768px]:text-center"
//       >
//         {/* Text Section */}
//         <div
//           className="text-center max-w-[500px] m-5 flex-1 min-w-[300px]
//         max-[768px]:w-[90%]"
//         >
//           <h2 className="text-red-600 italic text-2xl font-semibold">
//             Welcome to Bella Zaika!
//           </h2>

//           <p
//             className="text-[18px] leading-[1.6] text-[#333]
//           max-[480px]:text-[16px]"
//           >
//             Experience the joy of flavors at Bella Zaika, where every dish is
//             made with love and the freshest ingredients. From timeless classics
//             to exciting new creations, our menu is designed to delight your
//             taste buds. Whether craving a comforting pasta, a sizzling pizza, or
//             a fresh salad, something is here for everyone. At Bella Zaika, food
//             is not just served — experiences are created. Discover why Bella
//             Zaika is the favorite spot for food lovers in town!
//           </p>
//         </div>

//         {/* Image Section */}
//         <div
//           className="w-[40%] h-[300px] bg-cover bg-center rounded-lg mt-5
//           max-[768px]:w-[80%] max-[768px]:h-[250px] max-[768px]:order-[-1]
//           max-[480px]:w-[95%] max-[480px]:h-[200px]"
//           style={{ backgroundImage: `url(${restaurant})` }}
//         ></div>
//       </div>

//       <TableBooking />
//     </div>
//   );
// }

// export default Home;

import MyBookings from "../UserDashboard/MyBookings";
import TableBooking from "./TableBooking";
import mainBG from "../assets/mainBackgroundA.jpg";
import restaurant from "../assets/resturant1.jpg";
import Containt from "./Containt";

function Home() {
  const isLoggedIn = sessionStorage.getItem("userEmail");

  return (
    <div>
      {/* Main Banner */}
      <div className="relative h-[40rem]">
        {/* Background Image */}
        <div
          className="h-full w-full bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${mainBG})` }}
        ></div>

        {/* Optional overlay */}
        <div className="absolute top-0 left-0 w-full h-full bg-black/50"></div>

        {/* Text on image */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white px-4 max-w-[90%]">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 italic">
            Bella Zaika
          </h1>
          <p className="text-lg md:text-2xl leading-relaxed">
            Whether craving something classic or something bold, Bella Zaika
            offers a menu full of choices for every taste.
          </p>
        </div>
      </div>

      <Containt />

      {/* Restaurant Section */}
      <div
        className="flex justify-evenly items-center flex-wrap p-5 
        max-[768px]:flex-col max-[768px]:text-center"
      >
        {/* Text Section */}
        <div
          className="text-center max-w-[500px] m-5 flex-1 min-w-[300px] 
          max-[768px]:w-[90%]"
        >
          <h2 className="text-red-600 italic text-2xl font-semibold">
            Welcome to Bella Zaika!
          </h2>

          <p
            className="text-[18px] leading-[1.6] text-[#333] 
            max-[480px]:text-[16px]"
          >
            Experience the joy of flavors at Bella Zaika, where every dish is
            made with love and the freshest ingredients. From timeless classics
            to exciting new creations, our menu is designed to delight your
            taste buds. Whether craving a comforting pasta, a sizzling pizza, or
            a fresh salad, something is here for everyone. At Bella Zaika, food
            is not just served — experiences are created. Discover why Bella
            Zaika is the favorite spot for food lovers in town!
          </p>
        </div>

        {/* Image Section */}
        <div
          className="w-[40%] h-[300px] bg-cover bg-center rounded-lg mt-5 
          max-[768px]:w-[80%] max-[768px]:h-[250px] max-[768px]:order-[-1]
          max-[480px]:w-[95%] max-[480px]:h-[200px]"
          style={{ backgroundImage: `url(${restaurant})` }}
        ></div>
      </div>

      <TableBooking />

      {/* My Bookings (only after login) */}
      {isLoggedIn && <MyBookings />}
    </div>
  );
}

export default Home;
