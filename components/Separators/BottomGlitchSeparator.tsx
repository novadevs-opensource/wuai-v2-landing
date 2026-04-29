const glitchTop = '/images/glitch-top.svg';

export default function BottomGlitchSeparator() {
    return (
        <section className="rotate-180 -mt-2">
            <img src={glitchTop} className='w-full' alt="" />
        </section>
    )
}
