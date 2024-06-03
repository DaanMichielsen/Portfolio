import {
  EyeIcon,
  LightBulbIcon,
  WrenchScrewdriverIcon,
  UserCircleIcon,
} from '@heroicons/react/24/outline';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';

const actions = [
  {
    title: 'Project plan (Dutch)',
    href: '/pdf/project-plan.pdf',
    icon: LightBulbIcon,
    iconForeground: 'text-teal-700',
    iconBackground: 'bg-teal-50',
  },
  {
    title: 'Realistion document (Dutch)',
    href: '/pdf/realisatiedocument.pdf',
    icon: WrenchScrewdriverIcon,
    iconForeground: 'text-purple-700',
    iconBackground: 'bg-purple-50',
  },
  {
    title: ' Reflection report (Dutch)',
    href: '/pdf/Reflectie_Daan_Michielsen.pdf',
    icon: UserCircleIcon,
    iconForeground: 'text-sky-700',
    iconBackground: 'bg-sky-50',
  },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

function PDFModal({ src, title }: { src: string; title: string }) {
  return (
    <div className='gap-1.5 flex items-center'>
      <Dialog>
        <DialogTrigger className='text-gray-400 p-1 rounded-lg bg-gray-200 dark:bg-slate-600 hover:text-gray-500 transition-colors'>
          <EyeIcon className='w-6 h-6' />
        </DialogTrigger>
        <DialogContent className='max-h-[90%] max-w-[90%] flex flex-col w-full h-full'>
          <DialogHeader className=''>
            <DialogTitle>{title}</DialogTitle>
          </DialogHeader>
          <div className='w-full h-full'>
            <iframe
              className='w-full h-full'
              src={src}
              title={title}
              allowFullScreen
              lang='en'
            ></iframe>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default function DocumentSection() {
  return (
    <>
      <h2 className='mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0'>
        Documents
      </h2>
      <div className='divide-y divide-gray-300 gap-1 my-8 dark:divide-slate-500 overflow-hidden rounded-lg shadow sm:grid sm:grid-cols-3 sm:gap-px sm:divide-y-0'>
        {actions.map((action, actionIdx) => (
          <div
            key={action.title}
            className={classNames(
              actionIdx === 0
                ? 'rounded-tl-lg rounded-tr-lg sm:rounded-tr-none'
                : '',
              actionIdx === 1 ? 'sm:rounded-tr-lg' : '',
              actionIdx === actions.length - 2 ? 'sm:rounded-bl-lg' : '',
              actionIdx === actions.length - 1
                ? 'rounded-bl-lg rounded-br-lg sm:rounded-bl-none'
                : '',
              'group relative bg-white hover:bg-gray-200 transition-all dark:bg-slate-700 p-4 focus-within:ring-2 focus-within:ring-inset focus-within:ring-primary-dark',
            )}
          >
            <div>
              <span
                className={classNames(
                  action.iconBackground,
                  action.iconForeground,
                  'inline-flex rounded-lg p-3 ring-4 ring-white dark:ring-slate-800',
                )}
              >
                <action.icon className='h-6 w-6' aria-hidden='true' />
              </span>
            </div>
            <div className='mt-8'>
              <h3 className='text-base font-semibold leading-6 text-gray-900 dark:text-slate-100'>
                <a
                  href={action.href}
                  className='focus:outline-none'
                  target='_blank'
                >
                  <span className='absolute inset-0' aria-hidden='true' />
                  {action.title}
                </a>
              </h3>
            </div>

            <div className='absolute right-6 top-6 flex gap-5'>
              <a
                download
                href={action.href}
                className='text-gray-400 p-1 rounded-lg bg-gray-200 dark:bg-slate-600 hover:text-gray-500 transition-colors'
              >
                <FontAwesomeIcon className='w-6 h-6' icon={faDownload} />
              </a>
              <PDFModal src={action.href} title={action.title} />
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
