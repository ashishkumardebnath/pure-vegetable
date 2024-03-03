import { useEffect, useState } from "react";
import img1 from "../../../assets/images/products/img1.png";
import { TiShoppingCart } from "react-icons/ti";
import { FaLongArrowAltRight } from "react-icons/fa";

const Products = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
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
        Regular Products
      </h5>
      <p
        className="text-lg text-center font-sans text-gray-500"
        data-aos="fade-up"
        data-aos-delay="300"
      >
        Organic farmers prioritize the use of compost, cover crops, <br /> and
        crop rotation to enrich the soil with nutrients and maintain
      </p>
      <div className="grid lg:grid-cols-4 gap-10 mt-16">
        {products.map((product) => (
          <div key={product.id}>
            <div className="card  bg-gray-100 shadow-xl" data-aos="flip-right">
              <figure className="px-10 pt-10 hover:scale-125 transition duration-500 cursor-pointer">
                <img src={product.img} alt="Shoes" className="rounded-xl" />
              </figure>
              <div className="card-body items-center text-center">
                <h2 className="card-title text-2xl hover:text-[#004b3e]">
                  {product.name}
                </h2>
                <p className="text-lg font-sans">$ {product.price} USD/kg</p>
                <div className="card-actions">
                  <button className="btn bg-gray-200 text-[#004b3e] border-none hover:bg-[#004b3e] hover:text-white font-sans text-lg mt-4">
                    Add to Cart <TiShoppingCart />
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div
        className="flex justify-center items-center mt-16"
        data-aos="fade-up"
      >
        <button className="btn bg-[#004b3e] border-none text-white text-lg font-sans rounded-none mt-12 mb-6 px-6 hover:bg-slate-950 ">
          <span className="flex items-center gap-2">
            {" "}
            Explore More <FaLongArrowAltRight />
          </span>
        </button>
      </div>
    </div>
  );
};

export default Products;
