import '@/styles/globals.css'
import {clarity} from 'react-microsoft-clarity';

export default function App({Component, pageProps}) {
    if (typeof window !== "undefined") {
        clarity.init("gy8oodehvm");
    }
    return <Component {...pageProps} />
}
