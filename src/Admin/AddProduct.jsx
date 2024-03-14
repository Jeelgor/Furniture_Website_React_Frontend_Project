import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Addproduct = () => {
  const [name, setname] = useState("");
  const [price, setprice] = useState("");
  const [imgpath, setimgpath] = useState("");
  const [description, setdescription] = useState("");

  const Addproducthandler = (e) => {
    e.preventDefault();

    // Your axios post request
    axios
      .post("http://localhost:3011/Addproduct", {
        name,
        price,
        imgpath,
        description,
      })
      .then((result) => {
        console.log(result);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="bg-blue-700 h-screen flex items-center justify-center">
      <div className="ml-[40px] w-[600px] border-2 bg-white p-8 rounded-md">
        <h2 className="text-3xl font-bold text-black mb-6">Add Products</h2>
        <form onSubmit={Addproducthandler}>
          <div className="mb-4">
            <label className="block text-lg text-black">Name</label>
            <input
              type="text"
              className="w-full border-2 border-black p-2 rounded"
              onChange={(e) => setname(e.target.value)}
            />
          </div>

          <div className="mb-4">
            <label className="block text-lg text-black">price</label>
            <input
              type="text"
              className="w-full border-2 border-black p-2 rounded"
              onChange={(e) => setprice(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="block text-lg text-black">image</label>
            <input
              type="text"
              className="w-full border-2 border-black p-2 rounded"
              onChange={(e) => setimgpath(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="block text-lg text-black">description</label>
            <input
              type="text"
              className="w-full border-2 border-black p-2 rounded"
              onChange={(e) => setdescription(e.target.value)}
            />
          </div>
          <button onClick={Addproducthandler}>Add product</button>
        </form>
      </div>
    </div>
  );
};

export default Addproduct;
