"use client";

import { useRef } from "react";
import TrailImage from "./TrailImage";

export default function TrailImagesContainer() {
    const sectionRef = useRef<HTMLElement>(null);

    const trailImages = [
        "/assets/image_1-Ba4hc9Hf.webp",
        "/assets/image_2-B4tSdKBn.webp",
        "/assets/image_3-BzuCzQ4t.webp",
        "/assets/image_4-Dv13_eAZ.webp",
        "/assets/image_5-D4c9CvJ3.webp",
    ];

    return (
        <section ref={sectionRef} className="relative h-[500px] my-40">
            <p className="text-white font-medium text-center">Scroll to see trail images</p>

            {trailImages.map((img, i) => (
                <TrailImage key={i} src={img} alt={`trail-${i}`} triggerRef={sectionRef} />
            ))}
        </section>
    );
}
