import img3 from "../../../assets/images/deal/img3.png";
import img2 from "../../../assets/images/deal/img2.png";
import img1 from "../../../assets/images/deal/img1.png";
import { TiShoppingCart } from "react-icons/ti";
const Deal = () => {
  return (
    <div className="bg-gray-100 lg:p-20 mb-28">
      <p className="text-xl font-sans mb-5" data-aos="fade-up">
        Weekly Offer
      </p>
      <div className="grid lg:grid-cols-2 gap-10 ">
        <div>
          <div
            className="lg:flex justify-between"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <h5 className="lg:text-4xl text-3xl font-semibold text-[#004b3e]">
              Best Deals
            </h5>
            <img className="lg:w-1/6 lg:-mt-8" src={img3} alt="" />
          </div>
          <h2
            className="text-2xl font-sans"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            Exciting offer for next 7 days
          </h2>
          <p className="font-sans my-6" data-aos="fade-up" data-aos-delay="400">
            Get your offer as early as possible
          </p>
          <div className="bg-white  lg:w-96 p-14" data-aos="zoom-in">
            <img src={img2} alt="" />
            <h2 className="text-2xl  font-semibold text-center">
              Organic Zucchini
            </h2>
            <p className="text-lg text-center font-sans">
              $ 2.00 USD - $ 6.00 USD /piece
            </p>
            <div className="flex justify-center items-center">
              <p className="mt-3 me-4 font-sans">Available: 20</p>
              <button className="btn bg-gray-200 text-[#004b3e] border-none hover:bg-[#004b3e] hover:text-white font-sans text-lg mt-4">
                Add to Cart <TiShoppingCart />
              </button>
            </div>
          </div>
        </div>
        <div className="overflow-hidden" data-aos="zoom-in">
          <img
            className="transition duration-300 ease-in-out hover:scale-110"
            src={img1}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Deal;
