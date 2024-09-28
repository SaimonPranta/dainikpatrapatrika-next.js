import { Inter } from "next/font/google";
import "./globals.css";
import { Provider } from 'react-redux';
import store from "../store/store"
import App from "./app.js"

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "দৈনিক পত্র পত্রিকা । Dainik Patra Patrika",
  description: "দৈনিক পত্রিকা",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="./favicon.ico" sizes="any" />
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap" rel="stylesheet" />
        {/* Google tag (gtag.js) */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-TWJDNTRE97"></script>
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

