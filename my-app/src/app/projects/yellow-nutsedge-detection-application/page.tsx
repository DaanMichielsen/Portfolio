import Python from '../../../../public/technologies/Python.svg';
import Flask from '../../../../public/technologies/Flask Framework^light.svg';
import Angular from '../../../../public/technologies/Angular.svg';
import EntityFW from '../../../../public/technologies/Entity Framework.svg';
import DotNet from '../../../../public/technologies/^.NET.svg';
import AWS from '../../../../public/technologies/AWS^light.svg';
import Docker from '../../../../public/technologies/Docker.svg';
import GitLab from '../../../../public/technologies/GitLab.svg';
import Postman from '../../../../public/technologies/Postman.svg';
import GoogleColab from '../../../../public/technologies/Google Colab.svg';
import FastAI from '../../../../public/technologies/FastAI.png';
import Image from 'next/image';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import {
  HoverCard,
  HoverCardTrigger,
  HoverCardContent,
} from '@/components/ui/hover-card';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import PBS from '../../../../public/pbs.webp';
import ImageGallery from '../../../components/common/ImageGallery';
import { Image as ImageType } from '../../../components/common/ImageGallery';
import LabelingProgress from '../../../../public/labeling-progress.png';
import AIModelWorking from '../../../../public/ai-model-working.png';
import FieldRecentlyPlanted from '../../../../public/field-recently-planted.jpg';
import FieldHalfGrown from '../../../../public/field-half-grown.jpg';
import BlockRecentlyPlanted from '../../../../public/block-recently-planted.jpg';
import BlockHalfGrown from '../../../../public/block-half-grown.jpg';
import PDFModal from '@/components/common/PDFModal';
import ConfusionMatrix from '../../../../public/confusion-matrix.png';

export const metadata = {
  title: 'Daan Michielsen | Yellow nutsedge detection application',
  description: 'Page of the Yellow nutsedge detection application project',
};

function Vito() {
  return (
    <HoverCard>
      <HoverCardTrigger asChild className='py-0 h-0'>
        <Button className='px-1 underline py-0 h-4' variant='link'>
          Vito
        </Button>
      </HoverCardTrigger>
      <HoverCardContent className='w-80 z-50'>
        <div className='flex justify-between space-x-4'>
          <Avatar>
            <AvatarImage src='/vito.png' />
            <AvatarFallback>Vito</AvatarFallback>
          </Avatar>
          <div className='space-y-1'>
            <h4 className='text-sm font-semibold'>
              <a
                className='text-blue-700 underline hover:text-blue-500'
                href='https://remotesensing.vito.be/'
                target='_blank'
              >
                Vito - remote sensing
              </a>
            </h4>
            <p className='text-sm'>
              Flamish Institution for Technological Research - Turning earth
              observation data into practical answers
            </p>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  );
}

const PBSImages: ImageType[] = [
  {
    src: PBS,
    name: 'Product Breakdown Structure',
  },
];

const labelingImages: ImageType[] = [
  {
    src: LabelingProgress,
    name: 'Labeling progress',
  },
];

const confusionMatirxImages: ImageType[] = [
  {
    src: ConfusionMatrix,
    name: 'Confusion matrix',
  },
];

const AIModelWorkingImages: ImageType[] = [
  {
    src: AIModelWorking,
    name: 'AI model method',
  },
];

const FieldImages: ImageType[] = [
  {
    src: FieldRecentlyPlanted,
    name: 'Field recently planted image',
  },
  {
    src: FieldHalfGrown,
    name: 'Field half grown image',
  },
  {
    src: BlockRecentlyPlanted,
    name: 'Block recently planted image',
  },
  {
    src: BlockHalfGrown,
    name: 'Block half grown image',
  },
];

export default function JustPilsWebsitePage() {
  return (
    <div className='mx-auto max-w-7xl px-6 pb-24 pt-16 sm:pt-16 lg:px-8 lg:pt-16 bg-white bg-opacity-90 dark:bg-primary-dark dark:bg-opacity-80'>
      <h1 className='scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl'>
        Project 4.0 | Yellow nutsedge detection application
      </h1>

      <div className='mt-4 flex space-y-2 flex-col md:flex-row text-gray-500 dark:text-slate-400 gap-x-4'>
        <div className='flex bg-slate-200 p-1 px-3 rounded-full gap-x-1 flex-wrap md:gap-x-2 mt-2'>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Image src={Python} height={30} width={30} alt='Python'></Image>
              </TooltipTrigger>
              <TooltipContent>
                <p>Python</p>
              </TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger asChild>
                <Image src={Flask} height={30} width={30} alt='Flask'></Image>
              </TooltipTrigger>
              <TooltipContent>
                <p>Flask (API)</p>
              </TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger asChild>
                <Image
                  src={Angular}
                  height={30}
                  width={30}
                  alt='Angular'
                ></Image>
              </TooltipTrigger>
              <TooltipContent>
                <p>Angular</p>
              </TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger asChild>
                <Image
                  src={EntityFW}
                  height={30}
                  width={30}
                  alt='Entity framework'
                ></Image>
              </TooltipTrigger>
              <TooltipContent>
                <p>Entity Framework ORM</p>
              </TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger asChild>
                <Image src={DotNet} height={30} width={30} alt='DotNet'></Image>
              </TooltipTrigger>
              <TooltipContent>
                <p>.NET</p>
              </TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger asChild>
                <Image src={AWS} height={30} width={30} alt='AWS'></Image>
              </TooltipTrigger>
              <TooltipContent>
                <p>Amazon Web Services</p>
              </TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger asChild>
                <Image src={Docker} height={30} width={30} alt='Docker'></Image>
              </TooltipTrigger>
              <TooltipContent>
                <p>Docker</p>
              </TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger asChild>
                <Image src={GitLab} height={30} width={30} alt='GitLab'></Image>
              </TooltipTrigger>
              <TooltipContent>
                <p>GitLab</p>
              </TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger asChild>
                <Image
                  src={Postman}
                  height={30}
                  width={30}
                  alt='Postman'
                ></Image>
              </TooltipTrigger>
              <TooltipContent>
                <p>Postman</p>
              </TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger asChild>
                <Image
                  src={GoogleColab}
                  height={30}
                  width={30}
                  alt='Google Colab'
                ></Image>
              </TooltipTrigger>
              <TooltipContent>
                <p>Google Colab</p>
              </TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger asChild>
                <Image src={FastAI} height={30} width={30} alt='FastAI'></Image>
              </TooltipTrigger>
              <TooltipContent>
                <p>FastAI</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      </div>

      <h2 className='mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0'>
        Description
      </h2>
      <p className='leading-7 [&:not(:first-child)]:mt-6'>
        This project was a group project in which we had to create a solution
        for a client. The groups were formed with different branches of our
        IT-Factory. There was a distribution of 3 Application Development
        students, 2 Cloud & Cybersecurity students and one Artificial
        Intelligence student(me). In our case the client was <Vito />, Vito is a
        company that spends their time researching technology to help the
        environment through processing images from earth. They came to us with a
        problem we could solve using their data in the form of images taken with
        a drone.
      </p>
      <h3 className='scroll-m-20 text-2xl font-semibold tracking-tight mt-8'>
        The problem
      </h3>
      <p className='leading-7 [&:not(:first-child)]:mt-6'>
        In Belgium, there has been a problem that is arising in agriculture
        where the fields are containing more and more yellow nutsedge. This is a
        problem because the nutsedge is a weed that is hard to get rid of and it
        is taking over the fields. The government has been monitoring the fields
        closely and is handing out sanction to the farmers with the contaminated
        fields in the form of a prevention of planting any crops on the fields.
        Especially for the fields that contain crops that need to be taken out
        of the ground since the moving of the soil could help the weed to spread
        even faster.
      </p>
      <h3 className='scroll-m-20 text-2xl font-semibold tracking-tight mt-8'>
        The solution
      </h3>
      <p className='leading-7 [&:not(:first-child)]:mt-6'>
        The solution they came up with was to use drones to fly over the fields
        and take images of the fields to then process the images to detect the
        yellow nutsedge. The images would be processed by a machine learning
        model that would detect the nutsedge and return the location of the
        nutsedge in the image. The locations of the weed would then be visible
        on a web app for the farmer to see. This is also good for the farmer in
        the sense that he can prove that certain parts of the fields contain no
        nutsedge and that he can still plant crops there.
      </p>
      <h2 className='mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0'>
        Tasks to complete
      </h2>
      <p className='leading-7 [&:not(:first-child)]:mt-6'>
        The project was divided into 3 parts. The first phases
      </p>
      <ul className='list-decimal [&>li]:ml-8 [&>li]:mt-4 [&>li]:font-semibold'>
        <li>Preparation phase</li>
        <p className='leading-7 [&:not(:first-child)]:mt-2'>
          The making of the project plan, with focus on the{' '}
          <b>Who? What? Why?</b>. We also presented the plan to the other teams
          and Project Coach for feedback. With all the best parts of each
          presentation we creaed one final presentation to deliver to the
          client. The making of this was done one a lesson block of 4 hours,
          each Monday for a couple of weeks.
        </p>
        <li>Concept phase</li>
        <p className='leading-7 [&:not(:first-child)]:mt-2'>
          In this phase we layed out the design of the concept, we made an
          overview of what would be needed to create the solution. We also made
          a list of the technologies we would use and the roles of each team
          member. All of this is with focus on the <b>How?</b>. The making of
          this was done one a lesson block of 4 hours, each Monday for a couple
          of weeks. You can checkout the full report of the concept phase below.
        </p>
        <PDFModal
          src='https://nzrffqfvb7klovvb.public.blob.vercel-storage.com/report-concept-phase-Xzyt3xnuSMtQeCg6V3LCcafjhA46XI.pdf'
          title='Concept Phase Report (Dutch)'
        />
        <p className='leading-7 [&:not(:first-child)]:mt-2'>
          During the concept we had to create something called the &quot;Product
          Breakdown Structure&quot; (PBS), which contains all the things we need
          to do before actually making the solution.
        </p>
        <ImageGallery images={PBSImages} />
        <p className='leading-7 [&:not(:first-child)]:mt-2'>
          The top part are the requirements, the parts branching of are the
          different parts of the solution.
        </p>
        <li>Realisation phase</li>
        <p className='leading-7 [&:not(:first-child)]:mt-2'>
          In this phase we actually start with creating the solution. This phase
          will be explained in more detail down below. The phase lasted for 3
          full-time weeks of 5 days.
        </p>
      </ul>
      <h2 className='scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0'>
        Realisation phase
      </h2>
      <p className='leading-7 [&:not(:first-child)]:mt-2'>
        The realisation phase was the time to shine and make it work over a
        <b> period of 3 weeks</b>, where each week consisted of{' '}
        <b>8 hours of work per day for 5 days</b>. During this period we would
        work in an <b>agile manner</b> by making use of{' '}
        <b>SCRUM and Prince 2</b>. We would have a <b>daily stand-up</b> meeting
        to discuss what we did the day before, what we are going to do today and
        if we have any blockers. We would also have a{' '}
        <b>weekly sprint review and sprint planning meeting</b>. The sprint
        review would be to show the client what we have done and the sprint
        planning would be to plan the next sprint.{' '}
        <b>
          After each sprint review meeting we would have a retrospective meeting
        </b>{' '}
        to discuss what went well and what could be improved.
      </p>
      <h3 className='scroll-m-20 text-2xl font-semibold tracking-tight mt-4'>
        My contribution to the project
      </h3>
      <h4 className='scroll-m-20 text-xl font-semibold tracking-tight mt-4'>
        Choosing the model
      </h4>
      <p className='leading-7 [&:not(:first-child)]:mt-2'>
        During the concept phase I was responsible for looking into the options
        for the models that we could use to detect the nutsedge. Where the other
        2 groups settled on YoloV8 for the object detection route. I got some
        more information from the AI and Big Data teacher and based on the size
        of the images and the visibility on the images he would lean towards
        doing classification on small parts of the images to see weather a weed
        was present or not. So I took that route and went with a ResNet-50 model
        by doing transfer learning.
      </p>
      <h5 className='scroll-m-20 text-lg font-semibold tracking-tight mt-4'>
        How would the model work?
      </h5>
      <ul className='list-decimal [&>li]:ml-8'>
        <li>Convert TIFF to JPG and resize</li>
        <li>Split image into 77 smaller images</li>
        <li>Extract location and rotation from TIFF image</li>
        <li>Put images through AI model</li>
        <li>Store resulsts in database</li>
        <li>Visualize results on heatmap</li>
      </ul>
      <ImageGallery images={AIModelWorkingImages} />
      <h4 className='scroll-m-20 text-xl font-semibold tracking-tight mt-4'>
        Orchestrating the data pipeline
      </h4>
      <p className='leading-7 [&:not(:first-child)]:mt-2'>
        The amount and the size of the images we got from Vito was too much to
        just wing it and start labeling, so we needed a proper strategy to
        handle the data. I was responsible for creating a data pipeline that
        would handle the images and the labels. The data we got all came from a
        tool that Vito has called Mapeo. This is where all the images are
        stored. So first we had to download them which was already a challenge
        since one field of images could be between 60GB and 130GB.
      </p>
      <p className='leading-7 [&:not(:first-child)]:mt-2'>
        To create the actual pipeline I created a tool in Python using a Jupyter
        notebook so my teammates can follow the instruction and easily run the
        tool. They would only have to put the path to the folder where the
        images were stored and the tool would do the following:
      </p>
      <ul className='list-decimal [&>li]:ml-8'>
        <li>Convert TIFF to JPG</li>
        <li>Resize the JPG to splittable dimensions</li>
        <li>Split JPG image into 77 smaller images</li>
        <li>Ask the user for the label of the image</li>
      </ul>
      <p className='leading-7 [&:not(:first-child)]:mt-2'>
        To make it easier to understand, there is a demo below of how the tool
        would work.
      </p>
      <div>
        <div className='max-w-5/6 w-5/6 mx-auto'>
          <div className='overflow-hidden h-0 pb-[56.25%] relative'>
            <iframe
              src='https://thomasmore365-my.sharepoint.com/personal/r0445498_student_thomasmore_be/_layouts/15/embed.aspx?UniqueId=272dfc21-c61e-4f9a-aa3e-f648bc0a40cf&embed=%7B%22hvm%22%3Atrue%2C%22ust%22%3Atrue%7D&referrer=StreamWebApp&referrerScenario=EmbedDialog.Create'
              width='640'
              height='360'
              allowFullScreen
              title='Image labeling demo.mp4'
              className='border-none absolute top-0 left-0 right-0 bottom-0 h-full w-full max-w-full'
            ></iframe>
          </div>
        </div>
      </div>
      <p className='leading-7 [&:not(:first-child)]:mt-2'>
        The result of the labeling would be put into 2 folders, one for the true
        cases and one for the false cases. The images would be put into a folder
        with the same name as the label. This way we could easily use the images
        for training the model. When the labeler is done with labeling there is
        also a functionality to report the last session by telling the user how
        many labels have been assigned and to which classes. This way we could
        track the progress of the labeling in an Excel sheet.
      </p>
      <ImageGallery images={FieldImages} />

      <ImageGallery images={labelingImages} />
      <h4 className='scroll-m-20 text-xl font-semibold tracking-tight mt-4'>
        Training the model
      </h4>
      <p className='leading-7 [&:not(:first-child)]:mt-2'>
        To train the model we combined all labeled data we had and put it into
        one dataset with 2 folders of the 2 labels. We trained the model using a
        ResNet-50 model with transfer leaning by using the package FastAI in
        Python on Google Colab so we can take advantage of a GPU since this
        speeds up the training process by a lot. After training the model and
        testing it we pretty wuickly realised that using alle images together
        was not a good idea. This is because we have 2 different categories of
        images so to speak: half grown and recently planted. So we adapted our
        strategy and trained 2 models, one for each category. Our final models
        use the following amount of data and training parameters:
      </p>
      <div className='my-6 w-full overflow-y-auto'>
        <table className='w-full'>
          <thead>
            <tr className='m-0 border-t p-0 even:bg-muted'>
              <th className='border px-4 py-2'></th>
              <th className='border px-4 py-2 text-left font-bold'>
                Recently planted
              </th>
              <th className='border px-4 py-2 text-left font-bold'>
                Half grown
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className='m-0 border-t p-0 even:bg-muted'>
              <td className='border px-4 py-2 text-left font-bold'>
                Total labels
              </td>
              <td className='border px-4 py-2 text-left'>3631(52%)</td>
              <td className='border px-4 py-2 text-left'>988(55%)</td>
            </tr>
            <tr className='m-0 border-t p-0 even:bg-muted'>
              <td className='border px-4 py-2 text-left font-bold'>
                True labels
              </td>
              <td className='border px-4 py-2 text-left'>1881(52%)</td>
              <td className='border px-4 py-2 text-left'>547(55%)</td>
            </tr>
            <tr className='m-0 border-t p-0 even:bg-muted'>
              <td className='border px-4 py-2 text-left font-bold'>
                False labels
              </td>
              <td className='border px-4 py-2 text-left'>1750(48%)</td>
              <td className='border px-4 py-2 text-left'>441(45%)</td>
            </tr>
            <tr className='m-0 border-t p-0 even:bg-muted'>
              <td className='border px-4 py-2 text-left font-bold'>
                Data split
              </td>
              <td className='border px-4 py-2 text-left'>80/20</td>
              <td className='border px-4 py-2 text-left'>80/20</td>
            </tr>
            <tr className='m-0 border-t p-0 even:bg-muted'>
              <td className='border px-4 py-2 text-left font-bold'>
                Augmentation
              </td>
              <td className='border px-4 py-2 text-left '>
                Resize(640x640) + Scale (min 75%)
              </td>
              <td className='border px-4 py-2 text-left'>
                Resize(640x640) + Scale (min 75%)
              </td>
            </tr>
            <tr className='m-0 border-t p-0 even:bg-muted'>
              <td className='border px-4 py-2 text-left font-bold'>
                Configuration
              </td>
              <td className='border px-4 py-2 text-left '>
                fp_16 (floating point 16 or half_precision)
              </td>
              <td className='border px-4 py-2 text-left '>
                fp_16 (floating point 16 or half_precision)
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <ImageGallery images={confusionMatirxImages} />
      <p className='leading-7 [&:not(:first-child)]:mt-2'>
        Looking at the results we can definitely say that the model is working
        but not to the extent that we would like it to. Looking at some of the
        data that the model has to predict on I am not really surprised since
        all fields are different and some of the images are hard to label as a
        human.
      </p>
      <h2 className='mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0'>
        What have I learned?
      </h2>
      <p className='leading-7 [&:not(:first-child)]:mt-2'>
        I have learned a lot during this project. I have learned how to properly
        apply SCRUM and agile when working in team. I got more experience
        talking to clients and adapting to the feedback. I have also learned how
        to work with a team that has different backgrounds and how to
        communicate with them. Working with a team that has different
        backgrounds is really eyeopening and it shows the lack of knowledge
        about eachothers field. This is something that I will take with me in
        the future. Planning is also something that I have learned a lot about
        since every task needed to be planned and estimated for us to fill our
        sprint backlog.
      </p>
    </div>
  );
}
