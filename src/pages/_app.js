import '@/styles/globals.css'
import {clarity} from 'react-microsoft-clarity';
import {GoogleAnalytics} from "nextjs-google-analytics";

export default function App({Component, pageProps}) {
    if (typeof window !== "undefined") {
        clarity.init("gy8oodehvm");
    }
    return (
        <>
            <GoogleAnalytics trackPageViews />
            <Component {...pageProps} />
        </>
    )
}
