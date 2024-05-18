import Sass from '../../../../public/technologies/SASS.svg';
import HTML from '../../../../public/technologies/HTML5.svg';
import CSS from '../../../../public/technologies/CSS.svg';
import JavaScript from '../../../../public/technologies/JavaScript.svg';
import Netlify from '../../../../public/technologies/Netlify.svg';
import Gulp from '../../../../public/technologies/Gulp.svg';
import NodeJS from '../../../../public/technologies/NodeJS.svg';
import Bootstrap from '../../../../public/technologies/Bootstrap.svg';
import ImageGallery from '@/components/common/ImageGallery';
import Image from 'next/image';
import Link from 'next/link';
import JustPilsLogo from '../../../../public/justpils.png';
import ColorPalette from './_components/ColorPalette';
import Logo from './_components/Logo';

import JustPilsOrigin from '../../../../public/justpils-origin.png';
import JustPilsOrigin2 from '../../../../public/justpils-origin-2.png';
import JustPilsIngredients from '../../../../public/justpils-ingredients.png';
import JustPilsIngredients2 from '../../../../public/justpils-ingredients-2.png';
import JustPilsCountdown from '../../../../public/justpils-countdown.png';
import JustPilsBackToTop from '../../../../public/justpils-back-to-top.png';

export const metadata = {
  title: 'Daan Michielsen | JustPils Website',
  description: 'Page of the JustPils Website project',
};
import { Image as ImageType } from '@/components/common/ImageGallery';
import BackToTopButton from './_components/BackToTopButton';
import TechnologyGallery from '@/components/common/TechnologyGallery';

const imagesPages: ImageType[] = [
  { src: JustPilsOrigin, name: 'Justpils origin page' },
  { src: JustPilsOrigin2, name: 'Justpils origin page' },
  { src: JustPilsIngredients, name: 'Justpils ingredients page' },
  { src: JustPilsIngredients2, name: 'Justpils ingredients page' },
];

const imagesJS: ImageType[] = [
  { src: JustPilsCountdown, name: 'countdown section' },
  { src: JustPilsBackToTop, name: 'Back to top button' },
];

const technologies: ImageType[] = [
  {
    name: 'Sass',
    src: Sass,
  },
  {
    name: 'HTML',
    src: HTML,
  },
  {
    name: 'CSS',
    src: CSS,
  },
  {
    name: 'JavaScript',
    src: JavaScript,
  },
  {
    name: 'Netlify',
    src: Netlify,
  },
  {
    name: 'Gulp',
    src: Gulp,
  },
  {
    name: 'NodeJS',
    src: NodeJS,
  },
  {
    name: 'Bootstrap',
    src: Bootstrap,
  },
];

export default function JustPilsWebsitePage() {
  return (
    <div className='mx-auto max-w-7xl px-6 pb-24 pt-16 sm:pt-16 lg:px-8 lg:pt-16 bg-white bg-opacity-90 dark:bg-primary-dark dark:bg-opacity-80'>
      <h1 className='scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl'>
        Webdesign Advanced | JustPils Website
      </h1>

      <div className='mt-4 flex space-y-2 flex-col md:flex-row text-gray-500 dark:text-slate-400 gap-x-4'>
        <TechnologyGallery technologies={technologies} />
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
        The goal of the project was to create a website in a team using version
        control and the basics of web design. The website had to be responsive
        and had to be made with HTML(Bootstrap 5), CSS(SASS) and JavaScript. To
        set up te project we also learned how to use Gulp and npm. For the
        hosting we had to use Netlify.
      </p>
      <h2 className='mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0'>
        Tasks to complete
      </h2>
      <p className='leading-7 [&:not(:first-child)]:mt-6'>
        The first task for our group of 4 was to come up with a subject for the
        website. We ended up choosing beer as our subject.The group had to come
        up with a color palette, a logo and a name for the website. Each student
        was also responsible for 2 pages on the website, each about a different
        topic and with at least one JavaScript implementation.
      </p>
      <ul className='my-6 ml-6 list-disc [&>li]:mt-4'>
        <li className='font-semibold'>Branding:</li>
        <p>
          We decided to use some common colors in beers for our color palette.
          For the logo we chose a beer glass with the text &quot;Just pils&quot;
          on it.
        </p>
        <div className='flex flex-col lg:flex-row items-center gap-2'>
          <ColorPalette></ColorPalette>
          <div className='flex justify-center my-4'>
            <Logo></Logo>
          </div>
        </div>
        <li className='font-semibold'>Creating 2 pages about certain topic:</li>
        <p>
          I had to come up with 2 topics that were not yet used within out
          website. I picked the topics &quot;ingredients&quot; and
          &quot;origin&quot;. The contents of these pages were mostly taken from
          online sources and rewritten in my own words. The focus was more on
          getting used to using Bootstrap components and the Sass styling
          language. We had to use mixins, modules and variables in our Sass
          files.
        </p>
        <div>
          <ImageGallery images={imagesPages} />
        </div>
        <li className='font-semibold'>JavaScript implementation:</li>
        <p>
          For the JavaScript implementation I decided to make a back to top
          button for the origin page and a section with national beer dates in
          different countries with a countdown to the next date for the
          ingredients page. The back to top button is also available on this
          page :) But as you can probably tell, the behaviour is not flawless.
        </p>
        <div>
          <ImageGallery images={imagesJS} />
        </div>
        <p>
          <span className='font-semibold underline'>Note:</span> The counters
          are broken since none of the dates are taken from a real source. Also
          there is no complex math done to calculate the time and keep all
          factors into account :(
        </p>
      </ul>
      <h2 className='mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0'>
        What have I learned?
      </h2>
      <p className='leading-7 [&:not(:first-child)]:mt-6'>
        I learned that there is more than just plain HTML, CSS and JavaScript. I
        also had to work with version control for the first time in a team of 4
        students which was a bit of a challange at first. The use of Netlify was
        also new to me since I had only hosted a static page on a normal web
        server before and never used a hosting platform that takes care of all
        of that.
      </p>
      <BackToTopButton />
    </div>
  );
}
