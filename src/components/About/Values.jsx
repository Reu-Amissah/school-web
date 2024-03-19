import React from "react";

const Values = ({ title, children }) => {
  return (
    <div className=" border border-lightgrey bg-white p-4 font-nunito ">
      <div className="text-xl font-semibold text-blue mb-3">{title}</div>
      <div className="text-base font-light">{children}</div>
    </div>
  );
};

export default Values;
