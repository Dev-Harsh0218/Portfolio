import React, { useState } from 'react';
import logo from './images/logo_harsh_Bhardwaj.png';
import closebtn from './images/close.png';
const Navbar = () => {
  const [toggle, setToggle] = useState(false)
  return (
    <div className="bg-[#282C33]">
      <div className="max-w-[1560px] mx-auto flex items-center justify-between">
        <div className="left flex items-center font-bold text-white text-base">
          <div className="img max-w-24 max-h-24">
            <img src={logo} alt="" className="object-contain w-full h-full" />
          </div>
        </div>
        <div className="right flex items-center">
          <div className={`menu duration-300 flex-col justify-center md:flex-row flex fixed w-full ${!toggle ? `right-[-100%] top-0 bottom-0` : `right-0 top-0 bottom-0`} bg-[#282C33] md:static`}>
            <a href="/"><li className="text-[#ABB2BF] text-[32px] my-4 md:my-auto md:text-base list-none mx-4"><span className="text-[#C778DD] font-medium">#</span>home</li></a>
            <a href="/"><li className="text-[#ABB2BF] text-[32px] my-4 md:my-auto md:text-base list-none mx-4"><span className="text-[#C778DD] font-medium">#</span>work</li></a>
            <a href="/about"><li className="text-[#ABB2BF] text-[32px] my-4 md:my-auto md:text-base list-none mx-4"><span className="text-[#C778DD] font-medium">#</span>about-me</li></a>
            <a href="/"><li className="text-[#ABB2BF] text-[32px] my-4 md:my-auto md:text-base list-none mx-4"><span className="text-[#C778DD] font-medium">#</span>Contacts</li></a>
            <div onClick={() => setToggle(false)} className="close absolute block md:hidden right-3 top-3">
              <img src={closebtn} alt="" />
            </div>
          </div>
          {/* close&open btn*/}
          <div onClick={() => setToggle(true)} className="pr-4">
            <div className="open block md:hidden w-8">
              <div className="w-full h-[2px] my-2 rounded-r-3xl bg-[#ABB2BF]"></div>
              <div className="w-full h-[2px] my-2 rounded-r-3xl bg-[#ABB2BF]"></div>
              <div className="w-full h-[2px] my-2 rounded-r-3xl bg-[#ABB2BF]"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar;