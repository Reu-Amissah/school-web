import React from "react";
import Evcomp from "./Evcomp";

const Events = () => {
  return (
    <div className=" py-32 lg:py-44 bg-[url('./assets/stacked-steps.svg')] bg-cover bg-center">
      <div className="w-11/12 lg:w-10/12 xl:w-9/12 mx-auto ">
        <div className="flex justify-between items-center mb-5">
          <div className="text-blue text-xl lg:text-3xl">UPCOMING EVENTS</div>
          <div className="text-blue text-base  lg:text-xl px-4 py-3 lg:px-5 lg:py-4 border-2 border-blue">
            VIEW ALL EVENTS
          </div>
        </div>
        <div className=" flex flex-col lg:flex-row gap-4 lg:gap-2">
          <Evcomp
            title={"Valentine's Day - Time With Somebody"}
            date={"February 14, 2024"}
            time={"12:00PM - 4:00PM"}
          ></Evcomp>
          <Evcomp
            title={"Valentine's Day - Time With Somebody"}
            date={"February 14, 2024"}
            time={"12:00PM - 4:00PM"}
          ></Evcomp>
          <Evcomp
            title={"Valentine's Day - Time With Somebody"}
            date={"February 14, 2024"}
            time={"12:00PM - 4:00PM"}
          ></Evcomp>
        </div>
      </div>
    </div>
  );
};

export default Events;
