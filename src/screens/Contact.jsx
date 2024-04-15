import React from "react";
import Navbar from "../components/navs/Navbar";
import Footer from "../components/navs/Footer";

const Contact = () => {
  return (
    <div className="overscroll-none">
      <div className=" w-screen font-nunito overscroll-none">
        <Navbar></Navbar>

        <div className="h-[40vh] lg:h-[60vh] w-full bg-[url('./assets/g7.jpeg')] bg-cover bg-center overscroll-none">
          <div className="h-full w-full bg-gray-900 bg-opacity-20 flex flex-col justify-end items-center pb-10 lg:pb-24 px-6 lg:px-28 xl:px-32 gap-5">
            <div className="text-white text-3xl lg:text-5xl text-center font-extrabold">
              Contact Us
            </div>
          </div>
        </div>

        <div className=" pb-32 pt-14 lg:pb-20 lg:pt-24 bg-white font-nunito">
          <div className="w-11/12 lg:w-10/12 xl:w-9/12 mx-auto flex flex-col-reverse md:flex-row justify-between items-start">
            <div className="flex flex-col md:w-1/2 w-full">
              <div className="text-2xl font-bold text-blue pb-4">
                Make enquiries here
              </div>
              <div className="text-lg font-semibold pb-1">Full Name:</div>
              <input
                type="text"
                placeholder="John Doe"
                className="border border-gray-500 p-2 rounded-md mb-2"
              />
              <div className="text-lg font-semibold pb-1">Message Subject:</div>
              <input
                type="text"
                placeholder="Example: School Fees Enquiry"
                className="border border-gray-500 p-2 rounded-md mb-2"
              />

              <div className="text-lg font-semibold pb-1">Message:</div>
              <textarea
                name=""
                id=""
                rows="5"
                className="border border-gray-500 p-2 rounded-md mb-4"
              ></textarea>
              <div className="text-xl bg-orange font-bold rounded-md text-white flex items-center justify-center gap-1 p-4 hover:bg-opacity-80">
                Submit <span className="material-symbols-outlined">send</span>
              </div>
            </div>
            <div className="flex flex-col w-full md:w-[40%] pb-5 md:pb-0">
              <div className="text-2xl font-bold text-blue pb-4">
                Contact Details
              </div>
              <div className="mb-3 font-semibold">
                Here are other ways to reach us below. Feel free to call,
                message or visit our premises anytime to make all sorts of
                enquiries
              </div>
              <div className="text-lg font-semibold text-blue">Address</div>
              <div className="text-md text-gray-500 font-semibold">
                3419, Accra - Ghana 329
              </div>
              <div className="text-md text-gray-500 font-semibold">
                labone, Osu - Accra, Ghana
              </div>
              <div className="text-md text-gray-500 font-semibold mb-2">
                GD-035-7377
              </div>

              <div className="text-lg font-semibold text-blue">
                Contact/Telephone
              </div>
              <div className="text-md text-gray-500 font-semibold">
                +233 551 419 419
              </div>
              <div className="text-md text-gray-500 font-semibold">
                +233 552 394 429
              </div>
            </div>
          </div>
        </div>

        <Footer></Footer>
      </div>
    </div>
  );
};

export default Contact;
