import React from "react";
import hero_img from "./images/man.png";
import qoute_img from "./images/qoute.png";
function hero() {
    return <>
        <div className="px-5 max-w-[1560px] mx-auto flex items-center justify-between flex-wrap mt-5 sm:px-0">
            <div className="w-8/12 mx-auto lg:mt-0">
                <h1 className="font-semibold text-[32px] text-white mb-3">Harsh is a <span className="text-[#C778DD]">Full Stack Developer</span> and{" "}<span className="text-[#C778DD]">Backend Developer</span></h1>
                <p className="text-[#ABB2BF] my-7">He crafts responsive websites where creativity meets logic...</p>
                <button className="text-white font-medium py-2 px-4 border border-[#C778DD] duration-200 hover:bg-[#C778DD33]">Contact Me!</button>
            </div>
            <div className="mx-auto">
                <div className="">
                    <img className="" src={hero_img} alt="hero_section_image" />
                </div>
                <div className="border flex items-center gap-2 border-[#ABB2BF] mt-2 p-2 text-[#ABB2BF]">
                    <div className="w-4 h-4 bg-[#C778DD]"></div>
                    <div className=""><h6>Currently working on <span className="text-white">Portfolio</span></h6></div>
                </div>
            </div>
        </div>
        <div className=" max-w-4xl mx-auto">
            <div className=" mx-4 px-2 mt-10 lg:mt-24 py-2 border border-solid border-gray-400">
                <img className="mx-auto w-full" src={qoute_img} alt="" />
            </div>
        </div>
    </>
}

export default hero;