import React from "react";
import shapes from "./imgs/shapes.png"

const Skills = () => {

    const skills = [
        { title: "Front-End", languages: ["React", "HTML5", "CSS3", "JavaScript", "BootStrap", "tailwind CSS"] },
        { title: "Back-End", languages: ["nodejs", "expressjs", "PHP"] },
        { title: "Databases", languages: ["MySQL", "MONGO DB"] },
        { title: "Languages", languages: ["Java", "C", "javaScript", "Bash", "python"] },
        { title: "Tools", languages: ["Git", "GitHub", "Linux", "Ngnix", "VS code", "Ubuntu"] },
    ]

    return (
        <>
            <div className="max-w-[1560px] mx-auto px-5 lg:mt-20 mt-5">
                {/* top */}
                <div className="flex items-center justify-between">
                    <div className="text-white w-10/12 font-medium text-[32px] flex items-center gap-5">
                        <div className="">
                            <span className="text-[#C778DD]">#</span>projects
                        </div>
                        <div className="line w-full h-px bg-[#C778DD]"></div>
                    </div>
                    <div className="text-white lg:font-medium font-light">
                        <span>View all ~~&gt;</span>
                    </div>
                </div>
                {/* bottom */}
                <div className="flex flex-wrap items-center justify-between text-white">
                    {/* left */}
                    <div className="">
                        <img src={shapes} alt="" />
                    </div>
                    {/* right & mapping */}
                    <div className="flex justify-end flex-wrap w-1/2 gap-4">
                        {skills.map(({ title, languages }) => {
                            return <>
                                <div className="w-[30%] border border-[#ABB2BF]">
                                    <div className="p-2">
                                        <div className="font-semibold"><h2>{title}</h2></div>
                                    </div>
                                    <div className="flex gap-2 flex-wrap p-2 border border-[#ABB2BF] text-[#ABB2BF]">
                                        {languages.map(e => {
                                            return <span>{e}</span>
                                        })}
                                    </div>
                                </div>
                            </>
                        })}

                    </div>
                </div>
            </div>
        </>
    );
};

export default Skills;
