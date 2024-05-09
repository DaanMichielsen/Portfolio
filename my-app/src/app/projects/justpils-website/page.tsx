import Sass from '../../../../public/technologies/SASS.svg';
import HTML from '../../../../public/technologies/HTML5.svg';
import CSS from '../../../../public/technologies/CSS.svg';
import JavaScript from '../../../../public/technologies/JavaScript.svg';
import Netlify from '../../../../public/technologies/Netlify.svg';
import Image from 'next/image';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import Link from 'next/link';
import JustPilsLogo from '../../../../public/justpils.png';

export const metadata = {
  title: 'Daan Michielsen | JustPils Website',
  description: 'Page of the JustPils Website project',
};

export default function JustPilsWebsitePage() {
  return (
    <div className='mx-auto max-w-7xl px-6 pb-24 pt-16 sm:pt-16 lg:px-8 lg:pt-16'>
      <h1 className='scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl'>
        Webdesign Advanced | JustPils Website
      </h1>

      <div className='mt-4 flex text-gray-500 dark:text-slate-400 gap-x-4'>
        <div className='flex bg-slate-200  p-1 px-3 rounded-full gap-x-2'>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Image src={Sass} height={30} width={30} alt='Sass'></Image>
              </TooltipTrigger>
              <TooltipContent>
                <p>Sass</p>
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
                <Image src={CSS} height={30} width={30} alt='CSS'></Image>
              </TooltipTrigger>
              <TooltipContent>
                <p>CSS</p>
              </TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger asChild>
                <Image
                  src={JavaScript}
                  height={30}
                  width={30}
                  alt='JavaScript'
                ></Image>
              </TooltipTrigger>
              <TooltipContent>
                <p>JavaScript</p>
              </TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger asChild>
                <Image
                  src={Netlify}
                  height={30}
                  width={30}
                  alt='Netlify'
                ></Image>
              </TooltipTrigger>
              <TooltipContent>
                <p>Netlify</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
        <Link
          href={'https://justpils.netlify.app/'}
          target='_blank'
          className='p-2 rounded-full flex items-center gap-x-2 transition-all hover:bg-slate-300 bg-slate-200 text-slate-800'
        >
          <Image src={JustPilsLogo} height={30} width={30} alt='Instagram' />{' '}
          Justpils Website
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
