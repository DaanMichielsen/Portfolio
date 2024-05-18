import { Button } from '@/components/ui/button';
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from '@/components/ui/hover-card';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import NextJs from '../../../../public/technologies/NextJS^light.svg';
import Stripe from '../../../../public/technologies/Stripe.svg';
import Prisma from '../../../../public/technologies/Prisma ORM^light.svg';
import EMQX from '../../../../public/technologies/EMQX MQTT.svg';
import CosmosDB from '../../../../public/technologies/Azure Cosmos DB.svg';
import AzureFunctions from '../../../../public/technologies/Azure Functions.svg';
import Tailwind from '../../../../public/technologies/Tailwind CSS.svg';
import Auth0 from '../../../../public/technologies/AuthZero.svg';
import Resend from '../../../../public/technologies/Resend^light.svg';
import Postman from '../../../../public/technologies/Postman.svg';
import Energy from '../../../../public/ismart-energy.svg';
import Image from 'next/image';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import Link from 'next/link';
import TechnologyGallery from '@/components/common/TechnologyGallery';
import { Image as ImageType } from '@/components/common/ImageGallery';
import { CalendarDays } from 'lucide-react';

export const metadata = {
  title: 'Daan Michielsen | Energy SaaS Platform',
  description: 'Page of the Energy SaaS Platform project',
};

const technologies: ImageType[] = [
  {
    name: 'NextJS',
    src: NextJs,
  },
  {
    name: 'Stripe',
    src: Stripe,
  },
  {
    name: 'Prisma',
    src: Prisma,
  },
  {
    name: 'EMQX',
    src: EMQX,
  },
  {
    name: 'CosmosDB',
    src: CosmosDB,
  },
  {
    name: 'Azure Functions',
    src: AzureFunctions,
  },
  {
    name: 'Auth0',
    src: Auth0,
  },
  {
    name: 'Tailwind',
    src: Tailwind,
  },
  {
    name: 'Resend',
    src: Resend,
  },
  {
    name: 'Postman',
    src: Postman,
  },
];

function Ismart() {
  return (
    <HoverCard>
      <HoverCardTrigger asChild className='px-0 underline py-0 h-0'>
        <Button className='px-0 h-4 py-0' variant='link'>
          iSmart
        </Button>
      </HoverCardTrigger>
      <HoverCardContent className='w-80 z-50'>
        <div className='flex justify-between space-x-4'>
          <Avatar>
            <AvatarImage src='/iSmart.svg' />
            <AvatarFallback>iS</AvatarFallback>
          </Avatar>
          <div className='space-y-1'>
            <h4 className='text-sm font-semibold'>
              <a
                className='text-blue-700 underline hover:text-blue-500'
                href='https://www.ismart.be/'
                target='_blank'
              >
                iSmart
              </a>
            </h4>
            <p className='text-sm'>Tailor-made digital thinking</p>
            <div className='flex items-center pt-2'>
              <CalendarDays className='mr-2 h-4 w-4 opacity-70' />{' '}
              <span className='text-xs text-muted-foreground'>
                Established June 12th 2019
              </span>
            </div>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  );
}

export default function EnergySaasPage() {
  return (
    <div className='mx-auto max-w-7xl px-6 pb-24 pt-16 sm:pt-16 lg:px-8 lg:pt-16 bg-white bg-opacity-90 dark:bg-primary-dark dark:bg-opacity-80'>
      <h1 className='scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl'>
        Internship | Energy Saas Platform
      </h1>

      <div className='mt-4 flex space-y-2 flex-col md:flex-row text-gray-500 dark:text-slate-400 gap-x-4'>
        <TechnologyGallery technologies={technologies} />
        <Link
          href={'https://stage-energy.vercel.app/'}
          target='_blank'
          className='p-2 rounded-full flex items-center gap-x-2 transition-all hover:bg-slate-300 bg-slate-200 text-slate-800'
        >
          <Image src={Energy} height={30} width={30} alt='Energy logo' /> Energy
          SaaS Platform
        </Link>
      </div>

      <h2 className='mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0'>
        Description
      </h2>
      <p className='leading-7 [&:not(:first-child)]:mt-6'>
        <Ismart /> makes buildings and businesses more efficient. 1 customer in
        Lier is already enjoying this with a customized application that ensures
        that all the energy in the apartments is monitored and displayed in one
        application. The data that is displayed comes from all kinds of sensors
        in the apartments.
      </p>
      <h2 className='mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0'>
        The set goal
      </h2>
      <h3 className='scroll-m-20 text-2xl font-semibold tracking-tight mt-4'>
        Current situation
      </h3>
      <p className='leading-7 [&:not(:first-child)]:mt-6'>
        There are many sensors placed in apartments to measure energy
        consumption and other things. This information is already being used,
        but only for O3Shift. iSmart needs to create customized applications for
        each customer that is interested.
      </p>
      <h3 className='scroll-m-20 text-2xl font-semibold tracking-tight mt-4'>
        What is going wrong or could be better?
      </h3>
      <p className='leading-7 [&:not(:first-child)]:mt-6'>
        The current application is not designed for multiple customers and only
        for O3Shift. For each customer iSmart has to create a customized
        solution =&gt; a lot of work, repetitive work.
      </p>
      <h2 className='mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0'>
        The end product
      </h2>
      <p className='leading-7 [&:not(:first-child)]:mt-6'>
        The end product is a platform that apartment owners can subscribe to in
        order to access the data from their sensors in a user-friendly
        application. This application can contain multiple sites, buildings and
        sensors with historical data of the measurements. All these
        functionalities are, framed with an account system, so that all the
        information can be shown to those who are allowed to see it.
      </p>
      <h2 className='mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0'>
        Requirements
      </h2>
      <div className='flex gap-x-12'>
        <div>
          <h3 className='scroll-m-20 text-2xl font-semibold tracking-tight mt-4'>
            Must have:
          </h3>
          <ul className='my-6 ml-6 list-disc [&>li]:mt-2'>
            <li className='font-semibold'>Authentication</li>
            <li className='font-semibold'>Payment system</li>
            <li className='font-semibold'>Sensor data in visualizations</li>
            <li className='font-semibold'>Database</li>
            <li className='font-semibold'>Userfriendly interface</li>
          </ul>
        </div>
        <div>
          <h3 className='scroll-m-20 text-2xl font-semibold tracking-tight mt-4'>
            Could have:
          </h3>
          <ul className='my-6 ml-6 list-disc [&>li]:mt-2'>
            <li className='font-semibold'>Dark mode</li>
            <li className='font-semibold'>Custom icon preferences</li>
            <li className='font-semibold'>Embedded payment page</li>
          </ul>
        </div>
      </div>
      <h2 className='mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0'>
        Planning
      </h2>
      <h3 className='scroll-m-20 text-2xl font-semibold tracking-tight mt-4'>
        3 phases
      </h3>
      <ul className='my-6 ml-6 list-decimal [&>li]:mt-2'>
        <li className='font-semibold'>
          Preparation phase(19 Februari - 25 Februari)
        </li>
        <p>
          In this phase, I have meetings with my supervisor about the course of
          the internship. Which contact moments are recorded and which documents
          are important. Some guidelines are also discussed regarding illness
          during the internship, reporting, etc.
        </p>
        <li className='font-semibold'>
          Initation phase(26 Februari - 18 March)
        </li>
        <p>
          This phase starts with an introduction to the internship supervisor.
          In this phase, some practical matters are discussed with both the
          internship supervisor and the internship tutor. In terms of the
          assignment, we also discuss the requirements of the project and what
          components the project will consist of.
        </p>
        <li className='font-semibold'>Realisation phase(19 March - 26 May)</li>
        <p>
          In this phase, I work on the requirements of the project. In the 4th
          week of this phase, a plan of action is presented to the internship
          supervisor during return moment 1. In the 8th week there is a 2nd
          return moment in which the modified plan of approach is presented.
          Here the progress up to that point is also discussed and an adjusted
          planning is given for the project. Finally, an overview of all
          achievements up to that point must be provided in the form of a
          portfolio. Here again, feedback is given that is taken into account by
          the intern. On March 29, my supervisor fills out my interim
          evaluation. In it he evaluates the quality of my work. My internship
          supervisor will also discuss this evaluation with me on April 22.
          Throughout the internship, documentation of the internship and project
          is also expected. This is done throughout the phase, usually when a
          section is finished or at the end of the week.
        </p>
      </ul>
      <h2 className='mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0'>
        Risks and scope
      </h2>
      <h3 className='scroll-m-20 text-2xl font-semibold tracking-tight mt-4'>
        Assignment after the internship
      </h3>
      <p className='leading-7 [&:not(:first-child)]:mt-6'>
        The project I will be working on is not scheduled to launch after the
        internship period. It is a proof of concept with a solid foundation that
        includes the essential functionalities. That is, colleagues will need
        clear documentation of our work in order to smoothly continue working on
        our prior work. For this, a project handover document can be prepared
        where all the work done is documented. As well as the steps required to
        continue the work. The end goal of the assignment is not to have the
        product running in production for anyone. It is an application that is
        developed shielded from the outside world to the quality that iSmart
        strives for. For every feature that we make, we try to adopt
        iSmart&apos;s best practices and workflow.
      </p>
      <h3 className='scroll-m-20 text-2xl font-semibold tracking-tight mt-4'>
        Possible risks
      </h3>
      <ul className='my-6 ml-6 list-disc [&>li]:mt-2'>
        <li className='font-semibold'>Illness</li>
        <li className='font-semibold'>Technical ability</li>
        <li className='font-semibold'>Bad planning</li>
        <li className='font-semibold'>Insufficient support</li>
        <li className='font-semibold'>Security</li>
        <li className='font-semibold'>Performance issues</li>
        <li className='font-semibold'>Breaking changes updated</li>
      </ul>
      <h2 className='mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0'>
        Information and reporting
      </h2>
      <h3 className='scroll-m-20 text-2xl font-semibold tracking-tight mt-4'>
        Weekly report
      </h3>
      <p className='leading-7 [&:not(:first-child)]:mt-6'>
        I bring in a weekly summary to my mentor describing what I do each day
        or what I worked on. From this my mentor can see whether or not I have
        enough challenge during the project, and how I feel on the job.
      </p>
      <h3 className='scroll-m-20 text-2xl font-semibold tracking-tight mt-4'>
        Followup at the company
      </h3>
      <p className='leading-7 [&:not(:first-child)]:mt-6'>
        The end product is a platform that apartment owners can subscribe to in
        order to access the data from their sensors in a user-friendly
        application. This application can contain multiple sites, buildings and
        sensors with historical data of the measurements. All these
        functionalities are, framed with an account system, so that all the
        information can be shown to those who are allowed to see it.
      </p>
      <h2 className='mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0'>
        Project organization and collaboration
      </h2>
      <p className='leading-7 [&:not(:first-child)]:mt-6'>
        I also have a weekly meeting on Wednesday with my internship supervisor
        and some other employees of iSmart in which me and the other intern show
        the progress of the past week. At these times we also get direct
        feedback on the features we are implementing, they also discuss what
        will be worked on in the coming week. We also have an agreement to merge
        our code with the code from the previous week every Friday. The changes
        in the code are then checked by me, the other intern and/or our
        supervisor. This is mainly to keep the quality of the code at a strong
        level. All the things being worked on are also listed in our planning
        tool Jira. In this, tasks are divided into Epics -&gt; Story -&gt;
        subtask.
      </p>
      <h3 className='scroll-m-20 text-2xl font-semibold tracking-tight mt-4'>
        Reporting
      </h3>
      <p className='leading-7 [&:not(:first-child)]:mt-6'>
        Within the company I report to my internship supervisor.
      </p>
      <h3 className='scroll-m-20 text-2xl font-semibold tracking-tight mt-4'>
        Collaboration
      </h3>
      <p className='leading-7 [&:not(:first-child)]:mt-6'>
        In this project I am working together with 1 other intern. She is also a
        student of Thomas More and is in the 3rd year of Application
        Development. She works 4/5th instead of full time, so we spend 4 days a
        week together. Our work is clearly divided on the criteria of interest
        and priority. This ensures that it remains clear who does what. Our
        tasks are also completely separate with little or no dependencies. This
        ensures that we both have our work and do not have to wait on each
        other. There is, of course, access to help or questions on matters that
        involve both of us. As mentioned earlier, me and the other intern
        usually sit side by side 4 days a week working on our tasks. This makes
        everything very efficient when things need to be adjusted by the other
        or when things are discussed among ourselves or with colleagues.
      </p>
    </div>
  );
}
