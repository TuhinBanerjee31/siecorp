/* eslint-disable react/prop-types */
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";
import { EffectCards } from "swiper/modules";
import {ArrowRightIcon, ChevronDoubleLeftIcon, ChevronDoubleRightIcon} from "@heroicons/react/24/outline";
import slide1 from '../../assets/newsSliderImages/slide1.jpg'
import slide2 from '../../assets/newsSliderImages/slide2.jpg'
import slide3 from '../../assets/newsSliderImages/slide3.jpg'
import slide4 from '../../assets/newsSliderImages/slide4.jpg'
import slide5 from '../../assets/newsSliderImages/slide5.jpg'
import slide6 from '../../assets/newsSliderImages/slide6.jpg'

const NewsSlider = (props) => {
  return (
    <div className="font-suse overflow-hidden">
      <div className="container py-20 flex md:flex-row flex-col justify-around items-center mx-auto">
        <div className="titles py-10">
          <h5 className="text-[#0B2D71] text-2xl py-2">newsroom</h5>
          <h2 className="text-[#0B2D71] font-extrabold text-5xl md:max-w-xs">
            {props.title}
          </h2>
        </div>

        <div className="swiper-container md:w-96 w-60">
          <Swiper
            effect={"cards"}
            grabCursor={true}
            modules={[EffectCards]}
            className="mySwiper"
          >
            {/* SLIDE-1 */}
            <SwiperSlide className="flex flex-col items-center rounded-2xl cursor-pointer bg-[#0066B2] hover:bg-[#005CA0] transition-colors">
                <img src={slide1} alt='...' />
                <div className="info px-4 flex flex-col gap-4 py-4">
                    <h5 className="md:text-xl text-sm text-white tracking-wide">August 23, 2024</h5>
                    <h3 className="md:text-2xl text-base text-white tracking-wide md:max-w-[97%] max-w-full">1st US hydrogen-powered passenger ferry open for business.</h3>
                    {/* <div className="btn py-3 flex items-center gap-3 text-white">
                        <ArrowRightIcon className='h-4 w-4' />
                        <p className="p font-bold tracking-wide">read article</p>
                    </div> */}

                    <p className="text-white flex justify-center items-center gap-2 opacity-65 tracking-widest md:text-base text-xs"><ChevronDoubleLeftIcon className='h-4 w-4' />Swipe</p>
                </div>
            </SwiperSlide>
            
            {/* SLIDE-2 */}
            <SwiperSlide className="flex flex-col items-center rounded-2xl cursor-pointer bg-[#0066B2] hover:bg-[#005CA0] transition-colors">
                <img src={slide2} alt='...' />
                <div className="info px-4 flex flex-col gap-4 py-4">
                    <h5 className="md:text-xl text-sm text-white tracking-wide">August 20, 2024</h5>
                    <h3 className="md:text-2xl text-base text-white tracking-wide md:max-w-[97%] max-w-full">siecorp powers up engineering and innovation ENGINE in india</h3>
                    {/* <div className="btn py-3 flex items-center gap-3 text-white">
                        <ArrowRightIcon className='h-4 w-4' />
                        <p className="p font-bold tracking-wide">read article</p>
                    </div> */}
                    <p className="text-white flex justify-center items-center gap-2 opacity-65 tracking-widest md:text-base text-xs"><ChevronDoubleLeftIcon className='h-4 w-4' />Swipe<ChevronDoubleRightIcon className='h-4 w-4' /></p>
                </div>
            </SwiperSlide>

            {/* SLIDE-3 */}
            <SwiperSlide className="flex flex-col items-center rounded-2xl cursor-pointer bg-[#0066B2] hover:bg-[#005CA0] transition-colors">
                <img src={slide3} alt='...' />
                <div className="info px-4 flex flex-col gap-4 py-4">
                    <h5 className="md:text-xl text-sm text-white tracking-wide">August 20, 2024</h5>
                    <h3 className="md:text-2xl text-base text-white tracking-wide md:max-w-[97%] max-w-full">mini robots clean platforms underwater.</h3>
                    {/* <div className="btn py-3 flex items-center gap-3 text-white">
                        <ArrowRightIcon className='h-4 w-4' />
                        <p className="p font-bold tracking-wide">read article</p>
                    </div> */}
                    <p className="text-white flex justify-center items-center gap-2 opacity-65 tracking-widest md:text-base text-xs"><ChevronDoubleLeftIcon className='h-4 w-4' />Swipe<ChevronDoubleRightIcon className='h-4 w-4' /></p>
                </div>
            </SwiperSlide>

            {/* SLIDE-4 */}
            <SwiperSlide className="flex flex-col items-center rounded-2xl cursor-pointer bg-[#0066B2] hover:bg-[#005CA0] transition-colors">
                <img src={slide4} alt='...' />
                <div className="info px-4 flex flex-col gap-4 py-4">
                    <h5 className="md:text-xl text-sm text-white tracking-wide">August 19, 2024</h5>
                    <h3 className="md:text-2xl text-base text-white tracking-wide md:max-w-[97%] max-w-full">new technologies help improve worker safety</h3>
                    {/* <div className="btn py-3 flex items-center gap-3 text-white">
                        <ArrowRightIcon className='h-4 w-4' />
                        <p className="p font-bold tracking-wide">read article</p>
                    </div> */}
                    <p className="text-white flex justify-center items-center gap-2 opacity-65 tracking-widest md:text-base text-xs"><ChevronDoubleLeftIcon className='h-4 w-4' />Swipe<ChevronDoubleRightIcon className='h-4 w-4' /></p>
                </div>
            </SwiperSlide>

            {/* SLIDE-5 */}
            <SwiperSlide className="flex flex-col items-center rounded-2xl cursor-pointer bg-[#0066B2] hover:bg-[#005CA0] transition-colors">
                <img src={slide5} alt='...' />
                <div className="info px-4 flex flex-col gap-4 py-4">
                    <h5 className="md:text-xl text-sm text-white tracking-wide">August 14, 2024</h5>
                    <h3 className="md:text-2xl text-base text-white tracking-wide md:max-w-[97%] max-w-full">3 ways to create resilient strategies in changing times</h3>
                    {/* <div className="btn py-3 flex items-center gap-3 text-white">
                        <ArrowRightIcon className='h-4 w-4' />
                        <p className="p font-bold tracking-wide">read article</p>
                    </div> */}
                    <p className="text-white flex justify-center items-center gap-2 opacity-65 tracking-widest md:text-base text-xs"><ChevronDoubleLeftIcon className='h-4 w-4' />Swipe<ChevronDoubleRightIcon className='h-4 w-4' /></p>
                </div>
            </SwiperSlide>

            {/* SLIDE-6 */}
            <SwiperSlide className="flex flex-col items-center rounded-2xl cursor-pointer bg-[#0066B2] hover:bg-[#005CA0] transition-colors">
                <img src={slide6} alt='...' />
                <div className="info px-4 flex flex-col gap-4 py-4">
                    <h5 className="md:text-xl text-sm text-white tracking-wide">August 12, 2024</h5>
                    <h3 className="md:text-2xl text-base text-white tracking-wide md:max-w-[97%] max-w-full">energy everywhere: a new frontier in deepwater development</h3>
                    {/* <div className="btn py-3 flex items-center gap-3 text-white">
                        <ArrowRightIcon className='h-4 w-4' />
                        <p className="p font-bold tracking-wide">read article</p>
                    </div> */}
                    <p className="text-white flex justify-center items-center gap-2 opacity-65 tracking-widest md:text-base text-xs">Swipe<ChevronDoubleRightIcon className='h-4 w-4' /></p>
                </div>
            </SwiperSlide>

          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default NewsSlider;