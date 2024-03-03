import { Link } from "react-router-dom";
import img1 from "../../../assets/images/login/love.png";
const Login = () => {
  return (
    <div>
      <div data-aos="zoom-in">
        <div className="flex justify-center items-center mt-16">
          <img src={img1} alt="" />
        </div>
        <h6 className="text-6xl font-semibold text-[#004b3e] text-center mt-8 mb-5">
          Log In
        </h6>
        <h1 className="text-xl font-sans text-center">
          Find your product by category wise organic food is believed <br />{" "}
          numerous health benefits, organic farming avoids fertilizers.
        </h1>
      </div>
      {/* ------------- */}
      <div
        className="flex justify-center items-center  my-28"
        data-aos="zoom-in-up"
      >
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-gray-100">
          <h3 className="text-3xl font-semibold text-[#004b3e] text-center mt-5">
            Log In
          </h3>
          <form className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
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
                placeholder="password"
                className="input input-bordered bg-white"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn bg-[#004b3e] border-none">Login</button>
            </div>
            <p className="text-center my-2">
              You have no account?{" "}
              <Link to="/singup" className="text-[#004b3e]">
                Please Sign Up
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
