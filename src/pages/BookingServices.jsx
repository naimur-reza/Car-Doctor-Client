import React, { useContext } from "react";
import { ScrollRestoration, useLoaderData } from "react-router-dom";
import { useForm } from "react-hook-form";
import { AuthContext } from "../providers/AuthProvider";
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
          name="firstName"
          placeholder="First Name"
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
          className="border-2 px-4 py-3 rounded-lg mb-5 w-1/2 outline-none font-semibold text-gray-400"
          name="price"
          defaultValue={"$" + price}
          placeholder="Due Amount"
        />
        <input
          required
          className="border-2 px-4 py-3 rounded-lg mb-5 w-1/2 outline-none font-semibold text-gray-400"
          name="email"
          placeholder="Your Email"
          defaultValue={user?.email}
        />

        <input className=" btn-error btn btn-block" type="submit" />
      </form>
    </div>
  );
};

export default Bookings;
