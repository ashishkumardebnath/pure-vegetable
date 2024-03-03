import { TiShoppingCart } from "react-icons/ti";
import img1 from "../../../assets/images/trendingProduct/img1.png";
import img2 from "../../../assets/images/trendingProduct/img2.png";
import img3 from "../../../assets/images/trendingProduct/img3.png";
import img4 from "../../../assets/images/trendingProduct/img4.png";
import img5 from "../../../assets/images/trendingProduct/img5.png";
import img6 from "../../../assets/images/trendingProduct/img6.png";
import img7 from "../../../assets/images/trendingProduct/img7-removebg-preview.png";
import img8 from "../../../assets/images/trendingProduct/img8-removebg-preview.png";
import { Link } from "react-router-dom";
import { FaLongArrowAltRight } from "react-icons/fa";
const TrendingProduct = () => {
  return (
    <div className="mb-28">
      <div
        className="lg:flex lg:space-y-0 space-y-5 justify-between"
        data-aos="fade-up"
      >
        <h4 className="lg:text-4xl text-3xl font-semibold text-[#004b3e]">
          Trending Products
        </h4>
        <h4 className="lg:text-4xl text-3xl font-semibold text-[#004b3e]">
          Best Seller
        </h4>
      </div>
      <div className="grid lg:grid-cols-3 gap-8 mt-10">
        <div>
          <div className="bg-gray-100 py-10 px-5" data-aos="flip-right">
            <div className="flex gap-3">
              <img
                className="transition duration-300 ease-in-out hover:scale-110"
                src={img1}
                alt=""
              />
              <div>
                <h2 className="text-2xl  font-semibold">Bitter Gourd</h2>
                <p className="text-xl font-sans">$ 3.00 USD /kg</p>
                <button className="btn bg-gray-200 border-none text-[#004b3e] hover:bg-[#004b3e] hover:text-white font-sans text-lg mt-4">
                  Add to Cart <TiShoppingCart />
                </button>
              </div>
            </div>
          </div>
          <div className="bg-gray-100 py-10 px-5 my-8" data-aos="flip-right">
            <div className="flex gap-3">
              <img
                className="transition duration-300 ease-in-out hover:scale-110"
                src={img2}
                alt=""
              />
              <div>
                <h2 className="text-2xl  font-semibold">Ripe Pumpkins</h2>
                <p className="text-xl font-sans">$ 4.00 USD /kg</p>
                <button className="btn bg-gray-200 border-none text-[#004b3e] hover:bg-[#004b3e] hover:text-white font-sans text-lg mt-4">
                  Add to Cart <TiShoppingCart />
                </button>
              </div>
            </div>
          </div>
          <div className="bg-gray-100 py-10 px-5" data-aos="flip-right">
            <div className="flex gap-3">
              <img
                className="transition duration-300 ease-in-out hover:scale-110"
                src={img3}
                alt=""
              />
              <div>
                <h2 className="text-2xl  font-semibold">Capcicam</h2>
                <p className="text-xl font-sans">$ 5.00 USD /kg</p>
                <button className="btn bg-gray-200 border-none text-[#004b3e] hover:bg-[#004b3e] hover:text-white font-sans text-lg mt-4">
                  Add to Cart <TiShoppingCart />
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="-mt-10">
          <div className=" bg-pink-100 mt-10 pt-6 px-10" data-aos="flip-right">
            <div>
              <p className="text-xl font-sans text-[#004b3e] ">
                Organic & Natural
              </p>
              <h2 className="text-2xl  font-semibold mb-2 ">
                Fresh Fruits & Juice
              </h2>
            </div>
            <div className="flex justify-between">
              <Link>
                <p className="flex items-center gap-2 font-sans ">
                  Shop now <FaLongArrowAltRight />
                </p>
              </Link>
              <img
                className="transition duration-300 ease-in-out hover:scale-110"
                src={img7}
                alt=""
              />
            </div>
          </div>
          <div className="bg-sky-100 pt-6 px-10 mt-8" data-aos="flip-right">
            <p className="text-xl font-sans text-[#004b3e] text-end">
              Organic & Natural
            </p>
            <h2 className="text-2xl  font-semibold mb-2 text-end">
              Fresh Fruits & Juice
            </h2>
            <div className="flex justify-end items-end">
              <Link>
                <p className="flex items-center gap-2 font-sans ">
                  Shop now <FaLongArrowAltRight />
                </p>
              </Link>
            </div>
            <div className="flex justify-center items-center">
              <img
                className="lg:-mt-36 transition duration-300 ease-in-out hover:scale-110"
                src={img8}
                alt=""
              />
            </div>
          </div>
        </div>

        <div>
          <div className="bg-gray-100 py-10 px-5" data-aos="flip-right">
            <div className="flex gap-3">
              <img
                className="transition duration-300 ease-in-out hover:scale-110"
                src={img4}
                alt=""
              />
              <div>
                <h2 className="text-2xl  font-semibold">Red Onion</h2>
                <p className="text-xl font-sans">$ 2.00 USD /kg</p>
                <button className="btn bg-gray-200 border-none text-[#004b3e] hover:bg-[#004b3e] hover:text-white font-sans text-lg mt-4">
                  Add to Cart <TiShoppingCart />
                </button>
              </div>
            </div>
          </div>
          <div className="bg-gray-100 py-10 px-5 my-8" data-aos="flip-right">
            <div className="flex gap-3">
              <img
                className="transition duration-300 ease-in-out hover:scale-110"
                src={img5}
                alt=""
              />
              <div>
                <h2 className="text-2xl  font-semibold">Fresh Asparagus</h2>
                <p className="text-xl font-sans">$ 5.00 USD /kg</p>
                <button className="btn bg-gray-200 border-none text-[#004b3e] hover:bg-[#004b3e] hover:text-white font-sans text-lg mt-4">
                  Add to Cart <TiShoppingCart />
                </button>
              </div>
            </div>
          </div>
          <div className="bg-gray-100 py-10 px-5" data-aos="flip-right">
            <div className="flex gap-3">
              <img
                className="transition duration-300 ease-in-out hover:scale-110"
                src={img6}
                alt=""
              />
              <div>
                <h2 className="text-2xl  font-semibold">Organic Guava</h2>
                <p className="text-xl font-sans">$ 4.00 USD /kg</p>
                <button className="btn bg-gray-200 border-none text-[#004b3e] hover:bg-[#004b3e] hover:text-white font-sans text-lg mt-4">
                  Add to Cart <TiShoppingCart />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrendingProduct;
