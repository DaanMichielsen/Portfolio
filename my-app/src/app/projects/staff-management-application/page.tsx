import { Button } from '@/components/ui/button';
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from '@/components/ui/hover-card';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { CalendarDays } from 'lucide-react';
import Link from 'next/link';
import { ReactElement } from 'react';
import { faGithub, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PHP from '../../../../public/technologies/PHP.svg';
import HTML from '../../../../public/technologies/HTML5.svg';
import Tailwind from '../../../../public/technologies/Tailwind CSS.svg';
import SQLite from '../../../../public/technologies/SQLite.svg';
import Combell from '../../../../public/technologies/Combell.svg';
import Livewire from '../../../../public/technologies/Livewire.svg';
import Image from 'next/image';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';

export const metadata = {
  title: 'Daan Michielsen | Staff Management Application',
  description: 'Page of the Staff Management Application project',
};

export default function JustPilsWebsitePage() {
  return (
    <div className='mx-auto max-w-7xl px-6 pb-24 pt-16 sm:pt-16 lg:px-8 lg:pt-16'>
      <h1 className='scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl'>
        Project PHP | Staff Management Application
      </h1>

      <div className='mt-4 flex text-gray-500 dark:text-slate-400 gap-x-4'>
        <div className='flex bg-slate-200  p-1 px-3 rounded-full gap-x-2'>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Image src={PHP} height={30} width={30} alt='PHP'></Image>
              </TooltipTrigger>
              <TooltipContent>
                <p>PHP</p>
              </TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger asChild>
                <Image src={HTML} height={30} width={30} alt='HTML'></Image>
              </TooltipTrigger>
              <TooltipContent>
                <p>HTML</p>
              </TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger asChild>
                <Image
                  src={Tailwind}
                  height={30}
                  width={30}
                  alt='Tailwind'
                ></Image>
              </TooltipTrigger>
              <TooltipContent>
                <p>Tailwind</p>
              </TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger asChild>
                <Image src={SQLite} height={30} width={30} alt='SQLite'></Image>
              </TooltipTrigger>
              <TooltipContent>
                <p>SQLite</p>
              </TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger asChild>
                <Image
                  src={Combell}
                  height={30}
                  width={30}
                  alt='Combell'
                ></Image>
              </TooltipTrigger>
              <TooltipContent>
                <p>Combell</p>
              </TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger asChild>
                <Image
                  src={Livewire}
                  height={30}
                  width={30}
                  alt='Livewire'
                ></Image>
              </TooltipTrigger>
              <TooltipContent>
                <p>Livewire</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      </div>

      <h2 className='mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0'>
        Description
      </h2>
      <p className='leading-7 [&:not(:first-child)]:mt-6'>
        I was challenged to ...
      </p>
      <h2 className='mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0'>
        Tasks to complete
      </h2>
      <p className='leading-7 [&:not(:first-child)]:mt-6'>
        All of the technologies were new to me, so I had to do some
        preparation...
      </p>
      <ul className='my-6 ml-6 list-disc [&>li]:mt-2'>
        <li className='font-semibold'>...:</li>
        <p>I had to decide ...</p>
        <li className='font-semibold'>...:</li>
        <p>I had to decide ...</p>
      </ul>
      <h2 className='mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0'>
        What have I learned?
      </h2>
      <p className='leading-7 [&:not(:first-child)]:mt-6'>
        I learned about ...
      </p>
    </div>
  );
}
