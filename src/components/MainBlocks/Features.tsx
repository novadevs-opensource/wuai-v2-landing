import { ReactNode } from 'react';

export interface FeatureItem {
    title: string;
    descriptions: ReactNode[];
    boldDescription: ReactNode;
}

export interface FeaturesProps {
    leftFeatures: FeatureItem[];
    screenshotImage: string;
    rightFeatures: FeatureItem[];
    brandLogos: string[];
}

export default function Features({ leftFeatures, screenshotImage, rightFeatures, brandLogos }: FeaturesProps) {
    const renderFeatureColumn = (features: FeatureItem[]) => (
        <div className="flex flex-col justify-between gap-8">
            {features.map((feature, i) => (
                <div key={i} className="flex flex-col gap-2">
                    <h3 className="font-space font-bold text-xl text-primary-500 uppercase">{feature.title}</h3>
                    {feature.descriptions.map((desc, j) => (
                        <p key={j} className="font-anek-latin">{desc}</p>
                    ))}
                    <p className="font-anek-latin font-bold uppercase">{feature.boldDescription}</p>
                </div>
            ))}
        </div>
    );

    return (
        <section className="border border-gray-400 border-t-0 border-b-0 bordered-container mx-auto md:py-36 md:pb-12 md:p-12 px-6 py-16 grain">
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">
                {/* desktop hidden */}
                {renderFeatureColumn(leftFeatures)}

                <div className='flex justify-center items-center my-8 md:my-0'>
                    <img src={screenshotImage} alt="" className='rounded-3xl'/>
                </div>

                {renderFeatureColumn(rightFeatures)}
            </div>

            <div className="grid grid-cols-5 gap-4 justify-items-center items-center lg:mt-48 mt-20 bg-white">
                {brandLogos.map((logo, i) => (
                    <img key={i} src={logo} alt="brand logo" className="lg:h-4 h-2 mix-blend-luminosity opacity-50"/>
                ))}
            </div>
        </section>
    )
}
