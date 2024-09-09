/* eslint-disable react/prop-types */
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

const Slider = (props) => {

    // console.log(props.data1)
  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={30}
      loop={true}
      navigation={true}
      modules={[Navigation]}
      className="mySwiper w-[100%]"
    >
      {props.dataSet.map((data) => (
        <SwiperSlide key={data.id} className="flex items-center justify-center ml-auto mr-auto">
          <div className="flex md:flex-row flex-col items-center border-2 mx-10">
            <div className="h-96 w-auto">
              <img
                src={data.image}
                alt="..."
                className="object-cover block w-[100%] h-[100%]"
              />
            </div>
            <h3 className="text-xl max-w-xl py-12 px-5">{data.content}</h3>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Slider;
