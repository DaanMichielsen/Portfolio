import React, { Suspense } from 'react';
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from '@/components/ui/hover-card';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { CalendarDays } from 'lucide-react';
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
import PDFModal from '@/components/common/PDFModal';
import Image from 'next/image';
import Daan from '../../../public/daan.jpg';

export const metadata = {
  title: 'Daan Michielsen | About me',
  description: 'On this page you can find information about me and my work.',
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

export default async function AboutMe() {
  const imageDirectory = path.join(process.cwd(), '/public/technologies');
  const imageFilenames = await fs.readdir(imageDirectory);

  const hardSkills: SoftSkill[] = [
    {
      name: 'AI, ML, DL',
      description: 'Artificial Intelligence, Machine Learning, Deep Learning.',
      value: 90,
    },
    {
      name: 'Python programming',
      description:
        'Python programming language for use of AI, API and scripting.',
      value: 90,
    },
    {
      name: 'HTML, CSS, JS',
      description: 'Basic web development using HTML, CSS and JavaScript.',
      value: 85,
    },
    {
      name: 'NextJS',
      description: 'Web development with React, Next.js, TailwindCSS.',
      value: 80,
    },

    {
      name: 'SQL',
      description: 'Structured Query Language for databases.',
      value: 80,
    },
    {
      name: 'Java development',
      description: 'Java programming for web applications and API.',
      value: 75,
    },
    {
      name: '.NET Development',
      description: 'Development of applications using .NET.',
      value: 70,
    },
    {
      name: 'Data engineering',
      description: 'Data engineering for data processing and analysis.',
      value: 70,
    },
    {
      name: 'PHP(Laravel)',
      description: 'Developping web application using Laravel.',
      value: 65,
    },
  ];
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
    <div className='mx-auto max-w-7xl px-6 pb-24 pt-16 sm:pt-16 lg:px-8 lg:pt-16 bg-white bg-opacity-90 dark:bg-primary-dark dark:bg-opacity-80'>
      <h1 className='scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl'>
        Personal information
      </h1>
      <div className='container px-4 md:px-6 grid gap-8 lg:grid-cols-[3fr_1fr] lg:gap-16 mt-8 items-center'>
        <div>
          <p className='leading-7 [&:not(:first-child)]:mt-6'>
            My name is Daan and I am a student in Applied Computer Science at
            <HoverCard>
              <HoverCardTrigger asChild className='px-2 py-0 h-0'>
                <Button className='px-0 py-0 underline h-4' variant='link'>
                  Thomas More
                </Button>
              </HoverCardTrigger>
              <HoverCardContent className='w-80 z-50'>
                <div className='flex justify-between space-x-4'>
                  <Avatar>
                    <AvatarImage src='/thomas-more-favicon.ico' />
                    <AvatarFallback>TM</AvatarFallback>
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
            </HoverCard>{' '}
            in Geel(Belgium). This page serves as a place where I can express
            myself and my work. I hope you enjoy your stay. I am passionate
            about technology and I want to pursue a career in tech.
          </p>
          <p className='leading-7 [&:not(:first-child)]:mt-6'>
            In case you want to know more about me, you can check out me CV
            below.
          </p>
          <div className='flex gap-4 flex-wrap'>
            <PDFModal
              src='/pdf/CV_Daan_Michielsen_2024_English.pdf'
              title='CV Daan Michielsen English'
              download={true}
              newTab={true}
            />
            <PDFModal
              src='/pdf/CV_Daan_Michielsen_2024_Nederlands.pdf'
              title='CV Daan Michielsen Dutch'
              download={true}
              newTab={true}
            />
          </div>
        </div>
        <Image
          alt='Daan Michielsen'
          className='mx-auto aspect-square overflow-hidden rounded-full object-cover'
          height={250}
          src={Daan}
          width={250}
        />
      </div>

      <div className='grid grid-cols-1 gap-8 mt-12'>
        <div className='w-full'>
          <Card>
            <CardHeader>
              <CardTitle>Soft Skills</CardTitle>
              <CardDescription>
                The skills I have developped as a person through communications,
                projects and teamwork.
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
                                {Array.from({ length: wholeStars }, (_, i) => (
                                  <span key={i} className='text-yellow-500'>
                                    ★
                                  </span>
                                ))}
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
                The technical aspect I have learned during projects and
                following courses.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <h2 className='scroll-m-20 border-b pb-2 text-xl font-semibold tracking-tight first:mt-0 my-4'>
                Favorite technologies
              </h2>
              <TooltipProvider>
                {hardSkills.map((skill, index) => (
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
              </TooltipProvider>
              <h2 className='scroll-m-20 border-b pb-2 text-xl font-semibold tracking-tight first:mt-0 my-4'>
                All technnologies I have encountered
              </h2>
              <Suspense fallback={<ImagesLoading />}>
                <ImageGallery imagePaths={imagePaths}></ImageGallery>
              </Suspense>
              <p className='leading-7 [&:not(:first-child)]:mt-6'>
                If you want to see how I used some of these technologies, I
                recommend you check out the{' '}
                <Link
                  className='underline dark:hover:text-slate-500 transition-colors hover:text-gray-500'
                  href={'/projects'}
                >
                  projects
                </Link>{' '}
                page.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
