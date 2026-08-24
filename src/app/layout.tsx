import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { SchemaOrg } from "@/components/SchemaOrg";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "DINNEPATI SINDHU PRASAD | Software Engineer & AI Specialist",
  description:
    "Production portfolio of Dinnepati Sindhu Prasad - Computer Science Engineer specializing in Android Development, Artificial Intelligence, Medical Imaging, and Cloud Computing (AWS/GCP).",
  keywords: [
    "Dinnepati Sindhu Prasad",
    "Software Engineer",
    "Android Developer",
    "AI Engineer",
    "Cloud Developer",
    "MONAI Healthcare AI",
    "Kotlin Developer",
    "Python AI Specialist",
    "SIMATS Engineering",
    "Chennai Software Developer",
  ],
  authors: [{ name: "Dinnepati Sindhu Prasad" }],
  creator: "Dinnepati Sindhu Prasad",
  metadataBase: new URL("https://github.com/prasad1271"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://github.com/prasad1271",
    title: "DINNEPATI SINDHU PRASAD | Software Engineer & AI Specialist",
    description:
      "Building AI-powered Healthcare Applications and Scalable Software Solutions. CGPA 8.96 B.E CSE Student.",
    siteName: "Dinnepati Sindhu Prasad Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "DINNEPATI SINDHU PRASAD | Software Engineer & AI Specialist",
    description:
      "Building AI-powered Healthcare Applications and Scalable Software Solutions.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <SchemaOrg />
      </head>
      <body className={`${inter.variable} font-sans bg-[#09090B] text-[#F8FAFC] antialiased selection:bg-cyan-500 selection:text-slate-950`}>
        {children}
      </body>
    </html>
  );
}
