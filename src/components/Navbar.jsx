import { useState } from "react";
import logo from "../assets/img/logo.svg";
import { Link } from "react-scroll";
// import { RxHamburgerMenu } from "react-icons/rx";
// import {FaSearch, FaBars } from "react-icons/fa";
import {
  LiaTimesSolid,
  LiaAngleRightSolid,
  LiaBarsSolid,
} from "react-icons/lia";
import { IoMdSearch } from "react-icons/io";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navItems = [
    { link: "Visit", path: "visit" },
    { link: "Exhibittion and Events", path: "exhibittion and events" },
    { link: "News", path: "news" },
    { link: "Contact", path: "contact" },
    { link: "About Us", path: "about us" },
  ];

  return (
    <header className="sticky top-0 mx-1 z-10 border-b bg-white md:border border-1 border-[lightGrey]">
      <nav className="container flex items-center justify-between md:container">
        <div>
          <img src={logo} className="w-[80px] h-[60px]" />
        </div>

        <ul className="items-center justify-between hidden gap-8 text-xs font-medium uppercase cursor-pointer md:text-[14px] md:flex text-dimGrey">
          {navItems.map(({ link, path }) => (
            <Link to={path} key={path}>
              {link}
            </Link>
          ))}
        </ul>

        <div
          className="z-20 flex items-center gap-3 md:hidden"
          onClick={toggleMenu}
        >
          {isMenuOpen ? (
            <LiaTimesSolid size={25} className=" text-textPrimary" />
          ) : (
            <>
              <IoMdSearch size={25} className=" text-textPrimary" />
              <LiaBarsSolid size={25} className="text-textPrimary" />
            </>
          )}
        </div>

        <ul
          className={`${
            isMenuOpen
              ? `opacity-100 transform translate-x-0`
              : `opacity-0 transform -translate-y-full`
          } transition-all duration-300 ease-in-out absolute flex flex-col top-0 pt-20 container left-0 w-full h-screen bg-white text-md md:hidden gap-4`}
          onClick={() => setIsMenuOpen(isMenuOpen)}
        >
          {navItems.map(({ link, path }) => (
            <Link
              to={path}
              smooth={true}
              spy={true}
              key={path}
              className="flex items-center justify-between px-5 py-4 uppercase border-b cursor-pointer text-dimGrey border-borderGrey"
            >
              {link} <LiaAngleRightSolid />
            </Link>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
