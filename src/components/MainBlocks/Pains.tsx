//import square from '../../assets/images/square.png';
import upload from '../../assets/images/upload.png';


export default function Pains() {
    return (
        <section className="bg-primary-500 font-anek-latin text-white xl:p-40 md:px-24 px-6 py-16">
            <div className="md:max-w-4xl mx-auto text-center">
                <h1 className="lg:text-6xl md:text-5xl text-2xl lg:mb-8 font-bold font-space">Stop managing infrastructure</h1>
                <h1 className="lg:text-6xl md:text-5xl text-2xl lg:mb-12 mb-8 font-bold font-space">Start shipping Agents</h1>
                <p className="max-w-xl sm text-sm md:text-lg mx-auto">
                    The ecosystem is full of agents that work in demos, but fail when exposed to real-world production constraints. Setup, build and deploy your agents in a production-ready environment.
                </p>
            </div>
            <div className="container mx-auto grid md:grid-cols-3 grid-cols-1 gap-16 mt-20">
                <div>
                    <img src={upload}/>
                    <h3 className="uppercase font-bold my-6">Unified Ecosystem</h3>
                    <p className="text-sm md:text-lg">
                        Stop juggling multiple subscriptions and fragmented tools. Manage ElizaOS, OpenAI, Claude, and more from a single dashboard. One platform, infinite frameworks.
                    </p>
                </div>
                <div>
                    <img src={upload}/>
                    <h3 className="uppercase font-bold my-6">Zero-Ops Deployment</h3>
                    <p className="text-sm md:text-lg">
                        No coding skills or DevOps team required. Simply input your API keys and tokens. We handle the servers, security, and setup automatically. A completely no-code experience.
                    </p>
                </div>
                <div>
                    <img src={upload}/>
                    <h3 className="uppercase font-bold my-6">Open-Source friendly and monetization</h3>
                    <p className="text-sm md:text-lg">
                        Publish your own plugins to our marketplace directly from GitHub. Once our team verifies them, start monetizing your creations with built-in usage metering and access plans.
                    </p>
                </div>
            </div>
        </section>
    )
}