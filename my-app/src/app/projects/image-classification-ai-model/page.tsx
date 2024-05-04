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
import Python from '../../../../public/technologies/Python.svg';
import GoogleColab from '../../../../public/technologies/Google Colab.svg';
import GCP from '../../../../public/technologies/Google Cloud Platform.svg';
import Roboflow from '../../../../public/technologies/Roboflow.svg';
import Streamlit from '../../../../public/technologies/Streamlit.svg';
import TeachableMachine from '../../../../public/technologies/Teachable Machine.svg';
import Selenium from '../../../../public/technologies/Selenium.svg';
import FastAI from '../../../../public/technologies/Fastai.png';
import Image from 'next/image';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';

export const metadata = {
  title: 'Daan Michielsen | Image classification AI model',
  description: 'Page of the Image classification AI model project',
};

export default function JustPilsWebsitePage() {
  return (
    <div className='mx-auto max-w-7xl px-6 pb-24 pt-16 sm:pt-16 lg:px-8 lg:pt-16'>
      <h1 className='scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl'>
        Big Data | Image classification AI model
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
                <Image
                  src={GoogleColab}
                  height={30}
                  width={30}
                  alt='GoogleColab'
                ></Image>
              </TooltipTrigger>
              <TooltipContent>
                <p>Google Colab</p>
              </TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger asChild>
                <Image src={FastAI} height={30} width={30} alt='FastAI'></Image>
              </TooltipTrigger>
              <TooltipContent>
                <p>FastAI</p>
              </TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger asChild>
                <Image
                  src={Roboflow}
                  height={30}
                  width={30}
                  alt='Roboflow'
                ></Image>
              </TooltipTrigger>
              <TooltipContent>
                <p>Roboflow</p>
              </TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger asChild>
                <Image src={GCP} height={30} width={30} alt='GCP'></Image>
              </TooltipTrigger>
              <TooltipContent>
                <p>Google Cloud Platform</p>
              </TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger asChild>
                <Image
                  src={Streamlit}
                  height={30}
                  width={30}
                  alt='Streamlit'
                ></Image>
              </TooltipTrigger>
              <TooltipContent>
                <p>Streamlit</p>
              </TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger asChild>
                <Image
                  src={TeachableMachine}
                  height={30}
                  width={30}
                  alt='TeachableMachine'
                ></Image>
              </TooltipTrigger>
              <TooltipContent>
                <p>Teachable Machine</p>
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
