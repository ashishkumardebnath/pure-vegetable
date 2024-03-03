import { FaLongArrowAltRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import img1 from "../../../assets/images/simpleDiv/img1-removebg-preview.png";
import img2 from "../../../assets/images/simpleDiv/img2-removebg-preview.png";
import img3 from "../../../assets/images/simpleDiv/img3-removebg-preview.png";
import img4 from "../../../assets/images/simpleDiv/img4-removebg-preview.png";
const SimpleDiv = () => {
  return (
    <div className="lg:flex lg:space-y-0 space-y-10 gap-10 mb-28">
      <div className="bg-pink-100 pt-6" data-aos="zoom-in">
        <p className="text-xl font-sans text-[#004b3e] text-center">
          Test the colour
        </p>
        <h2 className="text-2xl  font-semibold mb-2 text-center">
          Fresh Red Guava
        </h2>
        <div className="flex justify-center items-center">
          <Link>
            <p className="flex items-center gap-2 font-sans ">
              Shop now <FaLongArrowAltRight />
            </p>
          </Link>
        </div>
        <div className=" overflow-hidden flex justify-center items-center">
          <img
            className=" transition duration-300 ease-in-out hover:scale-110"
            src={img1}
            alt=""
          />
        </div>
      </div>
      <div className="" data-aos="fade-down">
        <div className=" overflow-hidden flex bg-pink-100 ">
          <img
            className=" transition duration-300 ease-in-out hover:scale-110"
            src={img2}
            alt=""
          />
          <div className="pt-6">
            <p className="text-xl font-sans text-[#004b3e] ">Organic</p>
            <h2 className="text-2xl  font-semibold mb-2 ">Banana</h2>
            <Link>
              <p className="flex items-center gap-2 font-sans ">
                Shop now <FaLongArrowAltRight />
              </p>
            </Link>
          </div>
        </div>
        <div className="flex bg-sky-100 mt-10 pt-6 px-6" data-aos="fade-up">
          <div>
            <p className="text-xl font-sans text-[#004b3e] ">Organic</p>
            <h2 className="text-2xl  font-semibold mb-2 ">Banana</h2>
            <Link>
              <p className="flex items-center gap-2 font-sans ">
                Shop now <FaLongArrowAltRight />
              </p>
            </Link>
          </div>
          <img
            className=" transition duration-300 ease-in-out hover:scale-110"
            src={img3}
            alt=""
          />
        </div>
      </div>
      <div className="bg-sky-100 pt-6" data-aos="zoom-in">
        <p className="text-xl font-sans text-[#004b3e] text-center">
          Test the colour
        </p>
        <h2 className="text-2xl  font-semibold mb-2 text-center">
          Fresh Red Guava
        </h2>
        <div className="flex justify-center items-center">
          <Link>
            <p className="flex items-center gap-2 font-sans ">
              Shop now <FaLongArrowAltRight />
            </p>
          </Link>
        </div>
        <div className="flex justify-center items-center">
          <img
            className="-mt-36 transition duration-300 ease-in-out hover:scale-110"
            src={img4}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default SimpleDiv;
