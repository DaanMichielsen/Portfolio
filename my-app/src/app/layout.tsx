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
          <div className='mx-auto fixed w-full py-2 items-end px-8 flex justify-center gap-1 transition-all z-50'>
            <Menu></Menu>
            <ModeToggle></ModeToggle>
          </div>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
