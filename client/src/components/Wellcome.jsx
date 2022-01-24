import React from 'react';
import { AiFillPlayCircle } from "react-icons/ai";
import { SiEthereum } from "react-icons/si";
import { BsInfoCircle } from "react-icons/bs";
import Loader from "./Loader";
const Wellcome = () => {
  const connectWallet = () => {
    console.log("klikkk");
  }

  return (
    <div className='flex w-full justify-center items-center '>
      <div className="flex md:flex-row flex-col items-start justify-between md:p-20 py-12 px-4">
        <div className="flex flex-1 justify-start flex-col md:mr-10">
          <h1 className='text-3xl sm:text-5xl text-white text-gradient py-1'>
            Send Crypto <br/> accros the world
          </h1>
          <p className='text-left mt-5 text-white font-light md:w-9/12 w-11/12 text-base'>Explore the crypto world. Buy and sell cryptocurrencies easily on the NFCRYP</p>
          <button 
            type='button'
            onClick={connectWallet}
            className='flex justify-center items-center text-white bg-[#2952e3] hover:bg-[#2546bd] py-2 rounded-full mt-10 font-medium'
          >
            Connect To Wallet
          </button>
          <div className="grid sm:grid-cols-3 grid-cols-2 w-full mt-10 bg-teal-600">
            test
          </div>
        </div>
      </div>
    </div>
  )
}

export default Wellcome;
