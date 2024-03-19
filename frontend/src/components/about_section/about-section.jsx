import React from "react";
import man from "./imgs/man.png";
const About_section = () => {
  return (
    <>
      <div className="max-w-[1560px] mx-auto px-5 lg:mt-20 my-5">
        {/* top heading */}
        <div className="flex items-center justify-between">
          <div className="text-white w-11/12 font-medium text-[32px] flex items-center gap-5">
            <div className="">
              <span className="text-[#C778DD]">#</span>AboutMe
            </div>
            <div className="line w-full h-px bg-[#C778DD]"></div>
          </div>
        </div>
        {/* bottom */}
        <div className="w-full lg:flex justify-between">
          {/*about text */}
          <div className="lg:w-1/2 w-full lg:mt-14 mt-4 mx-auto">
            <p className="text-[#ABB2BF] text-left">
              <span className="lg:text-[35px] text-[32px]">
                Hello, I'm Harsh Bhardwaj
              </span>
              <br />
              <br />
              I's m self taught fullStack developer based in Ghaziabad Uttar
              Pradesh,India. I can develop responsive website with full-fledged
              backends and convert them into modern user-friendly web
              experiences.
              <br />
              <br />
              Transformaing my creativity,knowledge and logic into websites has
              been my passion for over years. I have been helping various
              clients to establish their presence online. i always strive to
              learn about the newest technologies and frameworks.
            </p>
            {/* button */}
            <div className="mt-7 mx-auto">
              <a
                href="#"
                className="duration-150 hover:bg-[#C778DD33] border border-[#C778DD] px-4 py-2 text-white"
              >
                <button>Read more -{">"}</button>
              </a>
            </div>
          </div>
          {/* image */}
          <div className="mx-auto">
            <img src={man} className="mx-auto" alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default About_section;
