import { ReactNode } from 'react';

export interface PainsProps {
    titles: ReactNode[];
    description: ReactNode;
    items: { image: string; title: string; description: ReactNode }[];
}

export default function Pains({ titles, description, items }: PainsProps) {
    return (
        <section className="bg-primary-500 font-anek-latin text-white xl:p-40 md:px-24 px-6 py-16">
            <div className="md:max-w-4xl mx-auto text-center">
                {titles.map((t, i) => (
                    <h1 key={i} className={`lg:text-6xl md:text-5xl text-2xl ${i === titles.length - 1 ? 'lg:mb-12 mb-8' : 'lg:mb-8'} font-bold font-space`}>{t}</h1>
                ))}
                <p className="max-w-xl sm text-sm md:text-lg mx-auto">
                    {description}
                </p>
            </div>
            <div className="container mx-auto grid md:grid-cols-3 grid-cols-1 gap-16 mt-20">
                {items.map((item, i) => (
                    <div key={i}>
                        <img src={item.image}/>
                        <h3 className="uppercase font-bold my-6">{item.title}</h3>
                        <p className="text-sm md:text-lg">
                            {item.description}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    )
}