import { ReactNode } from 'react';
import { Button } from '../Common/Button';

export interface PricingTier {
    name: string;
    price: ReactNode;
    period?: string;
    description: ReactNode;
    features: string[];
    highlight?: boolean;
    buttonText: string;
    buttonHref: string;
}

export interface PricingProps {
    sectionTitle: ReactNode;
    headline: ReactNode;
    description: ReactNode;
    tiers: PricingTier[];
    footnote?: ReactNode;
}

export default function Pricing({ sectionTitle, headline, description, tiers }: PricingProps) {
    return (
        <section id="pricing" className="grain overflow-hidden relative border-t border-gray-400 scroll-mt-16">

            <div className="max-w-7xl mx-auto md:px-12 px-6 py-20 md:py-28 relative z-10">
                {/* ── Header ── */}
                <div className="md:max-w-3xl mb-16 lg:mb-20">
                    <span className="font-anek-latin font-semibold text-3xl sm:text-4xl uppercase tracking-wider select-none block mb-6 text-black">
                        {sectionTitle}
                    </span>
                    <h3 className="font-space font-bold text-2xl md:text-5xl lg:text-6xl uppercase tracking-wide mb-6 leading-tight text-black">
                        {headline}
                    </h3>
                    <p className="font-anek-latin text-sm md:text-lg text-black-light max-w-2xl leading-relaxed">
                        {description}
                    </p>
                </div>

                {/* ── Pricing cards ── */}
                <div className="grid grid-cols-1 md:grid-cols-3 border border-gray-400">
                    {tiers.map((tier, i) => (
                        <div key={i} className={`p-8 md:p-10 flex flex-col ${
                            tier.highlight ? 'bg-black text-white' : 'bg-white text-black'
                        } ${i < tiers.length - 1 ? 'border-b md:border-b-0 md:border-r border-gray-400' : ''}`}>
                            {/* Tier name */}
                            <span className={`font-anon text-xs uppercase tracking-widest block mb-6 ${tier.highlight ? 'text-secondary-500' : 'text-gray-400'}`}>
                                {tier.name}
                            </span>

                            {/* Price */}
                            <div className="mb-2">
                                <span className="font-space font-bold text-4xl lg:text-5xl uppercase tracking-wide">
                                    {tier.price}
                                </span>
                                {tier.period && (
                                    <span className={`font-anek-latin text-sm ml-1 ${tier.highlight ? 'text-white/60' : 'text-black-light'}`}>
                                        /{tier.period}
                                    </span>
                                )}
                            </div>

                            {/* Description */}
                            <p className={`font-anek-latin text-sm leading-relaxed mb-8 ${tier.highlight ? 'text-white/70' : 'text-black-light'}`}>
                                {tier.description}
                            </p>

                            {/* Features list */}
                            <ul className="space-y-3 mb-10 flex-1">
                                {tier.features.map((feature, j) => (
                                    <li key={j} className="flex items-start gap-2">
                                        <span className={`text-xs mt-0.5 ${tier.highlight ? 'text-secondary-500' : 'text-primary-500'}`}>✓</span>
                                        <span className={`font-anek-latin text-sm ${tier.highlight ? 'text-white/80' : 'text-black-light'}`}>{feature}</span>
                                    </li>
                                ))}
                            </ul>

                            {/* CTA */}
                            <Button
                                variant={tier.highlight ? 'light' : 'dark'}
                                href={tier.buttonHref}
                            >
                                {tier.buttonText}
                            </Button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
