import React from "react";
import ProjectCard from "../project_card/projectCard";
import karmic_img from "./imgs/karmic_img2.png";
import unithink_img from "./imgs/unithink_img.png";
import portfolio_img from "./imgs/portfolio_img.png";
const projects = () => {
    // projects
    const project_list = [
        {
            img: karmic_img,
            langs: ["html", "css", "js", "expressjs", "ejs", "passport", "nodejs", "mongo"],
            title: "Karmic Kuisine",
            disc: "Amazon WebServices VPC",
            git: "https://github.com/Dev-Harsh0218/Karmic_Kuisine_food_ordering_website.git"
        },
        {
            img: unithink_img,
            langs: ["react", "tailwind css", "flowbite", "expressjs", "nodejs", "mongo"],
            title: "UniThink Corp",
            disc: "Vercel deployed",
            git: "https://github.com/Dev-Harsh0218/UniThink-Corp-frontend.git"
        },
        {
            img: portfolio_img,
            langs: ["react", "tailwind css", "flowbite", "expressjs", "nodejs", "mongo"],
            title: "portfolio website",
            disc: "Vercel Deployed",
            git: ""

        },
    ]

    return <>
        <div className="max-w-[1560px] mx-auto px-5 lg:mt-20 mt-5">
            {/* top heading */}
            <div className="flex items-center justify-between">
                <div className="text-white w-10/12 font-medium text-[32px] flex items-center gap-5">
                    <div className="">
                        <span className="text-[#C778DD]">#</span>projects
                    </div>
                    <div className="line w-full h-px bg-[#C778DD]"></div>
                </div>
                <div className="text-white lg:font-medium font-thin">
                    <span>View all ~~&gt;</span>
                </div>
            </div>
            {/* content */}
            <div className="flex flex-wrap justify-between gap-2 mt-12">
                {project_list.map(({ img, langs, title, disc, git }) => {
                    return <>
                        <ProjectCard
                            img={img}
                            langs={langs}
                            title={title}
                            disc={disc}
                            git={git} />
                    </>
                })}
            </div>
        </div>
    </>
}


export default projects;