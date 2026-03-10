import { ReactNode } from 'react';

export interface PrivacyClaimProps {
    mainClaim: ReactNode;
    subClaim: ReactNode;
    items: { title: string; description: string }[];
}

export default function PrivacyClaim({ mainClaim, subClaim, items }: PrivacyClaimProps) {
    return (
        <section id="privacy" className="border border-gray-400 border-t-0 border-b-0 bordered-container mx-auto overflow-hidden scroll-mt-16">
            
            {/* Layout: Full vertical green sidebar + right content */}
            <div className="grid grid-cols-1 lg:grid-cols-12">
                
                {/* Vertical green bar - FULL HEIGHT - Desktop only */}
                <div className="hidden lg:flex lg:col-span-2 bg-secondary-500 lg:border-r border-gray-400 border-grain-safe items-center justify-center relative overflow-hidden">
                    {/* Background pattern with vertical animation */}
                    <div 
                        className="absolute inset-0 opacity-15 animate-pattern-slide"
                        style={{
                            backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 2.5px, black 2.5px, black 5px),
                                             repeating-linear-gradient(90deg, transparent, transparent 2.5px, black 2.5px, black 5px)`,
                            backgroundSize: '10px 10px'
                        }}
                    ></div>
                    
                    <h2 className="font-space font-bold uppercase tracking-tight text-5xl xl:text-6xl leading-none text-left origin-center -rotate-90 whitespace-nowrap relative z-10">
                        {mainClaim}
                    </h2>
                </div>
                
                {/* Full right content */}
                <div className="lg:col-span-10">
                    
                    {/* Header - two columns */}
                    <div className="grid grid-cols-1 md:grid-cols-12 border-b border-gray-400">
                        {/* Title [Privacy Layer] */}
                        <div className="md:col-span-4 bg-black px-6 md:px-12 py-16 md:py-20 border-b md:border-b-0 md:border-r border-gray-400 flex items-center">
                            <p className="font-anek-latin font-semibold text-2xl sm:text-3xl md:text-4xl uppercase tracking-wider text-white select-none">
                                <span className='font-light'>[</span>Privacy Layer<span className='font-light'>]</span>
                            </p>
                        </div>
                        
                        {/* Subclaim */}
                        <div className="md:col-span-8 grain px-6 md:px-12 py-16 md:py-20 flex items-center">
                            <p className="font-anek-latin text-sm md:text-base lg:text-lg text-black/70 leading-relaxed">
                                {subClaim}
                            </p>
                        </div>
                    </div>

                    {/* Main Claim - Mobile only, below header */}
                    <div className="lg:hidden bg-secondary-500 px-6 py-12 border-b border-gray-400 flex items-center justify-center relative overflow-hidden">
                        {/* Background pattern with vertical animation */}
                        <div 
                            className="absolute inset-0 opacity-15 animate-pattern-slide"
                            style={{
                                backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 2.5px, black 2.5px, black 5px),
                                                 repeating-linear-gradient(90deg, transparent, transparent 2.5px, black 2.5px, black 5px)`,
                                backgroundSize: '10px 10px'
                            }}
                        ></div>
                        <h2 className="font-space font-bold uppercase tracking-tight text-3xl sm:text-4xl leading-tight text-center relative z-10">
                            {mainClaim}
                        </h2>
                    </div>

                    {/* 3-column grid */}
                    <div className="grid grid-cols-1 md:grid-cols-3 grain">
                        {items.map((item, i) => (
                            <div 
                                key={i} 
                                className={`p-10 lg:p-12 ${i < items.length - 1 ? 'border-b' : ''} md:border-b-0 ${i < items.length - 1 ? 'md:border-r' : ''} border-gray-400 flex flex-col`}
                            >
                                {/* Simple number */}
                                <span className="font-anon text-xs text-black/30 tracking-widest mb-6 block">
                                    {String(i + 1).padStart(2, '0')}
                                </span>
                                
                                {/* Content */}
                                <h3 className="font-space font-bold uppercase tracking-wide text-base lg:text-lg mb-4 leading-tight">
                                    {item.title}
                                </h3>
                                <p className="font-anek-latin text-sm lg:text-base text-black/60 leading-relaxed">
                                    {item.description}
                                </p>
                            </div>
                        ))}
                    </div>

                    {/* Stats with full green background */}
                    <div className="grid grid-cols-2 md:grid-cols-4 bg-secondary-500 border-t border-gray-400 border-grain-safe">
                        <div className="px-6 py-8 text-center border-r border-b md:border-b-0 border-gray-400">
                            <div className="font-space font-bold text-3xl md:text-4xl text-black mb-2">500K+</div>
                            <div className="font-anon text-xs uppercase tracking-widest text-black/60">Hugging Face Models</div>
                        </div>
                        <div className="px-6 py-8 text-center border-b md:border-b-0 md:border-r border-gray-400">
                            <div className="font-space font-bold text-3xl md:text-4xl text-black mb-2">0%</div>
                            <div className="font-anon text-xs uppercase tracking-widest text-black/60">Data Egress</div>
                        </div>
                        <div className="px-6 py-8 text-center border-r border-gray-400">
                            <div className="font-space font-bold text-3xl md:text-4xl text-black mb-2">0</div>
                            <div className="font-anon text-xs uppercase tracking-widest text-black/60">External APIs</div>
                        </div>
                        <div className="px-6 py-8 text-center">
                            <div className="font-space font-bold text-3xl md:text-4xl text-black mb-2">100%</div>
                            <div className="font-anon text-xs uppercase tracking-widest text-black/60">Private Inference</div>
                        </div>
                    </div>
                    
                </div>
                
            </div>

        </section>
    )
}
