import screenshot from '../../assets/images/screenshot.png'

export default function Features() {
    return (
        <section className="border border-gray-400 border-t-0 border-b-0 container mx-auto pt-16 pb-36 px-6">
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">
                {/* desktop hidden */}
                <div className="flex flex-col justify-between gap-8">
                    <div className="flex flex-col gap-2">
                        <h3 className="font-space font-bold text-xl text-primary-500 uppercase">A Partner That Learns</h3>
                        <p className="font-anek-latin">[NAME] is a growing partner. It learns your needs and style, giving better tips every time.</p>
                        <p className="font-anek-latin font-bold uppercase">Get a partner that grows with you</p>
                    </div>
                    <div className="flex flex-col gap-2">
                        <h3 className="font-space font-bold text-xl text-primary-500 uppercase">Unify your digital life</h3>
                        <p className="font-anek-latin">All in one place. [NAME] puts emails, messages, and social feeds on one smart dashboard. Stop wasting time switching apps.</p>
                        <p className="font-anek-latin font-bold uppercase">Start your day with clarity or say “gm” with clarity</p>
                    </div>
                    <div className="flex flex-col gap-2">
                        <h3 className="font-space font-bold text-xl text-primary-500 uppercase">Communicate in your voice</h3>
                        <p className="font-anek-latin">[NAME] matches your tone. It knows when to be formal or casual, so every message feels like you.</p>
                        <p className="font-anek-latin">No more switching tones. [NAME] keeps your tone consistent and authentic everywhere.</p>
                        <p className="font-anek-latin font-bold uppercase">Let [NAME] speak for you / unify your tone / build your AI voice</p>
                    </div>
                </div>

                <div className='flex justify-center items-center my-8 md:my-0'>
                    <img src={screenshot} alt="" className='rounded-3xl'/>
                </div>

                <div className="flex flex-col justify-between gap-8">
                    <div className="flex flex-col gap-2">
                        <h3 className="font-space font-bold text-xl text-primary-500 uppercase">Your AI that’s always ahead</h3>
                        <p className="font-anek-latin">[NAME] works before you ask. It suggests replies, drafts posts, and manages tasks so you can focus on what matters.</p>
                        <p className="font-anek-latin font-bold uppercase">Automate your day</p>
                    </div>
                    <div className="flex flex-col gap-2">
                        <h3 className="font-space font-bold text-xl text-primary-500 uppercase">Security first, always</h3>
                        <p className="font-anek-latin">Your data, profiles and accounts stay safe. [NAME] uses good cybersecurity practices (2fa, db encryption, SSL encrypted communications...) and protects your personal info.</p>
                        <p className="font-anek-latin font-bold uppercase">Start Securely</p>
                    </div>
                    <div className="flex flex-col gap-2">
                        <h3 className="font-space font-bold text-xl text-primary-500 uppercase">One clear view</h3>
                        <p className="font-anek-latin">See/Monitorize key emails, messages, and updates in one place. All emails, messages, and social feeds in one smart place. No more app switching.</p>
                        <p className="font-anek-latin font-bold uppercase">Get a partner that grows with you</p>
                    </div>
                </div>
            </div>
        </section>
    )
}
