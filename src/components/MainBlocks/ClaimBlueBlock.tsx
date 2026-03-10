import { ReactNode } from 'react';
import { Button } from "../Common/Button";

export interface ClaimBlueBlockProps {
    title: ReactNode;
    buttonText: string;
    buttonHref: string;
}

export default function ClaimBlueBlock({ title, buttonText, buttonHref }: ClaimBlueBlockProps) {
    return (
        <section className="bg-primary-500 py-36 px-6 lg:px-12 font-space uppercase font-bold text-center text-white relative overflow-hidden border-t border-b border-black">
            {/* Animated grid pattern background */}
            <div 
                className="absolute inset-0 opacity-[0.12] animate-pattern-slide-horizontal"
                style={{
                    backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 2.5px, white 2.5px, white 5px),
                                     repeating-linear-gradient(90deg, transparent, transparent 2.5px, white 2.5px, white 5px)`,
                    backgroundSize: '10px 10px',
                    backfaceVisibility: 'hidden',
                    transform: 'translateZ(0)'
                }}
            ></div>
            
            <div className="relative z-10">
                <h3 className="w-full text-5xl lg:text-6xl font-space mb-4">
                    {title}
                </h3>
                <Button variant="light" href={buttonHref} className="!px-24 mt-12">{buttonText}</Button>
            </div>
        </section>
    )
}
