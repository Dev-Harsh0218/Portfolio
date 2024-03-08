import React from "react";

const projectCard = ({ img, langs, title, disc, git }) => {
    return <>
        <div className="mx-auto w-[90%]md:w-[48%] lg:w-[30%] border p-0 bg-[#ABB2BF]">
            {/* img div */}
            <div className="">
                <img className="w-full" src={img} alt="" />
            </div>
            {/* skills */}
            <div className="flex gap-2 flex-wrap p-2 border-y border-[#ABB2BF]">
                {langs.map(e => {
                    return <span className="text-[#ABB2BF]">{e}</span>
                })}
            </div>
            {/* disc */}
            <div className="p-4">
                <h2 className="text-[#FFFFFF] text-2xl pb-4 font-medium ">{title}</h2>
                <p className="py-4 text-[#ABB2BF]">{disc}</p>
                {/* btns */}
                <div className="flex gap-2">
                    <button className="py-2 px-4 text-white border border-[#C778DD] hover:bg-[#C778DD33] duration-150">Live {"<"}~{">"}</button>
                    <button className="py-2 px-4 text-white border border-[#C778DD] hover:bg-[#C778DD33] duration-150">
                        <a href={git} target="_blank">GITHUB {"<"}~{">"}</a>
                    </button>
                </div>
            </div>
        </div>

    </>
}

export default projectCard;