import React, { useState, useEffect, ReactNode } from "react";
import { Button } from "../Common/Button";

export interface JumbotronProps {
    title: string | ReactNode;
    mainClaim: string | ReactNode;
    ctas: string[];
    buttonText: string;
    buttonHref: string;
}

const Jumbotron: React.FC<JumbotronProps> = ({ title, ctas, mainClaim, buttonText, buttonHref }) => {
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
        <section className="border border-gray-400 border-t-0 border-b-0 bordered-container mx-auto grain">
            <div className="lg:py-48 lg:px-12 px-6 py-24 flex flex-col relative overflow-hidden">
                <div className="w-fit flex flex-row relative lg:mb-6 mb-1">
                    <h1 className="lg:text-2xl xl:text-3xl text-md font-bold">{title}</h1>
                </div>
                <div className="">
                    <h2 className="font-bold">
                        <span className="mr-2 mb-8 text-3xl lg:text-4xl xl:text-6xl">{mainClaim}</span>
                        {ctas.length > 0 && (
                            <>
                                <br className="sm:hidden"></br>
                                <span className="mb-8 text-3xl lg:text-4xl xl:text-6xl text-primary-500">
                                    {displayedText}
                                    <span className="animate-pulse">|</span>
                                </span>
                            </>
                        )}
                    </h2>
                </div>
                <div className="mt-14">
                    <Button variant="dark" href={buttonHref}>{buttonText}</Button>
                </div>
                {/* <Metaballs/> */}
            </div>
        </section>
    );
};

export default Jumbotron;