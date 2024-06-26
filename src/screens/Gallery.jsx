import React, { useState } from "react";
import Navbar from "../components/navs/Navbar";
import Footer from "../components/navs/Footer";
import image1 from "../assets/g17.jpeg";
import image2 from "../assets/g1.jpeg";
import image3 from "../assets/g2.jpeg";
import image4 from "../assets/g3.jpeg";
import image5 from "../assets/g4.jpeg";
import image6 from "../assets/g5.jpeg";
import image7 from "../assets/g6.jpeg";
import image8 from "../assets/g17.jpeg";
import image9 from "../assets/g17.jpeg";
import image10 from "../assets/g17.jpeg";
import image11 from "../assets/g17.jpeg";
import image12 from "../assets/g17.jpeg";
import image13 from "../assets/g17.jpeg";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(0);
  const [isModal, setIsModal] = useState(false);
  const [index, setIndex] = useState("");

  function closeModal() {
    setIsModal(false);
    setSelectedImage("");
  }

  function fullImage(i) {
    setIsModal(true);
    setIndex(i);
    setSelectedImage(images[i].path);
  }

  //   function leftimage() {
  //     setIndex(--index);
  //     setSelectedImage(images[index].path);
  //   }
  //   function rightimage() {
  //     setIndex(++index);
  //   }
  const images = [
    {
      path: image1,
      alt: "image",
    },
    {
      path: image2,
      alt: "image",
    },
    {
      path: image3,
      alt: "image",
    },
    {
      path: image4,
      alt: "image",
    },
    {
      path: image5,
      alt: "image",
    },
    {
      path: image5,
      alt: "image",
    },
  ];
  return (
    <div className="overscroll-none">
      <div className=" w-screen font-nunito overscroll-none">
        <Navbar></Navbar>
        {/* <div className="h-[40vh] lg:h-[60vh] w-full bg-[url('./assets/g4.jpeg')] bg-cover bg-center overscroll-none">
          <div className="h-full w-full bg-gray-900 bg-opacity-20 flex flex-col justify-end items-center pb-10 lg:pb-24 px-6 lg:px-28 xl:px-32 gap-5">
            <div className="text-white text-3xl lg:text-5xl text-center font-extrabold">
              Gallery
            </div>
          </div>
        </div> */}

        <div className=" py-32 lg:py-44 bg-lightgrey1">
          <div className="w-11/12 lg:w-10/12 xl:w-9/12 mx-auto flex flex-col items-center font-nunito">
            <div className="text-base lg:text-lg border-l-2 border-l-orange px-2 py-[2px] mb-3">
              OUR HISTORY AND EVENTS
            </div>
            <div className="text-2xl xl:text-3xl text-blue font-semibold mb-5">
              Get to share our memories, history and more!
            </div>
            <div className="w-[100%] text-base lg:text-lg grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              {images.map((image, index) => (
                <img
                  key={index}
                  onClick={() => fullImage(index)}
                  className="w-[100%] h-[200px] cursor-pointer object-cover"
                  src={image.path}
                  alt={image.alt}
                />
              ))}
            </div>
          </div>
        </div>

        <div
          className={`${
            isModal ? "" : "hidden"
          } fixed h-screen overflow-hidden w-screen top-0 left-0 z-30 bg-black bg-opacity-55 backdrop-blur-sm`}
        >
          <div className="w-full h-full ">
            <span
              onClick={closeModal}
              className="material-symbols-outlined absolute z-40 top-3 right-8 font-bold text-3xl text-white shadow-sm shadow-slate-700 p-3 bg-black hover:cursor-pointer hover:bg-white hover:text-black"
            >
              close
            </span>
            <div className="w-11/12 lg:w-10/12 xl:w-9/12 mx-auto mt-20 flex items-center relative">
              <span
                // onClick={leftimage}
                className="material-symbols-outlined cursor-pointer text-white bg-black px-2 py-1 text-center text-3xl lg:text-lg rounded-md hover:bg-opacity-70 absolute -left-16"
              >
                arrow_back_ios_new
              </span>
              <img
                src={selectedImage}
                alt=""
                className="h-[70vh] w-[100%] object-cover"
              />
              <span
                // onClick={rightimage}
                className="material-symbols-outlined cursor-pointer text-white bg-black px-2 py-1 text-center text-3xl lg:text-lg rounded-md hover:bg-opacity-70 absolute -right-16"
              >
                arrow_forward_ios
              </span>
            </div>
          </div>
        </div>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default Gallery;
