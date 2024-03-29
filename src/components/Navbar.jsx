import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';

const Navbar = () => {
  const { user, logOut } = UserAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logOut();
      navigate('/');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex items-center justify-between p-4 z-[100] w-full absolute">
      <Link to="/">
        <h1 className="text-white text-xl font-bold cursor-pointer">
          Wisdom Wonder
        </h1>
      </Link>

      {user?.email ? (
        <div>
          <Link to="/account">
            <button className="text-white pr-4">Account</button>
          </Link>

          <button
            onClick={handleLogout}
            className="bg-green-700 text-white px-6 py-2 rounded-md cursor-pointer"
          >
            Log Out
          </button>
        </div>
      ) : (
        <div className=''>
          <Link to="/login">
            <button className="text-white pr-4 text-sm">Sign In</button>
          </Link>

          <Link to="/signup">
            <button className="bg-green-700 text-white px-4 py-2 rounded cursor-pointer text-sm">
              Sign Up
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;
