import React from "react";

const Listcheck = ({ description }) => {
  return (
    <div className="flex items-center gap-2">
      <span className="material-symbols-outlined text-green text-xl lg:text-2xl bg-lightgreen rounded-md">
        done
      </span>
      {description}
    </div>
  );
};

export default Listcheck;
