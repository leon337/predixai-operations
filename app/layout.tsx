import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Almoxarifado Inteligente | PredixAI Operations",
  description: "Controle online de materiais, entradas, saídas e saldo do almoxarifado.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
