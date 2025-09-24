import React, { useState, useEffect, ReactNode } from "react";
import iconPlane from "../../assets/images/claim-icon-plane.png"
import { Button } from "../Common/Button";
import Metaballs from "../Common/MetaBalls";
import aws from "../../assets/images/brands/aws.png"
import phantom from "../../assets/images/brands/phantom.png"
import openrouter from "../../assets/images/brands/openrouter.png"
import privy from "../../assets/images/brands/privy.png"
import solana from "../../assets/images/brands/solana.png"

export interface JumbotronProps {
    title: string | ReactNode;
    mainClaim: string | ReactNode;
    ctas: string[];
}

const Jumbotron: React.FC<JumbotronProps> = ({ title, ctas, mainClaim }) => {
    const [currentCtaIndex, setCurrentCtaIndex] = useState(0);
    const [displayedText, setDisplayedText] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);
    
    useEffect(() => {
        if (ctas.length === 0) return;
        
        const currentCta = ctas[currentCtaIndex];
        const typeSpeed = 100;
        const deleteSpeed = 50;
        const pauseTime = 2000;
        
        let timeout: NodeJS.Timeout;
        
        if (!isDeleting) {
            // Writing
            if (displayedText.length < currentCta.length) {
                timeout = setTimeout(() => {
                    setDisplayedText(currentCta.slice(0, displayedText.length + 1));
                }, typeSpeed);
            } else {
                timeout = setTimeout(() => {
                    setIsDeleting(true);
                }, pauseTime);
            }
        } else {
            // Deleting
            if (displayedText.length > 0) {
                timeout = setTimeout(() => {
                    setDisplayedText(displayedText.slice(0, -1));
                }, deleteSpeed);
            } else {
                setIsDeleting(false);
                setCurrentCtaIndex((prev) => (prev + 1) % ctas.length);
            }
        }
        
        return () => clearTimeout(timeout);
    }, [displayedText, isDeleting, currentCtaIndex, ctas]);
    
    return (
        <section className="border border-gray-400 border-t-0 border-b-0 container mx-auto">
            <div className="py-48 px-12 flex flex-col relative overflow-hidden">
                <div className="w-fit flex flex-row relative mb-6">
                    <h1 className="text-3xl font-bold">{title}</h1>
                    <img src={iconPlane} className="right-[-100%] top-[80%] absolute"/>
                </div>
                <div className="">
                    <h2 className="mb-8 text-6xl font-bold font-space">
                        <span>{mainClaim}</span>
                        {ctas.length > 0 && (
                            <>
                                <span> </span>
                                <span className="text-primary-500">
                                    {displayedText}
                                    <span className="animate-pulse">|</span>
                                </span>
                            </>
                        )}
                    </h2>
                </div>
                <div>
                    <Button variant="dark" href="#">Launch App</Button>
                </div>
                <div className="grid grid-cols-5 justify-items-center items-center mt-40 bg-white">
                    <img src={solana} alt="brand logo" className="h-4 mix-blend-luminosity opacity-50"/>
                    <img src={aws} alt="brand logo" className="h-6 mix-blend-luminosity"/>
                    <img src={phantom} alt="brand logo" className="h-6 mix-blend-luminosity"/>
                    <img src={openrouter} alt="brand logo" className="h-6 mix-blend-luminosity opacity-50"/>
                    <img src={privy} alt="brand logo" className="h-5 mix-blend-luminosity opacity-50"/>
                </div>
                <Metaballs/>
            </div>
        </section>
    );
};

export default Jumbotron;