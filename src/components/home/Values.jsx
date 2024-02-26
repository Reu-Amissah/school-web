import React from "react";
import excell from "../../assets/excellence.jpg";
import resp from "../../assets/respect.jpg";
import coll from "../../assets/collaboration.jpg";

const Values = () => {
  return (
    <div className=" py-44 bg-white font-nunito">
      <div className="w-9/12 mx-auto ">
        <div className="flex flex-col items-center gap-1">
          <div className="text-[18px] border-l-2 border-l-orange px-2 py-[2px]">
            OUR VALUES
          </div>
          <div className="text-[32px] text-blue font-semibold">
            Our Core Values: Excellence, Respect, Collaboration
          </div>
        </div>
        <div className="flex justify-between items-end my-7 gap-10">
          <div className="flex flex-col justify-center gap-4 border border-lightgrey p-3 hover:border-orange w-1/3">
            <img
              src={excell}
              alt="excellence"
              className="w-2/3 h-[30vh] mx-auto bg-cover"
            />
            <div className=" text-[18px] text-blue text-center">EXCELLENCE</div>
            <div className="text-center">
              Our commitment to excellence permeates every aspect of our school
              community. We provide a challenging academic curriculum that
              empowers students to reach their full potential. With a focus on
              continuous improvement and a growth mindset, we encourage students
              to set high standards for themselves and strive for excellence in
              academics, sports, arts, and community service.
            </div>
          </div>

          <div className="flex flex-col justify-center gap-4 border border-lightgrey p-3 hover:border-orange w-1/3">
            <img
              src={resp}
              alt="respect"
              className="w-2/3 h-[30vh] mx-auto bg-cover"
            />
            <div className=" text-[18px] text-blue text-center">RESPECT</div>
            <div className="text-center">
              Our commitment to excellence permeates every aspect of our school
              community. We provide a challenging academic curriculum that
              empowers students to reach their full potential. With a focus on
              continuous improvement and a growth mindset, we encourage students
              to set high standards for themselves and strive for excellence in
              academics, sports, arts, and community service.
            </div>
          </div>

          <div className="flex flex-col justify-center gap-4 border border-lightgrey p-3 hover:border-orange w-1/3">
            <img
              src={coll}
              alt="collaboration"
              className="w-2/3 h-[30vh] mx-auto bg-cover"
            />
            <div className=" text-[18px] text-blue text-center">
              COLLABORATION
            </div>
            <div className="text-center">
              Our commitment to excellence permeates every aspect of our school
              community. We provide a challenging academic curriculum that
              empowers students to reach their full potential. With a focus on
              continuous improvement and a growth mindset, we encourage students
              to set high standards for themselves and strive for excellence in
              academics, sports, arts, and community service.
            </div>
          </div>
        </div>
        <div className="text-[18px] border-2 border-blue px-5 py-3 hover:border-transparent hover:bg-blue hover:text-white flex items-center w-fit">
          LEARN MORE<span class="material-symbols-outlined">east</span>
        </div>
      </div>
    </div>
  );
};

export default Values;
