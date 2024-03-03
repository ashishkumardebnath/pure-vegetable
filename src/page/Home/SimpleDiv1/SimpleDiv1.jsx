import { FaLongArrowAltRight } from "react-icons/fa";
import img1 from "../../../assets/images/simpleDiv1/img1.png";
import img2 from "../../../assets/images/simpleDiv1/img2.png";
const SimpleDiv1 = () => {
  return (
    <div
      className="flex justify-between bg-gray-100 pt-16 mb-28"
      data-aos="zoom-in"
    >
      <div className="flex items-end">
        <img className="mt-10 w-full" src={img1} alt="" />
      </div>
      <div className="lg:mb-0 mb-20">
        <h3 className="lg:text-3xl text-2xl text-[#004b3e] text-center font-sans">
          Organic & Garden Fresh
        </h3>
        <h4 className="lg:text-4xl text-3xl font-semibold text-center mt-4">
          Need Organic & quality
        </h4>
        <h4 className="lg:text-4xl text-3xl font-semibold text-center">
          product everyday?
        </h4>
        <div className="flex justify-center items-center mt-8">
          <button className="btn bg-[#004b3e] border-none text-white hover:bg-slate-900 text-lg font-sans px-6">
            Contact Now
            <FaLongArrowAltRight />
          </button>
        </div>
      </div>
      <div className="flex items-end">
        <img className="w-full" src={img2} alt="" />
      </div>
    </div>
  );
};

export default SimpleDiv1;
