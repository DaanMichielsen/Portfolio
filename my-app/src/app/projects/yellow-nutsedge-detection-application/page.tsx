import Python from '../../../../public/technologies/Python.svg';
import Flask from '../../../../public/technologies/Flask Framework^light.svg';
import Angular from '../../../../public/technologies/Angular.svg';
import EntityFW from '../../../../public/technologies/Entity Framework.svg';
import DotNet from '../../../../public/technologies/^.NET.svg';
import AWS from '../../../../public/technologies/AWS^light.svg';
import Docker from '../../../../public/technologies/Docker.svg';
import GitLab from '../../../../public/technologies/GitLab.svg';
import Postman from '../../../../public/technologies/Postman.svg';
import Image from 'next/image';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import VideoComponent from './_components/PromoVideo';
import { Suspense } from 'react';
import { Skeleton } from '@/components/ui/skeleton';

export const metadata = {
  title: 'Daan Michielsen | Yellow nutsedge detection application',
  description: 'Page of the Yellow nutsedge detection application project',
};

export default function JustPilsWebsitePage() {
  return (
    <div className='mx-auto max-w-7xl px-6 pb-24 pt-16 sm:pt-16 lg:px-8 lg:pt-16 bg-white bg-opacity-90 dark:bg-primary-dark dark:bg-opacity-80'>
      <h1 className='scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl'>
        Project 4.0 | Yellow nutsedge detection application
      </h1>

      <div className='mt-4 flex text-gray-500 dark:text-slate-400 gap-x-4'>
        <div className='flex bg-slate-200  p-1 px-3 rounded-full gap-x-2'>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Image src={Python} height={30} width={30} alt='Python'></Image>
              </TooltipTrigger>
              <TooltipContent>
                <p>Python</p>
              </TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger asChild>
                <Image src={Flask} height={30} width={30} alt='Flask'></Image>
              </TooltipTrigger>
              <TooltipContent>
                <p>Flask (API)</p>
              </TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger asChild>
                <Image
                  src={Angular}
                  height={30}
                  width={30}
                  alt='Angular'
                ></Image>
              </TooltipTrigger>
              <TooltipContent>
                <p>Angular</p>
              </TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger asChild>
                <Image
                  src={EntityFW}
                  height={30}
                  width={30}
                  alt='Entity framework'
                ></Image>
              </TooltipTrigger>
              <TooltipContent>
                <p>Entity Framework ORM</p>
              </TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger asChild>
                <Image src={DotNet} height={30} width={30} alt='DotNet'></Image>
              </TooltipTrigger>
              <TooltipContent>
                <p>.Net</p>
              </TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger asChild>
                <Image src={AWS} height={30} width={30} alt='AWS'></Image>
              </TooltipTrigger>
              <TooltipContent>
                <p>Amazon Web Services</p>
              </TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger asChild>
                <Image src={Docker} height={30} width={30} alt='Docker'></Image>
              </TooltipTrigger>
              <TooltipContent>
                <p>Docker</p>
              </TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger asChild>
                <Image src={GitLab} height={30} width={30} alt='GitLab'></Image>
              </TooltipTrigger>
              <TooltipContent>
                <p>GitLab</p>
              </TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger asChild>
                <Image
                  src={Postman}
                  height={30}
                  width={30}
                  alt='Postman'
                ></Image>
              </TooltipTrigger>
              <TooltipContent>
                <p>Postman</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      </div>

      {/* <div className='mt-6 rounded-md'>
        <Suspense fallback={<Skeleton className='aspect-video w-full' />}>
          <VideoComponent fileName='https://nzrffqfvb7klovvb.public.blob.vercel-storage.com/Skyguard%20-%20promo%20video-H8mqX3wsTVWNIqU60bO6I2Tevliu3z.mp4' />
        </Suspense>
      </div> */}

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
        {/* <Image
          src={WebscraperJSON}
          alt='Json result'
          width={1000}
          height={500}
          className='rounded-2xl'
        ></Image> */}
      </div>
    </div>
  );
}
