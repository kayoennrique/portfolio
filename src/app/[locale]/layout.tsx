// Components
import { LanguageToggle } from "@/components/ToggleLanguage";
import Header from "@/components/Header";
import ThemeSwitch from "@/components/ToggleTheme";
import Footer from "@/components/Footer";

// Next.js
import { NextIntlClientProvider, useMessages } from "next-intl";
import type { Metadata } from "next";
import { Roboto_Condensed } from 'next/font/google'
import { notFound } from "next/navigation";
import { Analytics } from "@vercel/analytics/react";

// Styles
import "./globals.css";
import 'swiper/css'

// Contexts
import ActiveSectionContextProvider from "../../contexts/active-section";
import { ModalProvider } from "@/contexts/modal-context";
import ThemeContextProvider from "@/contexts/theme-context";

// React
import { Toaster } from "react-hot-toast";

const robotoCondensed = Roboto_Condensed({
  weight: '500',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: "Kayo Ennrique DEV",
  description: "This portfolio was made by Kayo Ennrique, a front-end developer.",
};

const locales = ['en', 'pt'];

export default function RootLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string }
}) {

  if (!locales.includes(locale)) {
    notFound();
  }

  const messages = useMessages();

  return (
    <ModalProvider>
      <html lang={locale} >
        <body className={`${robotoCondensed.className} bg-bg-base dark:bg-dark-bg-base`}>
          <NextIntlClientProvider locale={locale} messages={messages}>
            <ThemeContextProvider>
              <ActiveSectionContextProvider>
                <Header />
                {children}
                <Footer />
                <Toaster
                  position="bottom-center"
                  reverseOrder={false} />
                <ThemeSwitch aria-label="Botão dark mode" />
                <LanguageToggle />
                <Analytics />
              </ActiveSectionContextProvider>
            </ThemeContextProvider>
          </NextIntlClientProvider>
        </body>
      </html>
    </ModalProvider>
  );
}
