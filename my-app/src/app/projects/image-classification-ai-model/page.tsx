import Python from '../../../../public/technologies/Python.svg';
import GoogleColab from '../../../../public/technologies/Google Colab.svg';
import GCP from '../../../../public/technologies/Google Cloud Platform.svg';
import Roboflow from '../../../../public/technologies/Roboflow.svg';
import Streamlit from '../../../../public/technologies/Streamlit.svg';
import TeachableMachine from '../../../../public/technologies/Teachable Machine.svg';
import Selenium from '../../../../public/technologies/Selenium.svg';
import FastAI from '../../../../public/technologies/FastAI.png';
import Numpy from '../../../../public/technologies/Numpy.svg';
import Flask from '../../../../public/technologies/Flask Framework^light.svg';
import Pandas from '../../../../public/technologies/Pandas.svg';
import Kaggle from '../../../../public/technologies/Kaggle.svg';
import Matplotlib from '../../../../public/technologies/Matplotlib.svg';
import CelebrityTomato from '../../../../public/tomatoes/celebrity_tomato.png';
import GreenZebraTomato from '../../../../public/tomatoes/green_zebra_tomato.png';
import PineappleTomato from '../../../../public/tomatoes/pineapple_tomato.png';
import SuperSweet100Tomato from '../../../../public/tomatoes/super_sweet_100_tomato.png';
import YellowPearTomato from '../../../../public/tomatoes/yellow_pear_tomato.png';
import BigDataDataset from '../../../../public/big-data-dataset.png';
import BigDataLandgingPage from '../../../../public/big-data-landing-page.png';
import BigDataPrediction from '../../../../public/big-data-prediction.png';
import StreamlitCarousel from './_components/StreamlitCarousel';
import TomatoCarousel from './_components/TomatoCarousel';
import { Image as ImageType } from '@/components/common/ImageGallery';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import PDFModal from '@/components/common/ReportModal';
import TechnologyGallery from '@/components/common/TechnologyGallery';

export const metadata = {
  title: 'Daan Michielsen | Image classification AI model',
  description: 'Page of the Image classification AI model project',
};

const labelCarousel: ImageType[] = [
  {
    name: 'Celebrity tomato',
    src: CelebrityTomato,
  },
  {
    name: 'Green Zebra tomato',
    src: GreenZebraTomato,
  },
  {
    name: 'Pineapple tomato',
    src: PineappleTomato,
  },
  {
    name: 'Super sweet 100 tomato',
    src: SuperSweet100Tomato,
  },
  {
    name: 'Yellow Pear tomato',
    src: YellowPearTomato,
  },
];

const streamlitCarousel: ImageType[] = [
  {
    name: 'Landing page',
    src: BigDataLandgingPage,
  },
  {
    name: 'Dataset explorer',
    src: BigDataDataset,
  },
  {
    name: 'Prediction',
    src: BigDataPrediction,
  },
];

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
    name: 'Flask',
    src: Flask,
  },
  {
    name: 'Roboflow',
    src: Roboflow,
  },
  {
    name: 'Google Cloud Platform',
    src: GCP,
  },
  {
    name: 'Streamlit',
    src: Streamlit,
  },
  {
    name: 'Teachable Machine',
    src: TeachableMachine,
  },
  {
    name: 'Selenium',
    src: Selenium,
  },
  {
    name: 'Kaggle',
    src: Kaggle,
  },
  {
    name: 'Matplotlib',
    src: Matplotlib,
  },
];

export default function JustPilsWebsitePage() {
  return (
    <div className='mx-auto max-w-7xl px-6 pb-24 pt-16 sm:pt-16 lg:px-8 lg:pt-16 bg-white bg-opacity-90 dark:bg-primary-dark dark:bg-opacity-80'>
      <h1 className='scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl'>
        Big Data | Image classification AI model
      </h1>

      <div className='mt-4 flex space-y-2 flex-col md:flex-row text-gray-500 dark:text-slate-400 gap-x-4'>
        <TechnologyGallery technologies={technologies} />
        <Link
          href={'https://github.com/SharonMaharjan/Big_Data-Project'}
          target='_blank'
          className='p-2 rounded-full hover:bg-slate-300 bg-slate-200 text-slate-800 flex items-center gap-2 transition-all'
        >
          <FontAwesomeIcon icon={faGithub} size='xl' /> Code on GitHub
        </Link>
      </div>

      <h2 className='mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0'>
        Description
      </h2>
      <p className='leading-7 [&:not(:first-child)]:mt-6'>
        This project started of with one goal in mind, to create an AI model to
        beat Google Teachable Machine using advanced techniques. The model would
        need to differentiate similar objects(5) and classify them correctly.
        There was supposed to be one more part to the project which would be
        about the toxic comments dataset on Kaggle. This part would require NLP
        to do multilabel classification on the dataset. Sadly we did not get to
        this part since the project was meant to be made with groups of 3
        students, but our group contained 2 students.
      </p>
      <h2 className='mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0'>
        Tasks to complete
      </h2>
      {/* <p className='leading-7 [&:not(:first-child)]:mt-6'>
        All of the technologies were new to me, so I had to do some
        preparation...
      </p> */}
      <ul className='my-6 ml-6 list-disc [&>li]:mt-6'>
        <li className='font-semibold'>Choose category:</li>
        <p className='leading-7 [&:not(:first-child)]:mt-2'>
          First we needed to settle on a topic of similar objects to classify.
          The main factor that decided the topic was the availability of a
          dataset. We chose to classify different types of tomatoes since there
          seemed to be sufficient types and data to chooose from. More
          specifically we chose for the following types of tomatoes:
        </p>
        <ul className='list-decimal [&>li]:mt-2 [&>li]:ml-8 flex flex-col lg:flex-row'>
          <li>Celebrity tomato</li>
          <li>Green Zebra tomato</li>
          <li>Pineapple tomato</li>
          <li>Super sweet 100 tomato</li>
          <li>Yellow Pear tomato</li>
        </ul>
        <div className='max-w-5/6 my-2 flex mx-auto mr-6'>
          <TomatoCarousel images={labelCarousel} />
        </div>
        <li className='font-semibold'>Gathering data (web scraper):</li>
        <p className='leading-7 [&:not(:first-child)]:mt-2'>
          To gather data for the model we needed to scrape images of the
          internet using several search terms. For the scraping we used Selenium
          since I had already used it in my{' '}
          <Link
            className='underline hover:text-primary-light transition-colors'
            href={'/projects/web-scraper'}
          >
            Web Scraper Project
          </Link>{' '}
          and in the{' '}
          <Link
            className='underline hover:text-primary-light transition-colors'
            href={'projects/hornet-tracking-ai-model'}
          >
            Hornet Tracking AI Model Project
          </Link>
          . We were aiming for at least 100 images per class to have a decent
          baseline to train our model.
        </p>
        <li className='font-semibold'>Training the model:</li>
        <p className='leading-7 [&:not(:first-child)]:mt-2'>
          To train the model we used FastAI which is a high-level library built
          on top of PyTorch. We used a pretrained model and fine-tuned it to our
          dataset. We tried using the following pretrained models for transfer
          learning with our dataset:
        </p>
        <ul className='list-disc [&>li]:ml-8'>
          <li>Resnet-34</li>
          <li>Resnet-50</li>
          <li>VGG-16</li>
          <li>VGG-19</li>
        </ul>
        <p className='leading-7 [&:not(:first-child)]:mt-2'>
          To train and test the models we used data augmentation to increase the
          amount of data we have to train. For the advanced techniques we
          applied something called disciminative learning rates which adjusts
          the learning rate throughout the layers of the neural network to tweak
          the pretrained model as good as possible to our data. We also used the
          confusion matrix to see how well the model was performing. The model
          was trained on Google Colab since it has free GPU compute available.
          After testing the models we noticed 2 things: The Resnet-50 model was
          performing the best and there were 2 classes that were performing
          worse than the others. The classes were Celebrity tomato and Super
          sweet 100 tomato, the reason being the similarities in shape and
          color.
        </p>
        <li className='font-semibold'>
          Training a model using Google&apos;s Teachable Machine:
        </li>
        <p className='leading-7 [&:not(:first-child)]:mt-2'>
          To compare our model with Google Teachable Machine we also trained a
          model on it which is really easy to do. All you have to do is create
          the 5 classes and upload the images for the classes. Then you can
          choose the learning rate which we left on default and we let it run
          for 100 epochs. The model performed really well as expected but 100
          epochs might have been a bit overkill.
        </p>
        <li className='font-semibold'>Hosting a web app via Streamlit:</li>
        <p className='leading-7 [&:not(:first-child)]:mt-2'>
          The goal of this task was to access the model through the web app and
          do prediction that way. We could not get the application hosted
          because of the size of the model and the packages required to load the
          model so I only have some screenshots of the application.
        </p>
        <p className='leading-7 [&:not(:first-child)]:mt-2'>
          The application had an image gallery to explore the images we used to
          train the models
        </p>
        <div className='max-w-5/6 my-2 flex mx-auto mr-6'>
          <StreamlitCarousel images={streamlitCarousel} />
        </div>
        <p className='leading-7 [&:not(:first-child)]:mt-2'>
          From the imge you can tell that Teachable Machine is still beating our
          own model :(. This might be because we trained it for 100 epochs while
          our model only did 3 with with a discriminative learning rate.
        </p>
        <li className='font-semibold'>Accessing model through API (extra):</li>
        <p className='leading-7 [&:not(:first-child)]:mt-2'>
          One of the extras was that the trained model could be accessed through
          an API. In our case we chose to do that through a <b>Flask API</b>.
          The API was not deployed anywhere since it was not a requirement for
          the project. The API would{' '}
          <b>take in an image and return the predicted class from the model</b>.
        </p>
        <li className='font-semibold'>Training Vertex AI model (extra):</li>
        <p className='leading-7 [&:not(:first-child)]:mt-2'>
          As one of the extras we had the choice to{' '}
          <b>train a model using Vertex AI on Google Cloud Platform</b> with the
          free credits we got from our teacher. We decided to do this since it
          was a good opportunity to learn about the platform. We used the{' '}
          <b>same dataset as the FastAI model</b> and trained a classification
          model using the AutoML feature. This model was also hosted on an{' '}
          <b>API endpoint within Google Cloud Platform</b> so we could access it
          through the GCP API or using the model directly in the cloud.
        </p>
        <li className='font-semibold'>Training Roboflow AI model (extra):</li>
        <p className='leading-7 [&:not(:first-child)]:mt-2'>
          Another extra was to train a classification model using
          Roboflow&apos;s built in AI model training feature. We used the same
          dataset as the FastAI model and trained a classification model using
          the Roboflow platform. This model was also hosted on an API endpoint
          within Roboflow.
        </p>
      </ul>
      <h3 className='scroll-m-20 text-2xl font-semibold tracking-tight'>
        Report
      </h3>
      <p className='leading-7 [&:not(:first-child)]:mt-2'>
        In case you are interested in the full report of the project I would
        recommend you to check it out below.
      </p>
      <PDFModal
        src='https://1drv.ms/b/c/ced5be97da9b1174/IQMpkM9dDWppR4jmuA72W_mSAWF6er7yufVQ_gWYtJJgqAE'
        title='Image-classification-report.pdf'
      />
      <h2 className='mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0'>
        What have I learned?
      </h2>
      <p className='leading-7 [&:not(:first-child)]:mt-6'>
        I learned about the power of pretrained models and how to fine-tune
        them. The amount of data you need for pretrained models is significantly
        lower than training from scratch. I also learned how to create a project
        on Google Cloud Plaftorm, create a dataset and train a model. I also had
        to create an API and create credentials to access the model throught the
        Google Python SDK. And yet again the power of Streamlit to create an
        awesome application that integrates all of the models and makes it easy
        to use.
      </p>
    </div>
  );
}
