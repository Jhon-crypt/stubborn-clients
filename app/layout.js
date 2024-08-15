import { Inter } from "next/font/google";
import 'bootstrap/dist/css/bootstrap.min.css';
import BootstrapJsUtil from "./utils/bootstrapJs";
import "./globals.css";
import Head from "next/head"; 

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Stubborn Clients",
  description: "For Devs With Stubborn Clients",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital@0;1&display=swap" rel="stylesheet" />
      </Head>
      <body className={inter.className}>{children}</body>
      <BootstrapJsUtil />
    </html>
  );
}
