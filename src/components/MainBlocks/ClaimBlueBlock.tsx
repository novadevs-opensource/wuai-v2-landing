import { Button } from "../Common/Button";

export default function ClaimBlueBlock() {
    return (
        <section className="bg-primary-500 bg-[url('../../assets/images/square-network.png')] bg-repeat bg-contain bg-top py-36 px-6 lg:px-12 font-space uppercase font-bold text-center text-white">
            <h3 className="w-full text-5xl lg:text-8xl font-space mb-4">
                Your Digital 
            </h3>
            <h3 className="w-full text-5xl lg:text-8xl font-space mb-4">
                Orchestrator, 
            </h3>
            <h3 className="w-full text-5xl lg:text-8xl font-space mb-4">
                Your Life Simplified. 
            </h3>
            <Button variant="light" href="#" className="!px-24 mt-12">CTA</Button>
        </section>
    )
}
