import React from "react";

const EnrollCTA = () => {
  return (
    <div className="  py-32 lg:py-44 h-full w-full bg-lightgrey1 bg-opacity-75 border-b border-b-lightgrey">
      <div className="w-11/12 lg:w-10/12 xl:w-9/12 mx-auto flex flex-col lg:flex-row justify-between">
        <div className="w-full h-full  lg:w-4/12">
          <div className="flex flex-col items-end mb-5 lg:mb-0">
            <div className="text-2xl xl:text-3xl font-normal text-right">
              KEEP YOUR WARDS IN <br />
              SAFE CARE
            </div>
            <span className="block h-0.5 w-36 bg-black mt-1"></span>
          </div>
        </div>
        <div className="w-full mb-5 lg:mb-0 lg:w-7/12 font-nunito flex flex-col gap-3 lg:gap-7">
          <div className="text-base lg:text-lg py-[2px] font-light">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            vulputate libero et velit interdum, ac aliquet odio mattis. Class
            aptent taciti sociosqu ad litora torquent per conubia nostra, per
            inceptos himenaeos.
          </div>
        
        <div className="text-lg px-4 py-2 rounded-sm bg-white border border-black w-fit">
            ENROLL NOW
        </div>
          <div className="pl-5 flex flex-col gap-2"></div>
        </div>
      </div>
    </div>
  );
};

export default EnrollCTA;
