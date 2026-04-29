import type { Metadata } from 'next';
import React from 'react';
import TopNav from '@/components/Common/TopNav';
import Footer from '@/components/MainBlocks/Footer';

export const metadata: Metadata = {
  title: 'Privacy Policy | guayaba.run',
  description:
    'Privacy Policy for guayaba.run — how Guayaba collects, processes, and protects your data on the AI Ops Cloud platform. GDPR & CCPA compliant.',
  alternates: {
    canonical: '/privacy-policy',
  },
  openGraph: {
    title: 'Privacy Policy | guayaba.run',
    description:
      'How Guayaba collects, processes, and protects your data. GDPR & CCPA compliant.',
    url: '/privacy-policy',
    type: 'article',
  },
  twitter: {
    title: 'Privacy Policy | guayaba.run',
    description:
      'How Guayaba collects, processes, and protects your data. GDPR & CCPA compliant.',
  },
};

const navData = {
  navigation: [
    { name: 'Agents', href: '/#agents' },
    { name: 'Privacy', href: '/#privacy' },
    { name: 'Identity', href: '/#identity' },
    { name: 'Payments', href: '/#payments' },
    { name: 'Pricing', href: '/#pricing' },
    { name: 'FAQ', href: '/#faq' },
    { name: 'Docs', href: 'https://docs.guayaba.run' },
  ],
  buttonText: 'Launch Console',
  buttonHref: 'https://app.guayaba.run',
};

const footerData = {
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
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <TopNav
        navigation={navData.navigation}
        buttonText={navData.buttonText}
        buttonHref={navData.buttonHref}
      />

      <div className="bg-secondary-500 text-black py-16 md:py-24 px-6 md:px-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-space font-bold text-4xl md:text-5xl lg:text-6xl uppercase tracking-wide">
            Privacy Policy
          </h1>
        </div>
      </div>

      <div className="border-t border-b border-gray-400">
      <div className="border border-gray-400 border-t-0 border-b-0 bordered-container mx-auto bg-white">
        <article className="max-w-4xl mx-auto px-6 md:px-12 py-12 font-anek-latin text-gray-800 leading-relaxed">
        <Section title="1. Introduction">
          <p>
            Guayaba LLC, a Series of OtoCo DE LLC (&ldquo;Guayaba,&rdquo; &ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;) operates
            the platform at guayaba.run (the &ldquo;Service&rdquo;). This Privacy Policy explains how we
            collect, use, store, and share information about you when you use the Service.
          </p>
          <p>By using the Service, you agree to the practices described in this policy.</p>
          <p><strong>Roles under GDPR:</strong></p>
          <ul className="list-disc pl-6 space-y-1">
            <li>For data relating to your Guayaba account and platform usage, Guayaba acts as the <strong>data controller</strong>.</li>
            <li>For data processed by your Agent on behalf of your end users, <strong>you</strong> (the user deploying the Agent) act as the data controller or operator, and Guayaba acts as a <strong>data processor</strong> to the extent it provides the infrastructure.</li>
            <li>Third-party LLM providers act as independent data controllers or sub-processors for the content they process.</li>
          </ul>
        </Section>

        <Section title="2. Information We Collect">
          <h4 className="font-space font-semibold text-lg mt-4 mb-2">2.1 Information You Provide</h4>
          <ul className="list-disc pl-6 space-y-1">
            <li><strong>Account information:</strong> Email address, display name, and password (or Solana wallet address if you authenticate via wallet).</li>
            <li><strong>Payment information:</strong> Processed via Stripe (card payments) or USDC on-chain transactions. We do not store full card numbers. Stripe&apos;s privacy policy applies to card data.</li>
            <li><strong>Wallet address:</strong> Your Solana wallet public address if connected to your profile.</li>
            <li><strong>Agent configuration:</strong> Name, bio, personality instructions, knowledge base files, and model settings you configure within the Service.</li>
            <li><strong>Support communications:</strong> Any information you provide when contacting us.</li>
          </ul>

          <h4 className="font-space font-semibold text-lg mt-4 mb-2">2.2 Information Collected Automatically</h4>
          <ul className="list-disc pl-6 space-y-1">
            <li><strong>Usage data:</strong> Pages visited, features used, session duration, and click patterns.</li>
            <li><strong>Infrastructure logs:</strong> Runtime events generated by the agent infrastructure (boot events, errors, status changes). These logs do not contain the content of Agent conversations.</li>
            <li><strong>Device and browser data:</strong> IP address, browser type, operating system, and referral URL.</li>
            <li><strong>Cookies and similar technologies:</strong> See Section 8.</li>
          </ul>

          <h4 className="font-space font-semibold text-lg mt-4 mb-2">2.3 What We Do NOT Collect</h4>
          <ul className="list-disc pl-6 space-y-1">
            <li>The <strong>content of conversations</strong> between your Agent and its end users.</li>
            <li><strong>Private keys</strong> or seed phrases from connected wallets.</li>
            <li><strong>Sensitive personal data</strong> as defined under GDPR Article 9 (health, biometric, political, religious, or racial data).</li>
          </ul>
        </Section>

        <Section title="3. Legal Basis for Processing (GDPR)">
          <p>For users in the EU/EEA, we process personal data on the following legal bases:</p>
          <Table
            headers={["Data Type", "Purpose", "Legal Basis"]}
            rows={[
              ["Account information", "Account creation and management", "Contractual necessity (Art. 6(1)(b))"],
              ["Payment data", "Billing and subscription management", "Contractual necessity (Art. 6(1)(b))"],
              ["Usage data & logs", "Service operation, security, abuse prevention", "Legitimate interests (Art. 6(1)(f))"],
              ["Wallet address", "Payment processing and potential future distributions", "Contractual necessity / Legitimate interests (Art. 6(1)(b)(f))"],
              ["Marketing communications", "Product updates and feature announcements", "Consent (Art. 6(1)(a)) — you may opt out at any time"],
              ["Legal compliance", "Meeting regulatory obligations", "Legal obligation (Art. 6(1)(c))"],
              ["Security & fraud detection", "Protecting the platform and users", "Legitimate interests (Art. 6(1)(f))"],
            ]}
          />
          <p>
            Where we rely on <strong>legitimate interests</strong>, we have assessed that our interests do
            not override your fundamental rights and freedoms. You may object to processing
            based on legitimate interests at any time by contacting david@guayaba.run.
          </p>
        </Section>

        <Section title="4. How We Use Your Information">
          <p>We use the information we collect to:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Provide, maintain, and improve the Service.</li>
            <li>Process payments and manage your subscription and credit balance.</li>
            <li>Send transactional communications (billing receipts, service alerts, account notices).</li>
            <li>Detect, investigate, and prevent fraudulent, abusive, or illegal activity.</li>
            <li>Comply with legal obligations.</li>
            <li>Analyze aggregated usage patterns to improve product features.</li>
            <li>Administer the referral and invite credit program.</li>
            <li>Associate your Solana wallet with any future digital asset distribution program.</li>
          </ul>
          <p>We do not sell your personal information to third parties. We do not use your data to train AI models.</p>
        </Section>

        <Section title="5. Data Storage Architecture">
          <p>To ensure transparency, we distinguish clearly between the following storage layers:</p>
          <Table
            headers={["Layer", "Content", "Controller", "Guayaba Access"]}
            rows={[
              ["Platform data", "Account info, billing, usage metadata", "Guayaba", "Yes"],
              ["Agent configuration", "Name, personality, instructions, model settings", "User", "Yes (to provide the Service)"],
              ["Agent memory", "Long-term conversation memory in isolated per-agent containers", "User", "No — isolated, not accessed in ordinary operations"],
              ["LLM processing", "Prompts and outputs sent to third-party LLMs", "Third-party LLM provider", "No — transmitted directly"],
              ["Infrastructure logs", "Runtime events, errors, status changes", "Guayaba", "Yes — no conversation content"],
            ]}
          />
        </Section>

        <Section title="6. Third-Party LLM Providers">
          <p>
            When your Agent processes messages, those prompts are transmitted directly to the
            third-party LLM provider you have configured. Guayaba does not store this content.
            Your data transmitted to LLM providers is subject to their own privacy policies:
          </p>
          <ul className="list-disc pl-6 space-y-1">
            <li>OpenAI: <a href="https://openai.com/policies/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-primary-500 underline">https://openai.com/policies/privacy-policy</a></li>
            <li>Anthropic: <a href="https://www.anthropic.com/legal/privacy" target="_blank" rel="noopener noreferrer" className="text-primary-500 underline">https://www.anthropic.com/legal/privacy</a></li>
            <li>Google DeepMind: <a href="https://deepmind.google/about/privacy/" target="_blank" rel="noopener noreferrer" className="text-primary-500 underline">https://deepmind.google/about/privacy/</a></li>
          </ul>
        </Section>

        <Section title="7. Sharing of Information">
          <p>We share your information only in the following circumstances:</p>
          <Table
            headers={["Recipient", "Purpose", "Safeguard"]}
            rows={[
              ["Stripe", "Card payment processing", "Stripe Privacy Policy / SCCs"],
              ["LLM Providers", "Agent prompt processing", "Provider Privacy Policies"],
              ["Cloud infrastructure providers", "Hosting and compute", "DPAs / SCCs"],
              ["Legal authorities", "Legal obligation or rights protection", "Assessed case by case"],
              ["Business transfers", "Merger, acquisition, or asset sale", "Notice provided to users"],
            ]}
          />
          <p>We do not share your information with advertisers or data brokers.</p>
        </Section>

        <Section title="8. Cookies and Tracking">
          <p>We use cookies and similar technologies for:</p>
          <Table
            headers={["Cookie Type", "Purpose", "Basis"]}
            rows={[
              ["Strictly necessary", "Authentication, session management", "No consent required"],
              ["Analytics", "Understanding usage patterns (aggregated)", "Consent (EU users)"],
              ["Preferences", "Remembering your settings", "Consent (EU users)"],
            ]}
          />
          <p>
            <strong>EU users:</strong> We use a consent management banner for non-essential cookies in
            accordance with the ePrivacy Directive and GDPR. You can withdraw consent at
            any time via your cookie settings.
          </p>
          <p>
            You can configure your browser to refuse cookies, but some parts of the Service
            may not function correctly without strictly necessary cookies.
          </p>
        </Section>

        <Section title="9. Data Retention">
          <Table
            headers={["Data Type", "Retention Period", "Reason"]}
            rows={[
              ["Account information", "Duration of account + 90 days post-deletion", "Service continuity"],
              ["Payment records", "7 years", "Legal / accounting requirement"],
              ["Infrastructure logs", "30 days rolling", "Operational security"],
              ["Agent configurations", "Duration of account + 30 days post-termination", "Data recovery window"],
              ["Invite/referral credits", "Until expiration (60 days) or account deletion", "Program integrity"],
              ["Wallet address", "Duration of account + 90 days post-deletion", "Distribution eligibility"],
              ["Support communications", "2 years from last interaction", "Dispute resolution"],
            ]}
          />
          <p>After retention periods expire, data is securely deleted or anonymized.</p>
        </Section>

        <Section title="10. International Data Transfers">
          <p>
            Guayaba is operated from the United States. If you access the Service from the
            EU/EEA, your data may be transferred to and processed in the United States or
            other countries where our infrastructure providers operate.
          </p>
          <p>Such transfers are conducted in compliance with GDPR Chapter V, including through:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li><strong>Standard Contractual Clauses (SCCs)</strong> with sub-processors.</li>
            <li><strong>Adequacy decisions</strong> where applicable.</li>
          </ul>
          <p>
            You may request a copy of the relevant transfer safeguards by contacting david@guayaba.run.
          </p>
        </Section>

        <Section title="11. Your Rights">
          <h4 className="font-space font-semibold text-lg mt-4 mb-2">EU / EEA Users (GDPR — Articles 15–22)</h4>
          <Table
            headers={["Right", "Description"]}
            rows={[
              ["Access", "Request a copy of the personal data we hold about you"],
              ["Rectification", "Request correction of inaccurate data"],
              ["Erasure", "Request deletion of your data (\u201Cright to be forgotten\u201D)"],
              ["Restriction", "Request that we limit processing of your data"],
              ["Portability", "Receive your data in a structured, machine-readable format"],
              ["Object", "Object to processing based on legitimate interests or for direct marketing"],
              ["Withdraw consent", "Where processing is based on consent, withdraw it at any time"],
              ["Lodge a complaint", "File a complaint with your local data protection authority"],
            ]}
          />
          <p>
            To exercise any of these rights, contact david@guayaba.run. We will respond within
            <strong> 30 days</strong>. Complex requests may be extended by a further 60 days with notice.
          </p>

          <h4 className="font-space font-semibold text-lg mt-4 mb-2">California Users (CCPA / CPRA)</h4>
          <p>California residents have the right to:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Know what personal information we collect, use, disclose, and sell.</li>
            <li>Request deletion of personal information.</li>
            <li>Correct inaccurate personal information.</li>
            <li>Opt out of the sale or sharing of personal information (<strong>we do not sell personal information</strong>).</li>
            <li>Non-discrimination for exercising these rights.</li>
          </ul>
          <p>To submit a CCPA request, contact david@guayaba.run.</p>
        </Section>

        <Section title="12. Data Security">
          <p>We implement appropriate technical and organizational measures, including:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Encryption of data in transit (TLS 1.2+) and at rest.</li>
            <li>Isolated per-agent storage environments with no cross-agent data access.</li>
            <li>Role-based access controls limiting internal access to personal data.</li>
            <li>Regular security reviews of our infrastructure.</li>
            <li>Incident response procedures for data breaches.</li>
          </ul>
          <p>
            In the event of a personal data breach that poses a risk to your rights and
            freedoms, we will notify the relevant supervisory authority within 72 hours
            and affected users without undue delay, as required by GDPR Article 33-34.
          </p>
        </Section>

        <Section title="13. Children's Privacy">
          <p>
            The Service is not directed to individuals under the age of 18. We do not
            knowingly collect personal information from minors. If we become aware that
            a minor has created an account, we will terminate the account and delete
            associated data promptly.
          </p>
          <p>
            If you believe a minor has provided us with personal information, please
            contact us immediately at david@guayaba.run.
          </p>
        </Section>

        <Section title="14. Wallet and Blockchain Data">
          <ul className="list-disc pl-6 space-y-1">
            <li>Your <strong>public wallet address</strong> is stored in association with your account.</li>
            <li>We do not have access to your private keys or seed phrases.</li>
            <li>On-chain transactions (e.g., USDC payments) are publicly visible on the Solana blockchain. Guayaba has no control over the public nature of blockchain data.</li>
            <li>Your wallet address may be used to associate your account with future token distribution programs, subject to separate terms and applicable law.</li>
            <li>Blockchain transactions are immutable. We cannot delete on-chain data.</li>
          </ul>
        </Section>

        <Section title="15. Changes to This Policy">
          <p>
            We may update this Privacy Policy from time to time. When we do, we will update
            the &ldquo;Last Updated&rdquo; date. For material changes, we will notify you via email or
            in-app notice at least 14 days before changes take effect.
          </p>
          <p>
            Continued use of the Service after changes take effect constitutes your acceptance
            of the revised policy.
          </p>
        </Section>

        <Section title="16. Contact and Data Protection Inquiries">
          <p>For any privacy-related questions, rights requests, or complaints:</p>
          <p><strong>Guayaba LLC, a Series of OtoCo DE LLC</strong></p>
          <p>Email: david@guayaba.run</p>
          <p>Website: <a href="https://guayaba.run" className="text-primary-500 underline">https://guayaba.run</a></p>
          <p className="mt-4">
            EU users who are unsatisfied with our response may lodge a complaint with their
            local supervisory authority. A list of EU data protection authorities is available
            at:{" "}
            <a href="https://edpb.europa.eu/about-edpb/about-edpb/members_en" target="_blank" rel="noopener noreferrer" className="text-primary-500 underline">
              https://edpb.europa.eu/about-edpb/about-edpb/members_en
            </a>
          </p>
        </Section>
        </article>
      </div>
      </div>

      <Footer {...footerData} />
    </>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mb-10">
      <h3 className="font-space font-bold text-xl md:text-2xl mb-4 text-black">{title}</h3>
      <div className="space-y-3">{children}</div>
    </section>
  );
}

function Table({ headers, rows }: { headers: string[]; rows: string[][] }) {
  return (
    <div className="overflow-x-auto my-4">
      <table className="w-full text-sm border border-gray-300 bg-white">
        <thead>
          <tr className="bg-gray-100">
            {headers.map((h, i) => (
              <th key={i} className="text-left px-4 py-2 font-space font-semibold border-b border-gray-300">{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i} className="border-b border-gray-200 bg-white">
              {row.map((cell, j) => (
                <td key={j} className="px-4 py-2">{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
