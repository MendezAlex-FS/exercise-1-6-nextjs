import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Alex's Next App",
  description: "Learning Next.js with Alex",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const HEADER = "header p-[1%] bg-black text-[rgb(163,173,194)] flex flex-row gap-[0px] justify-between items-center shadow-[1px_6px_1px_1px_rgba(0,0,255,.1)] max-[900px]:flex-col h-[130px]"
  const DIV = "flex flex-row items-center";
  const LOGO = "h-[80px] w-[80px] mr-[5%] bg-center bg-no-repeat bg-[length:100%]";
  const TITLE = "text-[32px] leading-[1.1] text-nowrap";
  const MAIN = "flex flex-row min-h-[calc(100vh-130px)] items-start h-auto rounded-lg bg-[rgb(163,173,194)]";
  const MIDDLE = "flex flex-col flex-1 w-full";

  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <header className={HEADER}>
          <div className={DIV}>
            <div id="logo" className={LOGO} style={{ backgroundImage: "url('logo.png')" }}/>
            <h1 className={TITLE}>Alex's Next</h1>
          </div>
          <div className={DIV}>&nbsp;</div>
        </header>
        <main className={MAIN}>
          <section className={MIDDLE}>
            {children}
          </section>
        </main>
      </body>
    </html>
  );
}
