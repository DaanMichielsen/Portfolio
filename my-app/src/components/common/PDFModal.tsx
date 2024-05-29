'use client';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import { faWindowRestore } from '@fortawesome/free-regular-svg-icons';
import {
  TooltipTrigger,
  Tooltip,
  TooltipContent,
  TooltipProvider,
} from '../ui/tooltip';
import { EyeIcon } from '../icons/Eye';

function PDFModal({
  src,
  title,
  download,
  newTab,
}: {
  src: string;
  title: string;
  download?: boolean;
  newTab?: boolean;
}) {
  return (
    <div className='gap-1.5 flex items-center'>
      <Dialog>
        <DialogTrigger className='bg-gray-100 dark:bg-slate-900 px-3 py-1.5 rounded-md mt-2 hover:bg-gray-200 dark:hover:bg-slate-800 transition-colors flex gap-2'>
          <EyeIcon />
          {title}
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
      <TooltipProvider>
        {newTab && (
          <Tooltip>
            <TooltipTrigger className='mt-2'>
              <a
                href={src}
                target='_blank'
                className='bg-gray-100 dark:bg-slate-900 px-3 py-1.5 rounded-md hover:bg-gray-200 dark:hover:bg-slate-800 transition-colors'
              >
                <FontAwesomeIcon
                  className='w-6 h-6 text-black dark:text-white'
                  icon={faWindowRestore}
                />
              </a>
            </TooltipTrigger>
            <TooltipContent>Open in new tab</TooltipContent>
          </Tooltip>
        )}
        {download && (
          <Tooltip>
            <TooltipTrigger className='mt-2'>
              <a
                download
                href={src}
                className='bg-gray-100 dark:bg-slate-900 px-3 py-1.5 rounded-md hover:bg-gray-200 dark:hover:bg-slate-800 transition-colors'
              >
                <FontAwesomeIcon
                  className='w-6 h-6 text-black dark:text-white'
                  icon={faDownload}
                />
              </a>
            </TooltipTrigger>
            <TooltipContent>Download file</TooltipContent>
          </Tooltip>
        )}
      </TooltipProvider>
    </div>
  );
}

export default PDFModal;
