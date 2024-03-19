import React from "react";
import logo from "./imgs/logo_harsh_Bhardwaj.png";
import git from "./imgs/git-icon.png";
import insta from "./imgs/insta.png";
import discord from "./imgs/discord.png";
const footer = () => {
  return (
    <>
      <div className="w-full h-px bg-[#ABB2BF] mt-20 mb-2"></div>
      {/* footer */}
      <div className="max-w-[1560px] mx-auto">
        {/* top */}
        <div className="flex items-center justify-between flex-wrap w-full mx-auto">
          {/* left */}
          <div className="">
            <div className="flex items-center gap-5 flex-wrap mb-4">
              {/* logo */}
              <div className="flex gap-2 items-center text-2xl text-white font-bold">
                <img src={logo} className="w-16" alt="" />
                <span className="">Harsh Bhardwaj</span>
              </div>
              {/* email */}
              <span className="text-[#ABB2BF] mx-auto">
                mailharsh0218@gmail.com
              </span>
            </div>
            {/* disc */}
            {/* <div className="text-[#ABB2BF]">
              <p className="w-8/12 lg:text-left text-center">
                Full stack Developer and back-end Developer based in Ghaziabad
                UP
              </p>
            </div> */}
          </div>
          {/* right */}
          <div className="lg:mx-0 mx-auto my-5 flex flex-col items-center">
            {/* media */}
            <div className="flex items-center gap-2">
              <a href="https://github.com/Dev-Harsh0218">
                <img src={git} alt="" />
              </a>
              <a href="https://www.instagram.com/_bhardwaj.harsh_/">
                <img src={insta} alt="" />
              </a>
              <a href="https://discord.com/users/758719036283944992">
                <img src={discord} alt="" />
              </a>
            </div>
          </div>
        </div>
        {/* bottom */}
        <div className="text-center text-[#ABB2BF] my-2">
          <p>&copy; Copyright 2024. Made by Harsh Bhardwaj</p>
        </div>
      </div>
    </>
  );
};

export default footer;
