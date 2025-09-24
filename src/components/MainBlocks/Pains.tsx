import square from '../../assets/images/square.png';
import upload from '../../assets/images/upload.png';


export default function Pains() {
    return (
        <section className="bg-primary-500 font-anek-latin text-white p-40">
            <div className="max-w-xl mx-auto text-center">
                <h1 className="text-6xl mb-12 font-bold font-space">Take back control of your day</h1>
                <p className="text-sm">
                    Your feeds, emails, and endless notifications shouldn’t run your life. With [NAME], you cut through the noise and keep only what really matters so you can finally focus on what moves you forward.
                </p>
            </div>
            <div className="container mx-auto grid grid-cols-3 gap-16 mt-20">
                <div>
                    <img src={square}/>
                    <h3 className="uppercase font-bold my-6">Too many apps, one smart hub.</h3>
                    <p className="text-sm">
                        [NAME] brings your emails, messages, and feeds together in one clear dashboard. No more switching apps or chasing pings, just the essentials in one place, so you stay focused and in control.
                    </p>
                </div>
                <div>
                    <img src={upload}/>
                    <h3 className="uppercase font-bold my-6">Less noise, more progress.</h3>
                    <p className="text-sm">
                        Instead of drowning in notifications, [NAME] filters out the clutter and highlights what truly matters. It drafts replies, prepares notes, and helps you act faster giving you back hours for real work and life.
                    </p>
                </div>
                <div>
                    <img src={upload}/>
                    <h3 className="uppercase font-bold my-6">An AI that speaks your voice.</h3>
                    <p className="text-sm">
                        [NAME] adapts to your style and priorities. From emails to social posts, it keeps your tone consistent and learns with every interaction, so your digital presence feels effortless and always on point.
                    </p>
                </div>
            </div>
        </section>
    )
}