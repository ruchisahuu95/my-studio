"use client";

import React from "react";
import { useInView } from "../hooks/useInView";

export default function FounderSection() {
    const { ref, isInView } = useInView<HTMLDivElement>();

    return (
        <section
            ref={ref}
            className="w-full bg-[#1E1E2F] py-32 flex justify-center items-center relative overflow-hidden founder-section"
        >
            {/* Wrapper for image + content */}
            <div className="max-w-6xl w-full flex flex-col md:flex-row items-center md:items-start px-6 md:px-0 gap-12">
                {/* Founder Image */}
                <img
                    src="/assets/founder.jpg"
                    alt="Founder"
                    className={`w-full md:w-[400px] lg:w-[500px] h-auto object-cover rounded-xl shadow-2xl
            transition-all duration-700 ease-out
            ${isInView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-20"}`}
                />

                {/* Content */}
                <div
                    className={`flex flex-col text-center md:text-left transition-all duration-700 ease-out
            ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
                >
                    <p className="text-[#A0A0B0] font-medium tracking-wide">[ about founder ]</p>
                    <h2 className="text-white font-bold text-4xl md:text-6xl pt-6 leading-tight">
                        Devesh Agrawal
                    </h2>
                    <p className="text-[#CCCCCC] text-base md:text-lg leading-relaxed max-w-lg pt-6">
                        Passionate about building interactive web experiences, I blend creativity and
                        technology to create engaging digital solutions. From personal projects to
                        professional endeavors, my focus is on delivering quality and innovative results
                        that make an impact.
                    </p>
                </div>
            </div>
        </section>
    );
}
