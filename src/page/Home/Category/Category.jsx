import img1 from "../../../assets/images/category/img1.png";
import img2 from "../../../assets/images/category/img2.png";
import img3 from "../../../assets/images/category/img3.png";
import img4 from "../../../assets/images/category/img4.png";
import img5 from "../../../assets/images/category/img5.png";
const Category = () => {
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
        Choose your Category
      </h5>
      <p
        className="text-lg text-center font-sans text-gray-500"
        data-aos="fade-up"
        data-aos-delay="300"
      >
        Organic food is believed to offer numerous <br /> health benefits
        without pesticides and fertilizers.
      </p>
      <div className="grid lg:grid-cols-4 gap-12 mt-16">
        <div data-aos="flip-right">
          <div className="flex justify-center items-center">
            <img
              className="rounded-full border-dashed border-2 border-[#004b3e]  "
              src={img2}
              alt=""
            />
          </div>
          <h2 className="text-2xl hover:text-[#004b3e] font-semibold text-center mt-4">
            Fresh Vegetable
          </h2>
          <p className="text-xl font-sans text-center">(38 Items)</p>
        </div>
        <div data-aos="flip-right">
          <div className="flex justify-center items-center">
            <img
              className="rounded-full border-dashed border-2 border-[#004b3e]"
              src={img3}
              alt=""
            />
          </div>
          <h2 className="text-2xl hover:text-[#004b3e] font-semibold text-center mt-4">
            Breads & Cookies
          </h2>
          <p className="text-xl font-sans text-center">(23 Items)</p>
        </div>
        <div data-aos="flip-right">
          <div className="flex justify-center items-center">
            <img
              className="rounded-full border-dashed border-2 border-[#004b3e]"
              src={img4}
              alt=""
            />
          </div>
          <h2 className="text-2xl hover:text-[#004b3e] font-semibold text-center mt-4">
            Fresh Fruits
          </h2>
          <p className="text-xl font-sans text-center">(17 Items)</p>
        </div>
        <div data-aos="flip-right">
          <div className="flex justify-center items-center">
            <img
              className="rounded-full border-dashed border-2 border-[#004b3e]"
              src={img5}
              alt=""
            />
          </div>
          <h2 className="text-2xl hover:text-[#004b3e] font-semibold text-center mt-4">
            Seeds & Nuts
          </h2>
          <p className="text-xl font-sans text-center">(14 Items)</p>
        </div>
      </div>
    </div>
  );
};

export default Category;
