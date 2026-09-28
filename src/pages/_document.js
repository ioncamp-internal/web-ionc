import { Html, Head, Main, NextScript } from 'next/document'
export default function Document() {
  return (
    // 標成 zh-TW 而非 zh：只寫 zh 時 Chrome 會當成簡體，
    // 設了「簡體一律翻成繁體」的使用者會被自動翻譯，翻譯後 React 的動態文字會卡住不更新
    <Html lang="zh-TW">
      <Head>
        {/* Google tag (gtag.js) */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-9HEMZZRGT1"></script>
        <script dangerouslySetInnerHTML={{ __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-9HEMZZRGT1');
        `}} />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@400;500;700;900&family=Caveat:wght@400;700&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
