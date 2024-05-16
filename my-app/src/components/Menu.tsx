'use client';
import Link from 'next/link';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
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
    title: 'Hornet tracking AI model',
    href: '/projects/hornet-tracking-ai-model',
    description:
      'AI model that does object detection on hornets and bees using python',
  },
  {
    title: 'Image classification AI model',
    href: '/projects/image-classification-ai-model',
    description:
      'AI model that can do image classification using Python and FastAI',
  },
  {
    title: 'Yellow nutsedge detection application',
    href: '/projects/yellow-nutsedge-detection-application',
    description:
      'An application for farmers to detect yellow nutsedge using Angular, Python, Flask, FastAI and AWS',
  },
  {
    title: 'Internship | Energy subscription platform',
    href: '/projects/energy-saas',
    description:
      'A subscription platform for energy monitoring using NextJS, Stripe, Prisma and EMQX',
  },
];

export function Menu() {
  return (
    <NavigationMenu className='z-50'>
      <NavigationMenuList>
        <NavigationMenuItem className='cursor-pointer'>
          <NavigationMenuLink
            className={navigationMenuTriggerStyle()}
            href={'/'}
          >
            Home
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem className='cursor-pointer'>
          <NavigationMenuLink
            className={navigationMenuTriggerStyle()}
            href={'/about-me'}
          >
            About Me
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem className='cursor-pointer'>
          <NavigationMenuTrigger className='cursor-none'>
            Projects
          </NavigationMenuTrigger>
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
        <NavigationMenuItem className='cursor-pointer'>
          <NavigationMenuLink
            className={navigationMenuTriggerStyle()}
            href={'/projects/energy-saas'}
          >
            Internship
          </NavigationMenuLink>
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
