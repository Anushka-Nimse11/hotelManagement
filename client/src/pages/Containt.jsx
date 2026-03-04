// import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
// import "./Containt.css";
// import ShrimpScampi from "../assets/StarterShrimpScampi.jpg";
// import Bistecca from "../assets/Bistecca.jpg";
// import CassataSicilian from "../assets/DessertCassataSicilian.jpg";
// import Affogato from "../assets/CoffeeAffogato.jpg";

// function Containt() {
//   const dishes = [
//     { imag: ShrimpScampi, name: "Shrimp Scampi", price: "480" },
//     { imag: Bistecca, name: "Bistecca", price: "850" },
//     { imag: CassataSicilian, name: "Cassata Sicilian", price: "450" },
//     { imag: Affogato, name: "Affogato", price: "320" },
//   ];

//   return (
//     <div
//       className="food-container"
//       style={{
//         display: "flex",
//         gap: "10px",
//       }}
//     >
//       {dishes.map((dish, index) => (
//         <div
//           className="food-item"
//           key={index}
//           style={{ textAlign: "center", margin: "20px" }}
//         >
//           {/* Image */}
//           <img
//             src={dish.image}
//             alt={dish.name}
//             style={{
//               height: "330px",
//               objectFit: "cover",
//               borderRadius: "10px",
//               position: "center",
//               display: "flex",
//               margin: "0 auto",
//             }}
//           />
//           {/* Title */}
//           <h2 style={{ margin: "15px 0 10px 0" }}>{dish.name}</h2>

//           <div className="flex justify-center items-center gap-1 mt-4">
//             <CurrencyRupeeIcon className="text-black" />
//             <h3 className="text-xl text-black">{dish.price}</h3>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// }

// export default Containt;

import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import "./Containt.css";

import ShrimpScampi from "../assets/StarterShrimpScampi.jpg";
import Bistecca from "../assets/Bistecca.jpg";
import CassataSicilian from "../assets/DessertCassataSicilian.jpg";
import Affogato from "../assets/CoffeeAffogato.jpg";

function Containt() {
  const dishes = [
    { image: Affogato, name: "Affogato", price: "320" },
    { image: Bistecca, name: "Bistecca", price: "850" },
    { image: CassataSicilian, name: "Cassata Sicilian", price: "450" },
    { image: ShrimpScampi, name: "Shrimp Scampi", price: "480" },
  ];

  return (
    <div className="food-container">
      {dishes.map((dish, index) => (
        <div className="food-item" key={index}>
          <img src={dish.image} alt={dish.name} className="food-img" />

          <h2 className="food-title">{dish.name}</h2>

          <div className="price-box">
            <CurrencyRupeeIcon />
            <h3>{dish.price}</h3>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Containt;
