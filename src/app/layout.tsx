import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import ActiveSectionContextProvider from "../contexts/active-section";
import Header from "@/components/Header";
import 'swiper/css'
import { ModalProvider } from "@/contexts/modal-context";

const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: "Kayo Ennrique DEV",
  description: "This portfolio was made by Kayo Ennrique, a front-end developer.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <ModalProvider>
      <html lang="en">
        <body className={`${roboto.className} bg-purple-base`}>
          <ActiveSectionContextProvider>
            <Header />
            {children}
          </ActiveSectionContextProvider>
        </body>
      </html>
    </ModalProvider>
  );
}
