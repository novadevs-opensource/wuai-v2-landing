import TopNav from "../components/Common/TopNav";
import ClaimBlock from "../components/MainBlocks/ClaimBlock";
import ClaimBlueBlock from "../components/MainBlocks/ClaimBlueBlock";
import FAQ from "../components/MainBlocks/FAQ";
import Features from "../components/MainBlocks/Features";
import Footer from "../components/MainBlocks/Footer";
import Jumbotron from "../components/MainBlocks/Jumbotron";
import Pains from "../components/MainBlocks/Pains";
import Marquee from "../components/Separators/Marquee";
import upload from "../assets/images/upload.png";
import solana from "../assets/images/brands/solana.png";
import mainLogo from '../assets/images/wuai-logo-white.svg'
import PaletteBlock from "../components/Common/PaletteBlock";

const IndexPage = () => {
    const data = {
        topNav: {
            navigation: [
                { name: 'About', href: 'https://sample.gitbook.io/doc/1.-project-overview' },
                { name: 'Whitepaper', href: 'https://sample.gitbook.io/doc/4.-tokenomics' },
            ],
            buttonText: 'Launch Console',
            buttonHref: '#',
        },
        jumbotron: {
            title: 'Your agentic infrastructure layer.',
            mainClaim: 'All your agents',
            claims: [
                'unified',
                'without CLI',
                'production-ready',
            ],
            buttonText: 'Launch Console',
            buttonHref: '#',
        },
        pains: {
            titles: [
                'Stop managing infrastructure',
                'Start shipping Agents',
            ],
            description: 'The ecosystem is full of agents that work in demos, but fail when exposed to real-world production constraints. Setup, build and deploy your agents in a production-ready environment.',
            items: [
                {
                    image: upload,
                    title: 'Unified Ecosystem',
                    description: 'Stop juggling multiple subscriptions and fragmented tools. Manage ElizaOS, OpenAI, Claude, and more from a single dashboard. One platform, infinite frameworks.',
                },
                {
                    image: upload,
                    title: 'Zero-Ops Deployment',
                    description: 'No coding skills or DevOps team required. Simply input your API keys and tokens. We handle the servers, security, and setup automatically. A completely no-code experience.',
                },
                {
                    image: upload,
                    title: 'Open-Source friendly and monetization',
                    description: 'Publish your own plugins to our marketplace directly from GitHub. Once our team verifies them, start monetizing your creations with built-in usage metering and access plans.',
                },
            ],
        },
        claimBlock: {
            title: 'Designed to move from experimentation to production with just a few clicks.',
            buttonText: 'Launch Console',
            buttonHref: '#',
        },
        features: {
            features: [
                {
                    title: 'Marketplace and extensions',
                    descriptions: ['Extend agent capabilities through integrated extensions and services. Add skills, connect external sources, and compose behaviors without modifying the agent core.'],
                    boldDescription: 'Full access to the whole agentic ecosystem in one place.',
                },
                {
                    title: 'Resource Allocation Optimize your costs',
                    descriptions: ['Choose the exact hardware (CPU/GPU/RAM) for each agent in the cloud, or run lightweight agents locally.'],
                    boldDescription: 'Pay only for the resources you actually use.',
                },
                {
                    title: 'Universal API',
                    descriptions: [
                        'Integrate your agents wherever you need them.',
                        'Vibecode your product using our OpenAPI specification with your favorite tools.',
                    ],
                    boldDescription: 'Direct integration with applications, products, or existing systems.',
                },
                {
                    title: 'Institutional Grade Security',
                    descriptions: ['Your data, profiles and accounts stay safe. WuAI uses production grade security (2fa, db encryption, SSL encrypted communications...) and protects your personal info.'],
                    boldDescription: 'Your keys and configurations are encrypted in secured systems.',
                },
                {
                    title: 'Multi-framework creation',
                    descriptions: ['Create and manage agents built on widely used frameworks: OpenAI, LLaMA, ElizaOS, Ollama, Cohere.'],
                    boldDescription: "All executed under a unified OS, with full access to each framework's whole plugin ecosystem.",
                },
            ],
            screenshotImage: mainLogo,
            brandLogos: [solana, solana, solana, solana, solana],
        },
        marquee: {
            text: 'TOTAL CONTROL · ONE DASHBOARD · ALL YOUR AGENTS',
        },
        faq: {
            title: 'Frequently Asked Questions',
            questions: [
                {
                    title: 'Do I need to know how to code?',
                    content: <p>You only need to provide your API keys/credentials and configure your agent's behavior through our dashboard.</p>,
                },
                {
                    title: 'Can I run multiple agents at the same time?',
                    content: <p>Yes. Each agent runs as an independent instance with isolated, dedicated resources. If you want you can also mix different frameworks (like Eliza and OpenAI) simultaneously in one dashboard.</p>,
                },
                {
                    title: 'Can I choose where my agent runs?',
                    content: <p>Absolutely. You can deploy agents on our high-performance cloud infrastructure (selecting the specific machine resources to optimize costs) or run them on your local machine paying for the exportation.</p>,
                },
            ],
        },
        claimBlueBlock: {
            title: 'The VERCEL/AWS Console for AI agents.',
            buttonText: 'Launch Console',
            buttonHref: '#',
        },
        footer: {
            title: 'Your agentic infrastructure layer',
            description: 'All your agents unifiead, production-ready, without CLI. All executed under a unified user-friendly dashboard.',
            subtitle: 'The Vercel/AWS console for AI Agents.',
            contactText: 'Contact us',
            contactHref: '#',
            socialLinks: [
                { type: 'telegram', href: '#' },
                { type: 'twitter', href: '#' },
            ],
            bottomLinks: [
                { name: 'Whitepaper', href: '#' },
                { name: 'Documentation', href: '#' },
                { name: 'Support', href: '#' },
            ],
        },
    };

    return (
        <>
            <TopNav
                navigation={data.topNav.navigation}
                buttonText={data.topNav.buttonText}
                buttonHref={data.topNav.buttonHref}
            />
            
            <Jumbotron
                title={data.jumbotron.title}
                mainClaim={data.jumbotron.mainClaim}
                ctas={data.jumbotron.claims}
                buttonText={data.jumbotron.buttonText}
                buttonHref={data.jumbotron.buttonHref}
            />
            
            <Pains
                titles={data.pains.titles}
                description={data.pains.description}
                items={data.pains.items}
            />
            
            <ClaimBlock
                title={data.claimBlock.title}
                buttonText={data.claimBlock.buttonText}
                buttonHref={data.claimBlock.buttonHref}
            />

            <Marquee text={data.marquee.text}/>

            <Features
                features={data.features.features}
                screenshotImage={data.features.screenshotImage}
                brandLogos={data.features.brandLogos}
            />
            
            
            <FAQ
                title={data.faq.title}
                questions={data.faq.questions}
            />

            <ClaimBlueBlock
                title={data.claimBlueBlock.title}
                buttonText={data.claimBlueBlock.buttonText}
                buttonHref={data.claimBlueBlock.buttonHref}
            />

            <Footer
                title={data.footer.title}
                description={data.footer.description}
                subtitle={data.footer.subtitle}
                contactText={data.footer.contactText}
                contactHref={data.footer.contactHref}
                socialLinks={data.footer.socialLinks}
                bottomLinks={data.footer.bottomLinks}
            />

            <PaletteBlock/>
        </>
    );
}

export default IndexPage