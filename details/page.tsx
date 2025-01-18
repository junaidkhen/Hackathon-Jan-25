import React from "react";
import Image from "next/image";
import Link from "next/link";

// Icons

import { IoCartOutline } from "react-icons/io5";

// Images

import Image1 from "../pics/details/Image1.png";

const P_Details = () => {
  return (
    <div className="flex justify-center items-end w-[1440px] h-[1173px] font-normal text-[15px] leading-[28px] border-[2px] border-black">
      <div className="flex justify-between w-[1200px] h-[1125px]">
        {/* Image */}

        <div className="group w-[653px] h-[653px] relative top-[110px]">
          <Image
            src={Image1}
            alt="Shoes"
            className="rounded-lg transition-transform duration-200 group-hover:scale-105"
          ></Image>
        </div>

        {/* Information */}

        <div className="w-[376px] h-[1041px]">
          <h3 className="w-[367px] h-[96px] relative top-[115px] font-medium text-[48px] leading-[48px] text-start">
            Nike Air Force 1 PLT.AF.ORM
          </h3>

          <div className="w-[374px] h-[413px] relative top-[135px] pt-[24px] pb-[1px] gap-[2px]">
            <div className="text-start w-[374px] h-[342px] ">
              <p className="h-[252px]">
                Turn style on its head with this crafted take on the Air Jordan
                1 Mid. Its "inside out"-inspired construction, including unique
                layering and exposed foam accents, ups the ante on this timeless
                Jordan Brand silhouette. Details like the deco stitching on the
                Swoosh add coveted appeal, while the unexpected shading, rich
                mixture of materials and aged midsole aesthetic give this
                release an artisan finish.
              </p>
              <p className="w-[294px] h-[90px] pt-[32px] font-medium text-[36px]">
                ₹ 8 695.00
              </p>
            </div>

            {/* Button */}

            <div className="hover:bg-gray-600 flex items-center justify-center gap-2 hover:cursor-pointer w-[174px] h-[44px] rounded-[30px] py-[7px] px-[22px] bg-[#111111] text-white">
              <IoCartOutline className="text-2xl text-white" />
              <button>
                <Link href="../cart">Add to Cart</Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default P_Details;
