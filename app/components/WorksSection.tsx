"use client";

import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

export default function WorksSection() {
    const controls = useAnimation();
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.2, // trigger when 20% of section is visible
    });

    useEffect(() => {
        if (inView) {
            controls.start("visible");
        }
    }, [controls, inView]);

    // Animation variants
    const item = {
        hidden: { opacity: 0, y: 50 },
        visible: (i: number) => ({
            opacity: 1,
            y: 0,
            transition: { delay: i * 0.2, duration: 0.8 },
        }),
    };

    return (
        <section
            ref={ref}
            className="container mx-auto px-4 md:px-10 lg:px-20 relative mt-[150px] mb-[50px] py-[50px] flex flex-col lg:flex-row items-center justify-between"
        >
            {/* Left caption */}
            <motion.p
                custom={0}
                initial="hidden"
                animate={controls}
                variants={item}
                className="font-medium text-[14px] md:text-[16px] text-left"
            >
                Driven By Design
            </motion.p>

            {/* Center Heading */}
            <div className="text-center flex flex-col gap-2">
                {["HELPING BRANDS", "MOVE THE WORLD", "FORWARD"].map((line, i) => (
                    <motion.h1
                        key={i}
                        custom={i + 1}
                        initial="hidden"
                        animate={controls}
                        variants={item}
                        className="font-bold text-[50px] sm:text-[90px] leading-[1] overflow-hidden"
                    >
                        {line}
                    </motion.h1>
                ))}
            </div>

            {/* Right caption */}
            <motion.p
                custom={4}
                initial="hidden"
                animate={controls}
                variants={item}
                className="font-medium text-[14px] md:text-[16px] text-right"
            >
                Powered By Code
            </motion.p>
        </section>
    );
}
