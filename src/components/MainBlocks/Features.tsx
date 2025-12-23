import screenshot from '../../assets/images/screenshot.png'
import solana from "../../assets/images/brands/solana.png"

export default function Features() {
    return (
        <section className="border border-gray-400 border-t-0 border-b-0 container mx-auto pt-16 pb-36 px-6">
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">
                {/* desktop hidden */}
                <div className="flex flex-col justify-between gap-8">
                    <div className="flex flex-col gap-2">
                        <h3 className="font-space font-bold text-xl text-primary-500 uppercase">Multi-framework creation</h3>
                        <p className="font-anek-latin">Create and manage agents built on widely used frameworks: OpenAI, LLaMA, ElizaOS, Ollama, Cohere.</p>
                        <p className="font-anek-latin font-bold uppercase">All executed under a unified operational model, with integrated access to their plugin ecosystems.</p>
                    </div>
                    <div className="flex flex-col gap-2">
                        <h3 className="font-space font-bold text-xl text-primary-500 uppercase">Self-service infrastructure</h3>
                        <p className="font-anek-latin">GPU, CPU, RAM, and storage. Horizontal and vertical scaling on demand, without operational friction.</p>
                        <p className="font-anek-latin font-bold uppercase">Assign dedicated resources per agent</p>
                    </div>
                    <div className="flex flex-col gap-2">
                        <h3 className="font-space font-bold text-xl text-primary-500 uppercase">Universal API</h3>
                        <p className="font-anek-latin">Consume your agents wherever you need them.</p>
                        <p className="font-anek-latin">Access via REST, SDKs, or webhooks.</p>
                        <p className="font-anek-latin font-bold uppercase">Direct integration with applications, products, or existing systems.</p>
                    </div>
                </div>

                <div className='flex justify-center items-center my-8 md:my-0'>
                    <img src={screenshot} alt="" className='rounded-3xl'/>
                </div>

                <div className="flex flex-col justify-between gap-8">
                    <div className="flex flex-col gap-2">
                        <h3 className="font-space font-bold text-xl text-primary-500 uppercase">Native monetization</h3>
                        <p className="font-anek-latin">Expose agents as services</p>
                        <ul className="font-anek-latin list-disc list-inside">
                            <li>Usage metering</li>
                            <li>Access plans</li>
                        </ul>
                        <p className="font-anek-latin font-bold uppercase">No external layers required.</p>
                    </div>
                    <div className="flex flex-col gap-2">
                        <h3 className="font-space font-bold text-xl text-primary-500 uppercase">Security first, always</h3>
                        <p className="font-anek-latin">Your data, profiles and accounts stay safe. [NAME] uses good cybersecurity practices (2fa, db encryption, SSL encrypted communications...) and protects your personal info.</p>
                        <p className="font-anek-latin font-bold uppercase">Start Securely</p>
                    </div>
                    <div className="flex flex-col gap-2">
                        <h3 className="font-space font-bold text-xl text-primary-500 uppercase">Marketplace and extensions</h3>
                        <p className="font-anek-latin">Extend agent capabilities through integrated extensions and services. Add skills, connect external sources, and compose behaviors without modifying the agent core.</p>
                        <p className="font-anek-latin font-bold uppercase">Full access to the whole agentic ecosystem in one place</p>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-5 gap-4 justify-items-center items-center lg:mt-48 mt-20 bg-white">
                <img src={solana} alt="brand logo" className="lg:h-4 h-2 mix-blend-luminosity opacity-50"/>
                <img src={solana} alt="brand logo" className="lg:h-4 h-2 mix-blend-luminosity opacity-50"/>
                <img src={solana} alt="brand logo" className="lg:h-4 h-2 mix-blend-luminosity opacity-50"/>
                <img src={solana} alt="brand logo" className="lg:h-4 h-2 mix-blend-luminosity opacity-50"/>
                <img src={solana} alt="brand logo" className="lg:h-4 h-2 mix-blend-luminosity opacity-50"/>
            </div>
        </section>
    )
}
