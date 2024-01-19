import { useState } from "react";
import logo from "../assets/img/logo.svg";
import { Link } from "react-scroll";
import { RxHamburgerMenu } from "react-icons/rx";
import { FaTimes } from "react-icons/fa";

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
    <header className="sticky top-0 mx-1 z-10 border-b-2 bg-white md:border border-1 border-[lightGrey] md:px-10 px-5">
      <nav className="flex items-center justify-between md:container">
        <div>
          <img src={logo} className="w-[80px] h-[60px]" />
        </div>

        <ul className="items-center justify-between hidden gap-6 text-xs font-medium uppercase cursor-pointer md:flex text-dimGrey">
          {navItems.map(({ link, path }) => (
            <Link to={path} key={path}>
              {link}
            </Link>
          ))}
        </ul>

        <div className="z-20 md:hidden" onClick={toggleMenu}>
          {isMenuOpen ? (
            <FaTimes size={25} className="text-dimGrey" />
          ) : (
            <RxHamburgerMenu size={25} className="text-textPrimary" />
          )}
        </div>

        <ul
          className={`${
            isMenuOpen
              ? `opacity-100 transform translate-x-0`
              : `opacity-0 transform -translate-y-full`
          } transition-all duration-300 ease-in-out absolute flex flex-col items-center justify-center top-0 left-0 w-full h-screen bg-stone-100 text-md md:hidden gap-4`}
          onClick={() => setIsMenuOpen(isMenuOpen)}
        >
          {navItems.map(({ link, path }) => (
            <Link to={path} smooth={true} spy={true} key={path}>
              {link}
            </Link>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
