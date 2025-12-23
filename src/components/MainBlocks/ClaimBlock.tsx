import { Button } from "../Common/Button";

export default function ClaimBlock() {
    return (
        <section className="border border-gray-400 border-t-0 border-b-0 container mx-auto md:py-36 md:pb-12 md:p-12 px-6 py-16">
            <h2 className="max-w-5xl md:text-5xl text-3xl font-space mb-12">
                Designed to move from experimentation to production with just a few clicks.
            </h2>
            <Button variant="dark" href="#" className="!md:px-32 !md:py-6 md:text-xl">Launch Console</Button>
        </section>
    )
}
