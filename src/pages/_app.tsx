import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Fraunces } from "@next/font/google";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={`bg-primary ${fraunces.variable}`}>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </main>
  );
}
