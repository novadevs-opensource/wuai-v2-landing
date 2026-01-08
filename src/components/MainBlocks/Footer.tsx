import { FaPlay, FaTelegram, FaXTwitter } from "react-icons/fa6";
import logoWhite from "../../assets/images/wuai-logo-white.svg"

export default function Footer() {
    return (
        <section className="p-6 bg-black">
            <div className="container mx-auto text-white pt-24 pb-12">
                <div className="md:w-1/2">
                    <h3 className="font-space text-4xl mb-4">Your agentic infrastructure layer</h3>
                    <p className="font-anek-latin">All your agents unifiead, production-ready, without CLI. All executed under a unified user-friendly dashboard.</p>
                    <p className="font-anek-latin">The Vercel/AWS console for AI Agents.</p>
                    <div className="mt-12">
                        <a className="font-anek-latin uppercase flex flex-row items-center gap-4 hover:opacity-50 hover:underline" href="#">
                            <span>Contact us</span>
                            <span className="bg-primary-500 rounded-full h-8 w-8 flex items-center justify-center">
                                <FaPlay/>
                            </span>
                        </a>
                    </div>
                </div>
                
                <div>
                    <div className="hidden md:flex flex-row justify-end gap-2">
                        <a className="rounded-full h-12 w-12 bg-white flex items-center justify-center hover:opacity-50" target="_blank" href="#">
                            <FaTelegram className="text-black text-3xl"/>
                        </a>
                        <a className="rounded-full h-12 w-12 bg-white flex items-center justify-center hover:opacity-50" target="_blank" href="#">
                            <FaXTwitter className="text-black text-3xl"/>
                        </a>
                    </div>
                    <div className="border border-gray-600 border-l-0 border-b-0 border-r-0 my-6"></div>
                    <div className="flex md:flex-row flex-col md:items-center md:justify-between">
                        <img src={logoWhite} className="w-1/3 md:w-auto mb-4" />
                        <div className="flex flex-row gap-4 text-gray-300">
                            <a href="#" className="hover:opacity-50">Whitepaper</a>
                            <a href="#" className="hover:opacity-50">Documentation</a>
                            <a href="#" className="hover:opacity-50">Support</a>
                        </div>
                    </div>
                    <div className="flex flex-row gap-2 md:hidden block mt-4">
                        <a className="rounded-full h-12 w-12 bg-white flex items-center justify-center hover:opacity-50" target="_blank" href="#">
                            <FaTelegram className="text-black text-3xl"/>
                        </a>
                        <a className="rounded-full h-12 w-12 bg-white flex items-center justify-center hover:opacity-50" target="_blank" href="#">
                            <FaXTwitter className="text-black text-3xl"/>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}