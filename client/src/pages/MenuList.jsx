import { Link } from "react-router-dom";
import "./MenuList.css";
function MenuList() {
  return (
    <div className="menu-list">
      <ul className="flex justify-center gap-5">
        <li>
          <Link to="/menu/starter">Starter</Link>
        </li>
        <li>
          <Link to="/menu/lunchdinner">Lunch & Dinner</Link>
        </li>
        <li>
          <Link to="/menu/dessert">Dessert</Link>
        </li>
        <li>
          <Link to="/menu/drinks">Soft Drinks</Link>
        </li>
        <li>
          <Link to="/menu/CoffeeTea">Coffee and Tea</Link>
        </li>
      </ul>
    </div>
  );
}
export default MenuList;
