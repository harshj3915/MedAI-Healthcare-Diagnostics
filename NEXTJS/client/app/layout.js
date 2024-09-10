"use client"
import localFont from "next/font/local";
import DrawerAppBar from './components/Header';
import "./globals.css";
import ChatWidget from "./components/ChatWithUs";


const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

// export const metadata = {
//   title: "Create Next App",
//   description: "Generated by create next app",
// };

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div>
          <DrawerAppBar/>
        </div>
        {children}
      <ChatWidget></ChatWidget>
      </body>
    </html>
  );
}
