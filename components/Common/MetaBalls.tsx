'use client';

import { useEffect, useRef, useState } from "react";

const COLOR_CONFIG = {
    transitionDistance: 250,

    metaballs: {
        1: {
            gradient1: { from: "#5335FC", to: "#CEFC35" },
            gradient2: { from: "#EC4899", to: "#FCD34D" },
            opacity: 0.3
        },
        2: {
            gradient1: { from: "#60A5FA", to: "#A3E635" },
            gradient2: { from: "#22D3EE", to: "#86EFAC" },
            opacity: 0.3
        },
        3: {
            gradient1: { from: "#818CF8", to: "#FBBF24" },
            gradient2: { from: "#A855F7", to: "#F59E0B" },
            opacity: 0.3
        },
        4: {
            gradient1: { from: "#F9A8D4", to: "#FEF08A" },
            gradient2: { from: "#5335FC", to: "#CEFC35" },
            opacity: 0.2
        },
        5: {
            gradient1: { from: "#22D3EE", to: "#BEF264" },
            gradient2: { from: "#5335FC", to: "#CEFC35" },
            opacity: 0.3
        }
    }
};

function hexToRgb(hex: string): { r: number, g: number, b: number } {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
    } : { r: 0, g: 0, b: 0 };
}

function interpolateHexColors(fromHex: string, toHex: string, progress: number): string {
    const from = hexToRgb(fromHex);
    const to = hexToRgb(toHex);

    const r = Math.round(from.r + (to.r - from.r) * progress);
    const g = Math.round(from.g + (to.g - from.g) * progress);
    const b = Math.round(from.b + (to.b - from.b) * progress);

    return `${r}, ${g}, ${b}`;
}

export default function Metaballs() {
    const [scrollY, setScrollY] = useState(0);
    const [scrollProgress, setScrollProgress] = useState(0);
    const metaballsRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            setScrollY(currentScrollY);

            const progress = Math.min(currentScrollY / COLOR_CONFIG.transitionDistance, 1);
            setScrollProgress(progress);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        handleScroll();

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const getMetaballStyle = (id: 1 | 2 | 3 | 4 | 5) => {
        const config = COLOR_CONFIG.metaballs[id];
        const color1 = interpolateHexColors(config.gradient1.from, config.gradient1.to, scrollProgress);
        const color2 = interpolateHexColors(config.gradient2.from, config.gradient2.to, scrollProgress);

        return {
            background: `linear-gradient(to bottom right, rgba(${color1}, ${config.opacity}), rgba(${color2}, ${config.opacity}))`,
        };
    };

    return (
        <div
            ref={metaballsRef}
            className="
                absolute
                lg:right-[15%] lg:top-[35%]
                xl:right-[0%] xl:top-[25%]
                -right-[45%] top-[45%]

                lg:w-[200px] lg:h-[200px]
                xl:w-[300px] xl:h-[300px]
                h-[100%] w-[100%]

                pointer-events-none
            "
        >
            <svg className="absolute w-0 h-0">
                <defs>
                    <filter id="gooey">
                        <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
                        <feColorMatrix
                            in="blur"
                            mode="matrix"
                            values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 20 -10"
                            result="gooey"
                        />
                        <feComposite in="SourceGraphic" in2="gooey" operator="atop"/>
                    </filter>
                </defs>
            </svg>

            <div
                className="relative w-full h-full"
                style={{ filter: 'url(#gooey)' }}
            >
                <div
                    className="absolute w-[60%] h-[60%] rounded-full animate-float-slow"
                    style={{
                        ...getMetaballStyle(1),
                        transform: `translate(${Math.sin(scrollY * 0.001) * 30}px, ${Math.cos(scrollY * 0.001) * 30}px)`,
                        top: '20%',
                        right: '10%',
                    }}
                />

                <div
                    className="absolute w-[60%] h-[60%] rounded-full animate-float-medium"
                    style={{
                        ...getMetaballStyle(2),
                        transform: `translate(${Math.cos(scrollY * 0.002) * 40}px, ${Math.sin(scrollY * 0.002) * 40}px)`,
                        top: '10%',
                        right: '25%',
                    }}
                />

                <div
                    className="absolute w-[30%] h-[30%] rounded-full animate-float-fast"
                    style={{
                        ...getMetaballStyle(3),
                        transform: `translate(${Math.sin(scrollY * 0.003) * 50}px, ${Math.cos(scrollY * 0.003) * 50}px)`,
                        top: '40%',
                        right: '15%',
                    }}
                />

                <div
                    className="absolute w-[100%] h-[100%] rounded-full animate-float-slower"
                    style={{
                        ...getMetaballStyle(4),
                        transform: `translate(${Math.cos(scrollY * 0.0005) * 20}px, ${Math.sin(scrollY * 0.0005) * 20}px)`,
                        top: '10%',
                        right: '30%',
                    }}
                />

                <div
                    className="absolute w-[60%] h-[60%] rounded-full animate-float-orbit"
                    style={{
                        ...getMetaballStyle(5),
                        transform: `translate(${Math.sin(scrollY * 0.0015 + 1) * 60}px, ${Math.cos(scrollY * 0.0015 + 1) * 60}px)`,
                        top: '35%',
                        right: '40%',
                    }}
                />
            </div>
        </div>
    )
}
