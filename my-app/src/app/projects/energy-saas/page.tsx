import { Button } from '@/components/ui/button';
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from '@/components/ui/hover-card';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import Vercel from '../../../../public/technologies/Vercel^light.svg';
import NextJs from '../../../../public/technologies/NextJS^light.svg';
import Stripe from '../../../../public/technologies/Stripe.svg';
import Prisma from '../../../../public/technologies/Prisma ORM^light.svg';
import EMQX from '../../../../public/technologies/EMQX.svg';
import CosmosDB from '../../../../public/technologies/Azure Cosmos DB.svg';
import AzureFunctions from '../../../../public/technologies/Azure Functions.svg';
import Tailwind from '../../../../public/technologies/Tailwind CSS.svg';
import Auth0 from '../../../../public/technologies/AuthZero.svg';
import Resend from '../../../../public/technologies/Resend^light.svg';
import Postman from '../../../../public/technologies/Postman.svg';
import Energy from '../../../../public/ismart-energy.svg';
import Image from 'next/image';
import Link from 'next/link';
import TechnologyGallery from '@/components/common/TechnologyGallery';
import { Image as ImageType } from '@/components/common/ImageGallery';
import { CalendarDays } from 'lucide-react';
import TechnologyAccordion, {
  AccordionTechnology,
} from './_components/TechnologyAccordion';
import ImageGallery from '@/components/common/ImageGallery';
import architecture from '../../../../public/architecture.png';
import PDFModal from '@/components/common/PDFModal';
import { Tabs, TabsContent, TabsTrigger, TabsList } from '@/components/ui/tabs';
import NextAndPreviousProjectButton from '../_components/NextAndPrevProjectButton';
import SaasHomePage from '../../../../public/saas-homepage.png';
import SaasGraph from '../../../../public/saas-graph.png';
import PageCarousel from '@/components/common/Carousel';
import DocumentSection from './_components/DocumentSection';

export const metadata = {
  title: 'Daan Michielsen | Energy SaaS Platform',
  description: 'Page of the Energy SaaS Platform project',
};

type Document = {
  name: string;
  url: string;
};

const heroImages = [SaasHomePage, SaasGraph];

const architectureImages: ImageType[] = [
  {
    src: architecture,
    name: 'Architecture of the application',
  },
];

const technologies: ImageType[] = [
  {
    name: 'Vercel',
    src: Vercel,
  },
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

const documents: Document[] = [
  {
    name: 'Project plan (Dutch)',
    url: '/pdf/project-plan.pdf',
  },
  {
    name: 'Realistaition document (Dutch)',
    url: '/pdf/realisatiedocument.pdf',
  },
  {
    name: 'Reflection report (Dutch)',
    url: '/pdf/Reflectie_Daan_Michielsen.pdf',
  },
];

const technologiesAccordion: AccordionTechnology[] = [
  {
    name: 'NextJS',
    url: 'https://nextjs.org/',
    description: (
      <>
        We use NextJS as a fullstack framework to create the backend, frontend
        and even the API. Tied in with NextJS we already use <b>React</b>,{' '}
        <b>Tailwind</b>, <b>TypeScript</b>. By using Vercel we can easily opt in
        to using the Vercel <b>Blob Storage</b> and the{' '}
        <b>Vercel PostgreSQL Database</b>.
      </>
    ),
    image: NextJs,
  },
  {
    name: 'Stripe',
    url: 'https://stripe.com/',
    description: (
      <>
        We use Stripe for the <b>Subscriptions</b> aspect of the application,
        Stripe allows us to create <b>products</b> with different{' '}
        <b>plans and prices</b> which we can offer as <b>monthly</b> (or yearly){' '}
        <b>subscriptions</b>. Stripe also has <b>webhooks</b> that we can{' '}
        <b>utilize in our application</b> to{' '}
        <b>listen for events that happen in Stripe</b>.
      </>
    ),
    image: Stripe,
  },
  {
    name: 'Prisma',
    url: 'https://www.prisma.io/',
    description: (
      <>
        We use Prisma as our{' '}
        <b>ORM to communicate with our postgreSQL database</b>. This makes it
        very easy to <b>define a schema</b> in programming-like syntax and then
        generate the database from that. Prisma also has a lot of features that
        make it easy to work with the database, like <b>relations</b>,{' '}
        <b>transactions</b>, <b>aggregations</b> and <b>many more</b>.
      </>
    ),
    image: Prisma,
  },
  {
    name: 'EMQX',
    url: 'https://www.emqx.io/',
    description: (
      <>
        We use EMQX as our <b>MQTT broker</b>, this allows us to{' '}
        <b>send loads of data from our sensors</b> to the Azure function we use
        to store the data in the database. EMQX is a very powerful MQTT broker
        that is <b>very scalable</b> and has a lot of features that make it easy
        to work with. EMQX is easy to use in our application through{' '}
        <b>API keys and the EMQX JavaScript SDK</b>. We even managed to{' '}
        <b>stay within the limits of the generous free tier</b>.
      </>
    ),
    image: EMQX,
  },
  {
    name: 'CosmosDB',
    url: 'https://azure.microsoft.com/en-us/products/cosmos-db',
    description: (
      <>
        To store all the <b>data that the sensors send</b>, including the
        sensors and their alert-configurations, we use CosmosDB. CosmosDB is a{' '}
        <b>document database from Azure</b> that is very scalable and has a lot
        of features that make it easy to work with. CosmosDB is a{' '}
        <b>NoSQL database that can store JSON documents</b> and has a{' '}
        <b>SQL-like query language to query the data</b>. CosmosDB is easy to
        use in our application through API keys and the CosmosDB JavaScript SDK.
      </>
    ),
    image: CosmosDB,
  },
  {
    name: 'Azure Functions',
    url: 'https://azure.microsoft.com/en-us/products/functions',
    description: (
      <>
        We utilize Azure functions to create a serverless function that takes in
        the messages that our broker sends and then stores them in the database.
        Azure functions are very easy to use and can be written in many
        languages, we used <b>NodeJS</b> to write our functions.
      </>
    ),
    image: AzureFunctions,
  },
  {
    name: 'Auth0',
    url: 'https://auth0.com/',
    description: (
      <>
        We use Auth0 as our <b>authentication provider</b>, Auth0 allows us to
        easily <b>authenticate users</b> and <b>authorize them</b> to access
        certain parts of the application. Auth0 also has a lot of{' '}
        <b>features</b> like <b>social logins</b>,{' '}
        <b>multi-factor authentication</b> and <b>many more</b>.
      </>
    ),
    image: Auth0,
  },
  {
    name: 'Tailwind',
    url: 'https://tailwindcss.com/',
    description: (
      <>
        We use Tailwind as our <b>styling framework</b>, Tailwind allows us to
        easily create <b>beautiful designs</b> without having to write a lot of
        CSS. Tailwind also has a lot of <b>features</b> like <b>dark mode</b>,{' '}
        <b>hover states</b> and <b>many more</b>. We also used Tailwind UI which
        is a Tailwind component library that has a lot of components that we can
        use in our application that provide accessibility and respoinsiveness
        out of the box. We also use ShadCN/UI which is an open source component
        library based on radix-ui and also styled using tailwind.
      </>
    ),
    image: Tailwind,
  },
  {
    name: 'Resend',
    url: 'https://resend.com/',
    description: (
      <>
        We use Resend to send <b>emails</b> to our users, Resend is a very
        powerful email service that allows us to{' '}
        <b>send transactional emails to our users</b>. Resend also has a lot of
        features like <b>templates</b>, <b>tracking</b> and <b>many more</b>.
      </>
    ),
    image: Resend,
  },
  {
    name: 'Postman',
    url: 'https://www.postman.com/',
    description: (
      <>
        To test our API we use Postman, Postman is a very popular tool to test
        API&apos;s.
      </>
    ),
    image: Postman,
  },
  // Add the rest of your technologies in the same format
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
        Internship | Developing of a SaaS platform for energy management in
        buildings
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
      <div className='w-5/6 my-2 flex mx-auto'>
        <PageCarousel images={heroImages} />
      </div>

      <h2 className='mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0'>
        Description
      </h2>
      <p className='leading-7 [&:not(:first-child)]:mt-4'>
        I did my internship at a company called <Ismart />. iSmart is a small
        company located in Westerlo (Belgium), their expertise is in creating
        websites and applications for other businesses. They also do IoT
        integrations and Mircosoft365 environment customizations. During the
        internship, I had the role of a full-stack developer.
      </p>
      <h3 className='scroll-m-20 text-2xl font-semibold tracking-tight mt-4'>
        What?
      </h3>
      <p className='leading-7 [&:not(:first-child)]:mt-4'>
        During the internship, I and one other intern worked on a SaaS platform
        that would allow owners of buildings with sensors to monitor energy
        usage and other metrics. The users would be member of an organization
        which has roles to manage permissions. An organization can have sites,
        sites contain buildings, buildings contain location, locations contain
        devices and finally devices contain sensors. The application also has
        different tiers of subscriptions to fit every kind of organization. With
        creating an account comes access to our API which can be implemented in
        other applications to customize the experience of monitoring data.
      </p>
      <h3 className='scroll-m-20 text-2xl font-semibold tracking-tight'>
        How?
      </h3>
      <p className='leading-7 [&:not(:first-child)]:mt-4'>
        To create the solution, we used a combination of some of the most
        popular technologies at the moment. With we, I mean me and one other
        student that is in her last year of Application Development at Thomas
        More. The following technologies were used:
      </p>
      <Tabs defaultValue='technologies' className='w-full'>
        <TabsList className='h-auto w-full'>
          <TabsTrigger className='py-3 px-4 w-full' value='technologies'>
            Technologies
          </TabsTrigger>
          <TabsTrigger className='py-3 px-4 w-full' value='architecture'>
            Architecture
          </TabsTrigger>
        </TabsList>
        <TabsContent value='technologies'>
          <div className='w-11/12 mx-auto'>
            <TechnologyAccordion technologies={technologiesAccordion} />
          </div>
        </TabsContent>
        <TabsContent value='architecture'>
          <div>
            <ImageGallery images={architectureImages} />
          </div>
        </TabsContent>
      </Tabs>

      {/* <div>
        {documents.map((document, index) => (
          <div key={index}>
            <PDFModal
              src={document.url}
              newTab
              download
              title={document.name}
            ></PDFModal>
          </div>
        ))}
      </div> */}
      <DocumentSection />
      <NextAndPreviousProjectButton
        previousProject={{
          title: 'Yellow nutsedge detection application',
          href: '/projects/yellow-nutsedge-detection-application',
        }}
        nextProject={null}
      />
    </div>
  );
}
