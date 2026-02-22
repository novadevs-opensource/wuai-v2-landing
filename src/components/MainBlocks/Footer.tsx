import { FaPlay, FaTelegram, FaXTwitter } from "react-icons/fa6";
import logoWhite from "../../assets/images/wuai-logo-white.svg"
import React from "react";

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
                    <a key={i} className="rounded-full h-12 w-12 bg-white flex items-center justify-center hover:opacity-50" target="_blank" href={link.href}>
                        <Icon className="text-black text-3xl"/>
                    </a>
                ) : null;
            })}
        </>
    );

    return (
        <section className="p-6 bg-black">
            <div className="container mx-auto text-white pt-24 pb-12">
                <div className="md:w-1/2">
                    <h3 className="font-space text-4xl mb-4">{title}</h3>
                    <p className="font-anek-latin">{description}</p>
                    <p className="font-anek-latin">{subtitle}</p>
                    <div className="mt-12">
                        <a className="font-anek-latin uppercase flex flex-row items-center gap-4 hover:opacity-50 hover:underline" href={contactHref}>
                            <span>{contactText}</span>
                            <span className="bg-primary-500 rounded-full h-8 w-8 flex items-center justify-center">
                                <FaPlay/>
                            </span>
                        </a>
                    </div>
                </div>
                
                <div>
                    <div className="hidden md:flex flex-row justify-end gap-2">
                        {renderSocialLinks()}
                    </div>
                    <div className="border border-gray-600 border-l-0 border-b-0 border-r-0 my-6"></div>
                    <div className="flex md:flex-row flex-col md:items-center md:justify-between">
                        <img src={logoWhite} className="w-1/3 md:w-auto mb-4" />
                        <div className="flex flex-row gap-4 text-gray-300">
                            {bottomLinks.map((link, i) => (
                                <a key={i} href={link.href} className="hover:opacity-50">{link.name}</a>
                            ))}
                        </div>
                    </div>
                    <div className="flex flex-row gap-2 md:hidden block mt-4">
                        {renderSocialLinks()}
                    </div>
                </div>
            </div>
        </section>
    )
}