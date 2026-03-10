import { ReactNode } from 'react';

export interface PrivacyPainsProps {
    titles: ReactNode[];
    description: ReactNode;
    items: { icon: ReactNode; title: string; description: ReactNode }[];
}

export default function PrivacyPains({ titles, description, items }: PrivacyPainsProps) {
    return (
        <section className="bg-black text-white overflow-hidden relative">
            {/* Subtle gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-primary-500/5 via-transparent to-transparent pointer-events-none" />
            
            <div className="max-w-7xl mx-auto md:px-12 px-6 py-20 md:py-28 relative">
                {/* Header */}
                <div className="md:max-w-4xl mb-12 md:mb-16">
                    {titles.map((t, i) => (
                        <h2 
                            key={i} 
                            className={`font-space font-bold uppercase tracking-wide text-2xl md:text-4xl lg:text-5xl leading-tight ${
                                i < titles.length - 1 ? 'mb-2 text-white/60' : 'mb-6 md:mb-8'
                            }`}
                        >
                            {t}
                        </h2>
                    ))}
                    <p className="font-anek-latin text-sm md:text-base text-white/50 max-w-3xl leading-relaxed">
                        {description}
                    </p>
                </div>

                {/* Items grid - card style */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                    {items.map((item, i) => (
                        <div 
                            key={i} 
                            className="group relative bg-white/5 backdrop-blur-sm border border-white/10 p-8 lg:p-10 hover:border-primary-500/50 hover:bg-white/10 transition-all duration-300"
                        >
                            {/* Top corner accent */}
                            <div className="absolute top-0 right-0 w-16 h-16 border-t-2 border-r-2 border-primary-500/20 group-hover:border-primary-500/60 transition-colors duration-300" />
                            
                            <div className="text-4xl text-primary-500 mb-6 group-hover:scale-110 transition-transform duration-300">
                                {item.icon}
                            </div>
                            
                            <h3 className="font-space font-bold uppercase tracking-wide text-sm lg:text-base mb-4 text-white">
                                {item.title}
                            </h3>
                            
                            <p className="font-anek-latin text-sm lg:text-base text-white/40 leading-relaxed group-hover:text-white/60 transition-colors duration-300">
                                {item.description}
                            </p>

                            {/* Bottom corner accent */}
                            <div className="absolute bottom-0 left-0 w-16 h-16 border-b-2 border-l-2 border-primary-500/20 group-hover:border-primary-500/60 transition-colors duration-300" />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
