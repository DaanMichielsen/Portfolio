export const metadata = {
  title: 'Daan Michielsen | Projects',
  description: 'This page contains all the projects I have worked on.',
};
import { ProjectsCarousel } from '@/components/component/projects-carousel';
import { StaticImageData } from 'next/image';

import Selenium from '../../../public/technologies/Selenium.svg';
import CSharp from '../../../public/technologies/CSharp.svg';
import WebscraperJSON from '../../../public/web_scraper_json.png';

import PHP from '../../../public/technologies/PHP.svg';
// import HTML from '../../../../public/technologies/HTML5.svg';
import Tailwind from '../../../public/technologies/Tailwind CSS.svg';
import SQLite from '../../../public/technologies/SQLite.svg';
import Combell from '../../../public/technologies/Combell.svg';
import Livewire from '../../../public/technologies/Livewire.svg';
import ManageAbsencesDeleted from '../../../public/manage-absences-deleted.png';
import ManageAbsencesModal from '../../../public/manage-absences-modal.png';
import ManageAbsencesSuccess from '../../../public/manage-absences-success.png';
import ManageAbsencesStatus from '../../../public/manage-absences-status.png';
import ManageAbsencesFilter from '../../../public/manage-absences-filter.png';
import InvoicesCreate from '../../../public/invoices-create.png';
import InvoicesFilter from '../../../public/invoices-filter.png';
import InvoicesSuccess from '../../../public/invoices-success.png';

import Sass from '../../../public/technologies/SASS.svg';
import HTML from '../../../public/technologies/HTML5.svg';
import CSS from '../../../public/technologies/CSS.svg';
import JavaScript from '../../../public/technologies/JavaScript.svg';
import Netlify from '../../../public/technologies/Netlify.svg';
import Gulp from '../../../public/technologies/Gulp.svg';
import NodeJS from '../../../public/technologies/NodeJS.svg';
import Bootstrap from '../../../public/technologies/Bootstrap.svg';
import JustPilsOrigin from '../../../public/justpils-origin.png';
import JustPilsOrigin2 from '../../../public/justpils-origin-2.png';
import JustPilsIngredients from '../../../public/justpils-ingredients.png';
import JustPilsIngredients2 from '../../../public/justpils-ingredients-2.png';

import Python from '../../../public/technologies/Python.svg';
import GoogleColab from '../../../public/technologies/Google Colab.svg';
import Roboflow from '../../../public/technologies/Roboflow.svg';
import FastAI from '../../../public/technologies/FastAI.png';
import Numpy from '../../../public/technologies/Numpy.svg';
import Pandas from '../../../public/technologies/Pandas.svg';
import Streamlit from '../../../public/technologies/Streamlit.svg';
import Yolo from '../../../public/technologies/YOLOv8.svg';
import HornetLabel1 from '../../../public/hornet-label.png';
import HornetLabel2 from '../../../public/hornet-label-2.png';
import HornetLabel3 from '../../../public/hornet-label-3.png';
import HornetLabel4 from '../../../public/hornet-label-4.png';
import HornetDetected1 from '../../../public/hornet-detected-1.jpg';
import HornetDetected2 from '../../../public/hornet-detected-2.jpg';

import GCP from '../../../public/technologies/Google Cloud Platform.svg';
import TeachableMachine from '../../../public/technologies/Teachable Machine.svg';
import Kaggle from '../../../public/technologies/Kaggle.svg';
import CelebrityTomato from '../../../public/tomatoes/celebrity_tomato.png';
import GreenZebraTomato from '../../../public/tomatoes/green_zebra_tomato.png';
import PineappleTomato from '../../../public/tomatoes/pineapple_tomato.png';
import SuperSweet100Tomato from '../../../public/tomatoes/super_sweet_100_tomato.png';
import YellowPearTomato from '../../../public/tomatoes/yellow_pear_tomato.png';
import BigDataDataset from '../../../public/big-data-dataset.png';
import BigDataLandgingPage from '../../../public/big-data-landing-page.png';
import BigDataPrediction from '../../../public/big-data-prediction.png';

import Flask_light from '../../../public/technologies/Flask Framework^light.svg';
import Flask_dark from '../../../public/technologies/Flask Framework^dark.svg';
import Angular from '../../../public/technologies/Angular.svg';
import EntityFW from '../../../public/technologies/Entity Framework.svg';
import DotNet from '../../../public/technologies/^.NET.svg';
import AWS_light from '../../../public/technologies/AWS^light.svg';
import AWS_dark from '../../../public/technologies/AWS^dark.svg';
import Docker from '../../../public/technologies/Docker.svg';
import GitLab from '../../../public/technologies/GitLab.svg';
import Postman from '../../../public/technologies/Postman.svg';
import SkyGuard from '../../../public/SkyGuard.png';

import Vercel_light from '../../../public/technologies/Vercel^light.svg';
import Vercel_dark from '../../../public/technologies/Vercel^dark.svg';
import NextJs_light from '../../../public/technologies/NextJS^light.svg';
import NextJs_dark from '../../../public/technologies/NextJS^dark.svg';
import Stripe from '../../../public/technologies/Stripe.svg';
import Prisma_light from '../../../public/technologies/Prisma ORM^light.svg';
import Prisma_dark from '../../../public/technologies/Prisma ORM^dark.svg';
import EMQX from '../../../public/technologies/EMQX MQTT.svg';
import CosmosDB from '../../../public/technologies/Azure Cosmos DB.svg';
import AzureFunctions from '../../../public/technologies/Azure Functions.svg';
import Auth0 from '../../../public/technologies/AuthZero.svg';
import Resend_light from '../../../public/technologies/Resend^light.svg';
import Resend_dark from '../../../public/technologies/Resend^dark.svg';
import Energy from '../../../public/ismart-energy.svg';

export type Project = {
  title: string;
  description: string;
  href: string;
  heroImages: StaticImageData[];
  technologies: {
    src: StaticImageData;
    name: string;
  }[];
};

const projects: Project[] = [
  {
    title: 'Web scraper',
    description:
      'A webscraper for videos, job applications and e-sports data using C# and Selenium',
    href: '/projects/web-scraper',
    heroImages: [WebscraperJSON],
    technologies: [
      { src: Selenium, name: 'Selenium' },
      { src: CSharp, name: 'C#' },
    ],
  },
  {
    title: 'Staff Management Application',
    description:
      'A staff management application for au pairs and elderly couples.',
    href: '/projects/staff-management-application',
    heroImages: [
      ManageAbsencesDeleted,
      ManageAbsencesModal,
      ManageAbsencesSuccess,
      ManageAbsencesStatus,
      ManageAbsencesFilter,
      InvoicesCreate,
      InvoicesFilter,
      InvoicesSuccess,
    ],
    technologies: [
      { src: HTML, name: 'HTML' },
      { src: PHP, name: 'PHP' },
      {
        src: Tailwind,
        name: 'Tailwind',
      },
      { src: SQLite, name: 'SQLite' },
      {
        src: Combell,
        name: 'Combell',
      },
      { src: Livewire, name: 'Livewire' },
    ],
  },
  {
    title: 'JustPils Website',
    description: 'A website about beer using basic web technologies.',
    href: '/projects/justpils-website',
    heroImages: [
      JustPilsOrigin,
      JustPilsOrigin2,
      JustPilsIngredients,
      JustPilsIngredients2,
    ],
    technologies: [
      { src: HTML, name: 'HTML' },
      { src: CSS, name: 'CSS' },
      {
        src: Bootstrap,
        name: 'Bootstrap',
      },
      { src: Sass, name: 'Sass' },
      {
        src: JavaScript,
        name: 'JavaScript',
      },
      { src: Gulp, name: 'Gulp' },
      {
        src: Netlify,
        name: 'Netlify',
      },
      { src: NodeJS, name: 'NodeJS' },
    ],
  },

  {
    title: 'Hornet Tracking AI Model',
    description:
      'An AI model that does object detection and tracking on hornets and bees',
    href: '/projects/hornet-tracking-ai-model',
    heroImages: [
      HornetLabel1,
      HornetLabel2,
      HornetLabel3,
      HornetLabel4,
      HornetDetected1,
      HornetDetected2,
    ],
    technologies: [
      { src: Python, name: 'Python' },
      { src: GoogleColab, name: 'Google Colab' },
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
      { src: Yolo, name: 'Yolo' },
      { src: Selenium, name: 'Selenium' },
    ],
  },
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
      { src: Flask_light, name: 'Flask^light' },
      { src: Flask_dark, name: 'Flask^dark' },
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
      { src: Kaggle, name: 'Kaggle' },
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
      { src: Flask_light, name: 'Flask^light' },
      { src: Flask_dark, name: 'Flask^dark' },
      { src: Angular, name: 'Angular' },
      {
        src: EntityFW,
        name: 'Entity framework',
      },
      { src: DotNet, name: '.NET' },
      {
        src: AWS_light,
        name: 'Amazon Web Services^light',
      },
      {
        src: AWS_dark,
        name: 'Amazon Web Services^dark',
      },
      { src: Docker, name: 'Docker' },
      {
        src: GitLab,
        name: 'GitLab',
      },
      { src: Postman, name: 'Postman' },
      { src: GoogleColab, name: 'Google Colab' },
      { src: FastAI, name: 'FastAI' },
    ],
  },
  {
    title: 'Internship | Energy Subscription Platform',
    description:
      'A subscription platform for energy monitoring using NextJS, Stripe, Prisma and EMQX.',
    href: '/projects/energy-saas',
    heroImages: [Energy],
    technologies: [
      { src: Vercel_light, name: 'Vercel^light' },
      { src: Vercel_dark, name: 'Vercel^dark' },
      { src: NextJs_light, name: 'NextJS^light' },
      { src: NextJs_dark, name: 'NextJS^dark' },
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
      { src: Resend_light, name: 'Resend^light' },
      { src: Resend_dark, name: 'Resend^dark' },
      { src: Postman, name: 'Postman' },
    ],
  },
];

export default function Projects() {
  return (
    <div className='mx-auto max-w-7xl px-6 pb-24 pt-16 sm:pt-16 lg:px-8 lg:pt-16 bg-white bg-opacity-90 dark:bg-primary-dark dark:bg-opacity-80'>
      <ProjectsCarousel projects={projects}></ProjectsCarousel>
    </div>
  );
}
