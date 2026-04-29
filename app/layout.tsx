import type { Metadata, Viewport } from 'next';
import Script from 'next/script';
import { Anek_Latin, Anonymous_Pro, Space_Grotesk, Afacad } from 'next/font/google';
import Providers from './providers';
import './globals.css';

const anekLatin = Anek_Latin({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800'],
  display: 'swap',
  variable: '--font-anek-latin',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-space-grotesk',
});

const anonymousPro = Anonymous_Pro({
  subsets: ['latin'],
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  display: 'swap',
  variable: '--font-anonymous-pro',
});

const afacad = Afacad({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
  display: 'swap',
  variable: '--font-afacad',
});

const SITE_URL = 'https://guayaba.run';
const OG_IMAGE = `${SITE_URL}/caption-v1.jpg`;

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: 'guayaba.run',
  description:
    'The AI Ops Cloud. Built for builders. Deploy, harness, and scale AI agents from a single dashboard. Multi-framework support (OpenAI, Anthropic, Ollama), private model inference, zero-ops deployment.',
  keywords: [
    'openclaw',
    'hermes',
    'AI agents',
    'agentic infrastructure',
    'deploy AI agents',
    'OpenAI',
    'Anthropic',
    'Ollama',
    'AI platform',
    'agent deployment',
    'private AI inference',
    'agent marketplace',
  ],
  alternates: {
    canonical: '/',
  },
  icons: {
    icon: '/guayaba_small_black.svg',
    apple: '/guayaba_small_black.svg',
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: 'website',
    url: SITE_URL,
    siteName: 'guayaba.run',
    title: 'guayaba.run | The AI ops cloud. Built for builders.',
    description:
      'Deploy, harness, and scale AI agents from a single dashboard. Multi-framework support, private model inference, zero-ops deployment.',
    locale: 'en_US',
    images: [
      {
        url: OG_IMAGE,
        secureUrl: OG_IMAGE,
        type: 'image/jpeg',
        width: 1200,
        height: 630,
        alt: 'guayaba.run | The AI ops cloud. Built for builders.',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@Guayabadotrun',
    title: 'guayaba.run | The AI ops cloud. Built for builders.',
    description:
      'Deploy, harness, and scale AI agents from a single dashboard. Multi-framework support, private model inference, zero-ops deployment.',
    images: [
      {
        url: OG_IMAGE,
        alt: 'guayaba.run | The AI ops cloud. Built for builders.',
      },
    ],
  },
};

export const viewport: Viewport = {
  themeColor: '#000000',
  width: 'device-width',
  initialScale: 1,
};

const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Guayaba',
  url: SITE_URL,
  logo: `${SITE_URL}/guayaba_horizontal_black.svg`,
  description:
    'The AI Ops Cloud. Built for builders. Deploy, harness, and scale AI agents from a single dashboard.',
  sameAs: ['https://x.com/Guayabadotrun'],
  contactPoint: {
    '@type': 'ContactPoint',
    email: 'david@guayaba.run',
    contactType: 'customer support',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${anekLatin.variable} ${spaceGrotesk.variable} ${anonymousPro.variable} ${afacad.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd),
          }}
        />
      </head>
      <body>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-K2WYFXCY4J"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-K2WYFXCY4J');
          `}
        </Script>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
