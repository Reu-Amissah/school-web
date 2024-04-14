import React from "react";
import Navbar from "../components/navs/Navbar";
import Subjects from "../components/programs/Subjects";
import EnrollCTA from "../components/programs/EnrollCTA";
import Footer from "../components/navs/Footer";

const Contact = () => {
  return (
    <div className="overscroll-none">
      <div className=" w-screen font-nunito overscroll-none">
        <Navbar></Navbar>

        <div className="h-[40vh] lg:h-[60vh] w-full bg-[url('./assets/g4.jpeg')] bg-cover bg-center overscroll-none">
          <div className="h-full w-full bg-gray-900 bg-opacity-20 flex flex-col justify-end items-center pb-10 lg:pb-24 px-6 lg:px-28 xl:px-32 gap-5">
            <div className="text-white text-3xl lg:text-5xl text-center">
              PROGRAMS
            </div>
          </div>
        </div>

       
        <Footer></Footer>
      </div>
    </div>
  );
};

export default Contact;
