//import square from '../../assets/images/square.png';
import upload from '../../assets/images/upload.png';


export default function Pains() {
    return (
        <section className="bg-primary-500 font-anek-latin text-white xl:p-40 md:px-24 px-6 py-16">
            <div className="md:max-w-xl mx-auto text-center">
                <h1 className="lg:text-6xl md:text-5xl text-4xl mb-12 font-bold font-space">Agents without infrastructure are not agents</h1>
                <p className="text-sm md:text-lg">
                    The ecosystem is full of agents that work in demos, but fail when exposed to real-world production constraints. Setup, build and deploy your agents in a production-ready environment.
                </p>
            </div>
            <div className="container mx-auto grid md:grid-cols-3 grid-cols-1 gap-16 mt-20">
                <div>
                    <img src={upload}/>
                    <h3 className="uppercase font-bold my-6">Lack of technical standardization</h3>
                    <p className="text-sm md:text-lg">
                        Each framework defines its own models, plugins, lifecycle, and APIs. Integrating them into a coherent system requires custom engineering and ongoing maintenance.
                    </p>
                </div>
                <div>
                    <img src={upload}/>
                    <h3 className="uppercase font-bold my-6">Lack of democratized deployment</h3>
                    <p className="text-sm md:text-lg">
                        Deploying an agent to production requires infrastructure, deployment, and operational expertise that limits adoption beyond specialized technical teams.
                    </p>
                </div>
                <div>
                    <img src={upload}/>
                    <h3 className="uppercase font-bold my-6">Complexity of real-world integration</h3>
                    <p className="text-sm md:text-lg">
                        Running agents in real environments without an infrastructure layer, every integration becomes a unique and difficult problem to scale.
                    </p>
                </div>
            </div>
        </section>
    )
}