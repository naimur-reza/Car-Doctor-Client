import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../providers/AuthProvider";
import BookingRow from "../components/BookingRow";
import Swal from "sweetalert2";
const Bookings = () => {
  const [bookings, setBookings] = useState([]);
  const [render, setRender] = useState(false);
  const { user } = useContext(AuthContext);
  useEffect(() => {
    fetch(`http://localhost:5000/bookings?email=${user.email}`, {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("car-access-token")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => setBookings(data));
  }, [render]);
  if (bookings.length === 0) {
    return (
      <h1 className="text-center text-4xl font-semibold py-24">No Bookings </h1>
    );
  }
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/bookings/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              setRender(!render);
            }
          });
      }
    });
  };
  const handleUpdate = (id) => {
    fetch(`http://localhost:5000/bookings/${id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ status: "confirmed" }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          console.log(data);
          const rest = bookings.filter((it) => it._id !== id);
          const updated = bookings.find((it) => it._id === id);
          updated.statue = "confirmed";
          setBookings([updated, ...rest]);
          Swal.fire("Confirmed!", "Your Order Confirmed.", "success");
          setRender(!render);
        }
      });
  };
  return (
    <div className="my-contain py-10">
      <h1 className="text-lg py-3 font-semibold">
        Total Bookings: {bookings.length}
      </h1>
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              <th>Delete</th>
              <th>Image and service</th>
              <th> Name</th>
              <th>Price</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {bookings?.map((booking) => (
              <BookingRow
                key={booking?._id}
                handleDelete={handleDelete}
                booking={booking}
                handleUpdate={handleUpdate}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Bookings;
