import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'O Código da Mulher de Valor - Imersão por Adriane Zago',
  description: 'Uma imersão de transformação emocional para mulheres que buscam clareza, propósito e direção. 18 de Julho de 2026 - Hotel Wyndham Ibirapuera, São Paulo.',
  keywords: ['imersão feminina', 'transformação emocional', 'Adriane Zago', 'mulher de valor', 'hipnoterapia', 'desenvolvimento pessoal'],
  openGraph: {
    title: 'O Código da Mulher de Valor - Imersão por Adriane Zago',
    description: 'Uma imersão de transformação emocional para mulheres que buscam clareza, propósito e direção.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
