import React from 'react'
import Image from 'next/image'

// Images

import Frame1 from "../pics/cart/Frame1.png"

const Cart = () => {
  return (
    <div className='w-[1100px] h-[632px] absolute top-[136px] left-[155px] border-[1px] border-trasparent hover:border-[1px] hover:border-black'>
        <div className='flex items-start justify-between w-full h-[547px]'>

            {/* Details */}

            <div className='flex flex-col items-start w-[733px] h-[547px] '>

                {/* Delivery */}

                <div className='flex flex-col items-start justify-evenly w-[400px] h-[62px] bg-[#F5F5F5] pl-2'>
                    <p className='text-[13px] font-medium'>Free Delivery</p>
                    <div className='w-[280px] h-[24px] flex justify-between'>
                        <p className='text-[11px] font-normal'>Applies to orders of ₹ 14 000.00 or more.</p>
                        <p className='text-[11px] font-medium underline underline-offset-2 hover:cursor-pointer'>View details</p>
                    </div>
                </div>

                <h2 className='font-medium text-[22px] leading-[33px]'>Bag</h2>
                
                {/* Details */}

                <div>
                    <Image src={Frame1} alt=''></Image>
                </div>
            </div>

            {/* Summary */}

            <div className='w-[350px] h-[295px] flex flex-col items-start justify-between px-1 '>
                <h2 className='font-memd
                 text-[21px] leading-[33px]'>Summary</h2>
                
                {/* Subtotal */}
                 <div className='w-full h-auto flex justify-between text-[15px] font-normal leading-28'>
                    <p>Subtotal</p>
                    <p>₹ 20 890.00</p>
                 </div>
                 <div className='w-full h-auto flex justify-between text-[15px] font-normal leading-28'>
                    <p>Estimated Delivery & Handling</p>
                    <p>Free</p>
                 </div>

                 {/* Total */}

                 <div className='w-full h-[62px] flex justify-between items-center text-[15px] font-normal leading-28 border-y-[1px]'>
                    <p>Total</p>
                    <p>₹ 20 890.00</p>
                 </div>

                 {/* Button */}

                 <button className='w-full h-[60px] flex justify-center items-center text-[15px] rounded-[30px] font-medium leading-6 bg-[#111111] text-white'>Member Checkout</button>
            </div>

        </div>
    </div>
  )
}

export default Cart