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
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap" rel="stylesheet"  />
      </head>

      <App>
        <body className={inter.className}>{children}</body>
      </App>
    </html>
  );
}
