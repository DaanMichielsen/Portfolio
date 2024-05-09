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
import Selenium from '../../../../public/technologies/Selenium.svg';
import CSharp from '../../../../public/technologies/CSharp.svg';
import WebscraperJSON from '../../../../public/web_scraper_json.png';
import Image from 'next/image';
import JSONVideos from '../../../../public/json/videos.json' assert { type: 'json' };
import JSONJobs from '../../../../public/json/jobs.json' assert { type: 'json' };
import JSONHLTV from '../../../../public/json/hltv.json' assert { type: 'json' };
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import assert from 'assert';

export const metadata = {
  title: 'Daan Michielsen | Web scraper',
  description: 'Page of the Web scraper project',
};

console.log(JSONVideos);

function ICTJobs() {
  return (
    <HoverCard>
      <HoverCardTrigger asChild className='px-2 py-0 h-0'>
        <Button className='px-2 py-0' variant='link'>
          ICT-Jobs
        </Button>
      </HoverCardTrigger>
      <HoverCardContent className='w-80 z-50'>
        <div className='flex justify-between space-x-4'>
          <Avatar>
            <AvatarImage src='/ICT-jobs.png' />
            <AvatarFallback>ICT</AvatarFallback>
          </Avatar>
          <div className='space-y-1'>
            <h4 className='text-sm font-semibold'>
              <a
                className='text-blue-700 underline hover:text-blue-500'
                href='https://www.ictjob.be/en/'
                target='_blank'
              >
                ICT-Jobs
              </a>
            </h4>
            <p className='text-sm'>
              View 1000&apos;s of new IT jobs & Freelance projects in your
              region daily.
            </p>
            {/* <div className='flex items-center pt-2'>
              <CalendarDays className='mr-2 h-4 w-4 opacity-70' />{' '}
              <span className='text-xs text-muted-foreground'>
                Joined September 2021
              </span>
            </div> */}
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  );
}

function HLTV() {
  return (
    <HoverCard>
      <HoverCardTrigger asChild className='px-2 py-0 h-0'>
        <Button className='px-2 py-0' variant='link'>
          HLTV
        </Button>
      </HoverCardTrigger>
      <HoverCardContent className='w-80 z-50'>
        <div className='flex justify-between space-x-4'>
          <Avatar>
            <AvatarImage src='/HLTV.png' />
            <AvatarFallback>HLTV</AvatarFallback>
          </Avatar>
          <div className='space-y-1'>
            <h4 className='text-sm font-semibold'>
              <a
                className='text-blue-700 underline hover:text-blue-500'
                href='https://www.hltv.org/'
                target='_blank'
              >
                HLTV
              </a>
            </h4>
            <p className='text-sm'>
              Welcome to the leading Counter-Strike site in the world, featuring
              news, demos, pictures, statistics, on-site coverage and much much
              more!
            </p>
            {/* <div className='flex items-center pt-2'>
              <CalendarDays className='mr-2 h-4 w-4 opacity-70' />{' '}
              <span className='text-xs text-muted-foreground'>
                Joined September 2021
              </span>
            </div> */}
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  );
}

export default function WebscraperPage() {
  return (
    <div className='mx-auto max-w-7xl px-6 pb-24 pt-16 sm:pt-16 lg:px-8 lg:pt-16'>
      <h1 className='scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl'>
        DevOps & Security | Web scraper using C# and Selenium
      </h1>

      <div className='mt-4 flex text-gray-500 dark:text-slate-400 gap-x-4'>
        <div className='flex bg-slate-200  p-1 px-3 rounded-full gap-x-2'>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Image src={CSharp} height={30} width={30} alt='C#'></Image>
              </TooltipTrigger>
              <TooltipContent>
                <p>C#</p>
              </TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger asChild>
                <Image
                  src={Selenium}
                  height={30}
                  width={30}
                  alt='Selenium'
                ></Image>
              </TooltipTrigger>
              <TooltipContent>
                <p>Selenium</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
        <Link
          href={'https://github.com/DaanMichielsen/Web_Scraper'}
          target='_blank'
          className='p-2 rounded-full  hover:bg-slate-300 bg-slate-200 text-slate-800'
        >
          <FontAwesomeIcon icon={faGithub} size='xl' /> Code on GitHub
        </Link>
        <Link
          href={'https://youtu.be/s-m7UdckTnM'}
          target='_blank'
          className='p-2 rounded-full  hover:bg-slate-300 bg-slate-200 text-slate-800'
        >
          <FontAwesomeIcon
            icon={faYoutube}
            size='xl'
            className='text-red-500'
          />{' '}
          Video on YouTube
        </Link>
      </div>

      <h2 className='mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0'>
        Description
      </h2>
      <p className='leading-7 [&:not(:first-child)]:mt-6'>
        I was challenged to create a web scraper that can take one of 3 options
        from a website and return it in text, JSON and CSV. The first option is
        to retrieve YouTube videos based on title. The second option is to
        retrieve job offers by title from <ICTJobs />. The third option was to
        retrieve all possible items on a website called <HLTV /> based on title
        of an article, name of a player, name of an event or name of a team.
        HLTV is a website that covers e-sports news about a game called
        Counter-Strike:Global Offensive which is a tactical shooter game. In
        case you don&apos;t know, a web scraper is an application that scrapes
        data of the internet by using the way a website is built up with tags.
        By finding the correct elements, you can retrieve the data within the
        tags and save them to e.g. JSON, CSV. Or use the data in other ways.
      </p>
      <h2 className='mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0'>
        Tasks to complete
      </h2>
      <p className='leading-7 [&:not(:first-child)]:mt-6'>
        All of the technologies were new to me, so I had to do some
        preparation...
      </p>
      <ul className='my-6 ml-6 list-disc [&>li]:mt-2'>
        <li className='font-semibold'>Learning about c# and Selenium:</li>
        <p>
          In our course we have not learned about C# or Selenium so my first
          step was looking up tutorials on YouTube on how to create a web
          scraper with Selenium in C#.
        </p>
        <li className='font-semibold'>Developing the web scraper:</li>
        <p>
          I had to decide on how to implement the web scraper, I chose to use a
          Chrome browser based web scraper. When running the application the
          user is prompted to choose between getting YouTube videos ICT-Jobs
          offers or HLTV information. After that the user could choose the
          amount of results to return.
        </p>
      </ul>
      <h2 className='mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0'>
        What have I learned?
      </h2>
      <p className='leading-7 [&:not(:first-child)]:mt-6'>
        I learned about C# which I had not used before. I got to learn about
        Selenium and some law-related stuff about web-scraping which is not an
        easy topic. It also gave me a good insight in how web scraping works and
        why it is so powerful.
      </p>
      <div className='w-5/6 mx-auto mt-4'>
        <h3 className='scroll-m-20 text-2xl font-semibold tracking-tight text-center'>
          Scraping results
        </h3>
        <Image
          src={WebscraperJSON}
          alt='Json result'
          width={1000}
          height={500}
          className='rounded-2xl'
        ></Image>
      </div>
      <div className='w-5/6 mx-auto mt-4'>
        <Accordion type='single' collapsible>
          <AccordionItem value='item-1'>
            <AccordionTrigger>Videos | Search term: Selenium</AccordionTrigger>
            <AccordionContent className='overflow-x-scroll'>
              <pre>{JSON.stringify(JSONVideos, null, 2)}</pre>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value='item-2'>
            <AccordionTrigger>Jobs | Search term: Engineer</AccordionTrigger>
            <AccordionContent className='overflow-x-scroll'>
              <pre>{JSON.stringify(JSONJobs, null, 2)}</pre>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value='item-3'>
            <AccordionTrigger>
              HLTV | Search term: rain(name of a player)
            </AccordionTrigger>
            <AccordionContent className='overflow-x-scroll'>
              <pre>{JSON.stringify(JSONHLTV, null, 2)}</pre>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
}
