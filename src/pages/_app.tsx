import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Navbar from "./Navbar";
import { Fraunces } from "@next/font/google";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={`bg-primary ${fraunces.variable} font-sans`}>
      <Navbar />
      <Component {...pageProps} />
    </main>
  );
}
