import React from "react";
import img_404 from "./imgs/404.jpg";
const error_page = () => {
  return (
    <>
      <div className="max-w-full mx-auto bg-black mt-5">
        <div className="w-5/12 mx-auto relative">
          <div className="absolute">
            <p>We will Be joining you soon</p>
          </div>
          <div className="">
            <img src={img_404} className="w-full blur-sm" alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default error_page;
