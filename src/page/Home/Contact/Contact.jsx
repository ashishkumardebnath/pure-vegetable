import img from "../../../assets/images/contact/love.png";
import img1 from "../../../assets/images/contact/cover1.png";
import img2 from "../../../assets/images/contact/cover2.png";
import icon1 from "../../../assets/images/contact/icon1-removebg-preview.png";
import icon2 from "../../../assets/images/contact/icon2-removebg-preview.png";
import icon3 from "../../../assets/images/contact/icon3-removebg-preview.png";
import icon4 from "../../../assets/images/contact/peyaj.png";
import { FaLongArrowAltRight } from "react-icons/fa";
import SimpleDiv2 from "../SimpleDiv2/SimpleDiv2";
const Contact = () => {
  return (
    <div>
      <div className="my-32">
        <div className="lg:flex justify-between" data-aos="zoom-in">
          <div className="flex justify-center items-center">
            <div>
              <h5 className="text-6xl text-[#004b3e] font-semibold mb-6">
                Contact us
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
      {/* ---------- */}
      <div className="flex justify-center items-center">
        <div className="lg:flex gap-8 my-20">
          <div className="overflow-hidden" data-aos="zoom-in">
            <img
              className="transition duration-300 ease-in-out hover:scale-110"
              src={img1}
              alt=""
            />
          </div>
          <div>
            <h4
              className="text-4xl text-[#004b3e] font-semibold mt-6"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              Contact information
            </h4>
            <h1
              className="text-xl font-sans mt-3 mb-5"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              Find our contact information here and get in touch
            </h1>
            <div className="flex gap-3" data-aos="fade-up" data-aos-delay="300">
              <img className="w-8 h-10 mt-2" src={icon1} alt="" />
              <div className="">
                <h2 className="text-2xl font-semibold">Our Address</h2>
                <p className="text-xl font-sans mt-2">
                  245, Central Streel, Havel Tower <br /> South City, New York,
                  USA
                </p>
              </div>
            </div>
            <div
              className="flex gap-3 my-8"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <img className="w- h-10 mt-2" src={icon2} alt="" />
              <div className="">
                <h2 className="text-2xl font-semibold">Call us</h2>
                <p className="text-xl font-sans mt-2">
                  +01234 567 890 <br />
                  +01234 567 810
                </p>
              </div>
            </div>
            <div className="flex gap-3" data-aos="fade-up" data-aos-delay="500">
              <img className="w-8 h-10 mt-2" src={icon3} alt="" />
              <div className="">
                <h2 className="text-2xl font-semibold">Email us</h2>
                <p className="text-xl font-sans mt-2">
                  hellopurely@example.com <br />
                  infodesk@example.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* --------- */}
      <div className="flex justify-center items-center mt-20 mb-36">
        <div className="lg:flex gap-8 bg-gray-100 lg:p-14 py-4 px-2 lg:space-y-0 space-y-10">
          <div data-aos="zoom-in">
            <h4 className="text-4xl text-[#004b3e] font-semibold  mb-5">
              Send a message
            </h4>
            <div className="flex gap-12 mb-8">
              <p className="text-xl font-sans">
                If you need to know anything fell free <br /> to leave a message
                here, we will take <br /> a proper action
              </p>
              <img className="w-16" src={icon4} alt="" />
            </div>
            <form>
              <div className="flex gap-5">
                <input
                  type="text"
                  placeholder="Type here"
                  className="input input-bordered bg-white w-full max-w-xs"
                />
                <input
                  type="text"
                  placeholder="Type here"
                  className="input input-bordered bg-white w-full max-w-xs"
                />
              </div>
              <div className="flex gap-5 my-5">
                <input
                  type="text"
                  placeholder="Type here"
                  className="input input-bordered bg-white w-full max-w-xs"
                />
                <input
                  type="text"
                  placeholder="Type here"
                  className="input input-bordered bg-white w-full max-w-xs"
                />
              </div>
              <textarea
                placeholder="Bio"
                className="textarea textarea-bordered bg-white textarea-lg w-full "
              ></textarea>
              <button className="btn bg-[#004b3e] border-none hover:bg-slate-950 border-none text-white text-lg font-sans rounded-none mt-5">
                <span className="flex items-center gap-2">
                  {" "}
                  Send now <FaLongArrowAltRight />
                </span>
              </button>
            </form>
          </div>
          <div className="overflow-hidden" data-aos="zoom-in">
            <img
              className="transition duration-300 ease-in-out hover:scale-110"
              src={img2}
              alt=""
            />
          </div>
        </div>
      </div>
      {/* -------- */}
      <div className="lg:px-20">
        <SimpleDiv2></SimpleDiv2>
      </div>
    </div>
  );
};

export default Contact;
