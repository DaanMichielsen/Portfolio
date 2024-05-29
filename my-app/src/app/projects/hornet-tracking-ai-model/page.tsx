import Link from 'next/link';
import Python from '../../../../public/technologies/Python.svg';
import GoogleColab from '../../../../public/technologies/Google Colab.svg';
import Roboflow from '../../../../public/technologies/Roboflow.svg';
import FastAI from '../../../../public/technologies/FastAI.png';
import Numpy from '../../../../public/technologies/Numpy.svg';
import Pandas from '../../../../public/technologies/Pandas.svg';
import Streamlit from '../../../../public/technologies/Streamlit.svg';
import Yolo from '../../../../public/technologies/YOLOv8.svg';
import Selenium from '../../../../public/technologies/Selenium.svg';
import Instagram from '../../../../public/Instagram.svg';
import RoboflowLabels from '../../../../public/roboflow-labels.png';
import Image from 'next/image';
import LabelCarousel from './_components/LabelCarousel';
import HornetLabel1 from '../../../../public/hornet-label.png';
import HornetLabel2 from '../../../../public/hornet-label-2.png';
import HornetLabel3 from '../../../../public/hornet-label-3.png';
import HornetLabel4 from '../../../../public/hornet-label-4.png';
import HornetDetected1 from '../../../../public/hornet-detected-1.jpg';
import HornetDetected2 from '../../../../public/hornet-detected-2.jpg';
import ImageGallery, {
  Image as ImageType,
} from '@/components/common/ImageGallery';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import PDFModal from '@/components/common/PDFModal';
import TechnologyGallery from '@/components/common/TechnologyGallery';

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

const labelImage: ImageType[] = [
  {
    name: 'Roboflow labels',
    src: RoboflowLabels,
  },
];

const detectionImages: ImageType[] = [
  {
    name: 'hornet detection',
    src: HornetDetected1,
  },
  {
    name: 'hornet detection',
    src: HornetDetected2,
  },
];

export const metadata = {
  title: 'Daan Michielsen | Hornet tracking AI model',
  description: 'Page of the Hornet tracking AI model project',
};

const technologies: ImageType[] = [
  {
    name: 'Python',
    src: Python,
  },
  {
    name: 'Google Colab',
    src: GoogleColab,
  },
  {
    name: 'Roboflow',
    src: Roboflow,
  },
  {
    name: 'FastAI',
    src: FastAI,
  },
  {
    name: 'Numpy',
    src: Numpy,
  },
  {
    name: 'Pandas',
    src: Pandas,
  },
  {
    name: 'Streamlit',
    src: Streamlit,
  },
  {
    name: 'Yolo',
    src: Yolo,
  },
  {
    name: 'Selenium',
    src: Selenium,
  },
];

export default function HornetTrackingAiModelPage() {
  return (
    <div className='mx-auto max-w-7xl px-6 pb-24 pt-16 sm:pt-16 lg:px-8 lg:pt-16 bg-white bg-opacity-90 dark:bg-primary-dark dark:bg-opacity-80'>
      <h1 className='scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl'>
        Artificial Intelligence | Hornet tracking AI model
      </h1>

      <div className='mt-4 flex space-y-2 flex-col md:flex-row text-gray-500 dark:text-slate-400 gap-x-4'>
        <TechnologyGallery technologies={technologies} />
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
        <ImageGallery images={labelImage} />
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
        <ImageGallery images={detectionImages} />
        <li className='font-semibold'>Object tracking(extra):</li>
        <p className='leading-7 [&:not(:first-child)]:mt-2'>
          In the ideal scenario, the model would be able to track the hornet,
          that way we could even apply calculation based on the direction of the
          camera to predict the location of the nest so it can be removed. Doing
          this did not require a new model as Yolo is already capable of
          detecting them. All we have to do is put the detection of video in
          sequence and apply some mathematical calculations to track the center
          of the bounding boxes over time and draw a line that correpsonds to
          the center.
        </p>
        <div className='max-w-5/6 w-5/6 mx-auto'>
          <div className='overflow-hidden h-0 pb-[56.25%] relative'>
            <iframe
              className='aspect-video w-full'
              src='https://www.youtube.com/embed/_xcbfyq0xes?si=2RHV6JYYqzoWPxyE'
              title='YouTube video player'
              allow='accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
              allowFullScreen
            ></iframe>
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
        <div className='max-w-5/6 w-5/6 mx-auto'>
          <div className='overflow-hidden h-0 pb-[56.25%] relative'>
            <iframe
              className='aspect-video w-full'
              src='https://www.youtube.com/embed/hB59vqYWPjE?si=KsJ2j4KGP_vDLpoC'
              title='YouTube video player'
              allow='accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
              allowFullScreen
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
        <PDFModal
          src='/pdf/Hornet-tracking-report.pdf'
          title='Hornet tracking AI model report'
          newTab={true}
        />
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
