import React from "react";
import Navbar from "../components/navs/Navbar";
import "../index.css";
import WorkUs from "../components/home/WorkUs";
import Activites from "../components/home/Activites";
import Events from "../components/home/Events";
import Values from "../components/home/Values";
import Footer from "../components/navs/Footer";

const Landing = () => {
  return (
    <div className="overscroll-none">
      <div className=" w-screen font-nunito overscroll-none">
        <Navbar></Navbar>
        <div className="h-screen w-full bg-[url('./assets/home-bg.jpg')] bg-cover bg-center overscroll-none">
          <div className="h-full w-full bg-gray-900 bg-opacity-20 flex flex-col justify-end items-center pb-10 lg:pb-24 px-6 lg:px-28 xl:px-32 gap-5">
            <div className="text-white text-base lg:text-xl font-semibold">
              Welcome To WESTBURB UNIVERSITY
            </div>
            <div className="text-white text-3xl lg:text-5xl text-center font-extrabold">
              Horem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
              turpis molestie, dictum est a, mattis te
            </div>
            <div className="flex gap-4 lg:gap-6">
              <div className="border-2 border-transparent hover:cursor-pointer rounded-md hover:border-blue hover:bg-transparent hover:text-white hover:backdrop-blur-sm bg-orange text-white text-md lg:text-lg px-3 lg:px-5 py-1 lg:py-2 flex items-center">
                Donate
                <span class="material-symbols-outlined pl-2">
                  monetization_on
                </span>
              </div>
              <div className="border-2 border-transparent hover:cursor-pointer rounded-md hover:border-orange hover:bg-transparent hover:text-white hover:backdrop-blur-sm bg-blue text-white text-md lg:text-lg px-3 lg:px-5 py-1 lg:py-2 flex items-center">
                Enroll Now
                <span class="material-symbols-outlined pl-2">east</span>
              </div>
            </div>
          </div>
        </div>
        <WorkUs></WorkUs>
        <Activites></Activites>
        <Events></Events>
        <Values></Values>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default Landing;
