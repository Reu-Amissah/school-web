import React from "react";

const Evcomp = ({ date, title, time }) => {
  return (
    <div className="bg-white px-5 py-8 w-1/3 flex flex-col gap-6">
      <div className="flex items-center gap-2 text-orange">
        <span className="material-symbols-outlined">calendar_month</span>
        EVENT • {date}
      </div>
      <div className="text-[24px] text-blue">{title}</div>
      <div className="flex items-center mt-7 gap-2">
        <span className="material-symbols-outlined">schedule</span>
        {time}
      </div>
    </div>
  );
};

export default Evcomp;
