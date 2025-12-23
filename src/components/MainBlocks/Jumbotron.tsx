import React, { useState, useEffect, ReactNode } from "react";
import { Button } from "../Common/Button";
import Metaballs from "../Common/MetaBalls";

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
            <div className="lg:pt-48 lg:px-12 px-6 py-12 flex flex-col relative overflow-hidden">
                <div className="w-fit flex flex-row relative lg:mb-6 mb-1">
                    <h1 className="lg:text-3xl text-xl font-bold">{title}</h1>
                </div>
                <div className="">
                    <h2 className="mb-8 lg:text-6xl text-4xl font-bold font-space">
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
                <div className="my-12">
                    <Button variant="dark" href="#">Launch Console</Button>
                </div>
                <Metaballs/>
            </div>
        </section>
    );
};

export default Jumbotron;