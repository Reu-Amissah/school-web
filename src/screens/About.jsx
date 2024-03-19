import React from "react";
import Navbar from "../components/navs/Navbar";
import studs1 from "../assets/bg1.jpg";

export const About = () => {
  return (
    <div className="overscroll-none">
      <div className=" w-screen font-nunito overscroll-none">
        <Navbar></Navbar>

        <div className="h-[40vh] lg:h-[60vh] w-full bg-[url('./assets/home-bg.jpg')] bg-cover bg-center overscroll-none">
          <div className="h-full w-full bg-gray-900 bg-opacity-20 flex flex-col justify-end items-center pb-10 lg:pb-24 px-6 lg:px-28 xl:px-32 gap-5">
            <div className="text-white text-3xl lg:text-5xl text-center">
              ABOUT
            </div>
          </div>
        </div>

        <div className=" py-32 lg:py-44 bg-white">
          <div className="w-11/12 lg:w-10/12 xl:w-9/12 mx-auto flex flex-col lg:flex-row justify-between items-center">
            <div className="w-full mb-5 lg:mb-0 lg:w-6/12 font-nunito flex flex-col gap-3 lg:gap-4">
              <div className="text-base lg:text-lg border-l-2 border-l-orange px-2 py-[2px]">
                WHO ARE WE
              </div>
              <div className="text-2xl xl:text-3xl text-blue font-semibold">
                Discovering Excellence, Embracing Diversity, and Empowering
                Growth: Unveiling the Heart of mYsCHooL
              </div>
              <div className="text-base lg:text-lg">
                At [School Name], we are more than just an educational
                institution; we are a vibrant and inclusive community dedicated
                to nurturing the minds, hearts, and spirits of our students.
                Rooted in a tradition of academic excellence and holistic
                development, we strive to provide a dynamic learning environment
                where every individual is valued, supported, and empowered to
                reach their fullest potential. <br /> <br />
                Our commitment to excellence is evident in our rigorous academic
                curriculum, which is designed to challenge and inspire students
                to think critically, communicate effectively, and embrace
                lifelong learning. Beyond academics, we recognize the importance
                of fostering personal growth and character development. Through
                a wide array of extracurricular activities, leadership
                opportunities, and community service initiatives, we encourage
                students to explore their passions, develop leadership skills,
                and become compassionate, responsible citizens of the world.
              </div>
            </div>
            <div className="w-full lg:w-5/12">
              <img
                src={studs1}
                alt="students1"
                className="rounded-md h-[500px] w-full object-cover"
              />
            </div>
          </div>
        </div>

        <div className=" py-32 lg:py-44 bg-lightgrey1">
          <div className="w-11/12 lg:w-10/12 xl:w-9/12 mx-auto flex flex-col justify-between items-center font-nunito">
            <div className="text-base lg:text-lg border-l-2 border-l-orange px-2 py-[2px]">
              OUR VALUES
            </div>
            <div className="text-2xl xl:text-3xl text-blue font-semibold">
              Discovering Excellence, Embracing Diversity, and Empowering
              Growth: Excellence, Respect, Collaboration
            </div>
            <div className="text-base lg:text-lg">
              At [School Name], we are more than just an educational
              institution; we are a vibrant and inclusive community dedicated to
              nurturing the minds, hearts, and spirits of our students. Rooted
              in a tradition of academic excellence and holistic development, we
              strive to provide a dynamic learning environment where every
              individual is valued, supported, and empowered to reach their
              fullest potential. <br /> <br />
              Our commitment to excellence is evident in our rigorous academic
              curriculum, which is designed to challenge and inspire students to
              think critically, communicate effectively, and embrace lifelong
              learning. Beyond academics, we recognize the importance of
              fostering personal growth and character development. Through a
              wide array of extracurricular activities, leadership
              opportunities, and community service initiatives, we encourage
              students to explore their passions, develop leadership skills, and
              become compassionate, responsible citizens of the world.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
