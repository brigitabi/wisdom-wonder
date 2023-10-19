import React from 'react';

const Navbar = () => {
  return (
    <div className="flex items-center justify-between p-4 z-[100] w-full absolute">
      <h1 className="text-white text-3xl font-bold cursor-pointer">
        Wisdom Wonder
      </h1>
      <div>
        <button className="text-white pr-4 font-bold">Sign In</button>
        <button className="bg-green-700 text-white px-6 py-2 rounded-md cursor-pointer text-bold">
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default Navbar;
