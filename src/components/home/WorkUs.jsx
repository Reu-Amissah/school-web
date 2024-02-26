import React from "react";
import studs from "../../assets/bg4.jpg";
import studs1 from "../../assets/bg2.jpg";
import Listcheck from "./Listcheck";

const WorkUs = () => {
  return (
    <div className=" py-32 lg:py-44 bg-lightblue">
      <div className="w-11/12 lg:w-10/12 xl:w-9/12 mx-auto flex flex-col lg:flex-row justify-between items-center">
        <div className=" relative w-full lg:w-5/12">
          <img
            src={studs}
            alt="students mini"
            className="hidden lg:flex absolute top-[-40px] left-[-40px] rounded-md border-2 border-white w-[200px] lg:w-[300px] h-auto"
          />
          <img
            src={studs1}
            alt="students1"
            className="rounded-md h-[500px] w-full object-cover"
          />
        </div>
        <div className="w-full mt-5 lg:mt-0 lg:w-6/12 font-nunito flex flex-col gap-3 lg:gap-4">
          <div className="text-base lg:text-lg border-l-2 border-l-orange px-2 py-[2px]">
            CONTRIBUTE TO A UNIQUE LEARNING ENVIRONMENT
          </div>
          <div className="text-2xl xl:text-3xl text-blue font-semibold">
            Work with us to create a personalized and engaging experience for
            every student.
          </div>
          <div className="text-base lg:text-lg">
            Korem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            vulputate libero et velit interdum, ac aliquet odio mattis. Korem
            ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate
          </div>
          <div className="text-base lg:text-lg flex flex-col gap-2">
            <Listcheck description={"Proffesional Tutors"} />
            <Listcheck description={"Hands-On"} />
            <Listcheck description={"STEM focused"} />
            <Listcheck description={"Small Classes"} />
            <Listcheck description={"Montessori"} />
            <Listcheck description={"Diverse Teachers & Students"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkUs;
