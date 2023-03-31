import React from 'react';

const SingleBanner = ({banner}) => {
    const {id, prev, next, title, img, subtitle, subtitle2} = banner;
    return (
        <div
        id={`slide${id}`}
        className="carousel-item relative w-full"
        style={{ fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif' }}
      >
        <img src={img} className="w-full" alt="" />
        <div className="absolute text-center transform -translate-y-1/2 left-5 md:left-28 top-2/4">
          <h1 className="text-white text-2xl md:text-4xl font-bold">
            {title}
          </h1>
          <h1 className="text-white text-2xl md:text-4xl font-bold">
            {subtitle}
          </h1>
          <h1 className="text-white text-2xl md:text-4xl font-bold">
            {subtitle2}
          </h1>
        </div>
        <div className="absolute flex  transform -translate-y-1/2 right-5 top-[80%]">
          <a href={`#slide${prev}`} className="btn btn-circle mr-2 md:mr-6">
            ❮
          </a>
          <a href={`#slide${next}`} className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
    );
};

export default SingleBanner;