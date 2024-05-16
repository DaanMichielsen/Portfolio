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

import Image from 'next/image';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import PageCarousel from '../../../components/common/Carousel';

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

const InvoiceImages = [InvoicesCreate, InvoicesFilter, InvoicesSuccess];

export default function JustPilsWebsitePage() {
  return (
    <div className='mx-auto max-w-7xl px-6 pb-24 pt-16 sm:pt-16 lg:px-8 lg:pt-16 bg-white bg-opacity-90 dark:bg-primary-dark dark:bg-opacity-80'>
      <h1 className='scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl'>
        Project PHP | Staff Management Application
      </h1>

      <div className='mt-4 flex text-gray-500 dark:text-slate-400 gap-x-4'>
        <div className='flex bg-slate-200  p-1 px-3 rounded-full gap-x-2'>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Image src={PHP} height={30} width={30} alt='PHP'></Image>
              </TooltipTrigger>
              <TooltipContent>
                <p>PHP</p>
              </TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger asChild>
                <Image src={HTML} height={30} width={30} alt='HTML'></Image>
              </TooltipTrigger>
              <TooltipContent>
                <p>HTML</p>
              </TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger asChild>
                <Image
                  src={Tailwind}
                  height={30}
                  width={30}
                  alt='Tailwind'
                ></Image>
              </TooltipTrigger>
              <TooltipContent>
                <p>Tailwind</p>
              </TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger asChild>
                <Image src={SQLite} height={30} width={30} alt='SQLite'></Image>
              </TooltipTrigger>
              <TooltipContent>
                <p>SQLite</p>
              </TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger asChild>
                <Image
                  src={Combell}
                  height={30}
                  width={30}
                  alt='Combell'
                ></Image>
              </TooltipTrigger>
              <TooltipContent>
                <p>Combell</p>
              </TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger asChild>
                <Image
                  src={Livewire}
                  height={30}
                  width={30}
                  alt='Livewire'
                ></Image>
              </TooltipTrigger>
              <TooltipContent>
                <p>Livewire</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      </div>

      <h2 className='mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0'>
        Background
      </h2>
      <p className='leading-7 [&:not(:first-child)]:mt-6'>
        There is an elderly couple that has a lot of staff members and an au
        pair helping them out to do tasks around the house as well as schedule
        visits for their grand child. Doing all of these things can be a bit
        chaotic and unorganized. To solve this, we&apos;re challenged to come up
        with an application that can help manage all of these tasks within a
        user-friendly environment.
      </p>
      <h3 className='scroll-m-20 text-2xl font-semibold tracking-tight'>
        Preparation
      </h3>
      <p className='leading-7 [&:not(:first-child)]:mt-6'>
        The blueprint for this application was already made by other students
        during the course &quot;Requirements Analysis&quot;. We just had to take
        all of the different interpretations and put them together to decide how
        we want to achieve the goal. With we I mean the team of 5 students.{' '}
        <br /> All of us took the course &quot;Web Development in PHP&quot;
      </p>
      <h2 className='mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0'>
        Requirements
      </h2>
      <p className='leading-7 [&:not(:first-child)]:mt-6'>
        The requirements had some priotity levels based on the Moscow principle.
      </p>
      <div className='flex flex-row justify-between'>
        <div>
          <h4 className='scroll-m-20 text-xl font-semibold tracking-tight'>
            Must have
          </h4>
          <ul className='my-6 ml-6 list-disc [&>li]:mt-2'>
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
          <h4 className='scroll-m-20 text-xl font-semibold tracking-tight'>
            Should have
          </h4>
          <ul className='my-6 ml-6 list-disc [&>li]:mt-2'>
            <li className='font-semibold'>User manual</li>
            <li className='font-semibold'>Tags</li>
          </ul>
        </div>
        <div>
          <h4 className='scroll-m-20 text-xl font-semibold tracking-tight'>
            Could have
          </h4>
          <ul className='my-6 ml-6 list-disc [&>li]:mt-2'>
            <li className='font-semibold'>Customization (colors, ...)</li>
          </ul>
        </div>
      </div>
      <h2 className='mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0'>
        Contribution
      </h2>
      <p className='leading-7 [&:not(:first-child)]:mt-6'>
        I contributed a moderate amount to the project. I was responsible for
        the following parts:
      </p>
      <h3 className='scroll-m-20 text-2xl font-semibold tracking-tight'>
        Manage absences page
      </h3>
      <p className='leading-7 [&:not(:first-child)]:mt-6 font-normal'>
        On this page the user could declare absences for a certain period. The
        admin would then be able to see all of the absences to take them into
        account for planning visits, tasks, ... It also contains a filter pane
        which is useful for the user to find absences quickly. There is also
        pagination which is useful when there are a lot of absences.
      </p>
      <div className='w-5/6 my-2 flex mx-auto'>
        <PageCarousel images={absenceImages} />
      </div>
      <h3 className='scroll-m-20 text-2xl font-semibold tracking-tight'>
        Manage invoices page
      </h3>
      <p className='leading-7 [&:not(:first-child)]:mt-6 font-normal'>
        On this page a user could submit invoices. The admin would then be able
        to repay the user that submitted the invoice fot the work they did. The
        user could also see the status of the invoice. The admin could also see
        all of the invoices and filter them based on the status of the invoice.
        There is also pagination which is useful when there are a lot of
        invoices.
      </p>
      <div className='w-5/6 my-2 flex mx-auto'>
        <PageCarousel images={InvoiceImages} />
      </div>
      <h3 className='scroll-m-20 text-2xl font-semibold tracking-tight'>
        Layout
      </h3>
      <p className='leading-7 [&:not(:first-child)]:mt-6 font-normal'>
        I worked on the footer and the navbar as well as some of the reused
        components like buttons, inputs, ...
      </p>

      <h2 className='mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0'>
        What have I learned?
      </h2>
      <p className='leading-7 [&:not(:first-child)]:mt-6'>
        I will start of by saying that I&apos;ve learned a lot during this
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
        first time we had to interact with a real client. Adapting to feedback
        and making proposals based on that feedback was a new experience for me.
      </p>
    </div>
  );
}
