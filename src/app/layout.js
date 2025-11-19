import "./globals.css";

export const metadata = {
  title: "Sercan Çelik | Web Developer",
  description:
    "Ben Sercan Çelik. Frontend geliştirme, React, Next.js ve modern web teknolojileriyle ilgileniyorum.",
  metadataBase: new URL("https://sercancelik.dev"),
  openGraph: {
    title: "Sercan Çelik | Web Developer",
    description:
      "React, Next.js ve modern frontend teknolojileriyle yüksek performanslı web projeleri geliştiriyorum.",
    url: "https://sercancelik.dev",
    siteName: "Sercan Çelik",
    images: [
      {
        url: "https://sercancelik.dev/og-image.webp",
        width: 1200,
        height: 630,
        alt: "Sercan Çelik - Web Developer",
      },
    ],
    locale: "tr_TR",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.ico",
  },
}
export default function RootLayout({ children }) {
  return (
    <html className="scroll-smooth" lang="en">
      <link rel="icon" href="/favicon.ico" />
      <body>{children}</body>
    </html>
  );
}
