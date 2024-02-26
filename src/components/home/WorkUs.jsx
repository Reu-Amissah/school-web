import React from "react";
import studs from "../../assets/studs1.jpg";
import studs1 from "../../assets/studs2.jpg";
import Listcheck from "./Listcheck";

const WorkUs = () => {
  return (
    <div className=" py-44 bg-lightblue">
      <div className="w-9/12 mx-auto flex justify-between items-center">
        <div className=" relative w-5/12">
          <img
            src={studs}
            alt="students mini"
            width={300}
            height={300}
            className="absolute top-[-40px] left-[-40px] rounded-md border-2 border-white"
          />
          <img src={studs1} alt="students1" className="rounded-md" />
        </div>
        <div className="w-6/12 font-nunito flex flex-col gap-4">
          <div className="text-[18px] border-l-2 border-l-orange px-2 py-[2px]">
            WHY WORK WITH US
          </div>
          <div className="text-[32px] text-blue font-semibold">
            Corem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            vulputate libero et velit interdum
          </div>
          <div className="text-[18px]">
            Korem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            vulputate libero et velit interdum, ac aliquet odio mattis. Korem
            ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate
          </div>
          <div className="text-[18px] flex flex-col gap-2">
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
