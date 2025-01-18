import React from 'react'
import Image from 'next/image'
import Footer from "../components/footer";

// Icons and Images

import Icon from "../pics/all-products/icons/Icon.png"


// React Icons

import { RiArrowDownSLine } from "react-icons/ri";


const AllProducts = () => {
  return (
    <div className='relative w-full max-w-[1440px] mt-12 text-[16px] font-normal border-[2px] border-black'>
      <div id="1" className=' w-auto mx-10 h-full flex justify-between border-[2px] border-red-600'>
        <h3>New (500)</h3>
        <div className="flex w-[224px] h-[28px] text-[16px] justify-between border-[2px] border-blue-600">
          <div className=' flex '>
            <p className='mr-2'>Hide Filters</p>
            <Image src={Icon} alt='Icon' className='text-black mr-4'></Image>
          </div>
          <div className=' h-auto flex '>
            <p className='mr-2'>Sort By</p>
            <RiArrowDownSLine className='h-auto items-center text-2xl'/>
          </div>
        </div>
      </div>
      <div className='w-full h-full sm:w-[260px] grid grid-cols-1 sm:grid-cols-2  border-[2px] border-black'>
        <div className='w-full sm:w-[192px] border-[1px] border-yellow-600'></div>

        <div className='flex justify-center w-[11px] h-auto sm:h-[849px] border-[1px] border-cyan-600 absolute left-[249px]'>
          <div className='w-[7px] h-[329px] opacity-50 bg-[#000000]'></div>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default AllProducts