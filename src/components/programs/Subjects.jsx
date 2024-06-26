import React from "react";
import Subject from "./Subject";

const Subjects = () => {
  return (
    <div className=" bg-[url('./assets/g2.jpeg')] bg-cover bg-center">
      <div className="  py-32 lg:py-44 h-full w-full bg-white bg-opacity-90">
        <div className="w-11/12 lg:w-10/12 xl:w-9/12 mx-auto flex flex-col lg:flex-row justify-between">
          <div className="w-full h-full  lg:w-4/12">
            <div className="flex flex-col items-start lg:items-end mb-5 lg:mb-0">
              <span className="block h-1 w-36 bg-orange"></span>
              <div className="text-2xl xl:text-3xl text-blue font-semibold">
                Subjects Offered
              </div>
            </div>
          </div>
          <div className="w-full mb-5 lg:mb-0 lg:w-7/12 font-nunito flex flex-col gap-3 lg:gap-4">
            <div className="text-base lg:text-lg py-[2px] uppercase font-semibold">
              Our curriculum includes a wide range of subjects to cater to the
              diverse interests and talents of our students.
            </div>

            <div className="pl-5 flex flex-col gap-2">
              <Subject name={"English Language"} />
              <Subject name={"Mathematics"} />
              <Subject name={"Integrated Science"} />
              <Subject name={"Social Studies"} />
              <Subject name={"Ghanaian Language"} />
              <Subject name={"Information And Communication Technology"} />
              <Subject name={"Religious And Moral Education"} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subjects;
