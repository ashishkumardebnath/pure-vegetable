import img1 from "../../../assets/images/banner1/64cb6d888700d259e78b5a1f_hero-main-img.png";
import img2 from "../../../assets/images/banner1/img2.png";
import img3 from "../../../assets/images/banner1/img3.png";
import bg from "../../../assets/images/banner1/bg.jpg";

const Banner1 = () => {
  return (
    <div className="grid lg:grid-cols-2 mb-20 bg-gray-100 lg:mt-0 mt-4">
      {/* #004b3e */}
      <div className="flex justify-center items-center" data-aos="zoom-in">
        <div>
          <h6 className="lg:text-6xl text-3xl font-semibold text-[#004b3e]">
            Farm Fresh Delights:
          </h6>
          <h6 className="lg:text-6xl text-3xl font-semibold text-[#004b3e] my-2">
            Embrace the Organic
          </h6>
          <h6 className="lg:text-6xl text-3xl font-semibold text-[#004b3e]">
            Goodness!
          </h6>
          <p className="text-lg font-sans text-gray-500 mt-5 mb-6">
            Organic food is believed to offer numerous health benefits. Since
            organic farming avoids synthetic pesticides and fertilizers.
          </p>
          <button className="btn bg-[#004b3e] border-none text-white font-sans px-6  text-lg rounded-none mb-12">
            Shop Now
          </button>
          <div className="lg:flex lg:space-y-0 space-y-5 lg:mb-0 mb-8">
            <div data-aos="fade-right" data-aos-delay="200">
              <div className="flex items-center gap-5">
                <img src={img2} alt="" />
                <h2 className="text-2xl font-semibold">
                  Certified Organic <br /> Product
                </h2>
              </div>
              <p className="text-lg font-sans text-gray-500 mt-2">
                Organic food is believed to offer numerous health benefits.
              </p>
            </div>
            <div data-aos="fade-right">
              <div className="flex items-center gap-5">
                <img src={img3} alt="" />
                <h2 className="text-2xl font-semibold">
                  Certified Organic <br /> Product
                </h2>
              </div>
              <p className="text-lg font-sans text-gray-500 mt-2">
                Organic food is believed to offer numerous health benefits.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div style={{ backgroundImage: `url(${bg})` }} data-aos="zoom-in">
        <img className="lg:w-[485px] pt-6 ps-2" src={img1} alt="" />
      </div>
    </div>
  );
};

export default Banner1;
