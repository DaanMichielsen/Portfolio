'use client';
import process from 'process';
import React from 'react';
import Image from 'next/image';
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from '@/components/ui/hover-card';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { CalendarDays } from 'lucide-react';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import Map from '@/components/Map';
import Link from 'next/link';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Label } from '@/components/ui/label';
import { Tooltip, TooltipContent, TooltipTrigger, TooltipProvider } from '@/components/ui/tooltip';

type SoftSkill = {
  name: string;
  description: string;
  value: number;
};

type Language = {
  name: string;
  level: string;
  usage: string;
};

type hardSkill = SoftSkill & {projects: string[]};

export default function AboutMe() {
  const softSkills: SoftSkill[] = [
    {
      name: 'Professional communication',
      description: 'The ability to communicate in a professional manner.',
      value: 85,
    },
    {
      name: 'Problem solving',
      description: 'The ability to solve problems in a professional manner.',
      value: 80,
    },
    {
      name: 'Research',
      description: 'The ability to research in a professional manner.',
      value: 85,
    },
    {
      name: 'English',
      description: 'The ability to speak English in a professional manner.',
      value: 80,
    }
  ];

  const languages: Language[] = [
    {
      name: 'Dutch',
      level: 'Native',
      usage: 'Daily',
    },
    {
      name: 'English',
      level: 'Professional',
      usage: 'Daily',
    },
    {
      name: 'French',
      level: 'Basic',
      usage: 'Rarely',
    },
  ];
  
  return (
    <div className='mx-auto max-w-7xl px-6 pb-24  sm:pt-60 lg:px-8 lg:pt-0'>
      <div className='mx-auto max-w-2xl gap-x-14 pt-16 lg:mx-0 lg:flex lg:max-w-none lg:items-center'>
        <div className='w-full max-w-xl lg:shrink-0 xl:max-w-2xl'>
          <h1 className='text-4xl font-bold tracking-tight text-gray-900 dark:text-slate-100 sm:text-6xl'>
            Welcome to my portfolio
          </h1>
          <p className='relative mt-6 text-lg leading-8 text-gray-600 dark:text-slate-200 sm:max-w-md lg:max-w-none'>
            This page will give you a brief introduction about who I am, what
            I&apos;m passionate about and what I&apos;m currently working on.
            I&apos;m a software engineer with a passion for creating beautiful
            and functional applications.
          </p>
        </div>
        <div className='mt-14 flex justify-end gap-8 sm:-mt-44 sm:justify-start sm:pl-20 lg:mt-0 lg:pl-0'>
          <div className='ml-auto w-44 flex-none space-y-8 pt-32 sm:ml-0 sm:pt-80 lg:order-last lg:pt-36 xl:order-none xl:pt-80'>
            <div className='relative z-50'>
              <Image
                src={'/daan.jpg'}
                alt='Daan'
                width={176}
                height={264}
                className='aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg'
              />
              <div className='pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10' />
            </div>
          </div>
          <div className='mr-auto w-44 flex-none space-y-8 sm:mr-0 sm:pt-52 lg:pt-36'>
            <div className='relative bg-[#c86e14] rounded-xl'>
              <Image
                src={'/justpils.png'}
                alt='JustPils'
                width={176}
                height={264}
                className='aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg'
              />
              <div className='pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10' />
            </div>
            <div className='relative'>
            <Image
                src={'/thomas-more.png'}
                alt='JustPils'
                width={176}
                height={264}
                className='aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-contain shadow-lg'
              />
              <img
                src='https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=focalpoint&fp-x=.4&w=396&h=528&q=80'
                alt=''
                className='aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg'
              />
              <div className='pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10' />
            </div>
          </div>
          <div className='w-44 flex-none space-y-8 pt-32 sm:pt-0'>
            <div className='relative'>
              <img
                src='https://images.unsplash.com/photo-1670272504528-790c24957dda?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=left&w=400&h=528&q=80'
                alt=''
                className='aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg'
              />
              <div className='pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10' />
            </div>
            <div className='relative'>
              <img
                src='https://images.unsplash.com/photo-1670272505284-8faba1c31f7d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&h=528&q=80'
                alt=''
                className='aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg'
              />
              <div className='pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10' />
            </div>
          </div>
        </div>
      </div>
      <section className='mt-12'>
        <h1 className='scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl'>
          Personal information
        </h1>
        <p className='leading-7 [&:not(:first-child)]:mt-6'>
          My name is Daan and I am a student in Applied Computer Science at
          <HoverCard>
            <HoverCardTrigger asChild className='px-2 py-0 h-0'>
              <Button className='px-2 py-0' variant='link'>Thomas More</Button>
            </HoverCardTrigger>
            <HoverCardContent className='w-80'>
              <div className='flex justify-between space-x-4'>
                <Avatar>
                  <AvatarImage src='/thomas-more-favicon.ico' />
                  <AvatarFallback>VC</AvatarFallback>
                </Avatar>
                <div className='space-y-1'>
                  <h4 className='text-sm font-semibold'><a className='text-blue-700 underline hover:text-blue-500' href="https://thomasmore.be/" target='_blank'>Thomas More</a></h4>
                  <p className='text-sm'>
                    The largest university of applied sciences in Flanders. A
                    community of almost 22,000 students, employees and
                    researchers.
                  </p>
                  <div className='flex items-center pt-2'>
                    <CalendarDays className='mr-2 h-4 w-4 opacity-70' />{' '}
                    <span className='text-xs text-muted-foreground'>
                      Joined September 2021
                    </span>
                  </div>
                </div>
              </div>
            </HoverCardContent>
          </HoverCard>
          in Geel(Belgium). This page serves as a place where I can express
          myself and my work. I hope you enjoy your stay. I am passionate about
          technology and I want to pursue a career in tech.
        </p>
        <Popover>
          <p className='leading-7 [&:not(:first-child)]:mt-6'>
            I was born in 2003 and live in{' '}
            <PopoverTrigger className='underline'>Beerse</PopoverTrigger> with
            my parents and brother. I study Applied Computer Science at Thomas
            More in Geel. I&apos;ve always been into tech and computers when
            growing up, that is why I chose to study ACS at Thomas More. If you
            would like to check out some of my work you can look at the <Link className='underline hover:text-slate-500' href={'/projects'}>projects </Link>
            page or at my github.
          </p>
          <PopoverContent className='w-[334px]'>
            <Map></Map>
          </PopoverContent>
        </Popover>
        <div className='flex gap-8 mt-12'>
        <Card className="w-1/2">
          <CardHeader>
            <CardTitle>Soft Skills</CardTitle>
            <CardDescription>The skills I have developped as a person through communications, projects and teamwork.</CardDescription>
          </CardHeader>
          <CardContent>
            <TooltipProvider>
            {softSkills.map((skill, index) => (
              <div key={index}>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <div>
                      <Label>{skill.name}</Label>
                      <div className='flex items-center gap-4 justify-between'>
                        <Progress className='w-11/12' value={skill.value}></Progress>
                        <Label className='w-1/12 text-right'>{skill.value/10}/10</Label>
                      </div>
                    </div>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>{skill.description}</p>
                  </TooltipContent>
                </Tooltip>
              </div>
            ))}
          </TooltipProvider>
          </CardContent>
        </Card>
        <Card className="w-1/2">
          <CardHeader>
            <CardTitle>Hard Skills</CardTitle>
            <CardDescription>The technical aspect I have learned doing projects and following courses.</CardDescription>
          </CardHeader>
          <CardContent>
            
          </CardContent>
        </Card>
        </div>
        
      </section>
    </div>
  );
}
