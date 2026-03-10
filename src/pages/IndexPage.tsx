import TopNav from "../components/Common/TopNav";
import ClaimBlock from "../components/MainBlocks/ClaimBlock";
import ClaimBlueBlock from "../components/MainBlocks/ClaimBlueBlock";
import FAQ from "../components/MainBlocks/FAQ";
import Features from "../components/MainBlocks/Features";
import AgentIdentity from "../components/MainBlocks/AgentIdentity";
import AgentPayments from "../components/MainBlocks/AgentPayments";
import Footer from "../components/MainBlocks/Footer";
import Jumbotron from "../components/MainBlocks/Jumbotron";
import Pains from "../components/MainBlocks/Pains";
import PrivacyClaim from "../components/MainBlocks/PrivacyClaim";
import Marquee from "../components/Separators/Marquee";
import openclaw from "../assets/images/brands/openclaw.svg";
import openai from "../assets/images/brands/openai.svg";
import anthropic from "../assets/images/brands/anthropic.svg";
import ollama from "../assets/images/brands/ollama.svg";
import langchain from "../assets/images/brands/langchain.svg";
import mainLogo from '../assets/images/logo/guayaba_horizontal_black.svg'
import PaletteBlock from "../components/Common/PaletteBlock";
import { HiOutlineCubeTransparent, HiOutlineRocketLaunch, HiOutlineCodeBracketSquare } from "react-icons/hi2";

const IndexPage = () => {
    const data = {
        topNav: {
            navigation: [
                { name: 'Features', href: '#features' },
                { name: 'Identity', href: '#identity' },
                { name: 'Payments', href: '#payments' },
                { name: 'Privacy', href: '#privacy' },
                { name: 'FAQ', href: '#faq' },
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
                    title: 'Curated & Open-Source Marketplace',
                    description: 'Every skill in our marketplace is reviewed and verified by our team before publication, ensuring security, reliability, and zero risk of malware. Publish your own plugins from GitHub and start monetizing with built-in usage metering.',
                },
            ],
        },
        privacyClaim: {
            mainClaim: <>Private by Design</>,
            subClaim: <>Generic models leak industry knowledge. Third-party APIs expose your data. Most AI platforms force you into their infrastructure, logging your prompts and training on your queries. Choose from thousands of specialized models on Hugging Face, or deploy your own proprietary model. Zero data egress. Full control. SOC2, HIPAA, and GDPR compliant by design.</>,
            items: [
                {
                    title: 'Hugging Face Integration',
                    description: 'Medical, legal, finance, code, multilingual—use models specifically trained for your industry. Browse, test, and deploy from 500K+ models in one click. No API keys, no third parties, no data leaks.',
                },
                {
                    title: 'Upload Your Own Model',
                    description: 'Trained an in-house model? Upload it directly. PyTorch, TensorFlow, ONNX, Safetensors. Your weights stay within your infrastructure. Your training data never leaves your environment.',
                },
                {
                    title: 'Air-Gapped Inference',
                    description: 'Models run in isolated environments. Prompts, responses, and model weights never touch external servers. Enterprise compliance, government-grade security, unrestricted intelligence.',
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
                    title: 'Curated Skills Marketplace',
                    descriptions: ['Extend agent capabilities through a marketplace where every skill is reviewed and verified by our team. Add skills with confidence, no risk of malware or unreliable integrations. Connect external sources and compose behaviors without modifying the agent core.'],
                    boldDescription: 'A secure, curated ecosystem you can trust. All in one place.',
                },
                {
                    title: 'Resource Allocation: Optimize your costs',
                    descriptions: ['Choose the exact hardware (CPU/GPU/RAM/Storage) for each agent in the cloud, or run lightweight agents locally.'],
                    boldDescription: 'Pay only for the resources you actually use.',
                },
                {
                    title: 'Universal API',
                    descriptions: [
                        'Integrate your agents wherever you need them. Vibecode your product using our OpenAPI specification with your favorite tools.',
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
                    content: <p>You only need to provide your API keys/credentials and configure your agent's behavior through our dashboard.</p>,
                },
                {
                    title: 'Can I run multiple agents at the same time?',
                    content: <p>Yes. Each agent runs as an independent instance with isolated, dedicated resources. If you want you can also mix different frameworks (like Eliza and OpenAI) simultaneously in one dashboard.</p>,
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
            buttonHref: '#',
        },
        marquee2: {
            text: 'DEPLOY · SCALE · MONITOR · REPEAT',
        },
        footer: {
            title: <>Your agentic<br/>infrastructure layer</>,
            description: 'All your agents unified, production-ready, without CLI. All executed under a unified user-friendly dashboard.',
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

            <ClaimBlueBlock
                title={data.claimBlueBlock.title}
                buttonText={data.claimBlueBlock.buttonText}
                buttonHref={data.claimBlueBlock.buttonHref}
            />

            <Marquee text={data.marquee2.text}/>

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