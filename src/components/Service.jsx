import React, { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";

const Service = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/services")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  console.log(services);
  return (
    <div className="py-14">
      <div className="space-y-3">
        {" "}
        <h1 className="font-bold text-error text-center text-xl"> Services</h1>
        <h1 className="text-4xl text-center font-semibold">
          Our Services Area
        </h1>
        <p className=" lg:px-80 text-center tracking-wide">
          The majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly believable.{" "}
        </p>
      </div>
      <div className="grid grid-cols-1 max-w-6xl mx-auto gap-5 place-items-center  lg:grid-cols-3">
        {services.map((service) => (
          <ServiceCard key={service?.id} service={service} />
        ))}
      </div>
    </div>
  );
};

export default Service;
