import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

function UpdateAdminForm() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [reg, setReg] = useState({
    name: "",
    email: "",
    address: "",
    mobileNo: "",
  });

  useEffect(() => {
    axios
      .get("https://hotel-backend-a9o4.onrender.com/adminDetails")
      .then((res) => {
        const admin = res.data.find((a) => a.UserId == id);
        if (admin) {
          setReg({
            name: admin.Name,
            email: admin.Email,
            address: admin.Address,
            mobileNo: admin.MobileNo,
          });
        }
      });
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .put(`https://hotel-backend-a9o4.onrender.com/updateAdmin/${id}`, reg)
      .then(() => {
        alert("Admin updated successfully");
        navigate("/adminDashboard/adminManagement");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="p-6 max-w-xl">
      <h2 className="text-xl font-semibold mb-4 text-[#a31313]">
        Update Admin
      </h2>

      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-lg shadow-md space-y-4"
      >
        <input
          name="name"
          value={reg.name}
          onChange={(e) => setReg({ ...reg, name: e.target.value })}
          className="w-full border p-2 rounded"
          placeholder="Name"
        />

        <input
          name="email"
          value={reg.email}
          onChange={(e) => setReg({ ...reg, email: e.target.value })}
          className="w-full border p-2 rounded"
          placeholder="Email"
        />

        <input
          name="mobileNo"
          value={reg.mobileNo}
          onChange={(e) => setReg({ ...reg, mobileNo: e.target.value })}
          className="w-full border p-2 rounded"
          placeholder="Mobile"
        />

        <input
          name="address"
          value={reg.address}
          onChange={(e) => setReg({ ...reg, address: e.target.value })}
          className="w-full border p-2 rounded"
          placeholder="Address"
        />

        <div className="flex gap-3">
          <button className="bg-[#a31313] text-white px-4 py-2 rounded">
            Update
          </button>

          <button
            type="button"
            onClick={() => navigate(-1)}
            className="border px-4 py-2 rounded"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}

export default UpdateAdminForm;
