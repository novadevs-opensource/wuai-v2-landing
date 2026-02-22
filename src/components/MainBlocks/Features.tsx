import { ReactNode } from 'react';

export interface FeatureItem {
    title: string;
    descriptions: ReactNode[];
    boldDescription: ReactNode;
}

export interface FeaturesProps {
    features: FeatureItem[];
    screenshotImage: string;
    brandLogos: string[];
}

export default function Features({ features, screenshotImage, brandLogos }: FeaturesProps) {
    return (
        <section className="border border-gray-400 border-t-0 border-b-0 bordered-container mx-auto grain overflow-hidden">

            {/* ── Hero row: feature principal + screenshot ── */}
            <div className="grid grid-cols-1 lg:grid-cols-5 border-b border-gray-300">
                <div className="lg:col-span-2 flex items-center justify-center md:p-12 px-6 py-12 lg:border-r border-gray-300 bg-primary-500">
                    <span className="font-space font-semibold text-4xl md:text-6xl uppercase tracking-wider text-white select-none !font-anek-latin break-all">
                        [Features]
                    </span>
                </div>
                <div className="lg:col-span-3 md:p-12 px-6 py-12 flex flex-col justify-center">
                    <h3 className="font-space font-bold text-2xl lg:text-4xl uppercase tracking-wide mb-6 leading-tight">{features[0].title}</h3>
                    {features[0].descriptions.map((desc, j) => (
                        <p key={j} className="font-anek-latin text-base lg:text-lg text-black-light leading-relaxed mb-2">{desc}</p>
                    ))}
                    <p className="font-anek-latin font-bold text-xs uppercase tracking-wider text-primary-500 mt-6">
                        {features[0].boldDescription}
                    </p>
                </div>
            </div>

            {/* ── 3-column features ── */}
            <div className="grid grid-cols-1 md:grid-cols-3 border-b border-gray-300 divide-y md:divide-y-0 md:divide-x divide-gray-300">
                {features.slice(1, 4).map((feature, i) => (
                    <div key={i} className="md:py-14 md:px-8 px-6 py-10">
                        <h3 className="font-space font-bold text-base lg:text-lg uppercase tracking-wide mb-4">{feature.title}</h3>
                        {feature.descriptions.map((desc, j) => (
                            <p key={j} className="font-anek-latin text-sm text-black-light leading-relaxed mb-2">{desc}</p>
                        ))}
                        <p className="font-anek-latin font-bold text-xs uppercase tracking-wider text-primary-500 mt-5">
                            {feature.boldDescription}
                        </p>
                    </div>
                ))}
            </div>

            {/* ── Last feature + FEATURES label ── */}
            <div className="lg:flex border-b border-gray-300">
                <div className="lg:w-3/5 md:p-12 px-6 py-12 lg:border-r border-gray-300">
                    <h3 className="font-space font-bold text-2xl lg:text-3xl uppercase tracking-wide leading-tight mb-6">{features[4].title}</h3>
                    {features[4].descriptions.map((desc, j) => (
                        <p key={j} className="font-anek-latin text-sm lg:text-base text-black-light leading-relaxed mb-2">{desc}</p>
                    ))}
                    <p className="font-anek-latin font-bold text-xs uppercase tracking-wider text-primary-500 mt-5">
                        {features[4].boldDescription}
                    </p>
                </div>
                <div className="lg:w-2/5 flex items-center justify-center md:p-12 px-6 py-12 bg-white">
                    <img src={screenshotImage} alt="Product logo" className="h-16 lg:h-20 object-contain" />
                </div>
            </div>

            {/* ── Brand logos ── */}
            <div className="md:px-12 px-6 py-14 lg:py-20 flex items-center justify-between gap-8">
                {brandLogos.map((logo, i) => (
                    <img key={i} src={logo} alt="brand logo" className="lg:h-4 h-2 opacity-30 grayscale"/>
                ))}
            </div>
        </section>
    );
}
