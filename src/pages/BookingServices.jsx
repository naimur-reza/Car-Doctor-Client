import React, { useContext } from "react";
import { ScrollRestoration, useLoaderData } from "react-router-dom";
import { useForm } from "react-hook-form";
import { AuthContext } from "../providers/AuthProvider";
import Swal from "sweetalert2";
const Bookings = () => {
  const data = useLoaderData();
  const { user } = useContext(AuthContext);
  const { _id, price, title, img } = data;
  console.log(data);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const price = form.price.value;
    const date = form.date.value;
    const allData = { img, name, price, email, date, title, service_id: _id };
    fetch("http://localhost:5000/bookings", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(allData),
    })
      .then((response) => response.json())
      .then((response) => console.log(response))
      .catch((err) => console.error(err));
    form.reset();
    Swal.fire("Successfully Booked!", "Your Order Booked.", "success");
  };
  return (
    <div className="my-contain">
      <ScrollRestoration />
      <h1 className="text-2xl font-semibold py-5">Service For: {title}</h1>
      <form className=" bg-base-200 p-10" onSubmit={handleSubmit}>
        {/* register your input into the hook by invoking the "register" function */}

        <input
          required
          className="border-2 px-4 py-3 rounded-lg mb-5 w-1/2 outline-none font-semibold text-gray-400"
          name="name"
          placeholder="Enter Name"
        />

        {/* include validation with required or other standard HTML validation rules */}
        <input
          required
          className="border-2 px-4 py-3 rounded-lg mb-5 w-1/2 outline-none font-semibold text-gray-400"
          type="date"
          name="date"
        />
        <br />
        <input
          required
          className="border-2 px-4 py-3 bg-white rounded-lg mb-5 w-1/2 outline-none font-semibold text-gray-400"
          name="price"
          defaultValue={"$" + price}
          placeholder="Due Amount"
          aria-disabled={true}
          disabled
        />
        <input
          required
          className="border-2 px-4 py-3 rounded-lg mb-5 w-1/2 outline-none bg-white font-semibold text-gray-400"
          name="email"
          placeholder="Your Email"
          defaultValue={user?.email}
          aria-disabled={true}
          disabled
        />

        <input
          className=" btn-error btn btn-block"
          type="submit"
          value={"BOOK NOW"}
        />
      </form>
    </div>
  );
};

export default Bookings;
