import PHP from '../../../../public/technologies/PHP.svg';
import HTML from '../../../../public/technologies/HTML5.svg';
import Tailwind from '../../../../public/technologies/Tailwind CSS.svg';
import SQLite from '../../../../public/technologies/SQLite.svg';
import Combell from '../../../../public/technologies/Combell.svg';
import Livewire from '../../../../public/technologies/Livewire.svg';

import ManageAbsencesDeleted from '../../../../public/manage-absences-deleted.png';
import ManageAbsencesModal from '../../../../public/manage-absences-modal.png';
import ManageAbsencesSuccess from '../../../../public/manage-absences-success.png';
import ManageAbsencesStatus from '../../../../public/manage-absences-status.png';
import ManageAbsencesFilter from '../../../../public/manage-absences-filter.png';

import InvoicesCreate from '../../../../public/invoices-create.png';
import InvoicesFilter from '../../../../public/invoices-filter.png';
import InvoicesSuccess from '../../../../public/invoices-success.png';
import PageCarousel from '../../../components/common/Carousel';
import TechnologyGallery from '@/components/common/TechnologyGallery';
import { Image as ImageType } from '@/components/common/ImageGallery';
import NextAndPreviousProjectButton from '../_components/NextAndPrevProjectButton';
import StaffManagementHomePage from '../../../../public/staff-management-home-page.png';
import ImageGallery from '@/components/common/ImageGallery';
import { H2 } from '@/components/common/typography/H2';
import { H1 } from '@/components/common/typography/H1';
import { H3 } from '@/components/common/typography/H3';
import Link from 'next/link';
import Image from 'next/image';
import StaffManagementLogo from '../../../../public/staff-management-logo.png';

export const metadata = {
  title: 'Daan Michielsen | Staff Management Application',
  description: 'Page of the Staff Management Application project',
};

const absenceImages = [
  ManageAbsencesDeleted,
  ManageAbsencesModal,
  ManageAbsencesSuccess,
  ManageAbsencesStatus,
  ManageAbsencesFilter,
];

const technologies: ImageType[] = [
  {
    name: 'PHP',
    src: PHP,
  },
  {
    name: 'HTML',
    src: HTML,
  },
  {
    name: 'Tailwind',
    src: Tailwind,
  },
  {
    name: 'SQLite',
    src: SQLite,
  },
  {
    name: 'Combell',
    src: Combell,
  },
  {
    name: 'Livewire',
    src: Livewire,
  },
];

const homePageImage: ImageType[] = [
  {
    src: StaffManagementHomePage,
    name: 'Staff management application home page',
  },
];

const InvoiceImages = [InvoicesCreate, InvoicesFilter, InvoicesSuccess];

export default function JustPilsWebsitePage() {
  return (
    <div className='mx-auto max-w-7xl px-6 pb-24 pt-16 sm:pt-16 lg:px-8 lg:pt-16 bg-white bg-opacity-90 dark:bg-primary-dark dark:bg-opacity-80'>
      <H1>Project PHP (EN) | Staff Management Application</H1>

      <div className='mt-4 flex space-y-2 flex-col md:flex-row text-gray-500 dark:text-slate-400 gap-x-4'>
        <TechnologyGallery technologies={technologies} />
        <Link
          href={'https://lstc.lst-cstaffmanagement.be/'}
          target='_blank'
          className='p-2 rounded-full flex items-center gap-x-2 transition-all hover:bg-slate-300 bg-slate-200 text-slate-800'
        >
          <Image
            src={StaffManagementLogo}
            height={30}
            width={30}
            alt='Staff management application logo'
          />{' '}
          Staff management application
        </Link>
      </div>

      <ImageGallery images={homePageImage} />

      <H2>Background</H2>
      <p className='leading-7 [&:not(:first-child)]:mt-2'>
        There is an elderly couple that has a lot of staff members and an au
        pair helping them out to do tasks around the house as well as schedule
        visits for their grand child. Doing all of these things can be a bit
        chaotic and unorganized. To solve this, we&apos;re challenged to come up
        with an application that can help manage all of these tasks within a
        user-friendly environment.
      </p>
      <H3>Preparation</H3>
      <p className='leading-7 [&:not(:first-child)]:mt-2'>
        The blueprint for this application was already made by other students
        during the course &quot;Requirements Analysis&quot;. We just had to take
        all the different interpretations and put them together to decide how we
        want to achieve the goal. With we I mean the team of 5 students. <br />{' '}
        All of us took the course &quot;Web Development in PHP&quot;
      </p>
      <H2>Requirements</H2>
      <p className='leading-7 [&:not(:first-child)]:mt-2'>
        The requirements had some priority levels based on the Moscow principle.
      </p>
      <div className='flex flex-row justify-between'>
        <div>
          <h4 className='scroll-m-20 text-xl font-semibold tracking-tight mt-6'>
            Must have
          </h4>
          <ul className='mb-6 ml-6 list-disc [&>li]:mt-2'>
            <li className='font-semibold'>Authentication</li>
            <li className='font-semibold'>Manage users</li>
            <li className='font-semibold'>User roles</li>
            <li className='font-semibold'>Manage tasks</li>
            <li className='font-semibold'>Manage invoices</li>
            <li className='font-semibold'>Manage paperwork</li>
            <li className='font-semibold'>Manage meals</li>
            <li className='font-semibold'>Submit absence</li>
          </ul>
        </div>
        <div>
          <h4 className='scroll-m-20 text-xl font-semibold tracking-tight mt-6'>
            Should have
          </h4>
          <ul className='mb-6 ml-6 list-disc [&>li]:mt-2'>
            <li className='font-semibold'>User manual</li>
            <li className='font-semibold'>Tags</li>
          </ul>
        </div>
        <div>
          <h4 className='scroll-m-20 text-xl font-semibold tracking-tight mt-6'>
            Could have
          </h4>
          <ul className='mb-6 ml-6 list-disc [&>li]:mt-2'>
            <li className='font-semibold'>Customization (colors, ...)</li>
          </ul>
        </div>
      </div>
      <H2>Contribution</H2>
      <p className='leading-7 [&:not(:first-child)]:mt-2'>
        I contributed a moderate amount to the project. I was responsible for
        the following parts:
      </p>
      <H3>Manage absences page</H3>
      <p className='leading-7 [&:not(:first-child)]:mt-2'>
        On this page, the user could declare absences for a certain period. The
        admin would then be able to see all the absences to take them into
        account for planning visits, tasks, ... It also contains a filter pane
        which is useful for the user to find absences quickly. There is also
        pagination, which is useful when there are a lot of absences.
      </p>
      <div className='w-5/6 my-2 flex mx-auto'>
        <PageCarousel images={absenceImages} />
      </div>
      <H3>Manage invoices page</H3>
      <p className='leading-7 [&:not(:first-child)]:mt-2 font-normal'>
        On this page, a user could submit invoices. The admin would then be able
        to repay the user that submitted the invoice for the work they did. The
        user could also see the status of the invoice. The admin could also see
        all of the invoices and filter them based on the status of the invoice.
        There is also pagination, which is useful when there are a lot of
        invoices.
      </p>
      <div className='w-5/6 my-2 flex mx-auto'>
        <PageCarousel images={InvoiceImages} />
      </div>
      <H3>Layout</H3>
      <p className='leading-7 [&:not(:first-child)]:mt-2 font-normal'>
        I worked on the footer and the nav bar, as well as some of the reused
        components like buttons, inputs, ...
      </p>

      <H2>What have I learned?</H2>
      <p className='leading-7 [&:not(:first-child)]:mt-2'>
        I will start off by saying that I&apos;ve learned a lot during this
        project, including negative things. The groups of this project were made
        based on marks on the &quot;Web Development in PHP&quot; course. I
        happened to score pretty bad for that course because of some technical
        difficulties with one of the core concepts we had to use. This resulted
        in me being placed in a group with other students with low marks or
        students that had to retake the course. This meant we had a lack of
        experience and knowledge in the group.
        <br />
        Despite this, I&apos;ve learned a lot about PHP, Laravel, Livewire,
        hosting, planning, and working in a group. I&apos;ve also learned that I
        need to be more assertive and take the lead in a group when I see that
        things are not going the way they should. This project was also the
        first time, we had to interact with a real client. Adapting to feedback
        and making proposals based on that feedback was a new experience for me.
      </p>
      <div className='mt-4 flex space-y-2 flex-col md:flex-row text-gray-500 dark:text-slate-400 gap-x-4'>
        <Link
          href={'https://lstc.lst-cstaffmanagement.be/'}
          target='_blank'
          className='p-2 rounded-full flex items-center gap-x-2 transition-all hover:bg-slate-300 bg-slate-200 text-slate-800'
        >
          <Image
            src={StaffManagementLogo}
            height={30}
            width={30}
            alt='Staff management application logo'
          />{' '}
          Staff management application
        </Link>
      </div>
      <NextAndPreviousProjectButton
        nextProject={{
          title: 'Justpils website',
          href: '/projects/justpils-website',
        }}
        previousProject={{
          title: 'Web scraper',
          href: '/projects/web-scraper',
        }}
      />
    </div>
  );
}
