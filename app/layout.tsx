import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Friotuytec — Aires Acondicionados y Refrigeración",
  description: "Frosty Funnel is a React and Tailwind CSS landing page designed as a service acquisition funnel for an HVAC company.",
  authors: [{ name: "Friotuytec" }],
  openGraph: {
    title: "Friotuytec",
    description: "Frosty Funnel is a React and Tailwind CSS landing page designed as a service acquisition funnel for an HVAC company.",
    type: "website",
    images: ["https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/a82e6a62-6a57-40cf-8094-f020c35526c1/id-preview-660ef8f7--55b25529-f600-44e2-a772-f3cbca0563fc.lovable.app-1782440819828.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <head>
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-1V7PHGMMEP"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-1V7PHGMMEP');
            `,
          }}
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
