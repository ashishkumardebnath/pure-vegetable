import { Link } from "react-router-dom";
import img1 from "../../../assets/images/login/love.png";
const SignUp = () => {
  return (
    <div>
      <div data-aos="zoom-in">
        <div className="flex justify-center items-center mt-16">
          <img src={img1} alt="" />
        </div>
        <h6 className="text-6xl font-semibold text-[#004b3e] text-center mt-8 mb-5">
          Sign Up
        </h6>
        <h1 className="text-xl font-sans text-center">
          Find your product by category wise organic food is believed <br />{" "}
          numerous health benefits, organic farming avoids fertilizers.
        </h1>
      </div>
      {/* ------------- */}
      <div
        className="flex justify-center items-center my-28"
        data-aos="zoom-in-up"
      >
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-gray-100 ">
          <h3 className="text-3xl font-semibold text-[#004b3e] text-center mt-5">
            Sign Up
          </h3>
          <form className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="Enter your Name"
                className="input input-bordered bg-white"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="Enter your Email"
                className="input input-bordered bg-white"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="Password"
                className="input input-bordered bg-white"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Confirm Password</span>
              </label>
              <input
                type="password"
                placeholder=" Confirm your Password "
                className="input input-bordered bg-white"
                required
              />
            </div>
            <div className="form-control mt-6">
              <button className="btn bg-[#004b3e]">SignUp</button>
            </div>
            <p className="text-center my-2">
              Already have a account?{" "}
              <Link to="/login" className="text-[#004b3e]">
                Please Login
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
