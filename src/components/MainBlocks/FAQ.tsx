import Accordion, { AccordionItem } from "../Common/Accordion";

export default function FAQ() {
    const questions: AccordionItem[] = [
        {
            title: 'Do I need to know how to code?',
            content: <p>Not necessarily. You can create agents without code, and extend them when needed using APIs, webhooks, or SDKs.</p>
        },
        {
            title: 'Can I run multiple agents at the same time?',
            content: <p>Yes. Each agent runs as an independent instance with isolated, dedicated resources.</p>
        },
        {
            title: 'Can I monetize my agents?',
            content: <p>Yes. The platform includes mechanisms to expose agents as services and manage access and consumption.</p>
        },
    ]
    return (
        <div className="bg-secondary-500">
            <section className="border border-gray-400 border-t-0 border-b-0 container mx-auto px-6 py-16 lg:p-12 lg:py-36">
                <h2 className="w-full lg:text-5xl text-3xl font-space mb-12 text-center font-bold">
                    Frequently Asked Questions
                </h2>
                <div className="max-w-2xl mx-auto">
                    <Accordion items={questions}/>
                </div>
            </section>
        </div>
    )
}
