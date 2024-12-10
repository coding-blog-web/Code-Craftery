
import React, { useEffect, useState } from 'react';
import { FaExclamationCircle, FaArrowRight } from 'react-icons/fa';
import Modal from '@mui/material/Modal';
import { NavLink } from 'react-router-dom';

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
    localStorage.removeItem('userData');
    localStorage.removeItem('authToken');
    window.location.href = '/login';
  };

  const nav = ['Home','About','Code Playground','Tutorial','Settings'];
  const [Email, setUserEmail] = useState(null);
  const [userId, setUserId] = useState(null);

  useEffect(() => {
    const storedData = localStorage.getItem('userData');
    if (storedData) {
      try {
        const parsedData = JSON.parse(storedData);
        setUserEmail(parsedData.data.email);
        setUserId(parsedData.data.id);
      } catch (error) {
        console.error('Error parsing userData:', error);
      }
    }
  }, []);

  return (
    <div className="text-[#ffa200]">
      <div className="flex justify-between items-center px-6 py-4">
        {/* Logo Section */}
        <div className="flex justify-center relative left-[100px]">
          <img
            src="./assets/images/11.png"
            alt="Logo"
            className="w-[150px]"
          />
        </div>

        {/* Navigation Bar */}
        <nav className="space-x-6 text-xl">
          {nav.map((item) => (
            <NavLink
              key={item}
              to={`/${item.toLowerCase().replace(/\s+/g, '-')}`}
              className={({ isActive }) =>
                isActive
                  ? 'text-[#F5A319] underline'
                  : 'hover:text-[#F5A319] transition'
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
              src="https://th.bing.com/th/id/OIG2.Whr_XXfQ7PfEA0mKd69l?w=270&h=270&c=6&r=0&o=5&dpr=1.3&pid=ImgGn"
              alt="User Profile"
              className="w-10 h-10"
            />
          </button>
        </div>
      </div>

      {/* Main Modal */}
      <Modal
        open={openMainModal}
        onClose={handleCloseMainModal}
        aria-labelledby="main-modal"
        aria-describedby="profile-reset-logout-options"
      >
        <div className="bg-white text-gray-800 p-6 rounded-lg shadow-lg max-w-xs mx-auto mt-20">
          <button
            onClick={handleOpenProfileModal}
            className="w-full py-2 mb-4 bg-[#ffa200] text-white rounded hover:bg-[#F5A319] transition"
          >
            Profile
          </button>
          <button
            onClick={() => alert('Reset Password functionality')}
            className="w-full py-2 mb-4 bg-[#ffa200] text-white rounded hover:bg-[#F5A319] transition"
          >
            Reset Password
          </button>
          <button
            onClick={handleOpenLogoutModal}
            className="w-full py-2 bg-red-600 text-white rounded hover:bg-red-700 transition"
          >
            Log Out
          </button>
        </div>
      </Modal>

      {/* Profile Modal */}
      <Modal
        open={openProfileModal}
        onClose={handleCloseProfileModal}
        aria-labelledby="profile-modal"
        aria-describedby="profile-info"
      >
        <div className="bg-white text-gray-800 p-6 rounded-lg shadow-lg max-w-xs mx-auto mt-20">
          <h2 className="text-xl font-bold mb-4">Profile Information</h2>
          {Email && userId ? (
            <div>
              <p>Email: {Email}</p>
              <p>User ID: {userId}</p>
            </div>
          ) : (
            <p>No user data found</p>
          )}
          <button
            onClick={handleCloseProfileModal}
            className="mt-4 py-2 px-4 bg-gray-300 rounded hover:bg-gray-400 transition"
          >
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
        <div className="bg-white text-gray-800 p-6 rounded-lg shadow-lg max-w-xs mx-auto mt-20">
          <div className="flex flex-col items-center mb-4">
            <FaExclamationCircle size={40} className="text-red-600" />
            <p>Are you sure you want to logout?</p>
          </div>
          <div className="flex justify-between">
            <button
              onClick={handleCloseLogoutModal}
              className="py-2 px-4 bg-gray-300 rounded hover:bg-gray-400 transition"
            >
              Cancel
            </button>
            <button
              onClick={confirmLogoutAction}
              className="py-2 px-4 bg-red-600 text-white rounded hover:bg-red-700 transition"
            >
              Yes <FaArrowRight />
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default Header;
