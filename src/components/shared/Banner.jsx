import React from "react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { EffectFade, Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import img1 from "../../assets/images/banner/1.jpg";
import img2 from "../../assets/images/banner/2.jpg";
import img3 from "../../assets/images/banner/3.jpg";
import img4 from "../../assets/images/banner/4.jpg";
import img5 from "../../assets/images/banner/5.jpg";
import img6 from "../../assets/images/banner/6.jpg";
const Banner = () => {
  return (
    <>
      <Swiper
        spaceBetween={30}
        effect={"fade"}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[EffectFade, Navigation, Pagination]}
        className="mySwiper relative my-contain "
      >
        <SwiperSlide className="relative ">
          <img className="lg:h-[580px] -z-10  w-full " src={img1} />
          <div className="  z-50 inset-0  bg-gradient-to-r from-black bg-opacity-50 h-full   absolute flex items-center">
            <div className="max-w-2xl space-y-8 mt-10 px-10">
              {" "}
              <h1 className="lg:text-6xl  z-10 font-bold text-white  ">
                Afordable Car Price For Servicing
              </h1>{" "}
              <p className="text-white tracking-wide font-semibold">
                There Are Many Variations Of Passengers Of Available , But The
                Majority Suffered Alternation In Some Form
              </p>
              <button className="btn btn-error">Discover More</button>
              <button className="btn  ms-5  btn-outline text-gray-200 ">
                Latest Project
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="relative ">
          <img className="lg:h-[580px] -z-10  w-full " src={img2} />
          <div className="  z-50 inset-0  bg-gradient-to-r from-black bg-opacity-50 h-full   absolute flex items-center">
            <div className="max-w-2xl space-y-8 mt-10 px-10">
              {" "}
              <h1 className="lg:text-6xl  z-10 font-bold text-white  ">
                Best Car Price For Servicing
              </h1>{" "}
              <p className="text-white tracking-wide font-semibold">
                There Are Many Variations Of Passengers Of Available , But The
                Majority Suffered Alternation In Some Form
              </p>
              <button className="btn btn-error">Discover More</button>
              <button className="btn  ms-5  btn-outline text-gray-200 ">
                Latest Project
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="relative ">
          <img className="lg:h-[580px] -z-10  w-full " src={img3} />
          <div className="  z-50 inset-0  bg-gradient-to-r from-black bg-opacity-50 h-full   absolute flex items-center">
            <div className="max-w-2xl space-y-8 mt-10 px-10">
              {" "}
              <h1 className="lg:text-6xl  z-10 font-bold text-white  ">
                Awesome Car Price For Servicing
              </h1>{" "}
              <p className="text-white tracking-wide font-semibold">
                There Are Many Variations Of Passengers Of Available , But The
                Majority Suffered Alternation In Some Form
              </p>
              <button className="btn btn-error">Discover More</button>
              <button className="btn  ms-5  btn-outline text-gray-200 ">
                Latest Project
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="relative ">
          <img className="lg:h-[580px] -z-10  w-full " src={img4} />
          <div className="  z-50 inset-0  bg-gradient-to-r from-black bg-opacity-50 h-full   absolute flex items-center">
            <div className="max-w-2xl space-y-8 mt-10 px-10">
              {" "}
              <h1 className="lg:text-6xl  z-10 font-bold text-white  ">
                Good Car Price For Servicing
              </h1>{" "}
              <p className="text-white tracking-wide font-semibold">
                There Are Many Variations Of Passengers Of Available , But The
                Majority Suffered Alternation In Some Form
              </p>
              <button className="btn btn-error">Discover More</button>
              <button className="btn  ms-5  btn-outline text-gray-200 ">
                Latest Project
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="relative ">
          <img className="lg:h-[580px] -z-10  w-full " src={img5} />
          <div className="  z-50 inset-0  bg-gradient-to-r from-black bg-opacity-50 h-full   absolute flex items-center">
            <div className="max-w-2xl space-y-8 mt-10 px-10">
              {" "}
              <h1 className="lg:text-6xl  z-10 font-bold text-white  ">
                Great Car Price For Servicing
              </h1>{" "}
              <p className="text-white tracking-wide font-semibold">
                There Are Many Variations Of Passengers Of Available , But The
                Majority Suffered Alternation In Some Form
              </p>
              <button className="btn btn-error">Discover More</button>
              <button className="btn  ms-5  btn-outline text-gray-200 ">
                Latest Project
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="relative ">
          <img className="lg:h-[580px] -z-10  w-full " src={img6} />
          <div className="  z-50 inset-0  bg-gradient-to-r from-black bg-opacity-50 h-full   absolute flex items-center">
            <div className="max-w-2xl space-y-8 mt-10 px-10">
              {" "}
              <h1 className="lg:text-6xl  z-10 font-bold text-white  ">
                Afordable Car Price For Servicing
              </h1>{" "}
              <p className="text-white tracking-wide font-semibold">
                There Are Many Variations Of Passengers Of Available , But The
                Majority Suffered Alternation In Some Form
              </p>
              <button className="btn btn-error">Discover More</button>
              <button className="btn  ms-5  btn-outline text-gray-200 ">
                Latest Project
              </button>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Banner;
