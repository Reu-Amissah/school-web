import React from "react";

const Activites = () => {
  return (
    <div className=" py-28 bg-[url('./assets/sports.jpg')] bg-cover bg-center h-[80vh]">
      <div className="w-11/12 lg:w-10/12 xl:w-9/12 h-full mx-auto flex justify-end items-end">
        <div className="bg-white backdrop-blur-md bg-opacity-20 py-[30px] px-[20px] w-full lg:w-8/12 xl:w-7/12">
          <div className="flex flex-col gap-1">
            <div className="text-base lg:text-lg text-white border-l-2 border-l-orange px-2 py-[2px]">
              ACTIVITIES AND EVENTS
            </div>
            <div className="">
              Rorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              vulputate libero et velit interdum, ac aliquet odio mattis.
            </div>
          </div>

          <div className="flex justify-between items-center pt-7">
            <div className="text-base lg:text-lg underline text-blue ">
              Learn more
            </div>
            <div className="flex items-center gap-4">
              <span className="material-symbols-outlined text-white bg-orange px-2 py-1 text-center text-base lg:text-lg rounded-md hover:bg-opacity-70">
                arrow_back_ios_new
              </span>
              <span className="material-symbols-outlined text-white bg-orange px-2 py-1 text-center text-base lg:text-lg rounded-md hover:bg-opacity-70">
                arrow_forward_ios
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Activites;
