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
      <body className={`${inter.className} bg-slate-50`}>
        <QueryProvider>
          <nav className="bg-gray-800 p-3 flex justify-start">
            <Link className="text-gray-300 p-3" href={"/"}>
              home
            </Link>
            <Link className="text-gray-300 p-3" href={"/about"}>
              about
            </Link>
            <Link className="text-gray-300 p-3" href={"/report"}>
              report
            </Link>
            <Link className="text-gray-300 p-3" href={"/todosCSR"}>
              todosCSR
            </Link>
            <Link className="text-gray-300 p-3" href={"/todosSSR"}>
              todosSSR
            </Link>
          </nav>
          {children}
        </QueryProvider>
      </body>
    </html>
  );
}
