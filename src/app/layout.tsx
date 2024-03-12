import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import QueryProvider from "./provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "TodoList next App",
  description: "nbc Next JS Project!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <QueryProvider>
          <nav>
            <Link href={"/about"}>about</Link>
            <Link href={"/report"}>report</Link>
            <Link href={"/todosCSR"}>todosCSR</Link>
            <Link href={"/todosSSR"}>todosSSR</Link>
          </nav>
          {children}
        </QueryProvider>
      </body>
    </html>
  );
}
