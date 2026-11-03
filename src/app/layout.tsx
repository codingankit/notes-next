import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import { TabManager, ReduxProvider } from "@/lib";

export const metadata: Metadata = {
  title: "Notes",
  description: "Notes App using Next.JS & Redux Toolkit",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body id="appContainer">
        <ReduxProvider>
          <TabManager />
          <Header />
          <main>{children}</main>
        </ReduxProvider>
      </body>
    </html>
  );
}
