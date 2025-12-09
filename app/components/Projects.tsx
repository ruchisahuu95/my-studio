"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface Service {
    id: string;
    title: string;
    image: string;
}

const services: Service[] = [
    { id: "01", title: "Branding", image: "/assets/OIP.jpg" },
    { id: "02", title: "Creative Designing", image: "/assets/licensed-image.jpg" },
    { id: "03", title: "UI/UX Designing", image: "/assets/img1.jpg" },
    { id: "04", title: "Website Development", image: "/assets/img2.jpg" },
    { id: "05", title: "App Development", image: "/assets/img3.jpg" },
];

export default function ServicesSection() {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    return (
        <section className="relative my-[150px] px-4 md:px-10 lg:px-20">
            {/* Max-width container to center content */}
            <div className="max-w-[1200px] mx-auto">
                <p className="font-medium mb-10 text-white">[ services ]</p>

                <div className="flex flex-col gap-6">
                    {services.map((service, i) => (
                        <ServiceItem
                            key={i}
                            index={i}
                            service={service}
                            setActiveIndex={setActiveIndex}
                            isActive={activeIndex === i}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}

interface ServiceItemProps {
    service: Service;
    index: number;
    setActiveIndex: (index: number | null) => void;
    isActive: boolean;
}

function ServiceItem({ service, index, setActiveIndex, isActive }: ServiceItemProps) {
    const controls = useAnimation();
    const [ref, inView] = useInView({ threshold: 0.1 });

    useEffect(() => {
        if (inView) controls.start({ opacity: 1, y: 0, transition: { duration: 0.5 } });
        else controls.start({ opacity: 0, y: 30, transition: { duration: 0.5 } });
    }, [controls, inView]);

    return (
        <motion.div
            ref={ref}
            className="w-full h-25 cursor-pointer border-b border-gray-600 flex items-center gap-10 relative"
            onMouseEnter={() => setActiveIndex(index)}
            onMouseLeave={() => setActiveIndex(null)}
            animate={controls}
            initial={{ opacity: 0, y: 30 }}
        >
            <p className="text-[12px] font-medium text-gray-400">{service.id}</p>
            <p className="text-[36px] font-medium uppercase text-white relative z-10">{service.title}</p>

            {/* Floating image */}
            {isActive && (
                <motion.img
                    src={service.image}
                    alt={service.title}
                    className="absolute right-[150px] top-0 w-[280px] h-[180px] object-cover -rotate-3 pointer-events-none z-10"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1, transition: { duration: 0.5 } }}
                    exit={{ opacity: 0, scale: 0.95, transition: { duration: 0.3 } }}
                />
            )}
        </motion.div>
    );
}
