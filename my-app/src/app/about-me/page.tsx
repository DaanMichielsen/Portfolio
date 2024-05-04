import React, { Suspense } from 'react';
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
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Label } from '@/components/ui/label';
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
  TooltipProvider,
} from '@/components/ui/tooltip';
import ImageGallery from '@/components/ImageGallery';
import { promises as fs } from 'fs';
import path from 'path';
import ImagesLoading from '@/components/loading/ImagesLoading';

export const metadata = {
  title: 'Daan Michielsen | About me',
  description: 'About me page',
};

type SoftSkill = {
  name: string;
  description: string;
  value: number;
};

type Language = {
  name: string;
  level: string;
  usage: string;
  stars?: number;
};

async function getImagePaths() {
  const imageDirectory = path.join(process.cwd(), '/public/technologies');
  const imageFilenames = await fs.readdir(imageDirectory);
  return imageFilenames.map(filename => filename);
}

type hardSkill = SoftSkill & { projects: string[] };

export default async function AboutMe() {
  const imageDirectory = path.join(process.cwd(), '/public/technologies');
  const imageFilenames = await fs.readdir(imageDirectory);
  const softSkills: SoftSkill[] = [
    {
      name: 'Accountability',
      description: 'The ability to take ownership of your mistakes.',
      value: 90,
    },
    {
      name: 'Professional communication',
      description:
        'The ability to communicate in a professional manner with team members, teachers, colleagues...',
      value: 85,
    },
    {
      name: 'Research',
      description:
        'The ability to research on the internet and finding useful information efficiently.',
      value: 85,
    },
    {
      name: 'Teamwork',
      description:
        'The ability to work together with a team to achieve a common goal.',
      value: 85,
    },
    {
      name: 'Problem solving',
      description:
        'The ability to solve technical problems in an application or project.',
      value: 80,
    },
    {
      name: 'Empathy',
      description:
        'The ability to empathize with your team and understand the problems that they face.',
      value: 75,
    },
  ];

  const languages: Language[] = [
    {
      name: 'Dutch',
      level: 'Native',
      usage: 'Daily',
      stars: 4.5,
    },
    {
      name: 'English',
      level: 'Professional',
      usage: 'Daily',
      stars: 4,
    },
    {
      name: 'French',
      level: 'Basic',
      usage: 'Rarely',
      stars: 2.5,
    },
  ];

  const imagePaths = await getImagePaths();

  return (
    <div className='mx-auto max-w-7xl px-6 pb-24 pt-16 sm:pt-16 lg:px-8 lg:pt-16'>
      <section className='mt-12'>
        <h1 className='scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl'>
          Personal information
        </h1>
        <p className='leading-7 [&:not(:first-child)]:mt-6'>
          My name is Daan and I am a student in Applied Computer Science at
          <HoverCard>
            <HoverCardTrigger asChild className='px-2 py-0 h-0'>
              <Button className='px-2 py-0' variant='link'>
                Thomas More
              </Button>
            </HoverCardTrigger>
            <HoverCardContent className='w-80 z-50'>
              <div className='flex justify-between space-x-4'>
                <Avatar>
                  <AvatarImage src='/thomas-more-favicon.ico' />
                  <AvatarFallback>VC</AvatarFallback>
                </Avatar>
                <div className='space-y-1'>
                  <h4 className='text-sm font-semibold'>
                    <a
                      className='text-blue-700 underline hover:text-blue-500'
                      href='https://thomasmore.be/'
                      target='_blank'
                    >
                      Thomas More
                    </a>
                  </h4>
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
            I was born in 2003 and live in{' Beerse '}
            {/* <PopoverTrigger className='underline'>Beerse</PopoverTrigger> with */}
            my parents and brother. I study Applied Computer Science at Thomas
            More in Geel. I&apos;ve always been into tech and computers when
            growing up, that is why I chose to study ACS(Applied Computer
            Science) at Thomas More. If you would like to check out some of my
            work you can look at the{' '}
            <Link className='underline hover:text-slate-500' href={'/projects'}>
              projects
            </Link>{' '}
            page or at my github.
          </p>
          <PopoverContent className='w-[334px]'>
            <Map></Map>
          </PopoverContent>
        </Popover>
        <div className='grid grid-cols-1 gap-8 mt-12'>
          <div className='w-full'>
            <Card>
              <CardHeader>
                <CardTitle>Soft Skills</CardTitle>
                <CardDescription>
                  The skills I have developped as a person through
                  communications, projects and teamwork.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <TooltipProvider>
                  {softSkills.map((skill, index) => (
                    <div key={index}>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <div className='mb-2'>
                            <Label>{skill.name}</Label>
                            <div className='flex items-center gap-4 justify-between'>
                              <div className='w-11/12'>
                                <Progress value={skill.value}></Progress>
                                <p className='md:hidden text-sm'>
                                  {skill.description}
                                </p>
                              </div>
                              <Label className='w-1/12 text-right'>
                                {skill.value / 10}/10
                              </Label>
                            </div>
                          </div>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>{skill.description}</p>
                        </TooltipContent>
                      </Tooltip>
                    </div>
                  ))}
                  <div className='mt-6'>
                    <Label className='text-xl'>Languages</Label>
                  </div>
                  <div className='flex flex-row justify-start gap-4'>
                    {languages.map((language, index) => {
                      // Calculate whole and fractional parts of stars
                      const wholeStars = Math.floor(language.stars!);
                      const hasHalfStar = language.stars! - wholeStars >= 0.5;

                      return (
                        <div key={index}>
                          <Tooltip>
                            <TooltipTrigger asChild>
                              <div className='mb-2 w-auto'>
                                <Label>{language.name}</Label>
                                <div className='flex items-center'>
                                  {/* Whole stars */}
                                  {Array.from(
                                    { length: wholeStars },
                                    (_, i) => (
                                      <span key={i} className='text-yellow-500'>
                                        ★
                                      </span>
                                    ),
                                  )}
                                  {/* Half star */}
                                  {hasHalfStar && (
                                    <span className='text-yellow-500'>★</span>
                                  )}
                                  {/* Empty stars */}
                                  {Array.from(
                                    {
                                      length: Math.max(
                                        5 - wholeStars - (hasHalfStar ? 1 : 0),
                                        0,
                                      ),
                                    },
                                    (_, i) => (
                                      <span
                                        key={wholeStars + i + 1}
                                        className='text-gray-300'
                                      >
                                        ★
                                      </span>
                                    ),
                                  )}
                                </div>
                                <p className='md:hidden'>{language.level}</p>
                              </div>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p>{language.level}</p>
                            </TooltipContent>
                          </Tooltip>
                        </div>
                      );
                    })}
                  </div>
                </TooltipProvider>
              </CardContent>
            </Card>
          </div>

          <div className='w-full'>
            <Card>
              <CardHeader>
                <CardTitle>Hard Skills</CardTitle>
                <CardDescription>
                  The technical aspect I have learned doing projects and
                  following courses.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Suspense fallback={<ImagesLoading />}>
                  <ImageGallery imagePaths={imagePaths}></ImageGallery>
                </Suspense>
                <p className='mt-4'>
                  If you want to see how I used some of these technologies, I
                  recommend you check out the projects page.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
