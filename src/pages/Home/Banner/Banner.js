import React from "react";
import banner1 from "../../../assets/images/banner/1.webp";
import banner2 from "../../../assets/images/banner/2.webp";
import banner3 from "../../../assets/images/banner/home-3-slider-2.webp";
import booksbg1 from '../../../assets/images/banner/bn21.jpg'
import booksbg2 from '../../../assets/images/banner/bn22.jpg'
import SingleBanner from "./SingleBanner";

const Banner = () => {
  const allBanners = [
    {
      id: 1,
      prev: 3,
      next: 2,
      img: banner1,
      title: "I Love This Idea!",
      subtitle: "Cover up font of Book And",
      subtitle2: "Leave Summary",
    },
    {
      id: 2,
      prev: 1,
      next: 3,
      img: banner2,
      title: "I Love This Idea!",
      subtitle: "Cover up font of Book And",
      subtitle2: "Leave Summary",
    },
    {
      id: 3,
      prev: 2,
      next: 1,
      img: banner3,
      title: "I Love This Idea!",
      subtitle: "Cover up font of Book And",
      subtitle2: "Leave Summary",
    },
  ];

  return (
    <div>
      <div className="carousel w-full">
      {
        allBanners.map( banner => <SingleBanner
            key={banner.id}
            banner = {banner}
        ></SingleBanner>)
      }
    </div>
    <div className="w-[80%] mx-auto grid grid-cols-2 gap-6 mt-20">
      <div className="">
        <img src={booksbg1} alt="" />
      </div>
      <div className="">
      <img src={booksbg2} alt="" />
      </div>
    </div>
    </div>
  );
};

export default Banner;
