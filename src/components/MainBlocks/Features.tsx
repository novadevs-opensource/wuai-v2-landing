import screenshot from '../../assets/images/screenshot.png'

export default function Features() {
    return (
        <section className="border border-gray-400 border-t-0 border-b-0 container mx-auto py-36 p-12">
            <div className="grid grid-cols-3 gap-4">
                <div className="flex flex-col justify-between">
                    <div className="flex flex-col gap-2">
                        <h3 className="font-space font-bold text-xl text-primary-500 uppercase">A Partner That Learns</h3>
                        <p className="font-anek-latin">[NAME] is a growing partner. It learns your needs and style, giving better tips every time.</p>
                        <p className="font-anek-latin font-bold uppercase">Get a partner that grows with you</p>
                    </div>
                    <div className="flex flex-col gap-2">
                        <h3 className="font-space font-bold text-xl text-primary-500 uppercase">A Partner That Learns</h3>
                        <p className="font-anek-latin">[NAME] is a growing partner. It learns your needs and style, giving better tips every time.</p>
                        <p className="font-anek-latin font-bold uppercase">Get a partner that grows with you</p>
                    </div>
                    <div className="flex flex-col gap-2">
                        <h3 className="font-space font-bold text-xl text-primary-500 uppercase">A Partner That Learns</h3>
                        <p className="font-anek-latin">[NAME] is a growing partner. It learns your needs and style, giving better tips every time.</p>
                        <p className="font-anek-latin font-bold uppercase">Get a partner that grows with you</p>
                    </div>
                </div>

                <div className='flex justify-center items-center'>
                    <img src={screenshot} alt="" />
                </div>

                <div className="flex flex-col justify-between">
                    <div className="flex flex-col gap-2">
                        <h3 className="font-space font-bold text-xl text-primary-500 uppercase">A Partner That Learns</h3>
                        <p className="font-anek-latin">[NAME] is a growing partner. It learns your needs and style, giving better tips every time.</p>
                        <p className="font-anek-latin font-bold uppercase">Get a partner that grows with you</p>
                    </div>
                    <div className="flex flex-col gap-2">
                        <h3 className="font-space font-bold text-xl text-primary-500 uppercase">A Partner That Learns</h3>
                        <p className="font-anek-latin">[NAME] is a growing partner. It learns your needs and style, giving better tips every time.</p>
                        <p className="font-anek-latin font-bold uppercase">Get a partner that grows with you</p>
                    </div>
                    <div className="flex flex-col gap-2">
                        <h3 className="font-space font-bold text-xl text-primary-500 uppercase">A Partner That Learns</h3>
                        <p className="font-anek-latin">[NAME] is a growing partner. It learns your needs and style, giving better tips every time.</p>
                        <p className="font-anek-latin font-bold uppercase">Get a partner that grows with you</p>
                    </div>
                </div>
            </div>
        </section>
    )
}
