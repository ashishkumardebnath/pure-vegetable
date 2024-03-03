import { useEffect, useState } from "react";
import img from "../../../assets/images/contact/love.png";
import { FaLongArrowAltRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import SimpleDiv2 from "../SimpleDiv2/SimpleDiv2";

const Blog = () => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    fetch("blog.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);
  return (
    <div>
      <div className="my-32 ">
        <div className="lg:flex justify-between" data-aos="zoom-in">
          <div className="flex justify-center items-center">
            <div>
              <h5 className="text-6xl text-[#004b3e] font-semibold mb-6">
                Our Blog
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

      <div className="mt-64">
        <div className="grid lg:grid-cols-3 gap-5">
          {blogs.map((blog) => (
            <div key={blog.id}>
              <div className="border p-5" data-aos="zoom-in-up">
                <div className="overflow-hidden">
                  <img
                    className="transition duration-300 ease-in-out hover:scale-110"
                    src={blog.img}
                    alt=""
                  />
                </div>
                <p className="text-base font-sans my-3">
                  By: {blog.name} - On: {blog.date}
                </p>
                <h2 className="text-2xl font-semibold mb-2">{blog.title}</h2>
                <p className="text-lg font-sans">{blog.dec}</p>
                <Link>
                  <p className="flex  items-center gap-1 font-sans text-base font-semibold hover:text-[#004b3e] mt-3">
                    Read full story
                    <div className="mt-1">
                      <FaLongArrowAltRight />
                    </div>
                  </p>
                </Link>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center items-center">
          <button className="btn bg-[#004b3e] border-none text-white text-lg font-sans rounded-none mt-12 mb-6">
            <span className="flex items-center gap-2">
              {" "}
              View More <FaLongArrowAltRight />
            </span>
          </button>
        </div>
      </div>
      <div className="mt-28">
        <SimpleDiv2></SimpleDiv2>
      </div>
    </div>
  );
};

export default Blog;
