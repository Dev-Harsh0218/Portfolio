import React from "react";
import git_icon from "./imgs/git-icon.png";
import discord_icon from "./imgs/discord.png";
import gmail_icon from "./imgs/email.png";
import insta_icon from "./imgs/insta.png";
import phone_icon from "./imgs/phone.png";
const contact = () => {
  return (
    <>
      <div className="max-w-[1560px] mx-auto px-5 lg:mt-20 mt-6">
        <div className="w-full">
          {/* top */}
          <div className="">
            {/* header */}
            <div className="flex items-center justify-between">
              <div className="text-white lg:w-2/3 w-11/12 font-medium text-[32px] flex items-center gap-5">
                <div className="">
                  <span className="text-[#C778DD]">#</span>Contacts
                </div>
                <div className="line lg:w-1/3 w-full h-px bg-[#C778DD]"></div>
              </div>
            </div>
          </div>
          {/* bottom */}
          <div className="flex flex-wrap items-center justify-between gap-10 mt-4">
            {/* left */}
            <div className="lg:w-2/3 w-full">
              <p className="text-[#ABB2BF] lg:text-2xl">
                I'm open to possiblities & all opportunities. However, if you
                have other request or question, Don't hesitate to contact me!!!
              </p>
            </div>
            {/*right */}
            <div className="mx-auto">
              <div className="border border-[#ABB2BF] p-4">
                <h2 className="mb-4 text-white font-semibold">
                  Message me here
                </h2>
                {/* get in touch */}
                <div className="pr-5">
                  {/* links */}
                  <div className="flex gap-1 items-center">
                    <img src={git_icon} alt="" />
                    <span className="text-[#ABB2BF]">
                      <a
                        href="https://github.com/Dev-Harsh0218"
                        target="_blank"
                      >
                        Dev-Harsh0218
                      </a>
                    </span>
                  </div>
                  <div className="flex gap-1 items-center">
                    <img src={discord_icon} alt="" />
                    <span className="text-[#ABB2BF]">
                      <a
                        href="https://discord.com/users/758719036283944992"
                        target="_blank"
                      >
                        !dev_harsh0218
                      </a>
                    </span>
                  </div>
                  <div className="flex gap-1 items-center">
                    <img src={gmail_icon} alt="" />
                    <span className="text-[#ABB2BF]">
                      <a href="mailto:mailharsh0218@gmail.com">
                        mailharsh0218@gmail.com
                      </a>
                    </span>
                  </div>
                  <div className="flex gap-1 items-center">
                    <img src={insta_icon} alt="" />
                    <span className="text-[#ABB2BF]">
                      <a
                        href="https://www.instagram.com/_bhardwaj.harsh_/"
                        target="_blank"
                      >
                        _Bhardwaj.harsh_
                      </a>
                    </span>
                  </div>
                  <div className="flex gap-1 items-center">
                    <img src={phone_icon} alt="" />
                    <span className="text-[#ABB2BF]">+91 9315866109</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default contact;
