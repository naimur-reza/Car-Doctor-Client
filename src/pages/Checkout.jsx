import React from "react";
import { useLoaderData } from "react-router-dom";
import { useForm } from "react-hook-form";
const Checkout = () => {
  const data = useLoaderData();
  console.log(data);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <form
      className="my-contain bg-base-200 p-10"
      onSubmit={handleSubmit(onSubmit)}
    >
      {/* register your input into the hook by invoking the "register" function */}

      <input
        className="border-2 px-4 py-3 rounded-lg mb-5 w-1/2 outline-none font-semibold text-gray-400"
        placeholder="First Name"
        {...register("firstName")}
      />

      {/* include validation with required or other standard HTML validation rules */}
      <input
        className="border-2 px-4 py-3 rounded-lg mb-5 w-1/2 outline-none font-semibold text-gray-400"
        placeholder="Last Name"
        {...register("lastName", { required: true })}
      />
      <br />
      <input
        className="border-2 px-4 py-3 rounded-lg mb-5 w-1/2 outline-none font-semibold text-gray-400"
        placeholder="Your Number"
        {...register("number", { required: true })}
      />
      <input
        className="border-2 px-4 py-3 rounded-lg mb-5 w-1/2 outline-none font-semibold text-gray-400"
        placeholder="Your Email"
        {...register("email", { required: true })}
      />
      <textarea
        placeholder="Your Message"
        name=""
        id=""
        className="w-full rounded-lg  font-semibold p-5 text-gray-600 outline-none"
        rows="10"
        {...register("message", { required: true })}
      />
      {/* errors will return when field validation fails  */}
      {errors.exampleRequired && <span>This field is required</span>}

      <input className=" btn-error btn btn-block" type="submit" />
    </form>
  );
};

export default Checkout;
