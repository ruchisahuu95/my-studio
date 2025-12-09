"use client";

import React, { useEffect, useState } from "react";
import { useInView } from "../hooks/useInView";

interface Project {
    title: string;
    image: string;
    link: string;
}

const projects: Project[] = [
    { title: "Aurabliss", image: "/assets/img1.jpg", link: "https://www.behance.net/gallery/206112431/Aurabliss" },
    { title: "FlickBite UX Case Study", image: "/assets/img2.jpg", link: "https://www.behance.net/gallery/205180435/FlickBite-App-UX-Case-Study" },
];

export default function RecentProjectsSection() {
    const { ref, isInView } = useInView<HTMLDivElement>();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true); // mark client mount
    }, []);

    return (
        <section ref={ref} className="px-4 md:px-10 lg:px-20 mt-[150px]">
            {/* Heading + Link */}
            <div className="flex justify-between items-center mb-8">
                <p className="font-medium text-white text-[20px] md:text-[24px]">[ recent projects ]</p>
                <a
                    href="/works"
                    className="font-medium relative overflow-hidden text-white
            before:content-[''] before:absolute before:bottom-0 before:right-0
            before:w-0 before:h-[1.5px] before:bg-white before:transition-all before:duration-300
            hover:before:left-0 hover:before:w-full"
                >
                    see all works
                </a>
            </div>

            {/* Project grid */}
            <div className="flex flex-col md:flex-row md:flex-wrap gap-6">
                {projects.map((project, idx) => (
                    <div
                        key={idx}
                        className={`relative w-full md:w-[48%] h-[350px] overflow-hidden group rounded-md shadow-lg
              transition-all duration-700 ease-out
              ${mounted && isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
                    >
                        {/* View Work button overlay */}
                        <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                 w-36 h-11 bg-[#3545D6] text-white font-medium flex items-center justify-center
                 gap-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20"
                        >
                            view work
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                width="20"
                                height="20"
                                fill="currentColor"
                                className="rotate-[-45deg]"
                            >
                                <path d="M18,12h0a2,2,0,0,0-.59-1.4l-4.29-4.3a1,1,0,0,0-1.41,0,1,1,0,0,0,0,1.42L15,11H5a1,1,0,0,0,0,2H15l-3.29,3.29a1,1,0,0,0,1.41,1.42l4.29-4.3A2,2,0,0,0,18,12Z"></path>
                            </svg>
                        </a>

                        {/* Project Image */}
                        <img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                    </div>
                ))}
            </div>
        </section>
    );
}
