import React, { useEffect, useState, ReactNode } from "react";

/* ── SVG arrow helpers ── */
const ArrowRight = ({ active }: { active: boolean }) => (
    <svg width="32" height="12" viewBox="0 0 32 12" fill="none" className="shrink-0">
        <line x1="0" y1="6" x2="26" y2="6" strokeWidth="1.5" strokeDasharray="4 3"
              className={`transition-colors duration-500 ${active ? 'stroke-secondary-500' : 'stroke-white/15'}`} />
        <path d="M26 2 L31 6 L26 10" strokeWidth="1.5" fill="none"
              className={`transition-colors duration-500 ${active ? 'stroke-secondary-500' : 'stroke-white/15'}`} />
    </svg>
);

const ArrowDown = ({ active }: { active: boolean }) => (
    <svg width="12" height="24" viewBox="0 0 12 24" fill="none" className="shrink-0">
        <line x1="6" y1="0" x2="6" y2="18" strokeWidth="1.5" strokeDasharray="4 3"
              className={`transition-colors duration-500 ${active ? 'stroke-secondary-500' : 'stroke-white/15'}`} />
        <path d="M2 18 L6 23 L10 18" strokeWidth="1.5" fill="none"
              className={`transition-colors duration-500 ${active ? 'stroke-secondary-500' : 'stroke-white/15'}`} />
    </svg>
);

const ArrowLeft = ({ active }: { active: boolean }) => (
    <svg width="32" height="12" viewBox="0 0 32 12" fill="none" className="shrink-0">
        <line x1="6" y1="6" x2="32" y2="6" strokeWidth="1.5" strokeDasharray="4 3"
              className={`transition-colors duration-500 ${active ? 'stroke-secondary-500' : 'stroke-white/15'}`} />
        <path d="M6 2 L1 6 L6 10" strokeWidth="1.5" fill="none"
              className={`transition-colors duration-500 ${active ? 'stroke-secondary-500' : 'stroke-white/15'}`} />
    </svg>
);

export interface AgentPaymentsProps {
    sectionTitle: ReactNode;
    headline: ReactNode;
    description: ReactNode;
    features: { num: string; title: string; desc: string; highlight: string }[];
    flowNodes: { letter: string; label: string; sub: string; colorClass: string }[];
    example: ReactNode;
    exampleHighlight: string;
    stats: { value: string; label: string }[];
}

export default function AgentPayments({
    sectionTitle,
    headline,
    description,
    features,
    flowNodes,
    example,
    exampleHighlight,
    stats,
}: AgentPaymentsProps) {
    const [step, setStep] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => setStep(s => (s + 1) % flowNodes.length), 1800);
        return () => clearInterval(interval);
    }, [flowNodes.length]);

    return (
        <section className="border border-gray-400 border-t-0 border-b-0 bordered-container mx-auto grain overflow-hidden">

            {/* ── Header row ── */}
            <div className="grid grid-cols-1 lg:grid-cols-5 border-b border-gray-400">
                <div className="lg:col-span-2 flex items-center justify-center md:p-12 px-6 py-12 lg:border-r border-gray-400 bg-primary-500">
                    <span className="font-anek-latin font-semibold text-3xl sm:text-4xl uppercase tracking-wider text-white select-none break-all">
                        {sectionTitle}
                    </span>
                </div>
                <div className="lg:col-span-3 md:p-12 px-6 py-12 flex flex-col justify-center">
                    <h3 className="font-space font-bold text-lg lg:text-3xl uppercase tracking-wide mb-4 leading-tight">
                        {headline}
                    </h3>
                    <p className="font-anek-latin text-sm lg:text-base text-black-light leading-relaxed">
                        {description}
                    </p>
                </div>
            </div>

            {/* ── Numbered features ── */}
            <div className="grid grid-cols-1 md:grid-cols-3 border-b border-gray-400 divide-y md:divide-y-0 md:divide-x divide-gray-400">
                {features.map((item) => (
                    <div key={item.num} className="p-6 md:p-8">
                        <span className="font-anon text-sm text-gray-400 tracking-widest block mb-4">
                            {item.num}
                        </span>
                        <h4 className="font-space font-bold text-sm lg:text-base uppercase tracking-wide mb-3">
                            {item.title}
                        </h4>
                        <p className="font-anek-latin text-sm text-black-light leading-relaxed mb-4">
                            {item.desc}
                        </p>
                        <p className="font-anek-latin font-bold text-xs uppercase tracking-wider text-primary-500">
                            {item.highlight}
                        </p>
                    </div>
                ))}
            </div>

            {/* ── n8n-style workflow flow + Example — split row ── */}
            <div className="grid grid-cols-1 lg:grid-cols-5 border-b border-gray-400">
                {/* Flow visualization */}
                <div className="bg-[#000000] text-white lg:col-span-3 lg:border-r border-b lg:border-b-0 border-gray-400 p-6 md:p-8 overflow-hidden"
                     style={{ backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.04) 1px, transparent 1px)', backgroundSize: '24px 24px' }}>
                    <p className="font-anon text-sm uppercase tracking-widest text-white mb-8">
                        Transaction Flow
                    </p>

                    {/* ── Desktop: horizontal flow (hidden on mobile) ── */}
                    <div className="hidden md:grid md:grid-cols-[1fr_auto_1fr_auto_1fr_auto_1fr] items-center">
                        {flowNodes.map((node, i) => (
                            <React.Fragment key={i}>
                                <div
                                    className={`transition-all duration-500 rounded min-w-0 ${
                                        step >= i ? 'bg-white' : 'bg-white/15'
                                    }`}
                                >
                                    <div className={`h-2 rounded-t transition-all duration-500 ${
                                        step >= i ? node.colorClass : 'bg-white/5'
                                    }`} />
                                    <div className="p-4">
                                        <div className={`w-8 h-8 rounded flex items-center justify-center font-anon text-sm font-bold mb-2 transition-all duration-500 ${
                                            step >= i ? `text-black ${node.colorClass}` : 'text-white/20 bg-white/5'
                                        }`}>
                                            {node.letter}
                                        </div>
                                        <p className={`font-space font-bold text-xs uppercase tracking-wide transition-colors duration-500 ${
                                            step >= i ? 'text-black' : 'text-white/20'
                                        }`}>{node.label}</p>
                                        <p className={`font-anon text-xs mt-0.5 transition-colors duration-500 ${
                                            step >= i ? 'text-black-light' : 'text-white/10'
                                        }`}>{node.sub}</p>
                                    </div>
                                </div>
                                {i < flowNodes.length - 1 && (
                                    <div className="flex items-center justify-center px-2">
                                        <ArrowRight active={step > i} />
                                    </div>
                                )}
                            </React.Fragment>
                        ))}
                    </div>

                    {/* ── Mobile: cyclic 2×2 flow (hidden on desktop) ── */}
                    <div className="md:hidden">
                        {/* Top row: node 0 → node 1 */}
                        <div className="grid grid-cols-[1fr_auto_1fr] items-center">
                            {[flowNodes[0], flowNodes[1]].map((node, idx) => {
                                const i = idx;
                                return (
                                    <div key={i} className="flex items-center min-w-0">
                                        <div className={`transition-all duration-500 rounded flex-1 min-w-0 ${
                                            step >= i ? 'bg-white' : 'bg-white/15'
                                        }`}>
                                            <div className={`h-2 rounded-t transition-all duration-500 ${
                                                step >= i ? node.colorClass : 'bg-white/5'
                                            }`} />
                                            <div className="p-3">
                                                <div className={`w-7 h-7 rounded flex items-center justify-center font-anon text-xs font-bold mb-2 transition-all duration-500 ${
                                                    step >= i ? `text-black ${node.colorClass}` : 'text-white/20 bg-white/5'
                                                }`}>{node.letter}</div>
                                                <p className={`font-space font-bold text-xs uppercase tracking-wide transition-colors duration-500 ${
                                                    step >= i ? 'text-black' : 'text-white/20'
                                                }`}>{node.label}</p>
                                                <p className={`font-anon text-xs mt-0.5 transition-colors duration-500 ${
                                                    step >= i ? 'text-black-light' : 'text-white/10'
                                                }`}>{node.sub}</p>
                                            </div>
                                        </div>
                                    </div>
                                );
                            }).reduce<React.ReactNode[]>((acc, node, idx) => {
                                if (idx === 1) {
                                    acc.push(
                                        <div key="conn-top" className="flex items-center justify-center px-2 shrink-0">
                                            <ArrowRight active={step > 0} />
                                        </div>
                                    );
                                }
                                acc.push(node);
                                return acc;
                            }, [])}
                        </div>

                        {/* Middle connector: ↓ right side only */}
                        <div className="grid grid-cols-[1fr_auto_1fr] py-3">
                            <div />
                            <div />
                            <div className="flex items-center justify-center">
                                <ArrowDown active={step > 1} />
                            </div>
                        </div>

                        {/* Bottom row: node 3 ← node 2 (reversed visually) */}
                        <div className="grid grid-cols-[1fr_auto_1fr] items-center">
                            {[flowNodes[3], flowNodes[2]].map((node, idx) => {
                                const i = idx === 0 ? 3 : 2;
                                return (
                                    <div key={i} className="flex items-center min-w-0">
                                        <div className={`transition-all duration-500 rounded flex-1 min-w-0 ${
                                            step >= i ? 'bg-white' : 'bg-white/15'
                                        }`}>
                                            <div className={`h-2 rounded-t transition-all duration-500 ${
                                                step >= i ? node.colorClass : 'bg-white/5'
                                            }`} />
                                            <div className="p-3">
                                                <div className={`w-7 h-7 rounded flex items-center justify-center font-anon text-xs font-bold mb-2 transition-all duration-500 ${
                                                    step >= i ? `text-black ${node.colorClass}` : 'text-white/20 bg-white/5'
                                                }`}>{node.letter}</div>
                                                <p className={`font-space font-bold text-xs uppercase tracking-wide transition-colors duration-500 ${
                                                    step >= i ? 'text-black' : 'text-white/20'
                                                }`}>{node.label}</p>
                                                <p className={`font-anon text-xs mt-0.5 transition-colors duration-500 ${
                                                    step >= i ? 'text-black-light' : 'text-white/10'
                                                }`}>{node.sub}</p>
                                            </div>
                                        </div>
                                    </div>
                                );
                            }).reduce<React.ReactNode[]>((acc, node, idx) => {
                                if (idx === 1) {
                                    acc.push(
                                        <div key="conn-bottom" className="flex items-center justify-center px-2 shrink-0">
                                            <ArrowLeft active={step > 2} />
                                        </div>
                                    );
                                }
                                acc.push(node);
                                return acc;
                            }, [])}
                        </div>
                    </div>
                </div>

                {/* Example callout */}
                <div className="lg:col-span-2 p-6 md:p-8 flex flex-col justify-center">
                    <p className="font-anon text-xs uppercase tracking-widest text-gray-400 mb-4">
                        Example
                    </p>
                    <p className="font-anon text-xs md:text-sm text-black leading-relaxed mb-3">
                        {example}
                    </p>
                    <p className="font-anek-latin font-bold text-xs uppercase tracking-wider text-primary-500">
                        {exampleHighlight}
                    </p>
                </div>
            </div>

            {/* ── Stats strip ── */}
            <div className="grid grid-cols-2 md:grid-cols-4">
                {stats.map((stat, i) => (
                    <div key={i} className={`py-8 md:py-10 px-4 md:px-8 text-center border-gray-400 ${
                        i % 2 !== 0 ? 'border-l' : ''
                    } ${
                        i >= 2 ? 'border-t md:border-t-0' : ''
                    } ${
                        i >= 1 ? 'md:border-l' : ''
                    }`}>
                        <p className="font-space font-bold text-2xl md:text-3xl text-primary-500">{stat.value}</p>
                        <p className="font-anek-latin text-xs text-black-light/40 uppercase tracking-wider mt-1">{stat.label}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}
