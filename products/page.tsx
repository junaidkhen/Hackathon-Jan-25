import React from "react";
import Image from "next/image";
import Cards from "../components/Cards";

// Images

import Icon from "../pics/all-products/icons/Icon.png";
import Frame1 from "../pics/all-products/Frame1.png";
import Frame2 from "../pics/all-products/Frame2.png";

import Image1 from "../pics/all-products/Image1.png";
import Image2 from "../pics/all-products/Image2.png";
import Image3 from "../pics/all-products/Image3.png";
import Image4 from "../pics/all-products/Image4.png";
import Image5 from "../pics/all-products/Image5.png";
import Image6 from "../pics/all-products/Image6.png";
import Image7 from "../pics/all-products/Image7.png";
import Image8 from "../pics/all-products/Image8.png";
import Image9 from "../pics/all-products/Image9.png";
import Image10 from "../pics/all-products/Image10.png";
import Image11 from "../pics/all-products/Image11.png";
import Image12 from "../pics/all-products/Image12.png";
import Image13 from "../pics/all-products/Image13.png";
import Image14 from "../pics/all-products/Image14.png";
import Image15 from "../pics/all-products/Image15.png";
import Image16 from "../pics/all-products/Image16.png";
import Image17 from "../pics/all-products/Image17.png";
import Image18 from "../pics/all-products/Image18.png";
import Image19 from "../pics/all-products/Image19.png";
import Image20 from "../pics/all-products/Image20.png";
import Image21 from "../pics/all-products/Image21.png";
import Image22 from "../pics/all-products/Image22.png";
import Image23 from "../pics/all-products/Image23.png";
import Image24 from "../pics/all-products/Image24.png";
import Image25 from "../pics/all-products/Image25.png";
import Image26 from "../pics/all-products/Image26.png";
import Image27 from "../pics/all-products/Image27.png";
import Image28 from "../pics/all-products/Image28.png";
import Image29 from "../pics/all-products/Image29.png";
import Image30 from "../pics/all-products/Image30.png";

// Icons

import { RiArrowDropDownLine } from "react-icons/ri";

export default function Products() {
  return (
    <div className="flex flex-col justify-center w-[1440px] h-auto absolute top-[156px] text-[15px] font-medium leading-[21px] border-[1px] border-transparent hove:border-[1px] hover:border-black">
      {/* Filter Div */}

      <div className="flex justify-between items-center px-4 w-[1440px] h-[51px] ">
        <h3 className="text-[24px] leading-[31px]">New (500)</h3>

        {/* Filter */}

        <div className="flex justify-between items-center w-[250px] ">
          <div className="flex justify-between w-[137px] ">
            <p className="text-[16px] font-normal leading-[28px]">
              Hide Filters
            </p>
            <Image src={Icon} alt=""></Image>
          </div>
          <div className="flex justify-between items-center w-[86px] ">
            <p className="text-[16px] font-normal leading-[28px]">Sort By</p>
            <RiArrowDropDownLine className="text-3xl" />
          </div>
        </div>
      </div>

      {/* Items Div */}

      <div className="flex justify-between items-start px-4 mt-4 w-[1440px] h-auto ">
        {/* Slidbar */}

        <div>
          <Image src={Frame1} alt=""></Image>
        </div>

        {/* Products */}

        <div className="w-[1092px] h-auto">
          <div className="grid grid-cols-3 w-[1092px] h-auto ">
            <Cards
              imageSrc={Image1}
              title="Nike Air Force 1 Mid '07"
              category="Men's Shoes' Shoes"
              color="1 Colour"
              price={10795.0}
            />

            <Cards
              imageSrc={Image2}
              title="Nike Court Vision Low Next Nature"
              category="Men's Shoes"
              color="1 Colour"
              price={4995.0}
            />

            <Cards
              imageSrc={Image3}
              title="Nike Air Force 1 PLT.AF.ORM"
              category="Women's Shoes"
              color="1 Colour"
              price={8695.0}
            />

            <Cards
              imageSrc={Image4}
              title="Nike Air Force 1 React"
              category="Men's Shoes"
              color="1 Colour"
              price={13295.0}
            />

            <Cards
              imageSrc={Image5}
              title="Air Jordan 1 Elevate Low"
              category="Women's Shoes"
              color="1 Colour"
              price={11895.0}
            />

            <Cards
              imageSrc={Image6}
              title="Nike Standard Issue"
              category="Women's Basketball Jersey"
              color="1 Colour"
              price={2895.0}
            />

            <Cards
              imageSrc={Image7}
              title="Nike Dunk Low Retro SE"
              category="Men's Shoes"
              color="1 Colour"
              price={9695.0}
            />

            <Cards
              imageSrc={Image8}
              title="Nike Dri-FIT UV Hyverse"
              category="Men's Short-Sleeve Graphic Fitness Top"
              color="1 Colour"
              price={2495.0}
            />

            <Cards
              imageSrc={Image9}
              title="Nike Court Vision Low"
              category="Men's Shoes"
              color="1 Colour"
              price={5695.0}
            />

            <Cards
              imageSrc={Image10}
              title="Nike Dri-FIT Ready"
              category="Men's Short-Sleeve Fitness Top"
              color="3 Colours"
              price={2495.0}
            />

            <Cards
              imageSrc={Image11}
              title="Nike One Leak Protection: Period"
              category="Women's Mid-Rise 18cm (approx.) Biker Shorts"
              color="2 Colours"
              price={3395.0}
            />

            <Cards
              imageSrc={Image12}
              title="Nike Air Force 1 LV8 3"
              category="Older Kids' Shoe"
              color="1 Colour"
              price={7495.0}
            />

            <Cards
              imageSrc={Image13}
              title="Nike Blazer Low Platform"
              category="Women's Shoes"
              color="1 Colour"
              price={8195.0}
            />

            <Cards
              imageSrc={Image14}
              title="Nike Air Force 1 '07"
              category="Women's Shoe"
              color="2 Colours"
              price={8195.0}
            />

            <Cards
              imageSrc={Image15}
              title="Nike Pro Dri-FIT"
              category="Men's Tight-Fit Sleeveless Top"
              color="1 Colour"
              price={1495.0}
            />

            <Cards
              imageSrc={Image16}
              title="Nike Dunk Low Retro"
              category="Men's Shoes"
              color="1 Colour"
              price={8695.0}
            />

            <Cards
              imageSrc={Image17}
              title="Nike Air Max SC"
              category="Women's Shoes"
              color="2 Colours"
              price={5995.0}
            />

            <Cards
              imageSrc={Image18}
              title="Nike Dri-FIT UV Miler"
              category="Men's Short-Sleeve Running Top"
              color="1 Colour"
              price={1695.0}
            />

            <Cards
              imageSrc={Image19}
              title="Nike Air Max SYSTM"
              category="Older Kids' Shoes"
              color="1 Colour"
              price={6495.0}
            />

            <Cards
              imageSrc={Image20}
              title="Nike Alate All U"
              category="Women's Light-Support Lightly Lined U-Neck Printed Sports Bra"
              color="1 Colour"
              price={2195.0}
            />

            <Cards
              imageSrc={Image21}
              title="Nike Court Legacy Lift"
              category="Women's Shoes"
              color="2 Colours"
              price={7495.0}
            />

            <Cards
              imageSrc={Image22}
              title="Nike Swoosh"
              category="Women's Medium-support Padded Sports Bra Tank"
              color="2 Colours"
              price={3095.0}
            />

            <Cards
              imageSrc={Image23}
              title="Nike SB Zoom Janoski OG+"
              category="Shoes"
              color="1 Colour"
              price={8595.0}
            />

            <Cards
              imageSrc={Image24}
              title="Nike Dri-FIT Run Division Rise 365"
              category="Men's Running Tank"
              color="2 Colours"
              price={3495.0}
            />

            <Cards
              imageSrc={Image25}
              title="Nike Dri-FIT Challenger"
              category="Men's 18cm (approx.) 2-in-1 Versatile Shorts"
              color="1 Colour"
              price={2495.0}
            />

            <Cards
              imageSrc={Image26}
              title="Jordan Series ES"
              category="Men's Shoes"
              color="2 Colours"
              price={7495.0}
            />

            <Cards
              imageSrc={Image27}
              title="Nike Outdoor Play"
              category="Older Kids' Oversized Woven Jacket"
              color="1 Colour"
              price={3895.0}
            />

            <Cards
              imageSrc={Image28}
              title="Nike Sportswear Trend"
              category="Older Kids' (Girls') High-waisted Woven Shorts"
              color="2 Colours"
              price={2495.0}
            />

            <Cards
              imageSrc={Image29}
              title="Nike Blazer Low '77 Jumbo"
              category="Women's Shoes"
              color="1 Colour"
              price={8595.0}
            />

            <Cards
              imageSrc={Image30}
              title="Nike SB Force 58"
              category="Skate Shoe"
              color="1 Colour"
              price={5995.0}
            />
          </div>

          <div className="w-[1092px] h-auto border-[1px] border-purple-500">
            <Image src={Frame2} alt=""></Image>
          </div>
        </div>
      </div>
    </div>
  );
}
