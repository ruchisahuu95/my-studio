import { useState, useEffect, useRef } from "react";

export function useInView<T extends HTMLElement>(options?: IntersectionObserverInit) {
    const [isInView, setIsInView] = useState(false);
    const ref = useRef<T>(null);

    useEffect(() => {
        if (!ref.current) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsInView(entry.isIntersecting);
            },
            { threshold: 0.3, ...options }
        );

        observer.observe(ref.current);

        return () => observer.disconnect();
    }, [ref, options]);

    return { ref, isInView };
}
