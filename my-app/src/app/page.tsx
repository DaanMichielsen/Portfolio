import Image from 'next/image';
import Link from 'next/link';
import Daan from '../../public/daan.jpg';
import { Card, CardContent } from '@/components/ui/card';

import Selenium from '../../public/technologies/Selenium.svg';
import Tailwind from '../../public/technologies/Tailwind CSS.svg';

import GCP from '../../public/technologies/Google Cloud Platform.svg';
import Python from '../../public/technologies/Python.svg';
import GoogleColab from '../../public/technologies/Google Colab.svg';
import Roboflow from '../../public/technologies/Roboflow.svg';
import FastAI from '../../public/technologies/FastAI.png';
import Numpy from '../../public/technologies/Numpy.svg';
import Pandas from '../../public/technologies/Pandas.svg';
import Streamlit from '../../public/technologies/Streamlit.svg';
import TeachableMachine from '../../public/technologies/Teachable Machine.svg';
import CelebrityTomato from '../../public/tomatoes/celebrity_tomato.png';
import GreenZebraTomato from '../../public/tomatoes/green_zebra_tomato.png';
import PineappleTomato from '../../public/tomatoes/pineapple_tomato.png';
import SuperSweet100Tomato from '../../public/tomatoes/super_sweet_100_tomato.png';
import YellowPearTomato from '../../public/tomatoes/yellow_pear_tomato.png';
import BigDataDataset from '../../public/big-data-dataset.png';
import BigDataLandgingPage from '../../public/big-data-landing-page.png';
import BigDataPrediction from '../../public/big-data-prediction.png';

import Flask from '../../public/technologies/Flask Framework^light.svg';
import Angular from '../../public/technologies/Angular.svg';
import EntityFW from '../../public/technologies/Entity Framework.svg';
import DotNet from '../../public/technologies/^.NET.svg';
import AWS from '../../public/technologies/AWS^light.svg';
import Docker from '../../public/technologies/Docker.svg';
import GitLab from '../../public/technologies/GitLab.svg';
import Postman from '../../public/technologies/Postman.svg';
import SkyGuard from '../../public/SkyGuard.png';

import NextJs from '../../public/technologies/NextJS^light.svg';
import Stripe from '../../public/technologies/Stripe.svg';
import Prisma_light from '../../public/technologies/Prisma ORM^light.svg';
import Prisma_dark from '../../public/technologies/Prisma ORM^dark.svg';
import EMQX from '../../public/technologies/EMQX.svg';
import CosmosDB from '../../public/technologies/Azure Cosmos DB.svg';
import AzureFunctions from '../../public/technologies/Azure Functions.svg';
import Auth0 from '../../public/technologies/AuthZero.svg';
import Resend from '../../public/technologies/Resend^light.svg';
import Energy from '../../public/ismart-energy.svg';
import { Project } from './projects/page';
import { Badge } from '@/components/ui/badge';
import TypeWriter from './_components/TypeWriter';
import { H1 } from '@/components/common/typography/H1';
import { H2 } from '@/components/common/typography/H2';

const projects: Project[] = [
  {
    title: 'Image Classification AI Model',
    description:
      'An AI model that can do image classification using Python and FastAI.',
    href: '/projects/image-classification-ai-model',
    heroImages: [
      CelebrityTomato,
      GreenZebraTomato,
      PineappleTomato,
      SuperSweet100Tomato,
      YellowPearTomato,
      BigDataDataset,
      BigDataLandgingPage,
      BigDataPrediction,
    ],
    tags: ['Web development', 'Team'],
    technologies: [
      { src: Python, name: 'Python' },
      { src: GoogleColab, name: 'Google Colab' },
      { src: GCP, name: 'Google Cloud Platform' },
      {
        src: Roboflow,
        name: 'Roboflow',
      },
      { src: FastAI, name: 'FastAI' },
      {
        src: Numpy,
        name: 'Numpy',
      },
      { src: Pandas, name: 'Pandas' },
      {
        src: Streamlit,
        name: 'Streamlit',
      },
      { src: TeachableMachine, name: 'Google Teachable Machine' },
      { src: Selenium, name: 'Selenium' },
    ],
  },
  {
    title: 'Yellow Nutsedge Detection Application',
    description:
      'An application for farmers to detect yellow nutsedge using Angular, Python, Flask, FastAI and AWS.',
    href: '/projects/yellow-nutsedge-detection-application',
    heroImages: [SkyGuard],
    tags: ['Web development', 'AI/ML/DL', 'Scripting', 'Team'],
    technologies: [
      { src: Python, name: 'Python' },
      { src: Flask, name: 'Flask' },
      { src: Angular, name: 'Angular' },
      {
        src: EntityFW,
        name: 'Entity framework',
      },
      { src: DotNet, name: '.NET' },
      {
        src: AWS,
        name: 'Amazon Web Services',
      },
      { src: Docker, name: 'Docker' },
      {
        src: GitLab,
        name: 'GitLab',
      },
      { src: Postman, name: 'Postman' },
    ],
  },
  {
    title: 'Internship | Energy Subscription Platform',
    description:
      'A subscription platform for energy monitoring using NextJS, Stripe, Prisma and EMQX.',
    href: '/projects/energy-saas',
    heroImages: [Energy],
    tags: ['Internship', 'Web development', 'Team'],
    technologies: [
      { src: NextJs, name: 'NextJS' },
      { src: Stripe, name: 'Stripe' },
      { src: Angular, name: 'Angular' },
      {
        src: Prisma_light,
        name: 'Prisma ORM^light',
      },
      {
        src: Prisma_dark,
        name: 'Prisma ORM^dark',
      },
      { src: EMQX, name: 'EMQX Cloud' },
      {
        src: CosmosDB,
        name: 'CosmosDB',
      },
      { src: AzureFunctions, name: 'Azure functions' },
      {
        src: Tailwind,
        name: 'Tailwind',
      },
      { src: Auth0, name: 'Auth0' },
      { src: Resend, name: 'Resend' },
      { src: Postman, name: 'Postman' },
    ],
  },
];

export default function Home() {
  return (
    <main className='w-5/6 mx-auto'>
      <section className='w-full py-12 md:py-24 lg:py-32 border-b dark:border-b-slate-500'>
        <div className='container px-4 md:px-6 grid gap-8 lg:grid-cols-2 lg:gap-16'>
          <div className='flex flex-col justify-center space-y-4'>
            <div className='space-y-2'>
              <H1 className='text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-6xl/none'>
                Welcome to my Portfolio
              </H1>
              <div className='text-xl font-bold tracking-tighter sm:text-2xl md:text-3xl xl:text-4xl/none flex gap-3'>
                <span>I am</span>{' '}
                <span className='text-blue-500'>
                  <TypeWriter />
                </span>
              </div>
              <p className='max-w-[600px] text-gray-500 md:text-xl dark:text-slate-300'>
                My name is Daan, I was born in 2003, and currently I study at
                the Thomas More University of Applied Sciences in Belgium. I am
                finishing my last year of{' '}
                <a
                  className='underline'
                  target='_blank'
                  href='https://thomasmore.be/en/educations/degree-students/applied-computer-science'
                >
                  Applied Computer Science
                </a>{' '}
                in the division{' '}
                <a
                  className='underline'
                  target='_blank'
                  href='https://thomasmore.be/en/educations/degree-students/applied-computer-science/artificial-intelligence/geel/full-programme'
                >
                  Artificial Intelligence
                </a>
                . I am excited to start my career as a Software Engineer or
                Machine Learning Engineer, so I can contribute to the world of
                tomorrow.
              </p>
            </div>
            <div className='flex flex-col gap-2 min-[400px]:flex-row'>
              <Link
                className='inline-flex h-10 items-center justify-center rounded-md border border-gray-200 bg-white px-8 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300'
                href='/about-me'
              >
                About me
              </Link>
              <Link
                className='inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300'
                href='/projects'
              >
                View Projects
              </Link>
            </div>
          </div>
          <Image
            alt='Daan Michielsen'
            className='mx-auto aspect-square overflow-hidden rounded-full object-cover sm:w-full border-8 dark:border-slate-600 border-gray-300'
            height={550}
            src={Daan}
            width={550}
          />
        </div>
      </section>
      <section className='w-full py-12 md:py-24 lg:py-32'>
        <div className='container px-4 md:px-6 space-y-12'>
          <div className='flex flex-col items-center justify-center space-y-4 text-center'>
            <div className='space-y-2'>
              <H2 className='text-3xl font-bold tracking-tighter sm:text-5xl'>
                Featured Projects
              </H2>
              <p className='max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-slate-300'>
                Check out some of my best work and see what I can do.
              </p>
            </div>
          </div>
          <div className='grid gap-8 sm:grid-cols-2 lg:grid-cols-3'>
            {projects.map((project, index) => (
              <div key={index}>
                <Card
                  className='group hover:scale-105 transition-transform rounded-t-xl'
                  key={index}
                >
                  <Link href={project.href}>
                    <Image
                      alt={project.title + ' Image'}
                      className='aspect-video overflow-hidden rounded-t-xl object-cover'
                      height={310}
                      src={project.heroImages[0]}
                      width={550}
                    />
                    <CardContent className='p-4 sm:p-6 group-hover:bg-gray-200 dark:group-hover:bg-slate-900 transition-all'>
                      <h3 className='text-lg font-bold'>{project.title}</h3>
                      <div className='flex items-center flex-wrap gap-2 text-sm'>
                        {project.tags.map((tag, index: number) => (
                          <Badge
                            key={index}
                            variant='outline'
                            className='dark:border-slate-500'
                          >
                            {tag}
                          </Badge>
                        ))}
                      </div>
                      <p className='mt-2 text-gray-500 dark:text-gray-400'>
                        {project.description}
                      </p>
                    </CardContent>
                  </Link>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
