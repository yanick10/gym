import { AppProps } from "next/app";
import "../styles/globals.css";
import "tailwindcss/tailwind.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function MyApp({ Component, pageProps, router }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
