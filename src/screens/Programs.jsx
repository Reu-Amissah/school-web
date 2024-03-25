import React from "react";
import Navbar from "../components/navs/Navbar";
import Subjects from "../components/programs/Subjects";
import EnrollCTA from "../components/programs/EnrollCTA";
import Footer from "../components/navs/Footer";

const Programs = () => {
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

        <div className=" pb-32 pt-20 lg:pb-20 lg:pt-24 bg-white font-nunito">
          <div className="w-11/12 lg:w-10/12 xl:w-9/12 mx-auto ">
            <div className="flex flex-col items-center gap-1">
              <div className="text-base lg:text-lg border-l-2 border-l-orange px-2 py-[2px]">
                OUR VALUES
              </div>
              <div className="text-2xl xl:text-3xl text-blue font-semibold text-center">
                Our Core Values: Excellence, Respect, Collaboration
              </div>
            </div>

            <div className=" text-center mt-5">
              At [Your School Name], we follow the Ghanaian education system,
              which emphasizes a well-rounded education that prepares students
              for academic success and personal development. Our curriculum is
              designed to meet national standards while fostering critical
              thinking, creativity, and problem-solving skills.
            </div>
          </div>
        </div>

        <Subjects></Subjects>
        <EnrollCTA></EnrollCTA>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default Programs;
