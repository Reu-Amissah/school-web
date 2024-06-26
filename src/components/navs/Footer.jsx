import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedin,
  FaXTwitter,
} from "react-icons/fa6";

const Footer = () => {
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
      path: "/gallery",
      name: "Gallery",
      navLoc: "gallery",
    },
    {
      path: "/contact",
      name: "Contact",
    },
  ];

  return (
    <div className=" pb-32 pt-20 lg:py-44 bg-gray-900 font-nunito text-gray-500">
      <div className="w-11/12 lg:w-9/12 mx-auto ">
        <div className="flex flex-col lg:flex-row justify-between items-center lg:items-start mb-10">
          <div className="flex flex-col items-center lg:items-start">
            <div className="text-xl text-white font-bold mb-6">MYSCHOOL</div>
            <div className="flex flex-col lg:flex-row gap-8 lg:gap-28">
              <div className="text-[16px] flex flex-col items-center lg:items-start gap-1">
                <div className="text-[18px] text-white">ADDRESS</div>
                <div>3419, Accra - Ghana 329</div>
                <div>labone, Osu - Accra, Ghana</div>
              </div>
              <div className="text-[16px] flex flex-col items-center lg:items-start gap-1">
                <div className="text-[18px] text-white">CONTACT</div>
                <div>+233 533 526 859 | + 233 5513 21749</div>
                <div>info@myschool.com</div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center mt-8 lg:items-end gap-3">
            <div className="flex gap-10 text-white">
              <FaXTwitter className="text-xl" />
              <FaFacebookF className="text-xl" />
              <FaInstagram className="text-xl" />
              <FaLinkedin className="text-xl" />
            </div>
            <div className="flex gap-10">
              {navItems.map((navitem, index) => (
                <div key={index}>{navitem.name}</div>
              ))}
            </div>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row gap-3 lg:gap-0 items-center lg:items-start justify-between  pt-10 border-t border-t-slate-700">
          <div className="flex gap-1">
            Developed by
            <div className="underline hover:cursor-pointer">Reujoy Amissah</div>
          </div>
          <div className="flex gap-1">
            Copyright ©2024 |
            <div className="underline hover:cursor-pointer">Privacy Policy</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
