import React, { useEffect, useState } from "react";
import "../../App.css";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [location, setLocation] = useState("");
  const navigate = useNavigate();
  const [isNav, setIsNav] = useState(false);

  function handleNavDrop() {
    setIsNav(!isNav);
    console.log(isNav);
  }

  useEffect(() => {
    setLocation(window.location.pathname.substring(1));
    console.log(location);
  }, [location]);

  const navItems = [
    {
      path: "/",
      name: "Home",
      navLoc: "",
    },
    {
      path: "/about",
      name: "About",
      navLoc: "about",
    },
    {
      path: "/programs",
      name: "Programs",
      navLoc: "programs",
    },
    {
      path: "/gallery",
      name: "Gallery",
      navLoc: "gallery",
    },
    {
      path: "/contact",
      name: "Contact",
      navLoc: "contact",
    },
  ];

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;

      if (scrollTop > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`w-screen font-nunito  fixed top-0 z-10 ${
        isScrolled
          ? "bg-white"
          : "bg-blue bg-opacity-25 border-b border-b-gray-500 backdrop-blur-md"
      }`}
    >
      <div className="flex justify-between items-center py-4 w-11/12 lg:w-10/12 mx-auto">
        <div
          className={`${
            isScrolled ? "text-black" : "text-white"
          } font-extrabold`}
        >
          HELLO
        </div>
        <div
          className={`hidden lg:flex items-center gap-10 text-md ${
            isScrolled ? "text-black" : "text-white"
          }`}
        >
          {navItems.map((navitem, index) => (
            <div
              key={index}
              onClick={() => navigate(navitem?.path, { replace: true })}
              className={`${
                location === navitem.navLoc ? "font-bold " : "font-semibold"
              }  cursor-pointer `}
            >
              {navitem.name}
            </div>
          ))}
          <div className="flex items-center gap-6">
            <div className="text-blue font-bold rounded-md underline underline-offset-4 decoration-gray-400 hover:text-extrabold hover:underline hover:underline-offset-2 hover:cursor-pointer hover:decoration-blue">
              Donate
            </div>
            <div
              className={`border-2 border-blue rounded-md bg-white text-blue hover:bg-blue hover:text-white hover:cursor-pointer px-5 py-2 font-semibold ${
                isScrolled ? "bg-white" : "bg-transparent"
              }`}
            >
              Enroll Now
            </div>
          </div>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className={`focus:outline-none underline underline-offset-4 hover:underline-offset-2 text-semibold ${
              isScrolled ? "text-black" : "text-white"
            }`}
            onClick={() => {
              handleNavDrop();
            }}
          >
            menu
          </button>
        </div>
      </div>
      <div className="flex justify-center lg:hidden">
        {isNav && (
          <ul className="flex flex-col text-center gap-6  pt-20 pb-10">
            {navItems.map((navitem) => (
              <li
                key={navitem.name}
                onClick={() => navigate(navitem.path, { replace: true })}
                className={`${
                  location === navItems.navLoc ? "font-semibold " : ""
                } ${
                  isScrolled ? "text-black" : "text-white"
                } cursor-pointer  hover:text-orange transition-all duration-150 ease-in-out`}
              >
                {navitem.name}
              </li>
            ))}
            <div className="text-blue font-bold rounded-md underline underline-offset-4 decoration-gray-400 hover:text-extrabold hover:underline hover:underline-offset-2 hover:cursor-pointer hover:decoration-blue">
              Donate
            </div>
            <div className="border-2 border-transparent rounded-md bg-blue text-white px-4 py-2">
              Enroll Now
            </div>
          </ul>
        )}
      </div>
    </div>
  );
};

export default Navbar;
