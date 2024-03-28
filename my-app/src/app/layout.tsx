import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { cn } from '@/lib/utils';
import { ThemeProvider } from '@/components/theme-provider';
import { ModeToggle } from '@/components/theme-toggle';
import { Menu } from '@/components/Menu';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Daan Michielsen',
  description:
    'Welcome to my personal portfolio where I share my projects and some information about me.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body
        className={cn(
          'min-h-screen bg-background font-sans antialiased',
          inter
        )}
      >
        <ThemeProvider
          attribute='class'
          defaultTheme='system'
          enableSystem
          disableTransitionOnChange
        >
          <div className='absolute top-8 left-8 p-4'></div>
          <div className='my-8 mx-auto flex justify-center gap-1'>
            <Menu></Menu>
            <ModeToggle></ModeToggle>
          </div>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
