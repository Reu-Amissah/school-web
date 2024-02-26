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
      path: "/contact",
      name: "Contact",
      navLoc: "contact",
    },
  ];

  return (
    <div className="w-screen font-nunito  fixed top-0 z-10 bg-white">
      <div className="flex justify-between items-center py-4 w-11/12 lg:w-10/12 mx-auto">
        <div className="">HELLO</div>
        <div className="hidden lg:flex items-center gap-10 text-md">
          {navItems.map((navitem, index) => (
            <div
              key={index}
              onClick={() => navigate(navitem?.path, { replace: true })}
              className={`${
                location === navitem.navLoc ? "font-semibold " : ""
              }  cursor-pointer `}
            >
              {navitem.name}
            </div>
          ))}
          <div className="flex gap-6">
            <div className="border-2 border-blue px-5 py-2">Enroll Now</div>
            <div className="border-2 border-transparent bg-blue text-white px-5 py-2">
              Donate Now
            </div>
          </div>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="text-black focus:outline-none border-b border-b-black"
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
                } text-black cursor-pointer  hover:text-orange transition-all duration-150 ease-in-out`}
              >
                {navitem.name}
              </li>
            ))}
            <div className="border-2 border-blue px-4 py-2">Enroll Now</div>
            <div className="border-2 border-transparent bg-blue text-white px-4 py-2">
              Donate Now
            </div>
          </ul>
        )}
      </div>
    </div>
  );
};

export default Navbar;
