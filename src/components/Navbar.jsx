import { useState } from "react";
import logo from "../assets/img/logo.svg";
import { Link } from "react-scroll";
import {FaXmark, FaBars} from "react-icons/fa6"

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useState(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.addEventListener("scroll", handleScroll);
    };
  });

  const navItems = [
    { link: "Visit", path: "visit" },
    { link: "Exhibittion and Events", path: "exhibittion and events" },
    { link: "News", path: "news" },
    { link: "Contact", path: "contact" },
    { link: "About Us", path: "about us" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 bg-white border border-1 border-[lightGrey] m-1">
      <nav className="w-[1250px] mx-auto flex items-center justify-between">
        <div>
          <img src={logo} className="w-[80px] h-[60px]" />
        </div>

        <ul className="items-center justify-between hidden space-x-12 text-xs font-medium uppercase cursor-pointer md:flex text-dimGrey">
          {navItems.map(({ link, path }) => <Link to={path} smooth={true} spy={true} key={path}>{link}</Link>)}
        </ul>

            <div className="md:hidden">
              <button>
                {
                  isMenuOpen?(<FaXmark className="w-6 h-6 text-black"/>):(<FaBars className="w-6 h-6 text-black"/>)
                }
              </button>
            </div>
      </nav>
    </header>
  );
}

export default Navbar;
