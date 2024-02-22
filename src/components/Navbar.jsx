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
    <>
      <div>hello</div>
      <div className="flex items-center gap-4 bg-blue-300">
        {navItems.map((navitem, index) => (
          <div key={index}>{navitem.name}</div>
        ))}
      </div>
    </>
  );
};

export default Navbar;
