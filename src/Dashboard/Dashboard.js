import React, { useState } from "react";
import { FaBars, FaTimes, FaShoppingBag } from "react-icons/fa";
import { Button, Modal } from "@mui/material";
import { Link } from "react-router-dom";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [openLogoutModal, setOpenLogoutModal] = useState(false);

  const toggleNavbar = () => setIsOpen(!isOpen);

  const handleLogout = () => {
    localStorage.removeItem("userData");
  };

  return (
    <div className="bg-white">
      <nav className="flex items-center justify-between p-4 md:p-6 w-full flex-col md:flex-row">
        {/* Logo and Hamburger */}
        <div className="flex gap-3 items-center">
          <button
            className="block md:hidden text-gray-500 hover:text-white"
            onClick={toggleNavbar}
          >
            {isOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
          </button>
          <div className="flex items-center text-[#F5A319] text-xl font-bold">
            <img className="w-[150px]" src="./assets/images/11.png" alt="Website Logo" />
          </div>
        </div>

        {/* Navbar Links */}
        <div className={`w-full md:flex md:items-center md:justify-center md:w-auto ${isOpen ? "block" : "hidden"}`}>
          <div className="flex flex-col md:flex-row text-center md:space-x-6">
            <Link to="/" className="block text-[#ffa200] hover:text-[#F5A319] py-2 md:py-0">Home</Link>
            <Link to="/about" className="block text-[#ffa200] hover:text-[#F5A319] py-2 md:py-0">About</Link>
            <Link to="/playground" className="block text-[#ffa200] hover:text-[#F5A319] py-2 md:py-0">Code Playground</Link>
            <Link to="/Tutorial" className="block text-[#ffa200] hover:text-[#F5A319] py-2 md:py-0">Tutorial</Link>
            <Link to="/setting" className="block text-[#ffa200] hover:text-[#F5A319] py-2 md:py-0">Settings</Link>
          </div>
        </div>

        {/* Cart and Logout */}
        <div className="flex items-center space-x-6 ">
        <button className="bg-[#ffa200] text-white p-2 rounded-md" onClick={() => setOpenLogoutModal(true)}>
  Logout
</button>

        </div>
      </nav>

      {/* Logout Modal */}
      <Modal
        open={openLogoutModal}
        onClose={() => setOpenLogoutModal(false)}
        className="flex justify-center items-center"
      >
        <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full">
          <h2 className="text-[#F5A319] text-xl font-bold mb-4">Are you sure you want to log out?</h2>
          <div className="flex justify-around space-x-4">
            <button className="bg-[#F5A319] text-white px-4 py-2 rounded-md w-1/2" onClick={handleLogout}>
              Yes
            </button>
            <button className="bg-gray-300 text-black px-4 py-2 rounded-md w-1/2" onClick={() => setOpenLogoutModal(false)}>
              No
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default Header;
