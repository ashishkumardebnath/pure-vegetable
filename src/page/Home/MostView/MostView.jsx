import img1 from "../../../assets/images/mostView/img1.png";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./MoatView.css";

// import required modules
import { Pagination } from "swiper/modules";
import { useEffect, useState } from "react";
import { TiShoppingCart } from "react-icons/ti";
const MostView = () => {
  const [mostViews, setMostViews] = useState([]);
  useEffect(() => {
    fetch("mostViews.json")
      .then((res) => res.json())
      .then((data) => setMostViews(data));
  }, []);

  return (
    <div className="mb-28">
      <div className="flex justify-center items-center" data-aos="fade-up">
        <img src={img1} alt="" />
      </div>
      <h5
        className="lg:text-5xl text-3xl font-semibold text-center my-4 text-[#004b3e]"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        Most view Products
      </h5>
      <p
        className="text-lg text-center font-sans text-gray-500"
        data-aos="fade-up"
        data-aos-delay="300"
      >
        Organic farmers prioritize the use of compost, cover crops, <br /> and
        crop rotation to enrich the soil with nutrients and maintain
      </p>
      <div className=" mt-16">
        <Swiper
          breakpoints={{
            // when window width is >= 640px
            640: {
              width: 640,
              slidesPerView: 1,
            },
            // when window width is >= 768px
            768: {
              width: 768,
              slidesPerView: 2,
            },
          }}
          // slidesPerView={3}
          spaceBetween={30}
          // pagination={{
          //   clickable: true,
          // }}
          modules={[Pagination]}
          className="mySwiper "
        >
          {mostViews.map((mostView) => (
            <SwiperSlide key={mostView.id}>
              <div
                className="card  bg-gray-100 shadow-xl "
                data-aos="flip-right"
              >
                <figure className="px-10 pt-10 hover:scale-125 transition duration-500 cursor-pointer">
                  <img src={mostView.img} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                  <h2 className="card-title text-2xl hover:text-[#004b3e]">
                    {mostView.name}
                  </h2>
                  <p className="text-lg font-sans">$ {mostView.price} USD/kg</p>
                  <div className="card-actions">
                    <button className="btn bg-gray-200 border-none text-[#004b3e] hover:bg-[#004b3e] hover:text-white font-sans text-lg mt-4">
                      Add to Cart <TiShoppingCart />
                    </button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default MostView;
