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
import {
  faGithub,
  faInstagram,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Python from '../../../../public/technologies/Python.svg';
import GoogleColab from '../../../../public/technologies/Google Colab.svg';
import Roboflow from '../../../../public/technologies/Roboflow.svg';
import FastAI from '../../../../public/technologies/Fastai.png';
import Numpy from '../../../../public/technologies/Numpy.svg';
import Pandas from '../../../../public/technologies/Pandas.svg';
import Streamlit from '../../../../public/technologies/Streamlit.svg';
import Yolo from '../../../../public/technologies/YOLOv8.svg';
import Selenium from '../../../../public/technologies/Selenium.svg';
import Instagram from '../../../../public/Instagram.svg';
import Image from 'next/image';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';

export const metadata = {
  title: 'Daan Michielsen | Hornet tracking AI model',
  description: 'Page of the Hornet tracking AI model project',
};

export default function JustPilsWebsitePage() {
  return (
    <div className='mx-auto max-w-7xl px-6 pb-24 pt-16 sm:pt-16 lg:px-8 lg:pt-16'>
      <h1 className='scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl'>
        Artificial Intelligence | Hornet tracking AI model
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
                <Image src={FastAI} height={30} width={30} alt='FastAI'></Image>
              </TooltipTrigger>
              <TooltipContent>
                <p>FastAI</p>
              </TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger asChild>
                <Image src={Numpy} height={30} width={30} alt='Numpy'></Image>
              </TooltipTrigger>
              <TooltipContent>
                <p>Numpy</p>
              </TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger asChild>
                <Image src={Pandas} height={30} width={30} alt='Pandas'></Image>
              </TooltipTrigger>
              <TooltipContent>
                <p>Pandas</p>
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
                <Image src={Yolo} height={30} width={30} alt='Yolo'></Image>
              </TooltipTrigger>
              <TooltipContent>
                <p>Yolo</p>
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
          href={'https://www.instagram.com/p/C03qPFrtCLx/?img_index=1'}
          target='_blank'
          className='p-2 rounded-full flex items-center gap-x-2 transition-all hover:bg-slate-300 bg-slate-200 text-slate-800'
        >
          <Image src={Instagram} height={30} width={30} alt='Instagram' /> Post
          on Instagram(Thomas More)
        </Link>
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
        <p>...</p>
        <li className='font-semibold'>...:</li>
        <p>...</p>
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
