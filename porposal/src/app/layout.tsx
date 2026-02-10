import type { Metadata } from "next";
import { Geist, Noto_Sans_TC } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const notoSansTC = Noto_Sans_TC({
  variable: "--font-noto-sans-tc",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "敬呈客戶｜安盛生科 iXensor — 媒體影響力與高階主管專案協助",
  description: "安盛生科專案執行期 2026 年 3 月 1 日 – 5 月 5 日｜媒體策略、溝通轉譯、現場執行一站式服務",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-TW" className="dark">
      <body className={`${geistSans.variable} ${notoSansTC.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
