import { FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";
import notFoundImg from "../../assets/images/notFound/64ec3bb7627363a3b61b94f8_404-p-500.png";

const NotFound = () => {
  return (
    <>
      {/* <Helmet>
        <title>404 - Not Found Page</title>
      </Helmet> */}
      <div className="w-full h-full">
        <div className="w-full min-h-screen flex justify-center  items-center">
          <div className="lg:w-[560px]  h-[330px] w-full">
            <img className="-mt-20" src={notFoundImg} alt="" />
            <h5 className="text-[#004b3e] text-5xl text-center font-semibold mt-5">
              Page Not Found
            </h5>
            <p className="text-lg text-center mt-2">
              The page you are looking for does not exist or has been moved
            </p>
            <div className="flex justify-center items-center mt-6">
              <Link
                to="/"
                className="bg-[#004b3e] cursor-pointer  flex justify-center gap-2 items-center text-white px-8 lg:py-3  md:py-3 py-2 lg:text-lg lg:font-semibold duration-300 rounded hover:bg-slate-950 "
              >
                <FaHome className="lg:text-xl text-lg"></FaHome>{" "}
                <span>Back to Home</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NotFound;
