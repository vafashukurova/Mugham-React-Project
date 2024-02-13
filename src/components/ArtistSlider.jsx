import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Scrollbar } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import "swiper/css/effect-coverflow";
import img1 from "../assets/img/sliderImg1.svg";
import img2 from "../assets/img/sliderImg2.svg";
import img3 from "../assets/img/sliderImg3.svg";
import "../index.css";

function ArtistSlider() {
  return (
    <section className="container flex flex-col pt-32">
      <div className="flex items-center justify-between pb-3 font-bold uppercase border-b text-textPrimary border-lightGrey">
        <h3 className="md:text-[24px] text-[20xp]">
          THE EXHIBITION OF ARTIST ASHRAF HAYBATOV
        </h3>
        <a className="md:text-[13px] text-[10px] underline underline-offset-2 cursor-pointer">
          see more
        </a>
      </div>
      <div className="flex items-center justify-between pt-5">
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          freeMode={true}
          modules={[FreeMode, Navigation, Scrollbar]}
          scrollbar={{
            el: ".swiper-scrollbar",
            hide: false,
            draggable: true,
          }}
          className="mySwiper"
        >
          <div className="flex items-center justify-between pt-5">
            <Swiper
              slidesPerView={3}
              spaceBetween={30}
              freeMode={true}
              modules={[FreeMode, Navigation, Scrollbar]}
              scrollbar={{
                el: ".swiper-scrollbar",
                hide: false,
                draggable: true,
              }}
              className="mySwiper"
            >
              <SwiperSlide className="h-[300px] flex flex-col">
                <img
                  src={img1}
                  alt="Slide 1"
                  className="object-cover w-full h-full"
                />
                <span className="self-end text-xs text-dimGrey">01</span>
              </SwiperSlide>
              <SwiperSlide className="h-[300px] flex flex-col">
                <img
                  src={img2}
                  alt="Slide 2"
                  className="object-cover w-full h-full"
                />
                <span  className="self-end text-xs text-dimGrey">02</span>
              </SwiperSlide>
              <SwiperSlide className="h-[300px] flex flex-col">
                <img
                  src={img3}
                  alt="Slide 3"
                  className="object-cover w-full h-full"
                />
                <span  className="self-end text-xs text-dimGrey">03</span>
              </SwiperSlide>
              <SwiperSlide className="h-[300px] flex flex-col">
                <img
                  src={img1}
                  alt="Slide 1"
                  className="object-cover w-full h-full"
                />
                <span  className="self-end text-xs text-dimGrey">04</span>
              </SwiperSlide>

              {/* Add more slides here */}
            </Swiper>

            {/* Navigation Buttons */}

            {/* Scrollbar */}
            {/* <div className="absolute bottom-0 swiper-scrollbar"></div> */}
          </div>

          {/* Add more slides here */}
        </Swiper>

        {/* Navigation Buttons */}

        {/* Scrollbar */}
        {/* <div className="absolute bottom-0 swiper-scrollbar"></div> */}
      </div>
    </section>
  );
}

export default ArtistSlider;
