//import square from '../../assets/images/square.png';
import upload from '../../assets/images/upload.png';


export default function Pains() {
    return (
        <section className="bg-primary-500 font-anek-latin text-white xl:p-40 md:px-24 px-6 py-16">
            <div className="md:max-w-xl mx-auto text-center">
                <h1 className="lg:text-6xl md:text-5xl text-4xl mb-12 font-bold font-space">Take back control of your day</h1>
                <p className="text-sm md:text-lg">
                    Your digital life is a mess. It’s a constant stream of information that’s hard to manage. You feel like you’re always one step behind, spending your day sifting through irrelevant content instead of being productive.
                </p>
            </div>
            <div className="container mx-auto grid md:grid-cols-3 grid-cols-1 gap-16 mt-20">
                <div>
                    <img src={upload}/>
                    <h3 className="uppercase font-bold my-6">Social media struggle</h3>
                    <p className="text-sm md:text-lg">
                        Good content exists, but distractions waste your time. [NAME] puts everything together. It shows only what matters, so you always know what’s important.
                    </p>
                </div>
                <div>
                    <img src={upload}/>
                    <h3 className="uppercase font-bold my-6">Always ahead</h3>
                    <p className="text-sm md:text-lg">
                        [NAME] works ahead for you. It checks your calendar and inbox, prepares meeting notes, drafts urgent replies, and suggests social media content.
                    </p>
                </div>
                <div>
                    <img src={upload}/>
                    <h3 className="uppercase font-bold my-6">Digital overload</h3>
                    <p className="text-sm md:text-lg">
                        Too many apps and notifications. Hard to keep up. You react to messages instead of doing important work. Digital stress makes you feel worn out and less creative.
                    </p>
                </div>
            </div>
        </section>
    )
}