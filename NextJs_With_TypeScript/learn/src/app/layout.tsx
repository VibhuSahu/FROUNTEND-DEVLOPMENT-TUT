import { Metadata } from "next";

export const metadata: Metadata = {
  title: "My Next.js App",
  description: "This is a sample Next.js application.",
  openGraph: {
    title: "My Next.js App",
    description: "This is a sample Next.js application.",
    url: "https://example.com",
    siteName: "Example",
    images: [
      {
        url: "https://example.com/og-image.jpg",
        width: 800,
        height: 600,
        alt: "OG Image Alt Text",
      },
    ],
    type: "website",
  },
};

export default function RootLayout({ children }: { 
    children: React.ReactNode 
    }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
