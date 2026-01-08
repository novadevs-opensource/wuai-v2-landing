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
                        <p className="font-anek-latin font-bold uppercase">All executed under a unified OS, with full access to each framework's whole plugin ecosystem.</p>
                    </div>
                    <div className="flex flex-col gap-2">
                        <h3 className="font-space font-bold text-xl text-primary-500 uppercase">Resource Allocation Optimize your costs</h3>
                        <p className="font-anek-latin">Choose the exact hardware (CPU/GPU/RAM) for each agent in the cloud, or run lightweight agents locally.</p>
                        <p className="font-anek-latin font-bold uppercase">Pay only for the resources you actually use.</p>
                    </div>
                    <div className="flex flex-col gap-2">
                        <h3 className="font-space font-bold text-xl text-primary-500 uppercase">Universal API</h3>
                        <p className="font-anek-latin">Integrate your agents wherever you need them.</p>
                        <p className="font-anek-latin">Vibecode your product using our OpenAPI specification with your favorite tools.</p>
                        <p className="font-anek-latin font-bold uppercase">Direct integration with applications, products, or existing systems.</p>
                    </div>
                </div>

                <div className='flex justify-center items-center my-8 md:my-0'>
                    <img src={screenshot} alt="" className='rounded-3xl'/>
                </div>

                <div className="flex flex-col justify-between gap-8">
                    <div className="flex flex-col gap-2">
                        <h3 className="font-space font-bold text-xl text-primary-500 uppercase">Your efforts are rewarded</h3>
                        <p className="font-anek-latin">Publish your own plugins to our marketplace directly from GitHub. Get the reputation you deserve.</p>
                        <p className="font-anek-latin font-bold uppercase">Sell your own plugins.</p>
                    </div>
                    <div className="flex flex-col gap-2">
                        <h3 className="font-space font-bold text-xl text-primary-500 uppercase">Institutional Grade Security</h3>
                        <p className="font-anek-latin">Your data, profiles and accounts stay safe. WuAI uses production grade security (2fa, db encryption, SSL encrypted communications...) and protects your personal info.</p>
                        <p className="font-anek-latin font-bold uppercase">Your keys and configurations are encrypted in secured systems.</p>
                    </div>
                    <div className="flex flex-col gap-2">
                        <h3 className="font-space font-bold text-xl text-primary-500 uppercase">Marketplace and extensions</h3>
                        <p className="font-anek-latin">Extend agent capabilities through integrated extensions and services. Add skills, connect external sources, and compose behaviors without modifying the agent core.</p>
                        <p className="font-anek-latin font-bold uppercase">Full access to the whole agentic ecosystem in one place.</p>
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
