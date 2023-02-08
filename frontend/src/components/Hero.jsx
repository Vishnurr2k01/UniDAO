import React from 'react';
import Typed from 'react-typed';

const Hero = () => {
  return (
    <div className='text-white'>
      <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
        <p className='text-[#00df9a] font-bold p-2'>
          GROWING WITH DAO
        </p>
        <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6'>
          Decentralised Decision Making Platform
        </h1>
        <div className='flex justify-center items-center'>
          <p className='md:text-5xl sm:text-4xl text-xl font-semibold py-4'>
            UniDAO for
          </p>
          <Typed
          className='md:text-5xl sm:text-4xl text-xl font-semibold md:pl-4 pl-2'
            strings={['Tranparency', 'Global Access', 'Future']}
            typeSpeed={120}
            backSpeed={140}
            loop
          />
        </div>
        <p className='md:text-2xl text-xl font-bold text-gray-500'>Make decisions from the bottom-up,governed by a community organized around rules enforced on a blockchain.</p>
        <button className='bg-[#00df9a] w-[200px] rounded-md font-bold my-6 mx-auto py-3 text-black'>Connect Wallet</button>
      </div>
    </div>
  );
};

export default Hero;