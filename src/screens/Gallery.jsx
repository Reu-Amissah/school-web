import React, { useState } from "react";
import Navbar from "../components/navs/Navbar";
import Footer from "../components/navs/Footer";

const Gallery = () => {
    const selectedImage = "";
    const [isModal, setIsModal] = useState(true);


  return (
    <div className="overscroll-none">
      <div className=" w-screen font-nunito overscroll-none">
        <Navbar></Navbar>
        <div className="h-[40vh] lg:h-[60vh] w-full bg-[url('./assets/g4.jpeg')] bg-cover bg-center overscroll-none">
          <div className="h-full w-full bg-gray-900 bg-opacity-20 flex flex-col justify-end items-center pb-10 lg:pb-24 px-6 lg:px-28 xl:px-32 gap-5">
            <div className="text-white text-3xl lg:text-5xl text-center font-extrabold">
              Programs
            </div>
          </div>
        </div>

        <div className={`${isModal? '': 'hidden'} fixed h-screen overflow-hidden max-w-screen top-0 left-0 z-30 bg-black bg-opacity-55`}>
          <div className="h-20 w-20 bg-white">
            <div>

            </div>
            <span className="material-symbols-outlined absolute z-40 top-3 right-32 font-bold text-3xl text-white shadow-sm shadow-slate-700 p-3 bg-black hover:cursor-pointer hover:bg-white hover:text-black">close</span>
            <img src={selectedImage} alt="" />
          </div>
        </div>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default Gallery;
