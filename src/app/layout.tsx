import { Space_Grotesk } from 'next/font/google'
import { ThemeProvider } from 'next-themes'
import '../styles/globals.css'
import PageTransition from './components/PageTransition'

const spaceGrotesk = Space_Grotesk({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700']
})

export const metadata = {
  title: 'Hamza Islam | AI & Full Stack Developer',
  description: 'AI-focused Full Stack Developer portfolio of Hamza Islam',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={spaceGrotesk.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          <PageTransition>
            {children}
          </PageTransition>
        </ThemeProvider>
      </body>
    </html>
  )
}