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
import EMQX from '../../public/technologies/EMQX MQTT.svg';
import CosmosDB from '../../public/technologies/Azure Cosmos DB.svg';
import AzureFunctions from '../../public/technologies/Azure Functions.svg';
import Auth0 from '../../public/technologies/AuthZero.svg';
import Resend from '../../public/technologies/Resend^light.svg';
import Energy from '../../public/ismart-energy.svg';
import { Project } from './projects/page';

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
              <h1 className='text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-6xl/none'>
                Welcome to my Portfolio
              </h1>
              <p className='max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400'>
                This page will give you a brief introduction about who I am,
                what I&apos;m passionate about and what I&apos;m currently
                working on. I&apos;m a full stack software engineer with a
                passion for creating beautiful and functional applications.
              </p>
            </div>
            <div className='flex flex-col gap-2 min-[400px]:flex-row'>
              <Link
                className='inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300'
                href='/projects'
              >
                View Projects
              </Link>
              <Link
                className='inline-flex h-10 items-center justify-center rounded-md border border-gray-200 bg-white px-8 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300'
                href='/about-me'
              >
                About me
              </Link>
            </div>
          </div>
          <Image
            alt='Daan Michielsen'
            className='mx-auto aspect-square overflow-hidden rounded-full object-cover sm:w-full'
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
              <h2 className='text-3xl font-bold tracking-tighter sm:text-5xl'>
                Featured Projects
              </h2>
              <p className='max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400'>
                Check out some of my best work and see what I can do.
              </p>
            </div>
          </div>
          <div className='grid gap-8 sm:grid-cols-2 lg:grid-cols-3'>
            {projects.map((project, index) => (
              <>
                <Card className='group' key={index}>
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
                      <p className='mt-2 text-gray-500 dark:text-gray-400'>
                        {project.description}
                      </p>
                    </CardContent>
                  </Link>
                </Card>
              </>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
