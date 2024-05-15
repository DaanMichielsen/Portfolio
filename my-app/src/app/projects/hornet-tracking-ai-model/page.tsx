import Link from 'next/link';
import Python from '../../../../public/technologies/Python.svg';
import GoogleColab from '../../../../public/technologies/Google Colab.svg';
import Roboflow from '../../../../public/technologies/Roboflow.svg';
import FastAI from '../../../../public/technologies/Fastai.png';
import Numpy from '../../../../public/technologies/Numpy.svg';
import Pandas from '../../../../public/technologies/Pandas.svg';
import Streamlit from '../../../../public/technologies/Streamlit.svg';
import Yolo from '../../../../public/technologies/YOLOv8.svg';
import Selenium from '../../../../public/technologies/Selenium.svg';
import Instagram from '../../../../public/Instagram.svg';
import RoboflowLabels from '../../../../public/roboflow-labels.png';
import Image from 'next/image';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import LabelCarousel from './_components/LabelCarousel';
import HornetLabel1 from '../../../../public/hornet-label.png';
import HornetLabel2 from '../../../../public/hornet-label-2.png';
import HornetLabel3 from '../../../../public/hornet-label-3.png';
import HornetLabel4 from '../../../../public/hornet-label-4.png';
import HornetDetected1 from '../../../../public/hornet-detected-1.jpg';
import HornetDetected2 from '../../../../public/hornet-detected-2.jpg';
import { Image as ImageType } from '../justpils-website/_components/ImageGallery';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import PDFModal from './_components/ReportModal';

const labelCarousel: ImageType[] = [
  {
    name: 'Hornet label 1',
    src: HornetLabel1,
  },
  {
    name: 'Hornet label 2',
    src: HornetLabel2,
  },
  {
    name: 'Hornet label 3',
    src: HornetLabel3,
  },
  {
    name: 'Hornet label 4',
    src: HornetLabel4,
  },
];

export const metadata = {
  title: 'Daan Michielsen | Hornet tracking AI model',
  description: 'Page of the Hornet tracking AI model project',
};

export default function HornetTrackingAiModelPage() {
  return (
    <div className='mx-auto max-w-7xl px-6 pb-24 pt-16 sm:pt-16 lg:px-8 lg:pt-16'>
      <h1 className='scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl'>
        Artificial Intelligence | Hornet tracking AI model
      </h1>

      <div className='mt-4 flex space-y-2 flex-col md:flex-row text-gray-500 dark:text-slate-400 gap-x-4'>
        <div className='flex bg-slate-200 p-1 px-3 rounded-full gap-x-2 max-h-[46px] mt-2'>
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
                <Image
                  src={GoogleColab}
                  height={30}
                  width={30}
                  alt='GoogleColab'
                ></Image>
              </TooltipTrigger>
              <TooltipContent>
                <p>Google Colab</p>
              </TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger asChild>
                <Image
                  src={Roboflow}
                  height={30}
                  width={30}
                  alt='Roboflow'
                ></Image>
              </TooltipTrigger>
              <TooltipContent>
                <p>Roboflow</p>
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
            <Tooltip>
              <TooltipTrigger asChild>
                <Image src={Numpy} height={30} width={30} alt='Numpy'></Image>
              </TooltipTrigger>
              <TooltipContent>
                <p>Numpy</p>
              </TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger asChild>
                <Image src={Pandas} height={30} width={30} alt='Pandas'></Image>
              </TooltipTrigger>
              <TooltipContent>
                <p>Pandas</p>
              </TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger asChild>
                <Image
                  src={Streamlit}
                  height={30}
                  width={30}
                  alt='Streamlit'
                ></Image>
              </TooltipTrigger>
              <TooltipContent>
                <p>Streamlit</p>
              </TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger asChild>
                <Image src={Yolo} height={30} width={30} alt='Yolo'></Image>
              </TooltipTrigger>
              <TooltipContent>
                <p>Yolo</p>
              </TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger asChild>
                <Image
                  src={Selenium}
                  height={30}
                  width={30}
                  alt='Selenium'
                ></Image>
              </TooltipTrigger>
              <TooltipContent>
                <p>Selenium</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
        <Link
          href={'https://github.com/SharonMaharjan/AIProject-Team7'}
          target='_blank'
          className='p-2 rounded-full hover:bg-slate-300 bg-slate-200 text-slate-800 flex items-center gap-2 transition-all'
        >
          <FontAwesomeIcon icon={faGithub} size='xl' /> Code on GitHub
        </Link>
        <Link
          href={'https://www.instagram.com/p/C03qPFrtCLx/?img_index=1'}
          target='_blank'
          className='p-2 rounded-full flex items-center gap-x-2 transition-all hover:bg-slate-300 bg-slate-200 text-slate-800'
        >
          <Image src={Instagram} height={30} width={30} alt='Instagram' />{' '}
          Instagram post (Thomas More)
        </Link>
      </div>

      <h2 className='mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0'>
        Description
      </h2>
      <p className='leading-7 [&:not(:first-child)]:mt-2'>
        The project all starts with a little story. Our teacher told us that
        there was a beekeeper who was having issues with hornets feasting on his
        bee hives. This would lead to a lot of bees dying and the beekeeper
        losing a lot of money. The beekeeper asked our teacher if we could help
        him with this problem. The reason an AI model could be viable is that
        after a hornet eats, it usually flies back to it&apos;s nest in a
        straight line. This would be easy to notice on camera. But even better
        would be that the camera can find the hornet and track the motion of it,
        so that is what we did. With we, I mean me and my 2 teammates.
      </p>
      <h2 className='mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0'>
        Tasks to complete
      </h2>
      <ul className='my-6 ml-6 list-disc [&>li]:mt-6'>
        <li className='font-semibold'>Gather data to train:</li>
        <p className='leading-7 [&:not(:first-child)]:mt-2'>
          The first task we had to complete was to gathering images of Asian
          hornets as these we&apos;re the type of hornet we would be targetting.
          We gathered images through web scraping using Selenium and Python and
          through YouTube videos. Roboflow has the ability to split up videos
          into frames which we used to gather more data.
        </p>
        <li className='font-semibold'>Labeling & training:</li>
        <p className='leading-7 [&:not(:first-child)]:mt-2'>
          All of this data would have to be labled since we need to train a
          model using Yolov5 which is an object detection model. With labeling
          data I mean the following:
        </p>
        <div className='w-5/6 mx-auto'>
          <LabelCarousel images={labelCarousel} />
        </div>
        <p className='leading-7 [&:not(:first-child)]:mt-2'>
          By drawing the box around a lot of hornets in Roboflow we can tell the
          model what features to look for when analyzing the image. You probably
          notice purple boxes as well, these boxes are bees. The reason we also
          tell the model what bees are is because it can learn the differences
          between the 2 which makes the model better at differentiating them.
          This process is tedious as good accuracy will require a lot of images
          to be labeled. Our final dataset contained <b>893 labeled images</b>{' '}
          in which <b>1787 labels</b> were drawn of which{' '}
          <b>946 were hornets and 841 were bees</b>.
        </p>
        <div className='relative'>
          <Image src={RoboflowLabels} alt='roboflow dataset distribution' />
        </div>
        <p className='leading-7 [&:not(:first-child)]:mt-2'>
          The next task was to train the model. We used Yolov5 which is an
          object detection model. This model is trained by showing it a lot of
          images with the object we want to detect in it. The model will learn
          the features of the object and will be able to detect it in other
          images as well. The model was trained on Google Colab which is a free
          platform that allows you to utilize a powerfull graphics card to train
          your models. The package used for training the model is FastAI.
        </p>

        <li className='font-semibold'>Object detection:</li>
        <p className='leading-7 [&:not(:first-child)]:mt-2'>
          We had to start with the basics which is object detection. This was
          quite easy as long as the images were not too busy and clear. When
          introducing bees and hornets the model did get a little less certain
          sometimes but we counteracted that by gathering more data and cleaning
          the data over and over until we were satisfied with the results.
        </p>
        <div className='flex flex-col lg:flex-row gap-4 max-w-5/6 items-center'>
          <div className='relative'>
            <Image src={HornetDetected1} alt='hornet-detected' />
          </div>
          <div className='relative'>
            <Image src={HornetDetected2} alt='hornet-detected' />
          </div>
        </div>
        <li className='font-semibold'>Object tracking(extra):</li>
        <p className='leading-7 [&:not(:first-child)]:mt-2'>
          In the ideal scenario, the model would be able to track the hornet,
          that way we could even apply calculation based on the direction of the
          camera to predict the location of the nest so it can be removed. Doing
          this did not require a new model as Yolo is already capable of
          detectinf them. All we have to do is put the detection of video in
          sequence and apply some mathematical calculations to track the center
          of the bounding boxes over time.
        </p>
        <div>
          <div className='max-w-5/6'>
            <div className='overflow-hidden h-0 pb-[56.25%] relative'>
              <iframe
                src='https://thomasmore365-my.sharepoint.com/personal/r0896365_student_thomasmore_be/_layouts/15/embed.aspx?UniqueId=60c3c955-f0d7-4f68-a072-29a16a5a6cb3&nav=%7B%22playbackOptions%22%3A%7B%22startTimeInSeconds%22%3A0%7D%7D&embed=%7B%22hvm%22%3Atrue%2C%22ust%22%3Atrue%7D&referrer=StreamWebApp&referrerScenario=EmbedDialog.Create'
                width='640'
                height='360'
                allowFullScreen
                title='resulttracking_edited.mp4'
                className='border-none absolute top-0 left-0 right-0 bottom-0 h-full w-full max-w-full'
              ></iframe>
            </div>
          </div>
        </div>
        <li className='font-semibold'>Streamlit application(extra):</li>
        <p className='leading-7 [&:not(:first-child)]:mt-2'>
          As an extra we created a Streamlit application that allows you to
          upload an image, a video or even a live webcam feed on which the model
          would be able to choose for detection or tracking. The results would
          be downloadable as well. There were also some more options for colors
          to choose from or confidence thresholds to set. Hosting the
          application was not possible due to the complexicty and the resource
          requirements of the model.
        </p>
        <div className='max-w-5/6'>
          <div className='overflow-hidden h-0 pb-[56.25%] relative'>
            <iframe
              src='https://thomasmore365-my.sharepoint.com/personal/r0896365_student_thomasmore_be/_layouts/15/embed.aspx?UniqueId=29bc48ab-2ce0-4250-ad1f-a89739e1b559&embed=%7B%22hvm%22%3Atrue%2C%22ust%22%3Atrue%7D&referrer=StreamWebApp&referrerScenario=EmbedDialog.Create'
              width='640'
              height='360'
              title='streamlit-tracking.mp4'
              className='border-none absolute top-0 left-0 right-0 bottom-0 h-full w-full max-w-full'
            ></iframe>
          </div>
        </div>
        <li className='font-semibold'>Roboflow model(extra):</li>
        <p className='leading-7 [&:not(:first-child)]:mt-2'>
          We also trained a model on Roboflow which was already housing our
          lebeled dataset. Roboflow lets you use 3 free credits to train models
          and we had the chance to compare it to our model. I won&apos;t go too
          much into detail. If you are interested in the code you can find it on
          GitHub. You can also read the report below.
        </p>
        <PDFModal />
      </ul>
      <h2 className='mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0'>
        What have I learned?
      </h2>
      <p className='leading-7 [&:not(:first-child)]:mt-2'>
        The thing that stands out the most is the importance of data. The more
        and the better the data, the better the model. We had some struggles
        with this since scraping the web does not guarantee high quality data is
        it is based on what people put on the internet. A lot of scraping,
        cleaning and labeling was required to get a decent dataset. I also
        learned that Streamlit is a very powerful tool to create basic
        interactive applications with. It is very easy to use and has a lot of
        options to customize the application.
      </p>
    </div>
  );
}
