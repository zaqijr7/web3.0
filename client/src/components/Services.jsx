import React from 'react';
import { BsShieldFillCheck } from 'react-icons/bs';
import { BiSearchAlt } from 'react-icons/bi';
import { RiHeart2Fill } from 'react-icons/ri';

const ServicesCard = ({ color, title, icon, subtitle }) => (
  <div className='flex flex-row justify-start items-center card-form rounded p-3 m-2 cursor-pointer hover:shadow-xl'>
    <div>
      <div className={`w-10 h-10 rounded-full flex justify-center items-center ${color}`}>
        {icon}
      </div>
    </div>
    <div className='ml-5 flex flex-col'>
      <h1 className='text-white mt-2 text-lg'>{title}</h1>
      <p className='mt-2 text-white text-sm md:w-9/12'>{subtitle}</p>
    </div>
  </div>
)
const Services = () => {
  return (
    <div className='flex xl:flex-row flex-col justify-center items-center w-full gradient-bg-services px-4 pt-15 pb-20'>
      <div className="flex md:flex-row flex-col justify-between items-center md:p-20 py-12 px-4">
        <div className="flex flex-1 flex-col justify-start items-start">
          <h1 className="text-white text-3xl sm:text-5xl py-2 text-gradient">
            Services that we
            <br/>
            continue to improve
          </h1>
        </div>
      </div>
      <div className="flex flex-1 flex-col justify-start items-center text-white">
        <ServicesCard
          color="bg-[#2952E3]"
          title="Security Guaranteed"
          icon={<BsShieldFillCheck fontSize={21} className='text-white'/>}
          subtitle="Security is guaranted. We always maintain privacy and mainting the quality of our products."
        />
        <ServicesCard
          color="bg-[#89845F]"
          title="Best exchanges rates"
          icon={<BiSearchAlt fontSize={21} className='text-white'/>}
          subtitle="Security is guaranted. We always maintain privacy and mainting the quality of our products."
        />
        <ServicesCard
          color="bg-[#F84550]"
          title="Fastest transactions"
          icon={<RiHeart2Fill fontSize={21} className='text-white'/>}
          subtitle="Security is guaranted. We always maintain privacy and mainting the quality of our products."
        />
      </div>
    </div>
  )
}

export default Services;
