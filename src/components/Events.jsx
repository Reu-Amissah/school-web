import React from "react";
import Evcomp from "./Evcomp";

const Events = () => {
  return (
    <div className=" py-44 bg-[url('./assets/stacked-steps.svg')] bg-cover bg-center">
      <div className="w-9/12 mx-auto ">
        <div className="flex justify-between items-center mb-5">
          <div className="text-blue text-[28px]">UPCOMING EVENTS</div>
          <div className="text-blue px-[20px] py-[15px] border-2 border-blue">
            VIEW ALL EVENTS
          </div>
        </div>
        <div className=" flex gap-6">
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
