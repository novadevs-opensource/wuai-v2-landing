import { FaEnvelope, FaPlay, FaTelegram, FaXTwitter } from "react-icons/fa6";
import Link from "next/link";
import React, { ReactNode } from "react";

const logoWhite = "/images/logo/guayaba_horizontal_white.svg";
const logoBlack = "/images/logo/guayaba_horizontal_blue.svg";

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
    socialLinks: { type: string; href: string; label: string }[];
    bottomLinks: { name: string; href: string }[];
}

export default function Footer({ title, description, subtitle, contactText, contactHref, socialLinks, bottomLinks }: FooterProps) {
    const renderSocialLinks = () => (
        <>
            {socialLinks.map((link, i) => {
                const Icon = socialIcons[link.type];
                return Icon ? (
                    <a key={i} className="font-space text-xs uppercase tracking-widest flex flex-row items-center gap-3 hover:opacity-70 transition-opacity" target="_blank" href={link.href}>
                        <span>{link.label}</span>
                        <span className="bg-primary-500 h-7 w-7 flex items-center justify-center">
                            <Icon className="text-sm"/>
                        </span>
                    </a>
                ) : null;
            })}
        </>
    );

    return (
        <section className="bg-[#000000] text-white overflow-hidden">

            <div className="relative hidden md:block">
                <div className="md:px-12 px-6 pt-20 md:pt-28">
                    <img src={logoWhite} alt="Logo" className="w-full md:w-3/4 opacity-[0.18] select-none pointer-events-none" />
                </div>
            </div>

            <div className="md:px-12 px-6 pt-20 md:pt-0 md:-mt-24 lg:-mt-32 relative z-10">

                <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-20">
                    <div className="lg:col-span-3">
                        <h3 className="font-space font-bold text-4xl md:text-5xl lg:text-6xl uppercase tracking-wide leading-tight mb-8">{title}</h3>
                        <p className="font-anek-latin text-sm md:text-base text-white leading-relaxed max-w-lg mb-1">{description}</p>
                        <p className="font-anek-latin text-sm md:text-base text-white leading-relaxed max-w-lg">{subtitle}</p>
                    </div>
                    <div className="lg:col-span-2 hidden lg:flex flex-col justify-end">
                        <div className="flex flex-row flex-wrap items-center gap-6">
                            <a className="font-space text-xs uppercase tracking-widest flex flex-row items-center gap-3 hover:opacity-70 transition-opacity" href={contactHref}>
                                <span>{contactText}</span>
                                <span className="bg-primary-500 h-7 w-7 flex items-center justify-center">
                                    <FaPlay className="text-[10px]"/>
                                </span>
                            </a>
                            {renderSocialLinks()}
                        </div>
                    </div>
                </div>
            </div>

            <div className="md:px-12 px-6 bg-white border-b border-gray-300 mt-20">
                <div className="h-px bg-white/10 mt-16 mb-8"></div>
                <div className="pb-8">
                    <img src={logoBlack} alt="Logo" className="h-4 w-auto object-contain object-left mb-6" />
                    <div className="grid grid-cols-2 lg:grid-cols-1 gap-6">
                        <div className="flex flex-col lg:flex-row gap-3 lg:gap-6">
                            {bottomLinks.map((link, i) => {
                                const isExternal = link.href.startsWith('http') || link.href.startsWith('mailto:');
                                return isExternal ? (
                                    <a key={i} href={link.href} target="_blank" rel="noopener noreferrer" className="font-space text-[10px] uppercase tracking-widest text-black hover:opacity-70 transition-opacity">{link.name}</a>
                                ) : (
                                    <Link key={i} href={link.href} className="font-space text-[10px] uppercase tracking-widest text-black hover:opacity-70 transition-opacity">{link.name}</Link>
                                );
                            })}
                        </div>
                        <div className="flex flex-col gap-3 lg:hidden">
                            <a href={contactHref} className="flex items-center gap-2 text-black hover:text-primary-500 transition-colors">
                                <FaEnvelope className="text-sm"/>
                                <span className="font-space text-[10px] uppercase tracking-widest">{contactText}</span>
                            </a>
                            {socialLinks.map((link, i) => {
                                const Icon = socialIcons[link.type];
                                return Icon ? (
                                    <a key={i} href={link.href} target="_blank" className="flex items-center gap-2 text-black hover:text-primary-500 transition-colors">
                                        <Icon className="text-sm"/>
                                        <span className="font-space text-[10px] uppercase tracking-widest">{link.label}</span>
                                    </a>
                                ) : null;
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
