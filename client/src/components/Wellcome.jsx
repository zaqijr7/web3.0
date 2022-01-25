import React, { useState } from 'react';
import { AiFillPlayCircle } from "react-icons/ai";
import { SiEthereum } from "react-icons/si";
import { BsInfoCircle } from "react-icons/bs";
import Loader from "./Loader";

const commonStyle = 'min-h-[70px] sm:px-0 px-2 sm:min-w-[120px] flex justify-center items-center border-[0.5px] border-gray-400 text-sm text-gray-200'; 

const InputComponent = ({placeholder, name, type, value, handleChange }) => (
  <input
   type={type}
   placeholder={placeholder}
   name={name}
   step="0.0001"
   value={value}
   onChange={(e) => handleChange(e, name)}
   className='my-2 w-full appearance-none rounded-md p-2 outline-none border-none bg-transparent text-sm text-white blue-input-morphism'
   />
);

const Wellcome = () => {
  const connectWallet = () => {
    console.log("klikkk");
  }
  const [isLoading, setisLoading] = useState(false);
  
  const handleSubmit = () => {

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
          <div className="grid sm:grid-cols-3 grid-cols-2 w-full mt-10">
            <div className={`rounded-tl-2xl ${commonStyle}`}>
              Reliability
            </div>
            <div className={` ${commonStyle}`}>
              Security
            </div>
            <div className={`rounded-tr-2xl ${commonStyle}`}>
              Ethereum
            </div>
            <div className={`rounded-bl-2xl ${commonStyle}`}>
              Web 3.0
            </div>
            <div className={` ${commonStyle}`}>
              Low Fees
            </div>
            <div className={`rounded-br-2xl ${commonStyle}`}>
              Blockchain
            </div>
          </div>
        </div>
        <div className='flex flex-col flex-1 items-center justify-start w-full md:mt-0 mt-10'>
          <div className='p-3 justify-end items-start flex-col rounded-xl h-40 sm:w-72 w-full my-5 eth-card white-glassmorphism'>
            <div className='flex justify-between flex-col w-full h-full'>
              <div className='flex justify-between items-start'>
                <div className='h-10 w-10 rounded-full border-white flex justify-center items-center border-2'>
                  <SiEthereum fontSize={21} color='#fff'/>
                </div>
                <BsInfoCircle fontSize={17} color='#fff'/>
              </div>
              <div>
                <p className='font-light text-gray-100'>
                  0xnjkUVolsbu...Kgaui
                </p>
                <p className='font-semibold text-gray-100 mt-1'>
                  Ethereum
                </p>
              </div>
            </div>
          </div>
          <div className="card-form sm:w-96 w-full p-4">
            <InputComponent placeholder="Address To" name="address" type="text"/>
            <InputComponent placeholder="Amount (ETH)" name="ammount" type="number"/>
            <InputComponent placeholder="Keyword (Gif)" name="keyword" type="text"/>
            <InputComponent placeholder="Enter Message" name="message" type="text"/>
            <div className='h-[1px] bg-gray-400 my-3'></div>
            {isLoading ?
              <Loader/>
              :
              <button type="button" onClick={handleSubmit} className='text-white font-light w-full mt-2 border-[1px] p-2 border-gray-400 rounded-full cursor-pointer hover:bg-gray-400 focus:bg-gray-500 focus:border-gray-500'>
                Send Now
              </button>
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default Wellcome;
