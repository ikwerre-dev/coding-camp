import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const geistSans = Poppins({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  weight: ['400', '500', '600', '700', '800', '900'],
});

export const metadata: Metadata = {
  title: 'DAVID UKONU | Software Engineer',
  description: 'Creative Software Engineer with 5+ years of experience, specializing in web development, app development, robotics, cloud computing, and game development. Building scalable products with great user experiences.',
  keywords: ['Software Engineer', 'Web Development', 'App Development', 'Robotics', 'Cloud Computing', 'Game Development', 'Full Stack Developer', 'DAVID UKONU'],
  authors: [{ name: 'DAVID UKONU' }],
  creator: 'DAVID UKONU',
  publisher: 'DAVID UKONU',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: '/my-hero.jpg',
    shortcut: '/my-hero.jpg',
    apple: '/my-hero.jpg',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://robinsonhonour.me.',
    siteName: 'DAVID UKONU Portfolio',
    title: 'DAVID UKONU | Creative Software Engineer',
    description: 'Creative Software Engineer specializing in web development, app development, robotics, and cloud computing. Building scalable products with great user experiences.',
    images: [
      {
        url: '/og.png',
        width: 1200,
        height: 630,
        alt: 'DAVID UKONU - Creative Software Engineer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'DAVID UKONU | Creative Software Engineer',
    description: 'Creative Software Engineer building scalable products with great user experiences.',
    creator: '@honour_can_code',
    images: ['/og.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
  themeColor: '#6f1cd7',
  manifest: '/manifest.json',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: 'DAVID UKONU Amadi',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable}  antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
