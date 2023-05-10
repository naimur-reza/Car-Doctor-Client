import React from "react";
import { FaArrowRight } from "react-icons/fa";
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
          <span className="cursor-pointer text-error">
            <FaArrowRight />
          </span>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
