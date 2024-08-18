import { SessionProvider } from "next-auth/react";
import type { AppProps } from "next/app";
import PopulatedNavBar from "../components/PopulatedNavBar";
import "../styles/globals.scss";

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
    return (
        <SessionProvider session={session}>
            <PopulatedNavBar />
            <Component {...pageProps} />
        </SessionProvider>
    );
}

export default MyApp;