import { useEffect, useState } from "react";
import { ReactNode } from "react";

export interface AgentIdentityProps {
    sectionTitle: ReactNode;
    headline: ReactNode;
    description: ReactNode;
    terminalTitle: string;
    terminalLines: { text: string; type: 'command' | 'success' }[];
    features: { num: string; title: string; desc: string }[];
    badges: string[];
}

export default function AgentIdentity({
    sectionTitle,
    headline,
    description,
    terminalTitle,
    terminalLines,
    features,
    badges,
}: AgentIdentityProps) {
    const [visibleLines, setVisibleLines] = useState(0);

    useEffect(() => {
        if (visibleLines < terminalLines.length) {
            const timeout = setTimeout(() => setVisibleLines(v => v + 1), 450);
            return () => clearTimeout(timeout);
        }
        const reset = setTimeout(() => setVisibleLines(0), 3500);
        return () => clearTimeout(reset);
    }, [visibleLines, terminalLines.length]);

    return (
        <section id="identity" className="bg-[#000000] text-white overflow-hidden scroll-mt-16">
            <div className="max-w-7xl mx-auto md:px-12 px-6 py-20 md:py-28">

                {/* ── Header ── */}
                <div className="md:max-w-3xl mb-16 md:mb-20">
                    <p className="font-anek-latin font-semibold sm:text-4xl text-3xl uppercase tracking-wider text-white select-none break-all mb-5">
                        {sectionTitle}
                    </p>
                    <h2 className="font-space font-bold text-2xl md:text-4xl lg:text-5xl uppercase tracking-wide leading-tight mb-6">
                        {headline}
                    </h2>
                    <p className="font-anek-latin text-sm md:text-base text-white/50 leading-relaxed max-w-xl">
                        {description}
                    </p>
                </div>

                {/* ── Terminal + Numbered features ── */}
                <div className="grid grid-cols-1 lg:grid-cols-2 border border-white/50">
                    {/* Terminal */}    
                    <div className="lg:border-r border-b lg:border-b-0 border-white/50">
                        <div className="flex items-center gap-2 px-5 py-3 border-b border-white/50">
                            <div className="w-2.5 h-2.5 rounded-full bg-red-500" />
                            <div className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                            <div className="w-2.5 h-2.5 rounded-full bg-green-500" />
                            <span className="font-anon text-xs text-white/25 ml-2">{terminalTitle}</span>
                        </div>
                        <div className="p-6 md:p-8 font-anon text-xs md:text-sm leading-loose min-h-60 flex flex-col justify-center">
                            {terminalLines.map((line, i) => (
                                <div
                                    key={i}
                                    className={`transition-all duration-300 ${
                                        i < visibleLines ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-1'
                                    }`}
                                >
                                    <span className={line.type === 'command' ? 'text-white' : 'text-secondary-500'}>
                                        {line.text}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Numbered features */}
                    <div className="flex flex-col divide-y divide-white/50">
                        {features.map((item) => (
                            <div key={item.num} className="p-6 md:p-8 flex items-start gap-5 group flex-1">
                                <span className="font-anon text-xs text-white/20 tracking-widest mt-1 shrink-0">
                                    {item.num}
                                </span>
                                <div>
                                    <h4 className="font-space font-bold text-sm uppercase tracking-wide mb-2">
                                        {item.title}
                                    </h4>
                                    <p className="font-anek-latin text-sm text-white/40 leading-relaxed">
                                        {item.desc}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* ── Bottom badges ── */}
                <div className="mt-12 md:mt-16 grid grid-cols-1 md:grid-cols-4 border bg-secondary-500 border-black divide-y md:divide-y-0 md:divide-x divide-black">
                    {badges.map((badge, i) => (
                        <span
                            key={i}
                            className="font-anon text-xs uppercase tracking-widest px-4 py-4 text-center text-black cursor-default"
                        >
                            {badge}
                        </span>
                    ))}
                </div>
            </div>
        </section>
    );
}
