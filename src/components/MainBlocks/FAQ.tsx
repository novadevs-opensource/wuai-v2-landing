import Accordion, { AccordionItem } from "../Common/Accordion";

export default function FAQ() {
    const questions: AccordionItem[] = [
        {
            title: 'Lorem ipsum dolor sit amet',
            content: <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sed sem eget metus placerat venenatis sed eu ipsum. Cras pretium libero et tortor pharetra aliquet. Phasellus id orci id nisl aliquam feugiat.</p>
        },
        {
            title: 'Lorem ipsum dolor sit amet',
            content: <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sed sem eget metus placerat venenatis sed eu ipsum. Cras pretium libero et tortor pharetra aliquet. Phasellus id orci id nisl aliquam feugiat.</p>
        },
        {
            title: 'Lorem ipsum dolor sit amet',
            content: <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sed sem eget metus placerat venenatis sed eu ipsum. Cras pretium libero et tortor pharetra aliquet. Phasellus id orci id nisl aliquam feugiat.</p>
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
