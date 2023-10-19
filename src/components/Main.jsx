import React from 'react';

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
        <div className="absolute w-full top-[20%] p-4 md:p-8">
          <h1 className="text-3xl text-bold text-black font-bold md:text-5xl mb-10">
            Unlocking{' '}
            <span className="text-white font-bold">
              {' '}
              the potential of every day
            </span>
          </h1>
          <p className="w-full md:max-w-[70%] lg:max-w-[50%] xl:max-w-[35%] pt-12 text-xl font-bold text-black">
            Each day is an opportunity for discovery.
            <p className='w-full md:max-w-[80%] lg:max-w-[70%] xl:max-w-[70%] pt-4  font-bold'>
              Wisdom Wonder is here to unlock the potential of the elderly every
              day, together with us.
            </p>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Main;
