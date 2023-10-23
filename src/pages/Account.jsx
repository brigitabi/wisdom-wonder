import React from 'react';
// import SavedActivity from '../components/SavedActivity';

const Account = () => {
  return (
    <>
      <div className="w-full text-white">
        <img
          className="w-full h-[550px] object-cover"
          src="https://images.unsplash.com/photo-1628891892235-5d834f9c64c1?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
        />
        <div className='bg-black/60 fixed top-0 left-0 w-full h-[550px]'></div>
        <div className='absolute top-[20%] p-4 md:p-8'>
          <h1 className='text-3xl md:text-5xl font-bold'>My Activities 🗒️ </h1>
        </div>
      </div>
      {/* <SavedActivity /> */}
    </>
  );
};

export default Account;
