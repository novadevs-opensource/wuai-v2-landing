import type { Metadata } from 'next';
import React from 'react';
import TopNav from '@/components/Common/TopNav';
import Footer from '@/components/MainBlocks/Footer';

export const metadata: Metadata = {
  title: 'Terms of Service | guayaba.run',
  description:
    'Terms of Service for guayaba.run — the AI Ops Cloud for builders. Read the legal terms governing use of the Guayaba platform.',
  alternates: {
    canonical: '/terms',
  },
  openGraph: {
    title: 'Terms of Service | guayaba.run',
    description:
      'Terms of Service for guayaba.run — the AI Ops Cloud for builders.',
    url: '/terms',
    type: 'article',
  },
  twitter: {
    title: 'Terms of Service | guayaba.run',
    description:
      'Terms of Service for guayaba.run — the AI Ops Cloud for builders.',
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

export default function TermsOfServicePage() {
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
            Terms of Service
          </h1>
        </div>
      </div>

      <div className="border-t border-b border-gray-400">
      <div className="border border-gray-400 border-t-0 border-b-0 bordered-container mx-auto bg-white">
        <article className="max-w-4xl mx-auto px-6 md:px-12 py-12 font-anek-latin text-gray-800 leading-relaxed">
        <Section title="1. Acceptance of Terms">
          <p>
            By accessing or using the Guayaba platform at guayaba.run (the &ldquo;Service&rdquo;), you agree to
            be bound by these Terms of Service (&ldquo;Terms&rdquo;). If you do not agree, do not access or use
            the Service.
          </p>
          <p>
            These Terms constitute a legally binding agreement between you (&ldquo;User,&rdquo; &ldquo;you,&rdquo; or &ldquo;your&rdquo;)
            and Guayaba LLC, a Series of OtoCo DE LLC (&ldquo;Guayaba,&rdquo; &ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;).
          </p>
          <p>
            We reserve the right to update these Terms at any time. Where changes are material, we
            will notify you via email or in-app notice at least 14 days before they take effect.
            Continued use of the Service after changes take effect constitutes your acceptance of
            the revised Terms.
          </p>
        </Section>

        <Section title="2. Eligibility">
          <p>
            You must be at least 18 years of age to use the Service. By creating an account, you
            represent and warrant that:
          </p>
          <ul className="list-disc pl-6 space-y-1">
            <li>You are at least 18 years old.</li>
            <li>You have the legal capacity to enter into binding contracts under the laws of your jurisdiction.</li>
            <li>Your use of the Service complies with all applicable laws in your jurisdiction.</li>
          </ul>
          <p>
            Use of the Service by individuals under 18 is strictly prohibited. We reserve the right
            to terminate accounts of users we reasonably believe to be underage.
          </p>
        </Section>

        <Section title="3. Account Registration">
          <p>
            To access the Service, you must create an account using a valid email address or a
            compatible Web3 wallet. You agree to:
          </p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Provide accurate and complete information during registration.</li>
            <li>Maintain the security of your account credentials.</li>
            <li>Notify us immediately at david@guayaba.run if you suspect unauthorized access.</li>
            <li>Accept responsibility for all activity that occurs under your account.</li>
          </ul>
          <p>
            We reserve the right to suspend or terminate accounts at our sole discretion, including
            for violations of these Terms.
          </p>
        </Section>

        <Section title="4. Description of Service">
          <p>
            Guayaba is an infrastructure platform that allows users to deploy, configure, and manage
            AI-powered autonomous agents (&ldquo;Agents&rdquo;). The Service includes:
          </p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Deployment and hosting of AI agent instances.</li>
            <li>Configuration of agent identity, personality, knowledge base, and language model.</li>
            <li>Connection of agents to third-party communication channels (e.g., Telegram).</li>
            <li>Monitoring, logging, and management tools.</li>
            <li>A credit-based system to power LLM usage and compute.</li>
            <li>Access to the OpenClaw agent runtime framework.</li>
          </ul>
          <p>The Service is available to both individual consumers (B2C) and businesses (B2B).</p>
        </Section>

        <Section title="5. Subscription Plans and Billing">
          <h4 className="font-space font-semibold text-lg mt-4 mb-2">5.1 Plans</h4>
          <p>Guayaba offers the following subscription plans:</p>
          <Table
            headers={["Plan", "Price", "Agent Instances", "Monthly Credits"]}
            rows={[
              ["Early Access", "$4.90/month", "1", "3,000"],
              ["Pro", "$49.00/month", "Up to 3", "10,000"],
            ]}
          />
          <p>
            Plan features and pricing are subject to change. We will provide at least 30 days&apos;
            notice before any price change takes effect for existing subscribers.
          </p>

          <h4 className="font-space font-semibold text-lg mt-4 mb-2">5.2 Free Trial</h4>
          <p>
            Eligible users may access the Service free of charge for the first calendar month
            (&ldquo;Free Trial&rdquo;). At the end of the Free Trial period, your subscription will
            automatically convert to a paid plan and your chosen payment method will be charged
            the applicable monthly fee unless you cancel before the trial period ends.
          </p>
          <p>We will send you a reminder notification at least 7 days before the Free Trial ends.</p>

          <h4 className="font-space font-semibold text-lg mt-4 mb-2">5.3 Automatic Renewal</h4>
          <p>
            Subscriptions are billed on a recurring monthly basis. By subscribing, you authorize
            Guayaba to charge your payment method automatically at the start of each billing cycle.
            You may cancel your subscription at any time through your account settings before the
            next billing date to avoid further charges.
          </p>

          <h4 className="font-space font-semibold text-lg mt-4 mb-2">5.4 Top-Up Credits</h4>
          <p>In addition to subscription credits, users may purchase additional credits:</p>
          <Table
            headers={["Pack", "Credits", "Price"]}
            rows={[
              ["Starter", "10,000", "$10.00"],
              ["Standard", "50,000", "$50.00"],
              ["Pro", "120,000", "$100.00"],
            ]}
          />
          <p>Top-up credits may be purchased via Stripe (card) or USDC (crypto).</p>

          <h4 className="font-space font-semibold text-lg mt-4 mb-2">5.5 Refunds and Statutory Consumer Rights</h4>
          <p>
            <strong>General policy:</strong> All payments for subscriptions and credit top-ups are
            non-refundable once the Service has been accessed or credits have been consumed.
          </p>
          <p>
            <strong>EU / EEA consumers — Right of Withdrawal:</strong> If you are a consumer located in the
            European Union or European Economic Area, you have the right to withdraw from a
            purchase within 14 days of the transaction date, in accordance with the EU Consumer
            Rights Directive (2011/83/EU), <strong>unless</strong> you have expressly requested immediate
            access to the Service and acknowledged that this right is waived upon commencement
            of Service delivery. By activating a subscription or consuming credits, you expressly
            request immediate performance and acknowledge the loss of the right of withdrawal.
          </p>
          <p>
            <strong>Nothing in these Terms limits or excludes any statutory rights you may have under
            the mandatory consumer protection laws of your country of residence.</strong>
          </p>

          <h4 className="font-space font-semibold text-lg mt-4 mb-2">5.6 Failed Payments</h4>
          <p>
            If a payment fails, we reserve the right to suspend your account and pause all running
            agents until the outstanding balance is settled. We will notify you by email before
            taking this action where reasonably practicable.
          </p>
        </Section>

        <Section title="6. Credits">
          <h4 className="font-space font-semibold text-lg mt-4 mb-2">6.1 Credit Usage</h4>
          <p>Credits are consumed by:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li><strong>LLM usage:</strong> Each message processed by the agent&apos;s language model.</li>
            <li><strong>Compute:</strong> Time the agent spends in a running state.</li>
          </ul>
          <p>
            Credit consumption rates are published in the platform documentation and may be
            updated with 14 days&apos; notice.
          </p>

          <h4 className="font-space font-semibold text-lg mt-4 mb-2">6.2 Invite Credits</h4>
          <p>
            Users who participate in the referral program receive 500 bonus credits upon a
            successful invite. Both the inviting user and the invited user receive 500 credits
            each. Invite credits:
          </p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Expire <strong>60 days</strong> from the date of issuance.</li>
            <li>Cannot be transferred between accounts.</li>
            <li>Have no monetary value and cannot be redeemed for cash.</li>
          </ul>

          <h4 className="font-space font-semibold text-lg mt-4 mb-2">6.3 Credit Expiration and Suspension</h4>
          <p>
            If your credit balance reaches zero, running agents will be paused automatically.
            Guayaba is not liable for any disruption to your agents or downstream services caused
            by credit exhaustion.
          </p>
        </Section>

        <Section title="7. AI Agents — User Responsibilities">
          <h4 className="font-space font-semibold text-lg mt-4 mb-2">7.1 You Are the Operator</h4>
          <p>
            When you deploy an Agent using the Service, you are the operator of that Agent. You
            are solely responsible for:
          </p>
          <ul className="list-disc pl-6 space-y-1">
            <li>The configuration, behavior, and outputs of your Agent.</li>
            <li>All interactions your Agent has with third parties, including users who access your Agent via Telegram or any other connected channel.</li>
            <li>Ensuring your Agent complies with applicable laws, regulations, and the terms of any third-party platforms it is connected to.</li>
            <li>Assessing whether your Agent constitutes a high-risk AI system under applicable regulation (including the EU AI Act) and fulfilling any resulting obligations.</li>
          </ul>

          <h4 className="font-space font-semibold text-lg mt-4 mb-2">7.2 EU AI Act — Deployer Obligations</h4>
          <p>
            Guayaba provides general-purpose AI agent infrastructure. As the deployer of an Agent
            built on our platform, <strong>you</strong> are responsible for:
          </p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Determining the risk classification of your Agent under Regulation (EU) 2024/1689 (EU AI Act) and any other applicable AI regulation.</li>
            <li>Implementing required transparency measures, logging, human oversight, and documentation obligations applicable to your specific use case.</li>
            <li>Ensuring your Agent does not constitute a prohibited AI practice under Article 5 of the EU AI Act.</li>
          </ul>
          <p>Guayaba does not assess, classify, or certify the regulatory status of Agents deployed by users.</p>

          <h4 className="font-space font-semibold text-lg mt-4 mb-2">7.3 Third-Party Interactions</h4>
          <p>
            If you make your Agent accessible to third parties (e.g., by sharing a Telegram bot
            or exposing an API endpoint), you are acting as an independent operator with respect
            to those third parties. Guayaba is not a party to those interactions and bears no
            responsibility for any harm, damage, or legal liability arising from them.
          </p>

          <h4 className="font-space font-semibold text-lg mt-4 mb-2">7.4 AI Outputs and Hallucinations</h4>
          <p>
            AI language models are probabilistic systems that may produce inaccurate, misleading,
            incomplete, or offensive outputs (&ldquo;Hallucinations&rdquo;). Guayaba does not warrant the
            accuracy, completeness, or reliability of any output generated by an Agent.
          </p>
          <p>You agree that:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>You will not deploy Agents in contexts where inaccurate outputs could cause serious harm without implementing appropriate human oversight.</li>
            <li>Guayaba is not liable for any decision made based on Agent outputs.</li>
            <li>You will communicate clearly to any end users of your Agent that they are interacting with an AI system.</li>
          </ul>

          <h4 className="font-space font-semibold text-lg mt-4 mb-2">7.5 Autonomous Operation</h4>
          <p>
            Some Agent configurations allow Agents to operate autonomously over extended periods.
            You accept full responsibility for monitoring your Agents and for any consequences of
            their autonomous operation, including unintended communications, erroneous actions,
            or costs incurred.
          </p>
        </Section>

        <Section title="8. Acceptable Use Policy">
          <p>You agree not to use the Service to:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Deploy Agents designed to deceive, manipulate, harass, or harm any person.</li>
            <li>Generate, distribute, or facilitate illegal content of any kind, including content that violates intellectual property rights, privacy rights, or applicable law.</li>
            <li>Impersonate any person, organization, or entity without authorization.</li>
            <li>Engage in spamming, phishing, or unsolicited mass messaging via connected channels.</li>
            <li>Circumvent, disable, or attack the security features of the Service.</li>
            <li>Probe, scan, or test the vulnerability of our systems or networks without prior written authorization.</li>
            <li>Extract, scrape, or harvest data from the Service beyond what is permitted by these Terms.</li>
            <li>Use the Service to train competing AI models or reproduce the underlying infrastructure.</li>
            <li>Violate any applicable law, regulation, or third-party rights.</li>
            <li>Deploy Agents that violate the acceptable use policies of connected third-party services (e.g., Telegram, OpenAI, Anthropic).</li>
            <li>Deploy Agents that constitute prohibited AI practices under Article 5 of the EU AI Act, including systems that exploit psychological vulnerabilities, engage in social scoring, or use prohibited biometric categorization.</li>
          </ul>
          <p>Violation of this policy may result in immediate suspension or termination of your account without refund.</p>
        </Section>

        <Section title="9. Content Moderation and Abuse Enforcement">
          <h4 className="font-space font-semibold text-lg mt-4 mb-2">9.1 Detection</h4>
          <p>
            Guayaba employs automated and manual processes to detect violations of these Terms,
            including but not limited to abuse of the credit system, prohibited Agent behaviors,
            and security threats. These processes may analyze metadata, usage patterns, and
            infrastructure-level signals. They do not involve reading the content of Agent conversations.
          </p>

          <h4 className="font-space font-semibold text-lg mt-4 mb-2">9.2 Enforcement Actions</h4>
          <p>Depending on the nature and severity of a violation, we may:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Issue a warning to the account holder.</li>
            <li>Temporarily suspend one or more Agents.</li>
            <li>Suspend or terminate the account.</li>
            <li>Remove or disable Agent configurations that violate these Terms.</li>
            <li>Retain relevant data for the purposes of investigating the violation.</li>
          </ul>

          <h4 className="font-space font-semibold text-lg mt-4 mb-2">9.3 Reporting to Authorities</h4>
          <p>
            Where we have a legal obligation, or where we reasonably believe that activity on
            our platform constitutes a serious criminal offense (including but not limited to
            child sexual abuse material, terrorist content, or threats of violence), we will
            report such activity to the relevant law enforcement or regulatory authorities.
          </p>

          <h4 className="font-space font-semibold text-lg mt-4 mb-2">9.4 Appeals</h4>
          <p>
            If you believe your account has been suspended or terminated in error, you may
            contact us at david@guayaba.run to request a review. We will respond within
            10 business days.
          </p>
        </Section>

        <Section title="10. Security">
          <p>You agree to use the Service only in the manner it is intended. Any attempt to:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Exploit vulnerabilities in our systems, infrastructure, or Agent runtime.</li>
            <li>Access other users&apos; accounts, data, or Agent configurations.</li>
            <li>Inject malicious code, prompts, or payloads into the Service or into Agents (including prompt injection attacks).</li>
            <li>Reverse engineer, decompile, or extract proprietary components of the Service.</li>
          </ul>
          <p>
            …constitutes a material breach of these Terms and may expose you to civil and
            criminal liability. We reserve the right to pursue all available legal remedies.
          </p>
          <p>
            <strong>Responsible Disclosure:</strong> If you discover a security vulnerability, please disclose
            it responsibly to david@guayaba.run before making it public. We will not pursue legal
            action against good-faith security researchers who comply with this responsible
            disclosure process.
          </p>
        </Section>

        <Section title="11. Data Storage Architecture and Privacy">
          <h4 className="font-space font-semibold text-lg mt-4 mb-2">11.1 Layers of Data Storage</h4>
          <p>To avoid ambiguity, Guayaba operates the following distinct data storage layers:</p>
          <Table
            headers={["Layer", "What is stored", "Who controls it", "Guayaba access"]}
            rows={[
              ["Platform data", "Account info, billing, usage metadata", "Guayaba", "Yes"],
              ["Agent configuration", "Name, personality, instructions, model settings", "User", "Yes (to provide the Service)"],
              ["Agent memory", "Long-term conversation memory stored in isolated per-agent containers", "User (via the Service)", "No — isolated environment"],
              ["LLM processing", "Prompts and outputs sent to third-party LLMs", "Third-party LLM provider", "No — transmitted directly"],
              ["Infrastructure logs", "Runtime events, errors, status changes", "Guayaba", "Yes — no conversation content"],
            ]}
          />

          <h4 className="font-space font-semibold text-lg mt-4 mb-2">11.2 Conversation Content</h4>
          <p>
            Guayaba does not read, access, or store the content of conversations between your
            Agent and its end users. This content is:
          </p>
          <ol className="list-decimal pl-6 space-y-1">
            <li>Processed in real time by the third-party LLM provider you have selected.</li>
            <li>Stored within your Agent&apos;s isolated memory container, which is accessible only to your Agent&apos;s runtime process.</li>
          </ol>
          <p>
            Guayaba personnel do not access Agent memory containers in the ordinary course of
            operations. Access may occur only in the event of a security incident, legal
            obligation, or with your explicit consent.
          </p>

          <h4 className="font-space font-semibold text-lg mt-4 mb-2">11.3 LLM Provider Responsibility</h4>
          <p>
            Prompts and outputs transmitted to third-party LLM providers are governed by those
            providers&apos; own terms and privacy policies. Guayaba is not responsible for how these
            providers handle data.
          </p>
        </Section>

        <Section title="12. Wallet, Digital Assets, and Financial Services Disclaimer">
          <h4 className="font-space font-semibold text-lg mt-4 mb-2">12.1 Wallet Connection</h4>
          <p>Users may connect a Solana-compatible wallet to their Guayaba account. The wallet is currently used to:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Purchase credit top-ups using USDC on the Solana network.</li>
            <li>Associate your account with any future digital asset distribution program at Guayaba&apos;s sole discretion.</li>
          </ul>

          <h4 className="font-space font-semibold text-lg mt-4 mb-2">12.2 Not a Financial Service</h4>
          <p>
            <strong>Guayaba is not a financial services provider, bank, exchange, broker, or
            investment advisor.</strong> The Service does not constitute a financial service under
            any applicable law. Guayaba assumes no fiduciary duty toward users in connection
            with wallet connectivity or digital asset transactions.
          </p>
          <p>
            USDC transactions processed through the Service are payments for software services
            only. They do not constitute investment activity, trading, or financial advice.
          </p>

          <h4 className="font-space font-semibold text-lg mt-4 mb-2">12.3 No Promise of Airdrop or Token</h4>
          <p>
            The ability to connect a wallet does not constitute a promise, guarantee, or
            commitment by Guayaba to distribute any tokens, digital assets, points, or other
            items of value. Any future distribution program, if offered, will be subject to
            separate terms, eligibility criteria, and applicable law.
          </p>

          <h4 className="font-space font-semibold text-lg mt-4 mb-2">12.4 Wallet Security</h4>
          <p>
            You are solely responsible for the security of your wallet and private keys.
            Guayaba does not have access to your private keys and cannot recover lost wallet
            access. Connecting a wallet to the Service does not transfer custody of any assets to Guayaba.
          </p>

          <h4 className="font-space font-semibold text-lg mt-4 mb-2">12.5 Regulatory Compliance</h4>
          <p>
            You are solely responsible for determining the tax, regulatory, and legal
            implications of any digital asset transactions in your jurisdiction. Guayaba
            makes no representations regarding the regulatory status of USDC or any other
            digital asset in your jurisdiction.
          </p>
        </Section>

        <Section title="13. Intellectual Property">
          <h4 className="font-space font-semibold text-lg mt-4 mb-2">13.1 Guayaba IP</h4>
          <p>
            All software, infrastructure, interfaces, frameworks (including OpenClaw),
            trademarks, and content comprising the Service are the exclusive property of
            Guayaba LLC or its licensors. These Terms do not grant you any rights to our
            intellectual property beyond the limited license to use the Service as described herein.
          </p>

          <h4 className="font-space font-semibold text-lg mt-4 mb-2">13.2 Your Content</h4>
          <p>
            You retain ownership of all content, data, and configurations you create within
            the Service (&ldquo;User Content&rdquo;). By using the Service, you grant Guayaba a limited,
            non-exclusive, royalty-free license to host, store, and process your User Content
            solely to the extent necessary to provide the Service.
          </p>

          <h4 className="font-space font-semibold text-lg mt-4 mb-2">13.3 Feedback</h4>
          <p>
            If you submit feedback, suggestions, or ideas regarding the Service, you grant
            Guayaba an irrevocable, perpetual, worldwide license to use such feedback for any
            purpose without compensation to you.
          </p>
        </Section>

        <Section title="14. Third-Party Services">
          <p>
            The Service integrates with third-party platforms including Telegram, OpenAI,
            Anthropic, Google, Stripe, and Solana-based payment rails. Guayaba is not responsible for:
          </p>
          <ul className="list-disc pl-6 space-y-1">
            <li>The availability, accuracy, or performance of any third-party service.</li>
            <li>Changes to third-party APIs or policies that may affect your Agent&apos;s functionality.</li>
            <li>Any data shared with third-party services as a result of your Agent&apos;s configuration.</li>
          </ul>
          <p>Your use of third-party services is governed by those services&apos; own terms and policies.</p>
        </Section>

        <Section title="15. Disclaimer of Warranties">
          <p className="uppercase font-semibold text-sm">
            THE SERVICE IS PROVIDED &ldquo;AS IS&rdquo; AND &ldquo;AS AVAILABLE&rdquo; WITHOUT WARRANTIES OF ANY KIND,
            EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO WARRANTIES OF MERCHANTABILITY,
            FITNESS FOR A PARTICULAR PURPOSE, NON-INFRINGEMENT, OR UNINTERRUPTED AVAILABILITY.
          </p>
          <p className="uppercase font-semibold text-sm">
            GUAYABA DOES NOT WARRANT THAT THE SERVICE WILL BE ERROR-FREE OR UNINTERRUPTED,
            THAT ANY AGENT OUTPUT WILL BE ACCURATE, COMPLETE, OR FIT FOR ANY PURPOSE, OR
            THAT THE SERVICE WILL MEET YOUR SPECIFIC REQUIREMENTS.
          </p>
          <p>
            Nothing in this section limits any statutory warranties that cannot be excluded
            under applicable law in your jurisdiction.
          </p>
        </Section>

        <Section title="16. Limitation of Liability">
          <p className="uppercase font-semibold text-sm">
            TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, GUAYABA LLC AND ITS MEMBERS,
            OFFICERS, EMPLOYEES, AND AFFILIATES SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL,
            SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES; LOSS OF PROFITS, DATA, BUSINESS, OR
            GOODWILL; DAMAGES ARISING FROM AGENT HALLUCINATIONS, AUTONOMOUS AGENT BEHAVIOR, OR
            THIRD-PARTY INTERACTIONS; DAMAGES ARISING FROM UNAUTHORIZED ACCESS TO YOUR ACCOUNT;
            OR SERVICE INTERRUPTIONS CAUSED BY THIRD-PARTY PROVIDERS.
          </p>
          <p className="uppercase font-semibold text-sm">
            IN NO EVENT SHALL OUR TOTAL LIABILITY EXCEED THE AMOUNT YOU PAID TO GUAYABA IN THE
            THREE (3) MONTHS PRECEDING THE CLAIM.
          </p>
          <p>
            <strong>Mandatory local law:</strong> Nothing in this section excludes or limits liability that
            cannot be excluded under the mandatory laws of your country of residence, including
            liability for death or personal injury caused by negligence, fraud, or fraudulent
            misrepresentation.
          </p>
        </Section>

        <Section title="17. Indemnification">
          <p>
            You agree to indemnify, defend, and hold harmless Guayaba LLC and its members,
            officers, employees, and affiliates from and against any claims, liabilities,
            damages, losses, and expenses (including reasonable legal fees) arising out of or related to:
          </p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Your use of the Service.</li>
            <li>Your Agent&apos;s behavior, outputs, or interactions with third parties.</li>
            <li>Your violation of these Terms.</li>
            <li>Your violation of any applicable law or third-party rights.</li>
            <li>Any content you submit, configure, or process through the Service.</li>
            <li>Your failure to comply with applicable AI regulation as the deployer of an Agent.</li>
          </ul>
        </Section>

        <Section title="18. Termination">
          <p>
            We may suspend or terminate your account and access to the Service at any time,
            with or without notice, for any reason, including violation of these Terms.
            Where possible, we will provide prior notice and an opportunity to remedy the violation.
            Upon termination:
          </p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Your right to access the Service ceases immediately.</li>
            <li>Unused credits and subscription fees are non-refundable except as required by applicable law.</li>
            <li>Agent configurations and data stored in isolated containers will be deleted after 30 days.</li>
          </ul>
          <p>You may terminate your account at any time by contacting david@guayaba.run.</p>
        </Section>

        <Section title="19. Governing Law and Dispute Resolution">
          <h4 className="font-space font-semibold text-lg mt-4 mb-2">19.1 Governing Law</h4>
          <p>
            These Terms are governed by the laws of the State of Delaware, United States,
            without regard to conflict of law principles.
          </p>

          <h4 className="font-space font-semibold text-lg mt-4 mb-2">19.2 Mandatory Consumer Rights</h4>
          <p>
            <strong>Nothing in these Terms overrides, excludes, or restricts any mandatory rights
            you have under the consumer protection or data protection laws of your country
            of residence.</strong> If you are a consumer in the European Union, you retain all
            rights afforded to you under EU consumer law, including the right to bring
            proceedings before the courts of your country of residence.
          </p>

          <h4 className="font-space font-semibold text-lg mt-4 mb-2">19.3 Dispute Resolution</h4>
          <p>
            For users not protected by mandatory local consumer law provisions to the contrary,
            any dispute arising from these Terms shall be resolved by binding arbitration under
            the rules of the American Arbitration Association (AAA), conducted in English.
            You waive any right to participate in a class action lawsuit or class-wide arbitration.
          </p>
          <p>
            Nothing in this section prevents either party from seeking injunctive or other
            equitable relief in a court of competent jurisdiction.
          </p>

          <h4 className="font-space font-semibold text-lg mt-4 mb-2">19.4 EU Online Dispute Resolution</h4>
          <p>
            If you are an EU consumer, you may also use the European Commission&apos;s Online
            Dispute Resolution platform:{" "}
            <a href="https://ec.europa.eu/consumers/odr" target="_blank" rel="noopener noreferrer" className="text-primary-500 underline">
              https://ec.europa.eu/consumers/odr
            </a>
          </p>
        </Section>

        <Section title="20. Miscellaneous">
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Entire Agreement:</strong> These Terms, together with the Privacy Policy, constitute the entire agreement between you and Guayaba regarding the Service.</li>
            <li><strong>Severability:</strong> If any provision is found unenforceable, the remaining provisions remain in full force.</li>
            <li><strong>No Waiver:</strong> Failure to enforce any provision does not constitute a waiver of our rights.</li>
            <li><strong>Assignment:</strong> You may not assign your rights under these Terms. Guayaba may assign its rights without restriction in connection with a merger, acquisition, or sale of assets.</li>
            <li><strong>Force Majeure:</strong> Guayaba is not liable for delays or failures caused by circumstances beyond our reasonable control, including LLM provider outages, blockchain network congestion, or regulatory actions.</li>
            <li><strong>Language:</strong> These Terms are written in English. In case of conflict between a translated version and the English version, the English version prevails.</li>
          </ul>
        </Section>

        <Section title="21. Contact">
          <p><strong>Guayaba LLC, a Series of OtoCo DE LLC</strong></p>
          <p>Email: david@guayaba.run</p>
          <p>Website: <a href="https://guayaba.run" className="text-primary-500 underline">https://guayaba.run</a></p>
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
