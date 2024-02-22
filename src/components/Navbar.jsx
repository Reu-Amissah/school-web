import React from "react";
import "../App.css";

const Navbar = () => {
  const navItems = [
    {
      path: "/",
      name: "Home",
    },
    {
      path: "/about",
      name: "About",
    },
    {
      path: "/programs",
      name: "Programs",
    },
    {
      path: "/contact",
      name: "Contact",
    },
  ];

  return (
    <div className="w-screen font-nunito  fixed top-0 z-10 bg-white">
      <div className="flex justify-between items-center py-4 w-10/12 mx-auto">
        <div className="">HELLO</div>
        <div className="flex items-center gap-10 text-md">
          {navItems.map((navitem, index) => (
            <div key={index}>{navitem.name}</div>
          ))}
          <div className="flex gap-6">
            <div className="border-2 border-blue px-5 py-2">Enroll Now</div>
            <div className="border-2 border-transparent bg-blue text-white px-5 py-2">
              Donate Now
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
