import { AiOutlineCheck } from "react-icons/ai";
import { FaLongArrowAltRight } from "react-icons/fa";
import img1 from "../../../assets/images/about/img1.png";
import img2 from "../../../assets/images/about/img2.png";
import img3 from "../../../assets/images/about/img3.png";
import img from "../../../assets/images/about/img.png";
import "./About.css";
const About = () => {
  return (
    <div className="grid lg:grid-cols-2 gap-24 mb-28">
      <div className="bg-gray-100 pt-14 lg:ps-14">
        <h4 className="text-4xl font-semibold text-[#004b3e] lg:ms-12 mb-2">
          Experience
        </h4>
        <div className="flex">
          <h4 className="vertical text-4xl font-semibold text-[#004b3e] text-end mr-2">
            17 years of
          </h4>
          <div className="overflow-hidden" data-aos="fade-up">
            <img
              className="lg:w-[550px] transition duration-300 ease-in-out hover:scale-110 "
              src={img}
              alt=""
            />
          </div>
        </div>
      </div>
      <div>
        <div
          className="flex  items-center"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <h5 className="text-[#004b3e] lg:text-5xl text-3xl font-semibold">
            Fresh & Healthy food
          </h5>
          <img src={img1} alt="" />
        </div>
        <h5
          className="text-[#004b3e] lg:text-5xl text-3xl font-semibold"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          from farm to your door
        </h5>
        <p
          className="text-xl text-gray-500 font-sans my-5"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          Organic farmers prioritize the use of compost, cover crops, and crop
          rotation to enrich the soil with nutrients and maintain
        </p>
        <div
          className="lg:flex lg:space-y-0 space-y-3 justify-between"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          <div className="flex items-center gap-3">
            <div className="bg-[#004b3e] text-white rounded-full p-1 ">
              <AiOutlineCheck />
            </div>
            <h2 className="text-[#004b3e] text-2xl font-semibold">
              Natural Products
            </h2>
          </div>
          <div className="flex items-center gap-3">
            <div className="bg-[#004b3e] text-white rounded-full p-1">
              <AiOutlineCheck />
            </div>
            <h2 className="text-[#004b3e] text-2xl font-semibold">
              Natural Products
            </h2>
          </div>
        </div>
        <p
          className="text-xl text-gray-500 font-sans mt-5"
          data-aos="fade-up"
          data-aos-delay="500"
        >
          Organic farmers prioritize the use of compost, cover crops, and crop
          rotation to enrich the soil with nutrients and maintain its fertility.
          By doing so, they promote the growth of healthy
        </p>
        <div
          className="flex items-center gap-5  mt-5"
          data-aos="fade-up"
          data-aos-delay="600"
        >
          <img src={img2} alt="" />
          <h2 className="text-2xl font-semibold text-[#004b3e]">
            Every day fresh and quality product delivery to your doorstep
          </h2>
        </div>
        <button
          className="btn bg-[#004b3e] border-none text-white text-lg font-sans rounded-none mt-12 mb-6"
          data-aos="fade-up"
          data-aos-delay="600"
        >
          <span className="flex items-center gap-2">
            {" "}
            Learn More <FaLongArrowAltRight />
          </span>
        </button>
        <div className="flex justify-center">
          <img className=" animate-updown lg:w-[150px] " src={img3} alt="" />
        </div>
      </div>
    </div>
  );
};

export default About;
