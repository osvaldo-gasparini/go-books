import "./globals.css";
import { Lexend } from "next/font/google";
import style from "./layout.module.css";

const lexend = Lexend({ subsets: ["latin"] });

export const metadata = {
  title: "GO Books",
  description: "Summary of the best books ever created",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${lexend.className}`}>
        <header className={style.header}>
          <h1>Experience Farm</h1>
        </header>
        {children}
      </body>
    </html>
  );
}
