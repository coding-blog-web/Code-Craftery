import React, { useEffect, useState } from "react";
import { FaExclamationCircle, FaArrowRight } from "react-icons/fa";
import Modal from "@mui/material/Modal";
import { NavLink } from "react-router-dom";
import "./style.css";

const Header = () => {
  const [openMainModal, setOpenMainModal] = useState(false);
  const [openLogoutModal, setOpenLogoutModal] = useState(false);
  const [openProfileModal, setOpenProfileModal] = useState(false);

  const handleOpenMainModal = () => setOpenMainModal(true);
  const handleCloseMainModal = () => setOpenMainModal(false);

  const handleOpenLogoutModal = () => {
    setOpenMainModal(false);
    setOpenLogoutModal(true);
  };
  const handleCloseLogoutModal = () => setOpenLogoutModal(false);

  const handleOpenProfileModal = () => {
    setOpenMainModal(false);
    setOpenProfileModal(true);
  };
  const handleCloseProfileModal = () => setOpenProfileModal(false);

  const confirmLogoutAction = () => {
    localStorage.removeItem("userData");
    localStorage.removeItem("authToken");
    window.location.href = "/login";
  };

  const nav = ["Home", "About", "Code Playground", "Tutorial", "Settings"];
  const [Email, setUserEmail] = useState(null);
  const [userId, setUserId] = useState(null);

  useEffect(() => {
    const storedData = localStorage.getItem("userData");
    if (storedData) {
      try {
        const parsedData = JSON.parse(storedData);
        setUserEmail(parsedData.data.email);
        setUserId(parsedData.data.id);
      } catch (error) {
        console.error("Error parsing userData:", error);
      }
    }
  }, []);

  return (
    <div className="text-[#ffa200]">
      <div className="flex justify-between items-center px-6 py-4">
        {/* Logo Section */}
        <div className="flex justify-center relative left-[100px]">
          <img src="./assets/images/11.png" alt="Logo" className="w-[175px]" />
        </div>

        {/* Navigation Bar */}
        <nav className="space-x-6 text-xl">
          {nav.map((item) => (
            <NavLink
              key={item}
              to={`/${item.toLowerCase().replace(/\s+/g, "-")}`}
              className={({ isActive }) =>
                isActive
                  ? "text-[#F5A319] underline"
                  : "hover:text-[#F5A319] transition"
              }
            >
              {item}
            </NavLink>
          ))}
        </nav>

        {/* Profile and Modals */}
        <div className="flex justify-center relative right-[100px]">
          <button
            className="rounded-full overflow-hidden border-2 border-white"
            onClick={handleOpenMainModal}
          >
            <img
              src="./assets/images/123456.png"
              alt="User Profile"
              className="w-10 h-10"
            />
          </button>
        </div>
      </div>
      <Modal
        open={openMainModal}
        onClose={handleCloseMainModal}
        aria-labelledby="main-modal"
        aria-describedby="profile-reset-logout-options"
      >
        <div className="modal-contentw-main">
          <div className="modal-contentw-btns">
            <button onClick={handleOpenProfileModal} className="modal-button-1">
              Profile
            </button>
          </div>
          <div className="modal-contentw-btns">
            {" "}
            <button
              onClick={() => alert("Reset Password functionality")}
              className="modal-button-1"
            >
              Reset Password
            </button>
          </div>
          <div className="modal-contentw-btns">
            <button onClick={handleOpenLogoutModal} className="modal-button">
              Log Out
            </button>
          </div>
        </div>
      </Modal>

      {/* Profile Modal */}
      <Modal
        open={openProfileModal}
        onClose={handleCloseProfileModal}
        aria-labelledby="profile-modal"
        aria-describedby="profile-info"
      >
        <div className="modal-contentw">
          <div>
            <h2 className="h2-model">Profile Information</h2>
          </div>
          {Email && userId ? (
            <div>
              <p>Email: {Email}</p>
              <p>User ID: {userId}</p>
            </div>
          ) : (
            <p>No user data found</p>
          )}
          <button onClick={handleCloseProfileModal} className="modal-button">
            Close
          </button>
        </div>
      </Modal>

      {/* Logout Confirmation Modal */}
      <Modal
        open={openLogoutModal}
        onClose={handleCloseLogoutModal}
        aria-labelledby="logout-confirmation"
        aria-describedby="confirm-logout-action"
      >
        <div className="modal-contentw">
          <FaExclamationCircle size={40} className="modal-icon" />
          <p>Are you sure you want to logout?</p>
          <div className="modal-btnw">
            <button onClick={handleCloseLogoutModal} className="cancel-logout">
              Cancel
            </button>
            <button onClick={confirmLogoutAction} className="confirm-logout">
              Yes <FaArrowRight />
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default Header;
