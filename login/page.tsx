import React from "react";
import Image from "next/image";

// Images

import Logo from "../pics/login/logo.png";

const Login = () => {
  return (
    <div className="w-[380px] h-[489px] absolute top-[99px] left-[530px] border-[1px] border-transparent hover:border-[1px] border-black">
      {/* Title */}

      <div className="w-[324px] h-[128px] relative top-[28px] left-[28px] ">
        {/* logo */}

        <div className="w-[324px] h-[17px]">
          <Image src={Logo} alt="logo"></Image>
        </div>

        {/* Title */}

        <h3 className="w-[166px] h-[57px] text-center relative top-[26px] left-[78px] font-bold text-[18px] leading-[26px]">
          YOUR ACCOUNT FOR EVERYTHING NIKE
        </h3>
      </div>

      {/* Form */}

      <form className="w-[324px] h-[305px] absolute top-[156px] left-[28px]">
        {/* Email */}
        <div className="h-[40px] relative top-[5px] rounded-[3px] ">
          <input
            type="text"
            placeholder="Email Address"
            className="w-[290px] h-[40px] absolute top-[12px] left-[17px] text-black"
          />
        </div>

        {/* Password */}

        <div className="w-full h-[40px] absolute top-[58px] rounded-[3px] ">
          <input
            type="text"
            placeholder="Password"
            className="w-[290px] h-[40px] absolute top-[12px] left-[17px] text-black"
          />
        </div>

        {/* Checkbox */}

        <div className="flex items-center w-[162px] h-[20px] absolute top-[121px] rounded-[3px] ">
          <input type="checkbox" className="w-[20px] h-[20px] rounded-[3px]" />
          <p className="w-[99px] absolute left-[34px] text-[12px] leading-[12px] text-[#8D8D8D]">
            Keep me signed in
          </p>
        </div>

        {/* Terms */}

        <div className="flex justify-center w-[324px] h-[59px] absolute top-[162px] text-[#8D8D8D] ">
          <p className="w-[269px] text-[12px] leading-[16px]">
            By logging in, you agree to Nike's Privacy Policy and{" "}
            <span className="underline underline-offset-2 hover:cursor-pointer">
              {" "}
              Terms of Use.
            </span>
          </p>
        </div>

        {/* Button */}

        <div className=" absolute top-[226px] w-[324px] h-[40px] flex items-center justify-center hover:cursor-pointer hover:bg-gray-500 rounded-[3px] bg-[#000000]">
          <button className="text-[11px] leading-[17px] text-white text-center">
            SIGN IN
          </button>
        </div>

        {/* Join Us */}

        <div className="absolute top-[276px] w-[324px] h-[24px] flex items-center justify-center text-[#8D8D8D]">
          <p>
            Not a Member? Join Us.{" "}
            <span className="text-black underline underline-offset-2 hover:cursor-pointer">
              Join Us.
            </span>{" "}
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;
