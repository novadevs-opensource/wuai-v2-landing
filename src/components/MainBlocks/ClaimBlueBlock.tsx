import { ReactNode } from 'react';
import { Button } from "../Common/Button";

export interface ClaimBlueBlockProps {
    title: ReactNode;
    buttonText: string;
    buttonHref: string;
}

export default function ClaimBlueBlock({ title, buttonText, buttonHref }: ClaimBlueBlockProps) {
    return (
        <section className="bg-primary-500 bg-[url('../../assets/images/square-network.png')] bg-repeat bg-contain bg-top py-36 px-6 lg:px-12 font-space uppercase font-bold text-center text-white">
            <h3 className="w-full text-5xl lg:text-6xl font-space mb-4">
                {title}
            </h3>
            <Button variant="light" href={buttonHref} className="!px-24 mt-12">{buttonText}</Button>
        </section>
    )
}
