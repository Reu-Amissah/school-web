import React from "react";

const Subject = ({ name }) => {
  return (
    <div className="flex gap-2 items-center">
      <span className="material-symbols-outlined text-sm text-orange">check_box_outline_blank</span>
      <div className=" font-nunito font-light text-lg">{name}</div>
    </div>
  );
};

export default Subject;
