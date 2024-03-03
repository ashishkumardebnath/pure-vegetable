import img1 from "../../../assets/images/simpleDiv2/img1.png";
import img2 from "../../../assets/images/simpleDiv2/img2.png";
import img3 from "../../../assets/images/simpleDiv2/img3.png";
const SimpleDiv2 = () => {
  return (
    <div className="lg:flex lg:space-y-0 space-y-8 justify-between mb-28">
      <div
        className="flex items-center gap-4"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        <img className="mb-5" src={img1} alt="" />
        <div>
          <h2 className="text-2xl font-semibold text-[#004b3e] ">
            Free Delivery
          </h2>
          <p className="text-xl font-sans">
            Get free delivery for <br /> order spent $100 or over.
          </p>
        </div>
      </div>
      <div
        className="flex items-center gap-4"
        data-aos="fade-up"
        data-aos-delay="400"
      >
        <img className="mb-5" src={img2} alt="" />
        <div>
          <h2 className="text-2xl font-semibold text-[#004b3e] ">
            Safe Payment
          </h2>
          <p className="text-xl font-sans">
            Payment system is very <br /> much sage and secure.
          </p>
        </div>
      </div>
      <div
        className="flex items-center gap-4"
        data-aos="fade-up"
        data-aos-delay="600"
      >
        <img className="mb-5 " src={img3} alt="" />
        <div>
          <h2 className="text-2xl font-semibold text-[#004b3e] ">Money Back</h2>
          <p className="text-xl font-sans">
            Very easy to make your <br /> money back option.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SimpleDiv2;
