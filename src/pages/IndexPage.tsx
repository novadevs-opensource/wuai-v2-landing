import TopNav from "../components/Common/TopNav";
import ClaimBlock from "../components/MainBlocks/ClaimBlock";
import ClaimBlueBlock from "../components/MainBlocks/ClaimBlueBlock";
import FAQ from "../components/MainBlocks/FAQ";
import Agents from "../components/MainBlocks/Agents";
import AgentIdentity from "../components/MainBlocks/AgentIdentity";
import AgentPayments from "../components/MainBlocks/AgentPayments";
import Footer from "../components/MainBlocks/Footer";
import Jumbotron from "../components/MainBlocks/Jumbotron";
import Pains from "../components/MainBlocks/Pains";
import Pricing from "../components/MainBlocks/Pricing";
import PrivacyClaim from "../components/MainBlocks/PrivacyClaim";
import Marquee from "../components/Separators/Marquee";
import openclaw from "../assets/images/brands/openclaw.svg";
import openai from "../assets/images/brands/openai.svg";
import anthropic from "../assets/images/brands/anthropic.svg";
import ollama from "../assets/images/brands/ollama.svg";
import langchain from "../assets/images/brands/langchain.svg";
import mainLogo from '../assets/images/logo/guayaba_horizontal_black.svg'
import guayabaWhiteLogo from '../assets/images/logo/guayaba_horizontal_white.svg'
import PaletteBlock from "../components/Common/PaletteBlock";
import PromoModal from "../components/Common/PromoModal";
import type { PromoSlide } from "../components/Common/PromoModal";
import { HiOutlineCubeTransparent, HiOutlineRocketLaunch, HiOutlineCodeBracketSquare } from "react-icons/hi2";
import { FaHeart } from "react-icons/fa6";

const IndexPage = () => {
    const data = {
        topNav: {
            navigation: [
                { name: 'Agents', href: '#agents' },
                { name: 'Privacy', href: '#privacy' },
                { name: 'Identity', href: '#identity' },
                { name: 'Payments', href: '#payments' },
                { name: 'Pricing', href: '#pricing' },
                { name: 'FAQ', href: '#faq' },
                { name: 'Docs', href: 'https://docs.guayaba.run' },
            ],
            buttonText: 'Launch Console',
            buttonHref: 'https://app.guayaba.run',
        },
        jumbotron: {
            title: 'The AI ops cloud. Built for builders.',
            mainClaim: 'Deploy. Harness. Scale.',
            claims: [
                'No code.',
                'No dev-ops.',
                'No limits.',
            ],
            buttonText: 'Launch Console',
            buttonHref: 'https://app.guayaba.run',
        },
        pains: {
            titles: [
                'Stop managing infrastructure',
                'Start shipping Agents',
            ],
            description: 'The ecosystem is full of agents that work in demos, but fail when exposed to real-world production constraints. Setup, build and deploy your agents in a production-ready environment.',
            items: [
                {
                    icon: <HiOutlineCubeTransparent />,
                    title: 'Unified Ecosystem',
                    description: 'Stop juggling multiple subscriptions and fragmented tools. Manage OpenClaw, OpenAI, Anthropic, and more from a single dashboard. One platform, infinite frameworks.',
                },
                {
                    icon: <HiOutlineRocketLaunch />,
                    title: 'Zero-Ops Deployment',
                    description: 'No coding skills or DevOps team required. Simply input your API keys and tokens. We handle the servers, security, and setup automatically. A completely no-code experience.',
                },
                {
                    icon: <HiOutlineCodeBracketSquare />,
                    title: 'GRAFT Marketplace',
                    description: <>Browse production-ready <strong>GRAFTs</strong>: pre-configured agent templates bundling skills, tools, and runtime settings. Every <strong>GRAFT</strong> is reviewed and verified by our team. Deploy a complete agent in one click.</>,
                },
            ],
        },
        privacyClaim: {
            mainClaim: <>Private by Design</>,
            subClaim: <>Generic models leak industry knowledge. Third-party APIs expose your data. Most AI platforms force you into their infrastructure, logging your prompts and training on your queries. Choose from thousands of specialized models on Hugging Face, or deploy your own proprietary model. Zero data egress. Full control. SOC2, HIPAA, and GDPR compliant by design.</>,
            items: [
                {
                    title: 'Hugging Face Integration',
                    description: 'Medical, legal, finance, code, multilingual: use models specifically trained for your industry. Browse, test, and deploy from 500K+ models in one click. No API keys, no third parties, no data leaks.',
                },
                {
                    title: 'Upload Your Own Model',
                    description: 'Trained an in-house model? Upload it directly. PyTorch, TensorFlow, ONNX, Safetensors. Your weights stay within your infrastructure. Your training data never leaves your environment.',
                },
                {
                    title: 'Air-Gapped Inference',
                    description: 'Models run in isolated environments. Prompts, responses, and model weights never touch external servers. Enterprise compliance, production-grade security, unrestricted intelligence.',
                },
            ],
        },
        claimBlock: {
            title: 'Designed to move from experimentation to production with just a few clicks.',
            buttonText: 'Launch Console',
            buttonHref: 'https://app.guayaba.run',
        },
        agents: {
            features: [
                {
                    title: 'GRAFT Marketplace',
                    descriptions: [<>A <strong>GRAFT</strong> (<span className="underline">Guayaba Runtime Agent Framework Template</span>) is a production-ready, deployable package that bundles skills, tools, and runtime configurations into a single template. Browse our curated marketplace, pick the right template for your use case, customize it, and go to production. Every template is reviewed and verified by our team.</>],
                    boldDescription: 'Production-ready agent templates. One click to deploy.',
                },
                {
                    title: 'Resource Allocation: Optimize your costs',
                    descriptions: ['Choose the exact hardware (CPU/GPU/RAM/Storage) for each agent in the cloud, or run lightweight agents locally.'],
                    boldDescription: 'Pay only for the resources you actually use.',
                },
                {
                    title: 'Universal API',
                    descriptions: [
                        'Integrate your agents wherever you need them. Vibecode your product using our well-documented API with your favorite tools.',
                    ],
                    boldDescription: 'Direct integration with applications, products, or existing systems.',
                },
                {
                    title: 'Institutional Grade Security',
                    descriptions: ['Your data, profiles and accounts stay safe. Guayaba uses production grade security (2fa, db encryption, SSL encrypted communications...) and protects your personal info.'],
                    boldDescription: 'Your keys and configurations are encrypted in secured systems.',
                },
                {
                    title: 'Multi-framework creation',
                    descriptions: ['Create and manage agents built on widely used frameworks: OpenAI, Anthropic, OpenClaw, Ollama, Cohere.'],
                    boldDescription: "All executed under a unified OS, with full access to each framework's whole plugin ecosystem.",
                },
                {
                    title: 'Custom Model Support',
                    descriptions: ['Choose from 500,000+ specialized models on Hugging Face. Medical, legal, finance, code, multilingual. Or upload your own proprietary models. PyTorch, TensorFlow, ONNX, Safetensors supported.'],
                    boldDescription: 'Your models. Your weights. Zero third-party API calls.',
                },
                {
                    title: 'Air-Gapped Inference',
                    descriptions: ['Deploy models in isolated environments. Prompts, responses, and model weights never touch external servers. Zero data egress. Enterprise compliance for SOC2, GDPR, HIPAA.'],
                    boldDescription: 'Private inference by design. Your data never leaves your infrastructure.',
                },
                {
                    title: 'Agent Identity Layer',
                    descriptions: ['Every agent receives a cryptographic identity with verifiable signatures, optional on-chain anchoring, and agent-to-agent authentication. The foundation for a secure, interoperable agent network.'],
                    boldDescription: 'Verifiable identity. Trustless authentication. Portable across platforms.',
                },
                {
                    title: 'Agent Payments Layer',
                    descriptions: ['Agents operate under programmable economic constraints: spending limits, approved recipients, and automatic policy rules. Enable agent-to-agent commerce with per-execution charges, subscriptions, and autonomous transactions.'],
                    boldDescription: 'The first programmable agent economy. Agents gain autonomy, organizations retain control.',
                },
            ],
            screenshotImage: mainLogo,
            brandLogos: [
                { logo: openclaw, name: 'OpenClaw' },
                { logo: openai, name: 'OpenAI' },
                { logo: anthropic, name: 'Anthropic' },
                { logo: ollama, name: 'Ollama' },
                { logo: langchain, name: 'LangChain' },
            ],
        },
        marquee: {
            text: 'TOTAL CONTROL · ONE DASHBOARD · ALL YOUR AGENTS',
        },
        agentIdentity: {
            sectionTitle: <><span className='font-light -mr-[0.25em] sm:mr-0'>[</span><span className="hidden sm:inline">Agent</span> Identity Layer<span className='font-light'>]</span></>,
            headline: <>Every agent deserves a{' '}<span className="text-secondary-500">verifiable identity</span></>,
            description: "AI agents are evolving into autonomous economic actors, but they can't prove who they are. We give every agent a cryptographic identity.",
            terminalTitle: 'Guayaba desktop console',
            terminalLines: [
                { text: '> agent.generateKeypair()', type: 'command' as const },
                { text: '  ✓ Ed25519 keypair created', type: 'success' as const },
                { text: '  ✓ Public key: 7F3a...c1D8', type: 'success' as const },
                { text: '> agent.sign("agent_identity")', type: 'command' as const },
                { text: '  ✓ Message signed', type: 'success' as const },
                { text: '> agent.anchor({ chain: "solana" })', type: 'command' as const },
                { text: '  ✓ Identity anchored & portable', type: 'success' as const },
            ],
            features: [
                { num: '01', title: 'Cryptographic Identity', desc: 'Unique Ed25519 keypair per agent. Every action is signed, verifiable, and tamper-proof.' },
                { num: '02', title: 'On-Chain Anchoring', desc: 'Identity hash anchored to blockchain. Public verification. Portable across platforms.' },
                { num: '03', title: 'Agent-to-Agent Auth', desc: 'Agents prove authorship, verify messages, and authenticate interactions. No spoofing.' },
            ],
            badges: ['Verifiable Signatures', 'On-Chain Proofs', 'Cross-Platform Portability', 'Tamper-Proof Audit'],
        },
        agentPayments: {
            sectionTitle: <><span className='font-light'>[</span>Agent Payments<span className='font-light'>]</span></>,
            headline: <>Agents that can{' '}<span className="text-primary-500">pay</span> and{' '}<span className="text-primary-500">get paid</span></>,
            description: 'AI agents should not rely on humans to move capital. They should operate within programmable economic constraints, autonomously.',
            features: [
                { num: '01', title: 'Delegated Authority', desc: 'Organizations connect a wallet. Agents operate under spending limits, approved recipients, and policy rules.', highlight: 'No custody. Full control.' },
                { num: '02', title: 'Agent-to-Agent Commerce', desc: 'Agents charge per execution, subscribe to services, and purchase capabilities from each other programmatically.', highlight: 'The first programmable agent economy.' },
                { num: '03', title: 'Enterprise Control', desc: 'Budget caps, allowlisted recipients, manual approvals for high-value ops, and full receipt-level audit trail.', highlight: 'Autonomy with governance.' },
            ],
            flowNodes: [
                { letter: 'A', label: 'Agent A', sub: 'Request', colorClass: 'bg-primary-500' },
                { letter: 'B', label: 'Agent B', sub: '0.01 USDC', colorClass: 'bg-blue-400' },
                { letter: 'P', label: 'Policy', sub: 'Validate', colorClass: 'bg-amber-400' },
                { letter: '✓', label: 'Settle', sub: 'On-chain', colorClass: 'bg-secondary-500' },
            ],
            example: <>Agent A calls Agent B → Agent B charges <span className="text-primary-500 font-bold">0.01 USDC</span> → Payment executes automatically under policy rules.</>,
            exampleHighlight: 'Zero human intervention required.',
            stats: [
                { value: '0%', label: 'Custody risk' },
                { value: '∞', label: 'Scalable agents' },
                { value: '<1s', label: 'Settlement' },
                { value: '100%', label: 'Audit coverage' },
            ],
        },
        faq: {
            title: 'Frequently Asked Questions',
            questions: [
                {
                    title: 'Do I need to know how to code?',
                    content: <p>You only need to follow the setup wizard and configure your agent's behavior through our dashboard.</p>,
                },
                {
                    title: 'Can I run multiple agents at the same time?',
                    content: <p>Yes. Each agent runs as an independent instance with isolated, dedicated resources. If you want you can also mix different frameworks (like OpenClaw and Anthropic) simultaneously in one dashboard.</p>,
                },
                {
                    title: 'What models can I use?',
                    content: <p>Any public model from Hugging Face (500K+ options), or upload your own proprietary models. We support PyTorch, TensorFlow, ONNX, and Safetensors formats.</p>,
                },
                {
                    title: 'Where does my data go when I use custom models?',
                    content: <p>Nowhere. Inference runs within your isolated environment. Prompts, responses, and model weights never touch external servers or third-party APIs.</p>,
                },
                {
                    title: 'Can I use this for regulated industries?',
                    content: <p>Yes. Air-gapped inference, zero data egress, and SOC2/HIPAA/GDPR compliance make this ideal for healthcare, finance, legal, and government applications.</p>,
                },
                {
                    title: 'Do I pay extra for using my own models?',
                    content: <p>You only pay for compute resources (CPU/GPU/RAM). No per-token fees, no API charges. Choose hardware that fits your budget and performance needs.</p>,
                },
            ],
        },
        claimBlueBlock: {
            title: 'The VERCEL/AWS Console for AI agents.',
            buttonText: 'Launch Console',
            buttonHref: 'https://app.guayaba.run',
        },
        pricing: {
            sectionTitle: <><span className='font-light'>[</span>Pricing<span className='font-light'>]</span></>,
            headline: <>Our subscription plans</>,
            description: 'Every plan includes dedicated hardware resources, all available AI models, and all channels.',
            tiers: [
                {
                    name: 'Starter',
                    price: '$4.90',
                    period: 'month',
                    description: 'Perfect for experimenting with agents and exploring the platform.',
                    features: [
                        '1 agent instance',
                        'Community support',
                        'OpenAI Free Models',
                        'Basic Dashboard',
                        '3000 credits'
                    ],
                    highlight: true,
                    buttonText: 'Start Free Trial',
                    buttonHref: 'https://app.guayaba.run',
                },
                {
                    name: 'Pro',
                    price: '$49',
                    period: 'month',
                    description: 'For adavanced users and teams shipping agents to production with dedicated resources.',
                    features: [
                        'Up to 3 agent instance',
                        'Community support',
                        'OpenAI Free Models',
                        'Basic Dashboard',
                        '10000 credits'
                    ],
                    buttonText: 'Get Started',
                    buttonHref: 'https://app.guayaba.run',
                },
                {
                    name: 'Enterprise',
                    price: 'Custom',
                    description: 'For organizations requiring air-gapped inference, compliance, and full control.',
                    features: [
                        'Unlimited agent instances',
                        'Custom hardware configuration',
                        'Air-gapped inference',
                        'SOC2/HIPAA/GDPR compliance',
                        'Agent Payments Layer',
                        'Dedicated account manager',
                        'SLA guarantee',
                    ],
                    buttonText: 'Contact Sales',
                    buttonHref: 'mailto:david@guayaba.run',
                },
            ],
        },
        marquee2: {
            text: 'DEPLOY · SCALE · MONITOR · REPEAT',
        },
        footer: {
            title: <>Your agentic<br/>infrastructure layer</>,
            description: 'All your agents unified, production-ready, without CLI. All executed under a unified user-friendly dashboard.',
            subtitle: 'The Vercel/AWS console for AI Agents.',
            contactText: 'Contact us',
            contactHref: 'mailto:david@guayaba.run',
            socialLinks: [
                { type: 'telegram', href: 'https://t.me/+kwou-W1Vsys5MzRk', label: 'Join Community' },
                { type: 'twitter', href: 'https://x.com/Guayabadotrun', label: 'Follow us on X' },
            ],
            bottomLinks: [
                { name: 'Documentation', href: 'https://docs.guayaba.run' },
                { name: 'Support', href: 'mailto:david@guayaba.run' },
                { name: 'Terms of Service', href: '/terms' },
                { name: 'Privacy Policy', href: '/privacy-policy' },
            ],
        },
    };

    const promoSlides: PromoSlide[] = [
        {
            tag: 'New Feature',
            title: 'OpenClaw Agents Now Available',
            bullets: [
                {
                    bold: 'Deploy OpenClaw agents instantly.',
                    text: 'The open-source agent is now fully integrated. Create, configure, and launch OpenClaw agents from your dashboard.',
                },
                {
                    bold: 'Full GRAFT ecosystem access.',
                    text: <>Browse and deploy agent templates from the <strong>GRAFT</strong> marketplace. Every template is reviewed and verified. Production-ready out of the box.</>,
                },
                {
                    bold: 'Multi-framework compatible.',
                    text: 'Combine OpenClaw with Hermes, OpenAI, Ollama and other agents under a single unified dashboard.',
                },
            ],
            buttonText: 'Start free trial',
            buttonHref: 'https://app.guayaba.run',
            panelBg: 'bg-primary-500',
            panelContent: (
                <>
                    <img src={guayabaWhiteLogo} alt="" className="absolute w-[60%] md:w-auto md:h-[70%] opacity-[0.06] md:-rotate-90 select-none pointer-events-none z-[1]" />
                    <img src={openclaw} alt="OpenClaw" className="w-16 h-16 md:w-28 md:h-28 relative z-10 drop-shadow-lg" />
                    <div className="flex items-center gap-2 md:gap-3 mt-2 md:mt-4 relative z-10">
                        <span className="font-space font-extrabold text-white text-lg md:text-2xl uppercase tracking-wider">OpenClaw</span>
                        <span className="font-space font-extrabold text-white text-lg md:text-2xl"><FaHeart /></span>
                        <span className="font-space font-extrabold text-white text-lg md:text-2xl uppercase tracking-wider">Guayaba</span>
                    </div>
                    <span className="font-anon text-white/60 text-[10px] md:text-xs font-bold uppercase tracking-widest mt-1 relative z-10">personal AI assistant</span>
                </>
            ),
        },
        {
            tag: 'Welcome Gift',
            title: '$200 in Credits for New Users',
            bullets: [
                {
                    bold: 'No payments required.',
                    text: 'Create your account and start deploying agents immediately.',
                },
                {
                    bold: 'Use credits on any resource.',
                    text: 'Spend them on LLM inference, cloud compute, storage, or any combination. You decide how to allocate them.',
                },
                {
                    bold: 'No payments until month two.',
                    text: 'Your first month is fully covered by the welcome credits. Cancel anytime, no commitments, no hidden fees.',
                },
            ],
            buttonText: 'Claim Your Credits',
            buttonHref: 'https://app.guayaba.run',
            panelBg: 'bg-secondary-500',
            panelContent: (
                <>
                    <img src={guayabaWhiteLogo} alt="" className="absolute w-[60%] md:w-auto md:h-[70%] opacity-[0.06] md:-rotate-90 select-none pointer-events-none z-[1]" style={{ filter: 'brightness(0)' }} />
                    <span className="font-space font-extrabold text-5xl md:text-7xl text-black relative z-10 drop-shadow-sm">$200</span>
                    <span className="font-anon text-black/70 text-[11px] md:text-sm font-bold uppercase tracking-widest mt-1 md:mt-2 relative z-10">Free Credits</span>
                    <div className="flex gap-4 md:gap-6 mt-3 md:mt-6 relative z-10">
                        <div className="text-center">
                            <span className="font-space font-extrabold text-xl md:text-2xl text-black block">LLM</span>
                            <span className="font-anon text-[10px] md:text-[11px] text-black/60 font-semibold uppercase">Inference</span>
                        </div>
                        <div className="w-[2px] bg-black/30" />
                        <div className="text-center">
                            <span className="font-space font-extrabold text-xl md:text-2xl text-black block">HW</span>
                            <span className="font-anon text-[10px] md:text-[11px] text-black/60 font-semibold uppercase">Resources</span>
                        </div>
                    </div>
                </>
            ),
        },
        {
            tag: 'Referral Program',
            title: 'Refer & Earn 5000 Credits Each',
            bullets: [
                {
                    bold: '5000 credits for you.',
                    text: 'Every time someone signs up with your referral link, you receive 5000 credits for LLM inference and hardware resources.',
                },
                {
                    bold: '5000 credits for your friend.',
                    text: 'Your referral also gets 5000 bonus credits on top of the welcome gift. Everyone wins.',
                },
                {
                    bold: 'Unlimited referrals.',
                    text: 'There\'s no cap. Refer 10 friends, earn 50,000 credits. Build your agent infrastructure for free.',
                },
            ],
            buttonText: 'Start Referring',
            buttonHref: 'https://app.guayaba.run',
            panelBg: 'bg-black',
            panelContent: (
                <>
                    <img src={guayabaWhiteLogo} alt="" className="absolute w-[60%] md:w-auto md:h-[70%] opacity-[0.05] md:-rotate-90 select-none pointer-events-none z-[1]" />
                    <span className="font-space font-extrabold text-4xl md:text-6xl text-white relative z-10 drop-shadow-lg">2&times;5000</span>
                    <span className="font-anon text-white/60 text-[11px] md:text-sm font-bold uppercase tracking-widest mt-1 md:mt-2 relative z-10">Credits Each</span>
                    <div className="flex gap-3 md:gap-4 mt-3 md:mt-6 relative z-10">
                        <div className="border-2 border-white/30 px-5 py-3 text-center">
                            <span className="font-anon text-[10px] md:text-[11px] text-white/50 font-semibold uppercase block">You</span>
                            <span className="font-space font-extrabold text-xl md:text-2xl text-secondary-500">5000</span>
                        </div>
                        <div className="border-2 border-white/30 px-5 py-3 text-center">
                            <span className="font-anon text-[10px] md:text-[11px] text-white/50 font-semibold uppercase block">Friend</span>
                            <span className="font-space font-extrabold text-xl md:text-2xl text-secondary-500">5000</span>
                        </div>
                    </div>
                </>
            ),
        },
    ];

    return (
        <>
            <PromoModal slides={promoSlides} />
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

            <Agents
                features={data.agents.features}
                screenshotImage={data.agents.screenshotImage}
                brandLogos={data.agents.brandLogos}
            />

            <ClaimBlueBlock
                title={data.claimBlueBlock.title}
                buttonText={data.claimBlueBlock.buttonText}
                buttonHref={data.claimBlueBlock.buttonHref}
            />

            <PrivacyClaim
                mainClaim={data.privacyClaim.mainClaim}
                subClaim={data.privacyClaim.subClaim}
                items={data.privacyClaim.items}
            />

            <AgentIdentity
                sectionTitle={data.agentIdentity.sectionTitle}
                headline={data.agentIdentity.headline}
                description={data.agentIdentity.description}
                terminalTitle={data.agentIdentity.terminalTitle}
                terminalLines={data.agentIdentity.terminalLines}
                features={data.agentIdentity.features}
                badges={data.agentIdentity.badges}
            />

            <AgentPayments
                sectionTitle={data.agentPayments.sectionTitle}
                headline={data.agentPayments.headline}
                description={data.agentPayments.description}
                features={data.agentPayments.features}
                flowNodes={data.agentPayments.flowNodes}
                example={data.agentPayments.example}
                exampleHighlight={data.agentPayments.exampleHighlight}
                stats={data.agentPayments.stats}
            />

            <Marquee text={data.marquee2.text}/>

            <Pricing
                sectionTitle={data.pricing.sectionTitle}
                headline={data.pricing.headline}
                description={data.pricing.description}
                tiers={data.pricing.tiers}
            />
            
            <FAQ
                title={data.faq.title}
                questions={data.faq.questions}
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