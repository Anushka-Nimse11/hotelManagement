import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";

import {
  NonAlcoholic,
  AlcoholicAperitivi,
  Wines,
  ItalianDigestivi,
} from "../Data/ImageList";

function SoftDrinks() {
  const Section = ({ title, items }) => (
    <div className="mb-12">
      {/* Section Title */}
      <h2 className="text-3xl text-center mb-6 text-[#CC9F35] tracking-wide border-y-2 border-[#CC9F35D6] p-3">
        {title}
      </h2>

      {/* Card Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-4">
        {items.map((item, index) => (
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
          "
          >
            <img
              src={item.imag}
              alt={item.name}
              className="w-85 h-95 object-cover rounded-xl shadow-md mx-auto"
            />

            <h3 className="text-xl font-semibold text-center mt-4 text-black">
              {item.name}
            </h3>
            <div className="flex justify-center items-center gap-1 mt-4">
              <CurrencyRupeeIcon className="text-black" />
              <h3 className="text-xl text-black">{item.price}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="p-6 border-2 border-[#CC9F35D6] m-10">
      <h1 className="text-center text-4xl mb-5">Italian Soft Drinks</h1>

      <Section title="Non-Alcoholic Drink" items={NonAlcoholic} />
      <Section title="Alcoholic Drink" items={AlcoholicAperitivi} />
      <Section title="Wines" items={Wines} />
      <Section title="Italian Digestivi" items={ItalianDigestivi} />
    </div>
  );
}

export default SoftDrinks;
