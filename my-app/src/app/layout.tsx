import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { cn } from '@/lib/utils';
import { ThemeProvider } from '@/components/theme-provider';
import { ModeToggle } from '@/components/theme-toggle';
import { Menu } from '@/components/Menu';
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import Link from 'next/link';
config.autoAddCss = false;

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
          'min-h-screen dark:bg-topography-dark font-sans antialiased bg-topography bg-repeat relative',
          inter,
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
          <div className='md:fixed absolute bottom-2 md:bottom-1/2 md:left-2 left-1/2 -translate-x-1/2 md:-translate-x-1/2 md:top-1/2 md:-rotate-90 md:origin-bottom origin-center flex gap-2'>
            <p className='font-bold leading-6'>FOLLOW ME | </p>
            <div className='flex gap-2'>
              <Link
                href={'https://github.com/DaanMichielsen'}
                className='hover:text-gray-500 dark:hover:text-slate-500'
              >
                <FontAwesomeIcon size='lg' icon={faGithub} />
              </Link>
              <Link
                href={'https://www.linkedin.com/in/daan-michielsen/'}
                className='hover:text-gray-500 dark:hover:text-slate-500'
              >
                <FontAwesomeIcon size='lg' icon={faLinkedin} />
              </Link>
            </div>
          </div>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
