import type { Metadata } from "next";
import "./globals.css";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Online Manipal | UGC-Entitled Online Degree Programs",
  description:
    "Earn a recognized online degree from Online Manipal and accelerate your career with flexible, industry-relevant programs from leading universities.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="/landing/degree-admission.co.in/assets/images/favicon.png" />

        {/* ✅ GOOGLE TAG FIX */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-18215221480"
          strategy="afterInteractive"
        />

        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            window.gtag = gtag;
            gtag('js', new Date());
            gtag('config', 'AW-18215221480');
          `}
        </Script>

      </head>
      <body className="font-sans text-gray-800 antialiased" style={{ fontFamily: "Inter, sans-serif" }}>
        {children}
      </body>
    </html>
  );
}