import { Button } from "../Common/Button";

export default function ClaimBlock() {
    return (
        <section className="border border-gray-400 border-t-0 border-b-0 container mx-auto md:py-36 md:pb-12 md:p-12 px-6 py-16">
            <h2 className="max-w-5xl md:text-5xl text-3xl font-space mb-12">
                [NAME] organizes your digital world in one clear view, filters the noise, and works ahead of you so you stay focused on what really matters.
            </h2>
            <Button variant="dark" href="#" className="!md:px-32 !md:py-6 md:text-xl">CTA</Button>
        </section>
    )
}
