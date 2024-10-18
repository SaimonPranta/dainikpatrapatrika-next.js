import { Inter } from "next/font/google";
import "./globals.css";
import { Provider } from 'react-redux';
import store from "../store/store"
import App from "./app.js"

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Dainik Patrapatrika: Your Gateway to Truthful Journalism",
  description: "Dainik Patrapatrika: Uncover the truth with insightful reporting and a commitment to authentic storytelling. Stay informed and engaged!",
  keywords: "Dainik Patrapatrika, news, journalism, truth, insights, articles, unbiased reporting, current events, media",
  author: "Dainik Patrapatrika", 

};

export default function RootLayout({ children }) {
  return (
    <html lang="bn">
      <head>
        <meta charSet="UTF-8" />
        <meta name="next-size-adjust" content="100%" />
        <link rel="apple-touch-icon"   href="/apple-touch-icon.png" />
        <link rel="apple-touch-icon" sizes="152x152" href="/apple-touch-icon-152x152.png" />
        <link rel="apple-touch-icon" sizes="120x120" href="/apple-touch-icon-120x120.png" />
        <link rel="apple-touch-icon" sizes="76x76" href="/apple-touch-icon-76x76.png" />
        <link rel="icon" href="./favicon.ico" sizes="any" />
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap" rel="stylesheet" />
      
        {/* Google tag (gtag.js) */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-TWJDNTRE97"></script>
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7281991904831824"
          crossorigin="anonymous"></script>
       
        <script async src="https://cdn.jsdelivr.net/npm/jquery@3.6.0"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-TWJDNTRE97');
            `,
          }}
        />
      </head>

      <App>
        <body className={inter.className}>{children}</body>
      </App>
    </html>
  );
}

