import React from "react";
import "./Gallery.css";
import videoBig from "../../image/video-big.png";
import videoSmall from "../../image/video-small.png";
import slider1 from "../../image/gallery-slider1.png";
import slider2 from "../../image/gallery-slider2.png";

const Gallery = () => {
  return (
    <div>
      <div className="content_body">
        <div className="gallery-grid grid grid-cols-12 gap-[30px]">
          <div className="video-big rounded-[20px] overflow-hidden col-span-12">
            <img className="w-full max-h-[644px] object-cover" src={videoBig} alt="" />
          </div>
          <div className="small-video rounded-[20px] overflow-hidden col-span-12 sm:col-span-4">
            <img className="w-full" src={videoSmall} alt="" />
          </div>
          <div className="slider-1 rounded-[20px] overflow-hidden col-span-12 sm:col-span-4">
            <img className="w-full" src={slider1} alt="" />
          </div>
          <div className="slider-2 rounded-[20px] overflow-hidden col-span-12 sm:col-span-4">
            <img className="w-full" src={slider2} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
