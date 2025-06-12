import { useState } from "react";
import Logo from "../../assets/images/logo.svg";
import { Link } from "react-router-dom";
import { IoIosArrowDown } from "react-icons/io";

const BurgerIcon = ({ open }: { open: boolean }) => {
  return (
    <button
      className="flex flex-col justify-center items-center w-8 h-8 group"
      aria-label="Toggle menu"
    >
      <span
        className={`block h-0.5 w-6 bg-black rounded-sm transform transition duration-300 ease-in-out
          ${open ? "rotate-45 translate-y-1.5" : "-translate-y-1.5"}`}
      ></span>
      <span
        className={`block h-0.5 w-6 bg-black rounded-sm my-1 transition duration-300 ease-in-out
          ${open ? "opacity-0" : "opacity-100"}`}
      ></span>
      <span
        className={`block h-0.5 w-6 bg-black rounded-sm transform transition duration-300 ease-in-out
          ${open ? "-rotate-45 -translate-y-1.5" : "translate-y-1.5"}`}
      ></span>
    </button>
  );
};

const Navbar = () => {
  const [menu, setMenu] = useState(false);

  return (
    <div className="flex items-center cursor-pointer w-full ">
      <div className="flex items-center mt-[20px] w-full max-w-[81.25rem] justify-between mx-auto">
        {/* Logo */}
        <div className="flex text-center">
          <div className="mx-auto">
            <Link to="/">
              <img
                src={Logo}
                alt="Logo"
                className="w-auto max-w-[9.125rem] sm:max-w-[7.5rem] md:max-w-[6.25rem] lg:max-w-[8.125rem]"
              />
            </Link>
          </div>
        </div>

        {/* Links */}
        <div className="hidden md:flex">
          <ul className="flex items-center gap-[2.5625rem] lg:gap-[1.875rem] md:gap-[1rem] text-[1.0625rem]">
            <li>
              <Link className="flex items-center" to="/services">
                Services <IoIosArrowDown />
              </Link>
            </li>
            <li>
              <Link to="/about-us">About Us</Link>
            </li>
            <li>
              <Link to="/blog">Blog</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>

        {/* Translate and Book a Service section*/}
        <div className="flex items-center">
          <div className="hidden md:flex gap-[1.8125rem]">
            <div className="flex items-center">
              En <IoIosArrowDown />
            </div>
            <div className="bg-[#0F42FF] rounded-2xl px-5 py-3 text-[1.15rem]">
              <Link to="/book-a-service">
                <button className="text-white cursor-pointer">Book a Service</button>
              </Link>
            </div>
          </div>
        </div>

        {/* Burger (Mobile) */}
        <div className="flex md:hidden">
          <button onClick={() => setMenu(!menu)}>
            <BurgerIcon open={menu} />
          </button>
        </div>

        {/* Mobile Menu */}
        {menu && (
          <div className="absolute top-16 right-4 bg-white shadow-lg p-4 w-64 md:hidden text-[1.0625rem] z-50">
            <ul className="flex flex-col gap-4">
              <li>
                <Link to="/services">Services</Link>
              </li>
              <li>
                <Link to="/about-us">About Us</Link>
              </li>
              <li>
                <Link to="/blog">Blog</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
