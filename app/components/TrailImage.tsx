"use client";

import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

interface TrailImageProps {
    src: string;
    alt: string;
    className?: string;
    triggerRef?: React.RefObject<HTMLElement>; // optional: section to track
    threshold?: number;
}

export default function TrailImage({ src, alt, className = "", triggerRef, threshold = 0.1 }: TrailImageProps) {
    const controls = useAnimation();
    const [ref, inView] = useInView({ threshold, triggerOnce: false });

    useEffect(() => {
        // Use provided triggerRef instead of internal ref if given
        const observerTarget = triggerRef?.current || ref.current;
        if (!observerTarget) return;

        if (inView) {
            controls.start({ opacity: 1, scale: 1, transition: { duration: 0.5 } });
        } else {
            controls.start({ opacity: 0, scale: 0.95, transition: { duration: 0.5 } });
        }
    }, [controls, inView, triggerRef]);

    return (
        <motion.img
            ref={ref}
            src={src}
            alt={alt}
            className={`pointer-events-none fixed top-0 left-0 w-[210px] h-[140px] object-cover z-50 ${className}`}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={controls}
        />
    );
}
