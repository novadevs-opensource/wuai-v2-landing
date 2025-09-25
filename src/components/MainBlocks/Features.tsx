import screenshot from '../../assets/images/screenshot.png'

export default function Features() {
    return (
        <section className="border border-gray-400 border-t-0 border-b-0 container mx-auto pt-16 pb-36 px-6">
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">
                {/* desktop hidden */}
                <div className="flex flex-col justify-between gap-8">
                    <div className="flex flex-col gap-2">
                        <h3 className="font-space font-bold text-xl text-primary-500 uppercase">1 A Partner That Learns</h3>
                        <p className="font-anek-latin">[NAME] is a growing partner. It learns your needs and style, giving better tips every time.</p>
                        <p className="font-anek-latin font-bold uppercase">Get a partner that grows with you</p>
                    </div>
                    <div className="flex flex-col gap-2">
                        <h3 className="font-space font-bold text-xl text-primary-500 uppercase">2 A Partner That Learns</h3>
                        <p className="font-anek-latin">[NAME] is a growing partner. It learns your needs and style, giving better tips every time.</p>
                        <p className="font-anek-latin font-bold uppercase">Get a partner that grows with you</p>
                    </div>
                    <div className="flex flex-col gap-2">
                        <h3 className="font-space font-bold text-xl text-primary-500 uppercase">3 A Partner That Learns</h3>
                        <p className="font-anek-latin">[NAME] is a growing partner. It learns your needs and style, giving better tips every time.</p>
                        <p className="font-anek-latin font-bold uppercase">Get a partner that grows with you</p>
                    </div>
                </div>

                <div className='flex justify-center items-center my-8 md:my-0'>
                    <img src={screenshot} alt="" className='rounded-3xl'/>
                </div>

                <div className="flex flex-col justify-between gap-8">
                    <div className="flex flex-col gap-2">
                        <h3 className="font-space font-bold text-xl text-primary-500 uppercase">4 A Partner That Learns</h3>
                        <p className="font-anek-latin">[NAME] is a growing partner. It learns your needs and style, giving better tips every time.</p>
                        <p className="font-anek-latin font-bold uppercase">Get a partner that grows with you</p>
                    </div>
                    <div className="flex flex-col gap-2">
                        <h3 className="font-space font-bold text-xl text-primary-500 uppercase">5 A Partner That Learns</h3>
                        <p className="font-anek-latin">[NAME] is a growing partner. It learns your needs and style, giving better tips every time.</p>
                        <p className="font-anek-latin font-bold uppercase">Get a partner that grows with you</p>
                    </div>
                    <div className="flex flex-col gap-2">
                        <h3 className="font-space font-bold text-xl text-primary-500 uppercase">6.1 A Partner That Learns</h3>
                        <p className="font-anek-latin">[NAME] is a growing partner. It learns your needs and style, giving better tips every time.</p>
                        <p className="font-anek-latin font-bold uppercase">Get a partner that grows with you</p>
                    </div>
                </div>
            </div>
        </section>
    )
}
