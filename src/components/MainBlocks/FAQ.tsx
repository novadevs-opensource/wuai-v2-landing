import Accordion, { AccordionItem } from "../Common/Accordion";

export default function FAQ() {
    const questions: AccordionItem[] = [
        {
            title: 'Do I need to know how to code?',
            content: <p>You only need to provide your API keys/credentials and configure your agent's behavior through our dashboard.</p>
        },
        {
            title: 'Can I run multiple agents at the same time?',
            content: <p>Yes. Each agent runs as an independent instance with isolated, dedicated resources. If you want you can also mix different frameworks (like Eliza and OpenAI) simultaneously in one dashboard.</p>
        },
        {
            title: 'Can I choose where my agent runs?',
            content: <p>Absolutely. You can deploy agents on our high-performance cloud infrastructure (selecting the specific machine resources to optimize costs) or run them on your local machine paying for the exportation.</p>
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
