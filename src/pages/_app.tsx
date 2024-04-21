import "@/styles/globals.css";
import type { AppProps } from "next/app";
import localFont from "next/font/local";
import Head from "next/head";

const circular = localFont({
  src: "./fonts/circular-std-medium-500.ttf",
  variable: "--font-circular",
});

const avenir = localFont({
  src: [
    {
      path: "./fonts/AvenirNextLTPro-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/AvenirNextLTPro-Bold.otf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-avenir",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link rel="icon" href="/images/c2cash_logo.ico" />
      </Head>
      <div
        className={`${circular.variable} font-sans ${avenir.variable} font-sans`}
      >
        <Component {...pageProps} />
      </div>
    </>
  );
}
