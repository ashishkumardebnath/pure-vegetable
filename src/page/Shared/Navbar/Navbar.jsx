import { useState } from "react";
import { IoMdMenu } from "react-icons/io";
import { IoClose } from "react-icons/io5";
import logo from "../../../assets/images/navbar/64ec68f873fdf2e3137a2b04_logo.png";
import { Link } from "react-router-dom";
import { BsCart4 } from "react-icons/bs";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const menuItems = (
    <>
      <li>
        <Link>Home</Link>
      </li>
      <li>
        <details>
          <summary>Products</summary>
          <ul className=" z-[1] menu p-2 shadow bg-gray-100 rounded-box w-44">
            <li>
              <a>Products Default</a>
            </li>
            <li>
              <a>Products Filter</a>
            </li>
          </ul>
        </details>
      </li>
      <li>
        <details>
          <summary>Pages</summary>
          <ul className=" z-[1] menu p-2 shadow bg-gray-100 rounded-box w-36">
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to="/blog">Blog</Link>
            </li>
            <li>
              <Link to="/testimonial">Testimonial</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/signup">SignUp</Link>
            </li>
          </ul>
        </details>
      </li>
    </>
  );
  return (
    <div className="navbar  bg-white ">
      <div className="navbar-start gap-4 lg:gap-0">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <div
              onClick={() => setOpen(!open)}
              className="text-3xl absolute  cursor-pointer md:hidden"
            >
              {open ? <IoClose /> : <IoMdMenu />}
            </div>
          </div>
          <ul
            tabIndex={0}
            className={`menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-gray-100 text-lg rounded-box w-52 ${
              open
                ? "top-20 opacity-100"
                : "top-[-490px] md:opacity-100 opacity-0"
            }`}
          >
            {menuItems}
          </ul>
        </div>
        <img className="w-20 lg:w-28" src={logo} alt="" />
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal text-lg px-1">{menuItems}</ul>
      </div>
      <div className="navbar-end">
        <h1 className="text-xl flex items-center gap-2">
          <BsCart4 size={30} />
          Cart(1)
        </h1>
      </div>
    </div>
  );
};

export default Navbar;
