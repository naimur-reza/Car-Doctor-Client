import React, { useContext } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.svg";
import { AuthContext } from "../../providers/AuthProvider";
const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  const handleLogout = () => {
    localStorage.removeItem("car-access-token");
    logOut()
      .then((res) => {})
      .catch((err) => console.log(err));
  };
  console.log(user);
  return (
    <div className="navbar bg-base-100 my-contain">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
            <li className="my-text">
              <Link>Home</Link>
            </li>
            <li className="my-text">
              <Link>About</Link>
            </li>
            <li className="my-text">
              <Link>Blog</Link>
            </li>
            <li className="my-text">
              <Link>Services</Link>
            </li>
            <li className="my-text">
              <Link to={"/contact"}>Contact</Link>
            </li>
            <li className="my-text">
              <Link to={"/contact"}>My Bookings</Link>
            </li>
            {user ? (
              <li className="my-text">
                <Link onClick={handleLogout}>Log out</Link>
              </li>
            ) : (
              <li className="my-text">
                <Link to={"/login"}>Login</Link>
              </li>
            )}
          </ul>
        </div>
        <Link>
          <img className="w-20" src={logo} alt="" />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li className="my-text">
            <Link to={"/"}>Home</Link>
          </li>
          <li className="my-text">
            <Link to={"/about"}>About</Link>
          </li>
          <li className="my-text">
            <Link to={"/blog"}>Blog</Link>
          </li>
          <li className="my-text">
            <Link to={"/services"}>Services</Link>
          </li>
          <li className="my-text">
            <Link to={"/myBookings"}>My Bookings</Link>
          </li>
          <li className="my-text">
            <Link to={"/contact"}>Contact</Link>
          </li>
          {user ? (
            <li className="my-text">
              <Link onClick={logOut}>Log out</Link>
            </li>
          ) : (
            <li className="my-text">
              <Link to={"/login"}>Login</Link>
            </li>
          )}
        </ul>
      </div>
      <div className="navbar-end">
        <Link className="btn btn-warning btn-outline">Appointment</Link>
      </div>
    </div>
  );
};

export default Header;
