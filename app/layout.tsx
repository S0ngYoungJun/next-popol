import type { Metadata } from "next";
import "./globals.css";
import localFont from 'next/font/local'
import style from "@/styles/header.module.scss"
import Image from "next/image";
const myFont = localFont({
  src: '../public/fonts/AppleSDGothicNeoEB.ttf',
  display: 'swap',
})


export const metadata: Metadata = {
  title: "SongYoungJun portfolio",
  description: "안녕하세요. 신입개발자 송영준의 포트폴리오입니다.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={myFont.className}>
        <header className={style.header}/>
        {children}
        <footer className={style.foot}>
        </footer>
        </body>
    </html>
  );
}
