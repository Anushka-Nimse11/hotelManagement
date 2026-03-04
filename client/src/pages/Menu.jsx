import menuDessert from "../assets/menuDessert.jpg";
import menuLunch from "../assets/menuLunch.jpg";
import menuDrink from "../assets/menuDrink.jpg";
import menuCoffee from "../assets/menuCoffee.jpg";
import menuStarter from "../assets/menuStarter.jpg";
import ImageSlider from "./ImageSlider";
import { Routes, Route } from "react-router-dom";
import Starter from "./MenuPages/Starter";
import LunchDinner from "./MenuPages/LunchDinner";
import Dessert from "./MenuPages/Dessert";
import SoftDrinks from "./MenuPages/SoftDrinks";
import CoffeeTea from "./MenuPages/CoffeeTea";
import MenuList from "./MenuList";

function Menu() {
  const slides = [menuDrink, menuDessert, menuStarter, menuCoffee, menuLunch];

  return (
    <div>
      <div className="relative h-full">
        <ImageSlider
          autoSlide={true}
          slides={slides}
          autoSlideInterval={2000}
        />
        <div className="absolute inset-0 flex justify-center items-center bg-black/45 pointer-events-none">
          <h1 className="menu-name text-8xl text-[#f5deb3] drop-shadow-xl">
            MENUS
          </h1>
        </div>
      </div>

      <div>
        <MenuList />
        <Routes>
          <Route index element={<Starter />} />
          <Route path="Starter" element={<Starter />} />
          <Route path="LunchDinner" element={<LunchDinner />} />
          <Route path="dessert" element={<Dessert />} />
          <Route path="drinks" element={<SoftDrinks />} />
          <Route path="CoffeeTea" element={<CoffeeTea />} />
        </Routes>
      </div>
    </div>
  );
}

export default Menu;
