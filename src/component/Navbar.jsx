import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/acmanlogo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const navigate = useNavigate();

  // Check if the user is logged in when the component mounts
  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token"); // Remove token from localStorage
    setIsLoggedIn(false); // Update state to reflect that the user is logged out
    navigate("/login"); // Redirect to login page
  };

  return (
    <div className="py-1">
      <div className="navbar bg-white h-16">
        {/* Left Section with Links (Hidden on Small Screens) */}
        <div className="flex-1 mx-15 hidden lg:flex items-center">
          <a className="btn btn-ghost hover:text-[#da9858] text-lg" href="/">About Us</a>
          <a className="btn btn-ghost hover:text-[#da9858] text-lg" href="/">Gallery</a>
          <a className="btn btn-ghost hover:text-[#da9858] text-lg" href="/">Infrastructure</a>
          <a className="btn btn-ghost hover:text-[#da9858] text-lg" href="/">Faculty</a>
          <a className="btn btn-ghost hover:text-[#da9858] text-lg" href="/">StudentZone</a>
        </div>

        {/* Center Section */}
        <div className="flex-1 text-center">
          <a href="/" className="flex justify-center items-center ml-10">
            <img
              src={logo}
              alt="Logo"
              className="w-[190px] h-auto"
            />
          </a>
          <img
              src="https://www.ncerc.ac.in/content/img/acrdt/aicte.png"
              alt="Logo"
              className="w-[190px] h-auto"
            />
             
        </div>

        {/* Right Section */}
        <div className="flex-none hidden lg:flex items-center">
          <a className="btn btn-ghost hover:text-[rgb(78,62,45)] text-lg" href="/contact">Contact</a>
          {isLoggedIn ? (
            <button
              className="btn btn-ghost hover:text-[#da9858] text-lg"
              onClick={handleLogout}
            >
              Logout
            </button>
          ) : (
            <a className="btn btn-ghost hover:text-[#da9858] text-lg" href="/login">Login</a>
          )}
        </div>

        {/* Hamburger Menu for Small Screens */}
        <div className="lg:hidden flex-none">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="btn btn-ghost btn-circle"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Dropdown Menu for Small Screens */}
      {isOpen && (
        <div className="lg:hidden mt-2 flex flex-col space-y-2">
          <a className="btn btn-ghost text-lg" href="/" onClick={() => setIsOpen(false)}>Home</a>
          <a className="btn btn-ghost text-lg" href="/menu" onClick={() => setIsOpen(false)}>Menu</a>
          <a className="btn btn-ghost text-lg" href="/about" onClick={() => setIsOpen(false)}>About</a>
          <a className="btn btn-ghost text-lg" href="/contact" onClick={() => setIsOpen(false)}>Contact</a>
          {isLoggedIn ? (
            <button
              className="btn btn-ghost text-lg"
              onClick={() => {
                setIsOpen(false);
                handleLogout();
              }}
            >
              Logout
            </button>
          ) : (
            <a
              className="btn btn-ghost text-lg"
              href="/login"
              onClick={() => setIsOpen(false)}
            >
              Login
            </a>
          )}
        </div>
      )}
    </div>
  );
};

export default Navbar;
