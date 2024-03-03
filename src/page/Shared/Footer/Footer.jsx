import { FaLongArrowAltRight } from "react-icons/fa";
import logo from "../../../assets/images/footer/64cb7a93ea43d08fe3ef5922_footer-logo.png";
import { Link } from "react-router-dom";
import BackToTopButton from "../../components/BackToTopBtn/BackToTopBtn";
const Footer = () => {
  return (
    <>
      <BackToTopButton></BackToTopButton>
      <footer className="footer p-10 bg-[#004b3e] text-white">
        <aside>
          <img src={logo} alt="" />
          <h2 className="text-2xl mt-5 mb-2 font-serif">Contact</h2>
          <p className="text-lg">blueboyashish2020@gmail.com</p>
          <h2 className="text-xl ">245, Central Streel,</h2>
          <h2 className="text-xl ">Havel Tower South City,</h2>
          <h2 className="text-xl ">New York, USA</h2>
        </aside>
        <nav>
          <h6 className=" text-2xl text-white font-serif mt-20">Categories</h6>
          <a className="link link-hover text-lg">Seeds & Nuts</a>
          <a className="link link-hover text-lg">Fresh Fruits</a>
          <a className="link link-hover text-lg">Breads & Cookies</a>
          <a className="link link-hover text-lg">Fresh Vegetable</a>
          <a className="link link-hover text-lg">Regular Products</a>
        </nav>
        <nav>
          <h6 className=" text-2xl text-white font-serif mt-20">
            Useful Links
          </h6>
          <a className="link link-hover text-lg">Password Protected</a>
          <a className="link link-hover text-lg">404 Not Found</a>
          <a className="link link-hover text-lg">Style Guide</a>
          <a className="link link-hover text-lg">Changelog</a>
          <a className="link link-hover text-lg">Licenses</a>
        </nav>
        <nav>
          <h6 className=" text-2xl text-white font-serif mt-20">
            Stay up to date
          </h6>
          <a className="link link-hover text-lg">Subscribe our</a>
          <a className="link link-hover text-lg">newsletter and get all</a>
          <a className="link link-hover text-lg">the latest information</a>
          <div className=" border border-white-2 p-1 mt-3">
            <input
              className="bg-[#004b3e] border-none"
              type="text"
              placeholder="Enter Your Mail"
              name=""
              id=""
            />
            <button className="bg-white text-black p-4">
              {" "}
              <FaLongArrowAltRight />
            </button>
          </div>
        </nav>
      </footer>
      {/* <div className="divider"></div> */}
      <footer className="footer footer-center p-4 bg-[#004b3e] text-white pt-10">
        <aside>
          <p className="text-lg">
            Copyright © 2024 - All right reserved by{" "}
            <Link className="text-[#d0e4e0]">Dream-Developer</Link>
          </p>
        </aside>
      </footer>
    </>
  );
};

export default Footer;
