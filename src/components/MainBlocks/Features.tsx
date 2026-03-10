import { ReactNode } from 'react';

export interface FeatureItem {
    title: string;
    descriptions: ReactNode[];
    boldDescription: ReactNode;
}

export interface BrandLogo {
    logo: string;
    name: string;
}

export interface FeaturesProps {
    features: FeatureItem[];
    screenshotImage: string;
    brandLogos: BrandLogo[];
}

export default function Features({ features, screenshotImage, brandLogos }: FeaturesProps) {
    return (
        <section id="features" className="border border-gray-400 border-t-0 border-b-0 bordered-container mx-auto grain overflow-hidden scroll-mt-16">

            {/* ── Hero row: feature principal + screenshot ── */}
            <div className="grid grid-cols-1 lg:grid-cols-5 border-b border-gray-400">
                <div className="lg:col-span-2 flex items-center justify-center md:p-12 px-6 py-12 lg:border-r border-gray-400 bg-primary-500">
                    <span className="font-anek-latin font-semibold text-4xl uppercase tracking-wider text-white select-none break-all">
                        <span className='font-light'>[</span>Features<span className='font-light'>]</span>
                    </span>
                </div>
                <div className="lg:col-span-3 md:p-12 px-6 py-12 flex flex-col justify-center">
                    <h3 className="font-space font-bold text-lg lg:text-4xl uppercase tracking-wide mb-4 leading-tight">{features[0].title}</h3>
                    {features[0].descriptions.map((desc, j) => (
                        <p key={j} className="font-anek-latin text-sm lg:text-lg text-black-light leading-relaxed mb-2">{desc}</p>
                    ))}
                    <p className="font-anek-latin font-bold text-xs uppercase tracking-wider text-primary-500 mt-5">
                        {features[0].boldDescription}
                    </p>
                </div>
            </div>

            {/* ── 3-column features ── */}
            <div className="grid grid-cols-1 md:grid-cols-3 border-b border-grain-safe divide-y md:divide-y-0 md:divide-x divide-gray-400">
                {features.slice(1, 4).map((feature, i) => (
                    <div key={i} className="md:py-14 md:px-8 px-6 py-10 bg-white">
                        <h3 className="font-space font-bold text-lg lg:text-lg uppercase tracking-wide mb-4">{feature.title}</h3>
                        {feature.descriptions.map((desc, j) => (
                            <p key={j} className="font-anek-latin text-sm text-black-light leading-relaxed mb-2">{desc}</p>
                        ))}
                        <p className="font-anek-latin font-bold text-xs uppercase tracking-wider text-primary-500 mt-5">
                            {feature.boldDescription}
                        </p>
                    </div>
                ))}
            </div>

            {/* ── Extra 2-col features (Custom Model & Air-Gapped) ── */}
            {features.length > 5 && (
                <div className="grid grid-cols-1 md:grid-cols-2 border-b border-grain-safe divide-y md:divide-y-0 md:divide-x divide-gray-400">
                    {features.slice(5, 7).map((feature, i) => (
                        <div key={i} className="md:py-16 lg:py-20 md:px-10 lg:px-12 px-6 py-12">
                            <h3 className="font-space font-bold text-xl lg:text-2xl xl:text-3xl uppercase tracking-wide mb-5 lg:mb-6 leading-tight">{feature.title}</h3>
                            {feature.descriptions.map((desc, j) => (
                                <p key={j} className="font-anek-latin text-sm lg:text-base text-black-light leading-relaxed mb-2">{desc}</p>
                            ))}
                            <p className="font-anek-latin font-bold text-xs lg:text-sm uppercase tracking-wider text-primary-500 mt-6">
                                {feature.boldDescription}
                            </p>
                        </div>
                    ))}
                </div>
            )}

            {/* ── Multi-framework feature + logo ── */}
            <div className="lg:flex border-b border-gray-400">
                <div className="lg:w-3/5 md:p-12 px-6 py-12 lg:border-r border-grain-safe">
                    <h3 className="font-space font-bold text-lg lg:text-3xl uppercase tracking-wide leading-tight mb-4">{features[4].title}</h3>
                    {features[4].descriptions.map((desc, j) => (
                        <p key={j} className="font-anek-latin text-sm lg:text-base text-black-light leading-relaxed mb-2">{desc}</p>
                    ))}
                    <p className="font-anek-latin font-bold text-xs uppercase tracking-wider text-primary-500 mt-5">
                        {features[4].boldDescription}
                    </p>
                </div>
                <div className="lg:w-2/5 flex items-center justify-center md:p-12 px-6 py-12 bg-secondary-500 border-t border-grain-safe lg:border-t-0">
                    <img src={screenshotImage} alt="Product logo" className="h-16 lg:h-20 object-contain" />
                </div>
            </div>

            {/* ── Brand logos ── */}
            <div className="md:px-12 px-4 py-10 lg:py-14 flex flex-wrap items-center justify-center md:justify-between gap-4 md:gap-8 relative z-10 bg-white grain">
                {brandLogos.map((item, i) => (
                    <div key={i} className="flex flex-col items-center gap-2 md:gap-3">
                        <img src={item.logo} alt={item.name} className="h-6 md:h-8 lg:h-10 opacity-30 grayscale"/>
                        <span className="font-anon text-[10px] md:text-xs uppercase tracking-wider text-black-light opacity-50">{item.name}</span>
                    </div>
                ))}
            </div>
        </section>
    );
}
