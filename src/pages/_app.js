import '@/styles/globals.css'
import {clarity} from 'react-microsoft-clarity';
import ReactGA from 'react-ga';

export default function App({Component, pageProps}) {
    if (typeof window !== "undefined") {
        clarity.init("gy8oodehvm");
        ReactGA.initialize('G-J9M2G7WGCL');
        ReactGA.pageview(window.location.pathname + window.location.search);
    }
    return <Component {...pageProps} />
}
