import { useState } from "react";
import axios from "axios";
function AddMenuItem() {
  let [menu, setMenu] = useState({
    MenuImage: "",
    Name: "",
    Price: "",
    Category: "",
  });

  let handleInput = (event) => {
    let fieldName = event.target.name;
    let newValue = event.target.value;

    setMenu((currData) => {
      return { ...currData, [fieldName]: newValue };
    });
  };

  let handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post("https://hotel-backend-a9o4.onrender.com/addMenu", menu)
      .then((res) => alert("Menu add successfully"))
      .catch((err) => alert(err));

    setMenu({
      MenuImage: "",
      Name: "",
      Price: "",
      Category: "",
    });
  };

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Add Menu Item</h1>

      <form className="bg-white text-gray-700 shadow-lg rounded-lg p-6 max-w-md mx-auto flex flex-col gap-4">
        <label className="flex flex-col">
          <span className="text-gray-700 font-medium mb-1">Upload Image</span>
          <input
            id="MenuImage"
            type="file"
            name="MenuImage"
            value={menu.MenuImage}
            onChange={handleInput}
            className="border border-gray-300 h-[30%] rounded-lg p-2 hover:border-blue-400 transition"
          />
        </label>

        <label className="flex flex-col">
          <span className="text-gray-700 font-medium mb-1">Name</span>
          <input
            id="Name"
            type="text"
            name="Name"
            placeholder="Enter menu name"
            value={menu.Name}
            onChange={handleInput}
            className="border border-gray-300 rounded-lg p-2 focus:border-blue-400 focus:outline-none transition"
          />
        </label>

        <label className="flex flex-col">
          <span className="text-gray-700 font-medium mb-1">Price</span>
          <input
            id="Price"
            type="number"
            name="Price"
            placeholder="Enter price"
            value={menu.Price}
            onChange={handleInput}
            className="border border-gray-300 rounded-lg p-2 focus:border-blue-400 focus:outline-none transition"
          />
        </label>

        <label className="flex flex-col">
          <span className="text-gray-700 font-medium mb-1">Category</span>
          <input
            id="Category"
            type="text"
            name="Category"
            placeholder="Enter category"
            value={menu.Category}
            onChange={handleInput}
            className="border border-gray-300 rounded-lg p-2 focus:border-blue-400 focus:outline-none transition"
          />
        </label>

        <button
          type="submit"
          name="submit"
          onClick={handleSubmit}
          className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg transition"
        >
          Add Item
        </button>
      </form>
    </div>
  );
}

export default AddMenuItem;
