import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import ActiveSectionContextProvider from "../../contexts/active-section";
import Header from "@/components/Header";
import 'swiper/css'
import { ModalProvider } from "@/contexts/modal-context";
import ThemeContextProvider from "@/contexts/theme-context";
import ThemeSwitch from "@/components/ToggleTheme";
import { Toaster } from "react-hot-toast";
import Footer from "@/components/Footer";
import { notFound } from "next/navigation";
import { NextIntlClientProvider, useMessages } from "next-intl";
import { LanguageToggle } from "@/components/ToggleLanguage";

const roboto = Roboto({
  weight: '400',
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
        <body className={`${roboto.className} bg-bg-base dark:bg-dark-bg-base`}>
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
              </ActiveSectionContextProvider>
            </ThemeContextProvider>
          </NextIntlClientProvider>
        </body>
      </html>
    </ModalProvider>
  );
}
