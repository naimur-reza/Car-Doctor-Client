import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
const ServiceCard = ({ service }) => {
  const { _id, price, img, title } = service;

  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure className="px-10 pt-10">
        <img src={img} alt="Shoes" className="rounded-xl h-52" />
      </figure>
      <div className="card-body  ">
        <h2 className="card-title text-2xl">{title}</h2>
        <div className="flex   items-center justify-between">
          <p className="font-semibold text-error text-lg ">Price: ${price}</p>
          <Link
            to={`/bookingServices/${_id}`}
            className="cursor-pointer text-error"
          >
            <FaArrowRight />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
