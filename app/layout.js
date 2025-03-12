"use client"; // Mark this as a client component

import { useState, useEffect } from "react";
import { GoogleTagManager } from "@next/third-parties/google";
import { Inter } from "next/font/google";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./components/footer";
import ScrollToTop from "./components/helper/scroll-to-top";
import Navbar from "./components/navbar";
import "./css/card.scss";
import "./css/globals.scss";

const inter = Inter({ subsets: ["latin"] });

// List of "Namaste" in 10 Indian languages (Updated: Removed Bengali, Added Kannada)
const greetings = [
  { lang: "Hindi", text: "नमस्ते" },
  { lang: "Kannada", text: "ನಮಸ್ಕಾರ" }, // Added Kannada
  { lang: "Telugu", text: "నమస్కారం" },
  { lang: "Marathi", text: "नमस्कार" },
  { lang: "Tamil", text: "வணக்கம்" },
  { lang: "Gujarati", text: "નમસ્તે" },
  { lang: "Malayalam", text: "നമസ്കാരം" },
  { lang: "Punjabi", text: "ਸਤ ਸ੍ਰੀ ਅਕਾਲ" },
  { lang: "Odia", text: "ନମସ୍କାର" },
];

function Loader({ onComplete }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    // Cycle through greetings every 300ms (faster switching)
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % greetings.length);
    }, 300);

    // Hide loader after 2 seconds
    setTimeout(() => {
      clearInterval(interval);
      onComplete();
    }, 2000);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-zinc-900 text-white text-4xl font-bold animate-fade-in">
      <p className="transition-all duration-300">{greetings[index].text}</p>
      <span className="text-lg text-gray-400 mt-2">({greetings[index].lang})</span>
    </div>
  );
}

export default function RootLayout({ children }) {
  const [loading, setLoading] = useState(true);

  return (
    <html lang="en">
      <body className={`bg-zinc-900 ${inter.className}`}>
        {loading ? (
          <Loader onComplete={() => setLoading(false)} />
        ) : (
          <>
            <ToastContainer />
            <main className="min-h-screen relative mx-auto px-6 sm:px-12 lg:max-w-[70rem] xl:max-w-[76rem] 2xl:max-w-[92rem] text-white">
              <Navbar />
              {children}
              <ScrollToTop />
            </main>
            <Footer />
          </>
        )}
      </body>
      <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GTM} />
    </html>
  );
}
