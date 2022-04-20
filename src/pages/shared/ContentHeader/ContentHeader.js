import React from "react";

const ContentHeader = ({ hText, dText }) => {
  return (
    <div className="pt-8 pb-6">
      <h2
        style={{ fontFamily: "roboto" }}
        className="text-center text-3xl font-bold capitalize"
      >
        {hText}
      </h2>
      <span className="block text-center text-gray-400 capitalize">
        {dText}
      </span>
    </div>
  );
};

export default ContentHeader;
