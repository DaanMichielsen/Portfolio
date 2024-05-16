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
import {
  HoverCard,
  HoverCardTrigger,
  HoverCardContent,
} from '@/components/ui/hover-card';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

export const metadata = {
  title: 'Daan Michielsen | Yellow nutsedge detection application',
  description: 'Page of the Yellow nutsedge detection application project',
};

function Vito() {
  return (
    <HoverCard>
      <HoverCardTrigger asChild className='py-0 h-0'>
        <Button className='px-1 underline py-0 h-4' variant='link'>
          Vito
        </Button>
      </HoverCardTrigger>
      <HoverCardContent className='w-80 z-50'>
        <div className='flex justify-between space-x-4'>
          <Avatar>
            <AvatarImage src='/vito.png' />
            <AvatarFallback>Vito</AvatarFallback>
          </Avatar>
          <div className='space-y-1'>
            <h4 className='text-sm font-semibold'>
              <a
                className='text-blue-700 underline hover:text-blue-500'
                href='https://remotesensing.vito.be/'
                target='_blank'
              >
                Vito - remote sensing
              </a>
            </h4>
            <p className='text-sm'>
              Flamish Institution for Technological Research - Turning earth
              observation data into practical answers
            </p>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  );
}

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
                <p>.NET</p>
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

      <h2 className='mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0'>
        Description
      </h2>
      <p className='leading-7 [&:not(:first-child)]:mt-6'>
        This project was a group project in which we had to create a solution
        for a client. The groups were formed with different branches of our
        IT-Factory. There was a distribution of 3 Application Development
        students, 2 Cloud & Cybersecurity students and one Artificial
        Intelligence student(me). In our case the client was <Vito />, Vito is a
        company that spends their time researching technology to help the
        environment through processing images from earth. They came to us with a
        problem we could solve using their data in the form of images taken with
        a drone.
      </p>
      <h3 className='scroll-m-20 text-2xl font-semibold tracking-tight mt-8'>
        The problem
      </h3>
      <p className='leading-7 [&:not(:first-child)]:mt-6'>
        In Belgium, there has been a problem that is arising in agriculture
        where the fields are containing more and more yellow nutsedge. This is a
        problem because the nutsedge is a weed that is hard to get rid of and it
        is taking over the fields. The government has been monitoring the fields
        closely and is handing out sanction to the farmers with the contaminated
        fields in the form of a prevention of planting any crops on the fields.
        Especially for the fields that contain crops that need to be taken out
        of the ground since the moving of the soil could help the weed to spread
        even faster.
      </p>
      <h3 className='scroll-m-20 text-2xl font-semibold tracking-tight mt-8'>
        The solution
      </h3>
      <p className='leading-7 [&:not(:first-child)]:mt-6'>
        The solution they came up with was to use drones to fly over the fields
        and take images of the fields to then process the images to detect the
        yellow nutsedge. The images would be processed by a machine learning
        model that would detect the nutsedge and return the location of the
        nutsedge in the image. The locations of the weed would then be visible
        on a web app for the farmer to see. This is also good for the farmer in
        the sense that he can prove that certain parts of the fields contain no
        nutsedge and that he can still plant crops there.
      </p>
      <h2 className='mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0'>
        Tasks to complete
      </h2>
      <p className='leading-7 [&:not(:first-child)]:mt-6'>
        The project was divided into 3 parts. The first phases
      </p>
      <ul className='list-decimal [&>li]:ml-8 [&>li]:mt-4 [&>li]:font-semibold'>
        <li>Preparation phase</li>
        <p className='leading-7 [&:not(:first-child)]:mt-2'>
          The making of the project plan, with focus on the{' '}
          <b>Who? What? Why?</b>. We also presented the plan to the other teams
          and Project Coach for feedback. With all the best parts of each
          presentation we creaed one final presentation to deliver to the
          client. The making of this was done one a lesson block of 4 hours,
          each Monday for a couple of weeks.
        </p>
        <li>Concept phase</li>
        <p className='leading-7 [&:not(:first-child)]:mt-2'>
          In this pahse we layed out the design of the concept, we made an
          overview of what would be needed to create the solution. We also made
          a list of the technologies we would use and the roles of each team
          member. All of this is with focus on the <b>How?</b>.The making of
          this was done one a lesson block of 4 hours, each Monday for a couple
          of weeks.
        </p>
        <li>Realisation phase</li>
        <p className='leading-7 [&:not(:first-child)]:mt-2'>
          In this phase we actually start with creating the solution. This pahse
          will be explained in more detail down below. The phase lasted for 3
          full-time weeks of 5 days.
        </p>
      </ul>
      <ul className='my-6 ml-6 list-disc [&>li]:mt-2'>
        <li className='font-semibold'>Learning about c# and Selenium:</li>
        <p className='leading-7 [&:not(:first-child)]:mt-6'>
          In our course we have not learned about C# or Selenium so my first
          step was looking up tutorials on YouTube on how to create a web
          scraper with Selenium in C#.
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
    </div>
  );
}
