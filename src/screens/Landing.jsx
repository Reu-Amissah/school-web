import React from "react";
import Navbar from "../components/Navbar";
import "../index.css";
import WorkUs from "../components/WorkUs";
import Activites from "../components/Activites";
import Events from "../components/Events";
import Values from "../components/Values";
import Footer from "../components/Footer";

const Landing = () => {
  return (
    <div className="overscroll-none">
      <div className=" w-screen font-nunito overscroll-none">
        <Navbar></Navbar>
        <div className="h-screen w-full bg-[url('./assets/studs1.jpg')] bg-cover bg-center overscroll-none">
          <div className="h-full w-full bg-gray-900 bg-opacity-20 flex flex-col justify-end items-center pb-24 px-32 gap-5">
            <div className="text-white text-[20px]">
              Welcome To WESTBURB UNIVERSITY
            </div>
            <div className="text-white text-[48px] text-center">
              Horem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
              turpis molestie, dictum est a, mattis te
            </div>
            <div className="flex gap-[25px]">
              <div className="border-2 border-transparent hover:border-blue hover:bg-transparent hover:text-white hover:backdrop-blur-sm bg-orange text-white text-[18px] px-5 py-2 flex items-center">
                Donate
                <span class="material-symbols-outlined">monetization_on</span>
              </div>
              <div className="border-2 border-transparent hover:border-orange hover:bg-transparent hover:text-white hover:backdrop-blur-sm bg-blue text-white text-[18px] px-5 py-2 flex items-center">
                Enroll Now
                <span class="material-symbols-outlined">east</span>
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
