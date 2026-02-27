import { ReactNode } from 'react';
import Accordion, { AccordionItem } from "../Common/Accordion";

export interface FAQQuestion {
    title: string;
    content: ReactNode;
}

export interface FAQProps {
    title: string;
    questions: FAQQuestion[];
}

export default function FAQ({ title, questions }: FAQProps) {
    const accordionItems: AccordionItem[] = questions.map(q => ({
        title: q.title,
        content: q.content
    }));

    return (
        <div className="bg-secondary-500">
            <section id="faq" className="border border-gray-400 border-t-0 border-b-0 bordered-container mx-auto px-6 py-16 lg:p-12 lg:py-36 scroll-mt-16">
                <h2 className="w-full lg:text-5xl text-3xl font-space mb-12 text-center font-bold">
                    {title}
                </h2>
                <div className="max-w-2xl mx-auto">
                    <Accordion items={accordionItems}/>
                </div>
            </section>
        </div>
    )
}
