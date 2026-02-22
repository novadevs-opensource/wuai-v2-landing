import { ReactNode } from 'react';

export interface PainsProps {
    titles: ReactNode[];
    description: ReactNode;
    items: { icon: ReactNode; title: string; description: ReactNode }[];
}

export default function Pains({ titles, description, items }: PainsProps) {
    return (
        <section className="bg-primary-500 bg-[url('../../assets/images/square-network.png')] bg-repeat bg-contain bg-fixed text-white overflow-hidden">
            <div className="max-w-7xl mx-auto md:px-12 px-6 py-20 md:py-28">
                {/* Header */}
                <div className="md:max-w-4xl">
                    {titles.map((t, i) => (
                        <h2 key={i} className={`font-space font-bold uppercase tracking-wide text-2xl md:text-5xl lg:text-6xl leading-tight ${i < titles.length - 1 ? 'mb-2' : 'mb-8 lg:mb-12'}`}>{t}</h2>
                    ))}
                    <p className="font-anek-latin text-sm md:text-lg text-white/70 max-w-2xl leading-relaxed">
                        {description}
                    </p>
                </div>

                {/* Items grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 mt-16 lg:mt-20 border border-black bg-white">
                    {items.map((item, i) => (
                        <div key={i} className={`p-8 lg:p-10 ${i < items.length - 1 ? 'border-b md:border-b-0 md:border-r border-black' : ''}`}>
                            <div className="text-3xl text-primary-500 mb-6">{item.icon}</div>
                            <h3 className="font-space font-bold uppercase tracking-wide text-sm lg:text-base mb-4 text-black">{item.title}</h3>
                            <p className="font-anek-latin text-sm lg:text-base text-black-light leading-relaxed">
                                {item.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}