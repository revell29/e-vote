import QueryWrapper from '@/components/query-wrapper';
import { ThemeProvider } from '@/components/theme-provider';
import { Metadata } from 'next';
import '../styles/globals.css';
import { Toaster } from '@/components/ui/toaster';

type RootLayoutProps = {
  children: React.ReactNode;
};

export const metadata: Metadata = {
  title: 'E Votting Ketua OSIS SMKN 4 Bekasi',
  description:
    'E Votting Ketua OSIS SMKN 4 Bekasi. E Votting merupakan sebuah sistem informasi yang bertujuan untuk memudahkan dalam proses pemilihan ketua dan wakil ketua osis SMKN 4 Bekasi.',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <>
      <html lang='en' suppressHydrationWarning>
        <head />
        <body>
          <ThemeProvider
            attribute='class'
            defaultTheme='system'
            enableSystem
            disableTransitionOnChange
          >
            <QueryWrapper>{children}</QueryWrapper>
          </ThemeProvider>
          <Toaster />
        </body>
      </html>
    </>
  );
}
