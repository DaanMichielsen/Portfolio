'use client';
import Link from 'next/link';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
  navigationMenuTriggerStyle,
} from './ui/navigation-menu';
import React from 'react';
import { cn } from '@/lib/utils';

const components: { title: string; href: string; description: string }[] = [
  {
    title: 'All projects',
    href: '/projects',
    description: 'An overview of all projects',
  },
  {
    title: 'Web scraper',
    href: '/projects/web-scraper',
    description:
      'Web scraper for videos, job applications and e-sports data using C# and Selenium',
  },
  {
    title: 'Staff management application',
    href: '/projects/staff-management-application',
    description:
      'Staff management application for au pair and elderly couple in PHP using Laravel',
  },
  {
    title: 'Justpils website',
    href: '/projects/justpils-website',
    description: 'Website about beer using HTML, SASS and JavaScript',
  },
  {
    title: 'Internship | Energy subscription platform',
    href: '/projects/energy-saas',
    description:
      'A subscription platform for energy monitoring using NextJS, Stripe, Prisma and EMQX',
  },
  {
    title: 'Yellow nutsedge detection application',
    href: '/projects/yellow-nutsedge-detection-application',
    description:
      'An application for farmers to detect yellow nutsedge using Angular, Python, Flask, FastAI and AWS',
  },
];

export function Menu() {
  return (
    <NavigationMenu className='z-50'>
      <NavigationMenuList>
        <NavigationMenuItem>
          <Link href='/' legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Home
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href='/about-me' legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              About Me
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Projects</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className='grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] '>
              {components.map(component => (
                <ListItem
                  className='dark:hover:bg-slate-900 hover:bg-slate-100 h-full'
                  key={component.title}
                  title={component.title}
                  href={component.href}
                >
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<'a'>,
  React.ComponentPropsWithoutRef<'a'>
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground',
            className,
          )}
          {...props}
        >
          <div className='text-sm font-medium leading-none'>{title}</div>
          <p className='line-clamp-2 text-sm leading-snug text-muted-foreground'>
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = 'ListItem';
