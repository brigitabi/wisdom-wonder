import React from 'react';
import { IoIosKey } from 'react-icons/io';

const Main = () => {
  return (
    <div className="w-full h-[550px]">
      <div className="w-full h-full">
        <div className="absolute w-full h-[550px] bg-gradient-to-r from-white/20">
          {' '}
        </div>
        <img
          className="w-full h-full object-cover"
          src="https://images.unsplash.com/photo-1513159446162-54eb8bdaa79b?auto=format&fit=crop&q=80&w=2940&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="activity"
        />
        <div className="absolute w-full top-[23%] p-4 md:p-8">
          <h1 className="text-3xl text-bold text-white font-bold md:text-5xl flex flex-row">
            Unlocking the potential of every day
            <IoIosKey className="text-green ml-4" size={40} />
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Main;
