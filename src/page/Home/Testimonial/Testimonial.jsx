import { useEffect, useState } from "react";
import img from "../../../assets/images/contact/love.png";
import img1 from "../../../assets/images/testimonial/img.png";

const Testimonial = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("reviews.json")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);
  return (
    <div>
      <div className="my-32 ">
        <div className="lg:flex justify-between" data-aos="zoom-in">
          <div className="flex justify-center items-center">
            <div>
              <h5 className="text-6xl text-[#004b3e] font-semibold mb-6">
                Our Testimonials
              </h5>
              <h1 className="text-xl font-sans">
                Find your product by category wise organic food <br /> is
                believed numerous health benefits, organic.
              </h1>
            </div>
          </div>
          <img
            className="transition duration-300 ease-in-out hover:scale-110"
            src={img}
            alt=""
          />
        </div>
      </div>
      <div className="flex justify-center items-center">
        <img className="animate-updown" src={img1} alt="" />
      </div>
      <div className="grid lg:grid-cols-2 gap-20 mt-12 mb-20">
        {reviews.map((review) => (
          <div key={review.id}>
            <div>
              <img
                src={review.img}
                alt=""
                data-aos="fade-up"
                data-aos-delay="100"
              />
              <h2
                className="text-2xl text-[#004b3e] font-semibold font-sans my-5"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                {review.title}
              </h2>
              <p
                className="text-lg font-sans"
                data-aos="fade-up"
                data-aos-delay="500"
              >
                The organic blueberries I recently savored were bursting with
                vibrant flavor. Their plumpness and deep, natural sweetness were
                unparalleled. What truly made them exceptional was the absence
                of synthetic chemicals, making them a guilt-free and nutritious
                addition to my morning yogurt.
              </p>
              <p
                className="text-xl font-semibold mt-6"
                data-aos="fade-up"
                data-aos-delay="700"
              >
                {review.name}
              </p>
              <p className="font-sans" data-aos="fade-up" data-aos-delay="900">
                {review.status}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonial;
