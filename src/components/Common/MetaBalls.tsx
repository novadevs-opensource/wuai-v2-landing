import { useEffect, useRef, useState } from "react";

// ⚙️ COLOR CONFIGURATION - CUSTOMIZE HERE
const COLOR_CONFIG = {
    // Scroll distance to complete the transition (in pixels)
    transitionDistance: 250,
    
    // Colors for each metaball [initial → final]
    metaballs: {
        // Metaball 1 (Large)
        1: {
            gradient1: { from: "#5335FC", to: "#CEFC35" },  // primary-500 → secondary-500
            gradient2: { from: "#EC4899", to: "#FCD34D" },  // pink-400 → yellow-300
            opacity: 0.3
        },
        // Metaball 2 (Medium)
        2: {
            gradient1: { from: "#60A5FA", to: "#A3E635" },  // blue-400 → lime-400
            gradient2: { from: "#22D3EE", to: "#86EFAC" },  // cyan-400 → green-300
            opacity: 0.3
        },
        // Metaball 3 (Small)
        3: {
            gradient1: { from: "#818CF8", to: "#FBBF24" },  // indigo-400 → amber-400
            gradient2: { from: "#A855F7", to: "#F59E0B" },  // purple-400 → amber-500
            opacity: 0.3
        },
        // Metaball 4 (Extra large - background)
        4: {
            gradient1: { from: "#F9A8D4", to: "#FEF08A" },  // pink-300 → yellow-200
            gradient2: { from: "#5335FC", to: "#CEFC35" },  // primary-500 → secondary-500
            opacity: 0.2  // Lower opacity for background
        },
        // Metaball 5 (Medium orbiting)
        5: {
            gradient1: { from: "#22D3EE", to: "#BEF264" },  // cyan-400 → lime-300
            gradient2: { from: "#5335FC", to: "#CEFC35" },  // primary-500 → secondary-500
            opacity: 0.3
        }
    }
};

// Helper function to convert hex to RGB
function hexToRgb(hex: string): { r: number, g: number, b: number } {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
    } : { r: 0, g: 0, b: 0 };
}

// Function to interpolate between two colors
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
            
            // Calculate progress based on transitionDistance
            const progress = Math.min(currentScrollY / COLOR_CONFIG.transitionDistance, 1);
            setScrollProgress(progress);
        };
        
        window.addEventListener('scroll', handleScroll, { passive: true });
        handleScroll();
        
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    
    // Function to get the style for each metaball
    const getMetaballStyle = (id: 1 | 2 | 3 | 4 | 5) => {
        const config = COLOR_CONFIG.metaballs[id];
        const color1 = interpolateHexColors(config.gradient1.from, config.gradient1.to, scrollProgress);
        const color2 = interpolateHexColors(config.gradient2.from, config.gradient2.to, scrollProgress);
        
        return {
            background: `linear-gradient(to bottom right, rgba(${color1}, ${config.opacity}), rgba(${color2}, ${config.opacity}))`,
            // REMOVED transition to make transitionDistance work properly
            // The transition was smoothing the changes regardless of the distance value
        };
    };
    
    return (
        <div 
            ref={metaballsRef}
            className="absolute lg:right-0 left-[50%] lg:-top-10 top-[35%] lg:w-[600px] lg:h-[600px] h-[150px] w-[150px] pointer-events-none"
        >
            {/* SVG Filter for Gooey Effect */}
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
                    
            {/* Metaballs Container */}
            <div 
                className="relative w-full h-full"
                style={{ filter: 'url(#gooey)' }}
            >
                {/* Metaball 1 - Large, slow movement */}
                <div
                    className="absolute w-[60%] h-[60%] rounded-full animate-float-slow"
                    style={{
                        ...getMetaballStyle(1),
                        transform: `translate(${Math.sin(scrollY * 0.001) * 30}px, ${Math.cos(scrollY * 0.001) * 30}px)`,
                        top: '20%',
                        right: '10%',
                    }}
                />
                
                {/* Metaball 2 - Medium, medium speed */}
                <div
                    className="absolute w-[60%] h-[60%] rounded-full animate-float-medium"
                    style={{
                        ...getMetaballStyle(2),
                        transform: `translate(${Math.cos(scrollY * 0.002) * 40}px, ${Math.sin(scrollY * 0.002) * 40}px)`,
                        top: '10%',
                        right: '25%',
                    }}
                />
                
                {/* Metaball 3 - Small, fast movement */}
                <div
                    className="absolute w-[30%] h-[30%] rounded-full animate-float-fast"
                    style={{
                        ...getMetaballStyle(3),
                        transform: `translate(${Math.sin(scrollY * 0.003) * 50}px, ${Math.cos(scrollY * 0.003) * 50}px)`,
                        top: '40%',
                        right: '15%',
                    }}
                />
                
                {/* Metaball 4 - Extra large, very slow */}
                <div
                    className="absolute w-[100%] h-[100%] rounded-full animate-float-slower"
                    style={{
                        ...getMetaballStyle(4),
                        transform: `translate(${Math.cos(scrollY * 0.0005) * 20}px, ${Math.sin(scrollY * 0.0005) * 20}px)`,
                        top: '10%',
                        right: '30%',
                    }}
                />
                
                {/* Metaball 5 - Medium, orbiting */}
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
