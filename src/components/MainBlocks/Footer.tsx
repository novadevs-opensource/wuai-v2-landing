import { FaPlay, FaTelegram, FaXTwitter } from "react-icons/fa6";
import logoWhite from "../../assets/images/wuai-logo-white.svg"
import logoBlack from "../../assets/images/wuai-logo-purple.svg"
import React, { ReactNode } from "react";

const socialIcons: Record<string, React.ElementType> = {
    telegram: FaTelegram,
    twitter: FaXTwitter,
};

export interface FooterProps {
    title: ReactNode;
    description: ReactNode;
    subtitle: ReactNode;
    contactText: string;
    contactHref: string;
    socialLinks: { type: string; href: string }[];
    bottomLinks: { name: string; href: string }[];
}

export default function Footer({ title, description, subtitle, contactText, contactHref, socialLinks, bottomLinks }: FooterProps) {
    const renderSocialLinks = () => (
        <>
            {socialLinks.map((link, i) => {
                const Icon = socialIcons[link.type];
                return Icon ? (
                    <a key={i} className="h-10 w-10 border border-white/20 flex items-center justify-center hover:bg-white/10 transition-colors" target="_blank" href={link.href}>
                        <Icon className="text-white text-lg"/>
                    </a>
                ) : null;
            })}
        </>
    );

    return (
        <section className="bg-[#000000] text-white overflow-hidden">

            {/* Giant logo watermark — hidden on mobile */}
            <div className="relative hidden md:block">
                <div className="md:px-12 px-6 pt-20 md:pt-28">
                    <img src={logoWhite} alt="Logo" className="w-full md:w-3/4 opacity-[0.18] select-none pointer-events-none" />
                </div>
            </div>

            {/* Content overlapping the logo */}
            <div className="md:px-12 px-6 pt-20 md:pt-0 md:-mt-24 lg:-mt-32 relative z-10">

                {/* Two-column: info left, contact + social right */}
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-20">
                    <div className="lg:col-span-3">
                        <h3 className="font-space font-bold text-4xl md:text-5xl lg:text-6xl uppercase tracking-wide leading-tight mb-8">{title}</h3>
                        <p className="font-anek-latin text-sm md:text-base text-white leading-relaxed max-w-lg mb-1">{description}</p>
                        <p className="font-anek-latin text-sm md:text-base text-white leading-relaxed max-w-lg">{subtitle}</p>
                    </div>
                    <div className="lg:col-span-2 flex flex-col justify-end">
                        <a className="font-space text-xs uppercase tracking-widest flex flex-row items-center gap-3 hover:opacity-70 transition-opacity mb-8" href={contactHref}>
                            <span>{contactText}</span>
                            <span className="bg-primary-500 h-7 w-7 flex items-center justify-center">
                                <FaPlay className="text-[10px]"/>
                            </span>
                        </a>
                        <div className="flex flex-row gap-2">
                            {renderSocialLinks()}
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom bar */}
            <div className="md:px-12 px-6 bg-white border-b border-gray-300 mt-20">
                <div className="h-px bg-white/10 mt-16 mb-8"></div>
                <div className="flex md:flex-row flex-col md:items-center md:justify-between gap-4 pb-8">
                    <img src={logoBlack} alt="Logo" className="h-4 w-auto object-contain object-left" />
                    <div className="flex flex-row gap-6">
                        {bottomLinks.map((link, i) => (
                            <a key={i} href={link.href} className="font-space text-[10px] uppercase tracking-widest text-black hover:opacity-70 transition-opacity">{link.name}</a>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}