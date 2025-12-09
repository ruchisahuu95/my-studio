"use client";

import React from "react";

export default function FooterSection() {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <footer className="w-full mt-[100px] mb-10 flex flex-col footer-section">
            {/* Stay Connected */}
            <div className="flex flex-col md:flex-row py-12 border-b border-[#D9D9D9] w-full footer-item px-6 md:px-20">
                {/* Left: Contact Info */}
                <div className="flex-1">
                    <h1 className="text-[48px] md:text-[56px] leading-tight pb-6 font-bold">
                        Stay Connected<span className="text-[#FF5A5F]">®</span>
                    </h1>
                    <a
                        href="mailto:hello@mystudio.com"
                        className="underline text-[24px] md:text-[36px] font-medium"
                    >
                        hello@mystudio.com
                    </a>
                    <p className="pt-6 opacity-50 text-[16px] md:text-[18px] leading-relaxed max-w-lg">
                        Crafted with creativity and passion. Let’s stay connected. Reach out anytime!
                    </p>
                </div>

                {/* Right: Social Links */}
                <div className="flex flex-col md:pl-20 gap-3 mt-8 md:mt-0 font-medium social-links">
                    <a
                        href="https://www.instagram.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-gray-400 transition-colors duration-300"
                    >
                        01/ Instagram
                    </a>
                    <a
                        href="https://www.linkedin.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-gray-400 transition-colors duration-300"
                    >
                        02/ LinkedIn
                    </a>
                    <a
                        href="https://www.facebook.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-gray-400 transition-colors duration-300"
                    >
                        03/ Facebook
                    </a>
                    <a
                        href="https://www.behance.net/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-gray-400 transition-colors duration-300"
                    >
                        04/ Behance
                    </a>
                    <a
                        href="https://dribbble.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-gray-400 transition-colors duration-300"
                    >
                        05/ Dribbble
                    </a>
                </div>
            </div>

            {/* Logo */}
            <div className="flex justify-center items-center w-full border-b border-[#D9D9D9] py-8">
                <h1 className="text-[80px] md:text-[120px] font-extrabold footer-logo">
                    MyStudio<span className="text-[#FF5A5F]">®</span>
                </h1>
            </div>

            {/* Copywrite & Back to Top */}
            <div className="flex flex-col md:flex-row justify-between items-center w-full pt-5 font-medium text-[16px] px-6 md:px-20 footer-copywrite gap-2 md:gap-0">
                <p>© MyStudio 2025</p>
                <p
                    className="cursor-pointer hover:text-gray-400 transition-colors duration-300"
                    onClick={scrollToTop}
                >
                    Back to top
                </p>
            </div>
        </footer>
    );
}
