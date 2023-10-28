import './globals.css';
import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import { cn } from '@/lib/utils';

const poppins = Poppins({weight: '300', subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Money Mananger : Seu gerenciador Financeiro',
  description: 'Gerenciador financeiro criado por Rui Fanha',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body className={cn(poppins.className, "bg-gray-100")}>{children}</body>
    </html>
  )
}
