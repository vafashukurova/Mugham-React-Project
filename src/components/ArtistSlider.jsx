import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Navigation, Scrollbar } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';
import 'swiper/css/effect-coverflow';
import img1 from "../assets/img/sliderImg1.svg";
import img2 from "../assets/img/sliderImg2.svg";
import "../index.css";

function ArtistSlider() {
  return (
    <section className="container flex flex-col pt-20">
      <div className="flex justify-between text-textPrimary font-bold items-center uppercase border-b border-lightGrey pb-3">
        <h3 className="md:text-[24px] text-[20xp]">THE EXHIBITION OF ARTIST ASHRAF HAYBATOV</h3>
        <a className="md:text-[13px] text-[10px] underline underline-offset-2 cursor-pointer">see more</a>
      </div>
      <div className="pt-5">
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          freeMode={true}
          modules={[FreeMode, Navigation, Scrollbar]}
          scrollbar={{
            el: '.swiper-scrollbar',
            hide: false,
            draggable: true,
          }}
          className="mySwiper"
        >
          <SwiperSlide className='flex flex-col'><img src={img1} alt="Slide 1" /><span className='text-right'>1</span></SwiperSlide>
          <SwiperSlide><img src={img2} alt="Slide 2" /><span>2</span></SwiperSlide>
          <SwiperSlide><img src={img2} alt="Slide 2" /><span>2</span></SwiperSlide>
          <SwiperSlide><img src={img2} alt="Slide 2" /><span>2</span></SwiperSlide>
          <SwiperSlide className='flex flex-col'><img src={img1} alt="Slide 1" /><span className='text-right'>1</span></SwiperSlide>
          <SwiperSlide className='flex flex-col'><img src={img1} alt="Slide 1" /><span className='text-right'>1</span></SwiperSlide>
          {/* Add more slides here */}
        </Swiper>

        {/* Navigation Buttons */}
       

        {/* Scrollbar */}
        <div className="swiper-scrollbar absolute bottom-0"></div>
      </div>
    </section>
  );
}

export default ArtistSlider;
