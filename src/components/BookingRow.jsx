import React, { useState } from "react";
import Swal from "sweetalert2";

const BookingRow = ({ booking, handleDelete, handleUpdate }) => {
  const { img, title, _id, price, name, status } = booking;

  return (
    <tr>
      <th>
        <label>
          <button
            onClick={() => handleDelete(_id)}
            className="btn btn-circle btn-outline  btn-xs"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-3 w-3"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </label>
      </th>
      <td>
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div className=" rounded w-24 h-24">
              <img src={img} alt="Avatar Tailwind CSS Component" />
            </div>
          </div>
          <div>
            <div className="font-bold">{title}</div>
            <div className="text-sm opacity-50">United States</div>
          </div>
        </div>
      </td>
      <td>
        {name}
        <br />
      </td>
      <td>{price}</td>
      <th>
        {status === "confirmed" ? (
          <button className="btn btn-secondary btn-xs">Confirmed</button>
        ) : (
          <button
            onClick={() => handleUpdate(_id)}
            className="btn btn-primary btn-xs"
          >
            Confirm Order
          </button>
        )}
      </th>
    </tr>
  );
};

export default BookingRow;
