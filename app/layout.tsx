import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "PredixAI Operations",
  description: "Base inicial do Almoxarifado Inteligente.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
