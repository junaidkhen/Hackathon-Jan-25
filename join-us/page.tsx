import React from "react";
import Image from "next/image";

// Images

import Logo from "../pics/login/logo.png";

// Icons

import { RiArrowDropDownLine } from "react-icons/ri";

const Join_Us = () => {
  return (
    <div className="w-full h-auto border-[1px] border-black">
      <div className="w-[380px] h-[833px] absolute top-[95px] left-[515px] text-[#E5E5E5] border-[1px] border-transparent hover:border-[1px] hover:border-black">
        {/* Title Container*/}

        <div className="w-[324px] h-[182px] absolute top-[28px] left-[28px] ">
          {/* logo */}

          <div className="w-[324px] h-[17px]">
            <Image src={Logo} alt="logo"></Image>
          </div>

          {/* Title */}

          <h3 className="w-[231px] h-[31px] text-center absolute top-[46px] left-[46px] font-bold text-[18px] leading-[26px] text-black">
            BECOME A NIKE MEMBER
          </h3>

          {/* Sub-Title */}

          <p className="w-[282px] h-[60px] text-center absolute top-[104px] left-[21px] text-[14px] leading-[22px] text-[#8D8D8D]">
            Create your Nike Member profile and get first access to the very
            best of Nike products, inspiration and community.
          </p>
        </div>

        {/* Form Container */}

        <form className="w-[324px] h-[561px] absolute top-[210px] left-[28px] text-[14px] leading-[17px]">
          {/* Email */}

          <div className="h-[40px] relative top-[5px] rounded-[3px] ">
            <input
              type="text"
              placeholder="Email Address"
              className="w-[290px] h-[17px] absolute top-[12px] left-[17px] text-black"
            />
          </div>

          {/* Password */}

          <div className="w-full h-[40px] absolute top-[58px] rounded-[3px] ">
            <input
              type="text"
              placeholder="Password"
              className="w-[261px] h-[17px] absolute top-[12px] left-[17px] text-black"
            />
          </div>

          {/* First Name */}

          <div className="w-full h-[40px] absolute top-[111px] rounded-[3px] ">
            <input
              type="text"
              placeholder="First Name"
              className="w-[261px] h-[17px] absolute top-[12px] left-[17px] text-black"
            />
          </div>

          {/* Last Name */}

          <div className="w-full h-[40px] absolute top-[164px] rounded-[3px] ">
            <input
              type="text"
              placeholder="Last Name"
              className="w-[261px] h-[17px] absolute top-[12px] left-[17px] text-black"
            />
          </div>

          {/* Date of Birth */}

          <div className="w-full h-[69px] absolute top-[217px] ">
            <div className="w-full h-[40px] rounded-[3px] border-b-[2px] border-b-[#E5E5E5]">
              <input
                type="text"
                placeholder="Date of Birth"
                className="w-[261px] h-[17px] absolute top-[12px] left-[17px] text-black"
              />
            </div>
            <p className="w-[301px] h-[14px] absolute top-[47px] left-[2px] text-[11px] leading-[14px] text-[#8D8D8D]">
              Get a Nike Member Reward every year on your Birthday.
            </p>
          </div>

          {/* Country */}

          <div className="flex w-full h-[40px] absolute top-[296px] rounded-[3px] ">
            <p className="h-[17px] absolute top-[12px] left-[17px] text-[#8D8D8D]">
              India
            </p>
            <RiArrowDropDownLine className="text-black absolute top-[8px] left-[292px] border-[1px] border-transparent hover:border-[1px] hover:rounded-l hover:border-black text-2xl" />
          </div>

          {/* Gender */}

          <div className="flex justify-between w-full h-[40px] absolute top-[346px] rounded-[2px]  text-[#8D8D8D]">
            <div className="flex items-center justify-center w-[153px] h-full hover:bg-black hover:text-white">
              Male
            </div>
            <div className="flex items-center justify-center w-[153px] h-full hover:bg-black hover:text-white">
              Female
            </div>
          </div>

          {/* Checkbox */}

          <div className="flex items-center w-full h-[28px] absolute top-[406px] rounded-[3px] ">
            <input
              type="checkbox"
              className="w-[20px] h-[20px] rounded-[3px]"
            />
            <p className="w-[247px] absolute left-[34px] text-[12px] leading-[14px] text-[#8D8D8D] text-start">
              Sign up for emails to get updates from Nike on products, offers
              and your Member benefits
            </p>
          </div>

          {/* Terms */}

          <div className="flex justify-center w-[324px] h-[59px] absolute top-[452px] text-[#8D8D8D] ">
            <p className="w-[269px] text-[12px] leading-[16px]">
              By creating an account, you agree to Nike's{" "}
              <span className="underline underline-offset-2 hover:cursor-pointer">
                Privacy Policy{" "}
              </span>
              and
              <span className="underline underline-offset-2 hover:cursor-pointer">
                {" "}
                Terms of Use.{" "}
              </span>
            </p>
          </div>

          {/* Button */}

          <div className=" absolute top-[516px] w-[324px] h-[40px] flex items-center justify-center hover:cursor-pointer hover:bg-gray-500 rounded-[3px] bg-[#000000]">
            <button className="text-[11px] leading-[17px] text-white text-center">
              JOIN US
            </button>
          </div>
        </form>

        {/* Sign In */}

        <div className="absolute top-[776px] left-[28px] w-[324px] h-[24px] flex items-center justify-center text-[#8D8D8D] ">
          <p>
            Already a Member?{" "}
            <span className="text-black underline underline-offset-2 hover:cursor-pointer">
              Sign In.
            </span>{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Join_Us;
