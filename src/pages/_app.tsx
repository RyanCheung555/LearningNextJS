import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Calculator from "@/components/Calculator";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className = "flex min-h-screen flex-col items-center justify-center p-24">
      <Calculator />
    </div>
  )
}
