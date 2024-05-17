import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';

function PDFModal({ src, title }: { src: string; title: string }) {
  return (
    <Dialog>
      <DialogTrigger className='bg-gray-100 dark:bg-slate-900 px-3 py-1.5 rounded-md mt-2 cursor-none hover:bg-gray-200 dark:hover:bg-slate-800 transition-colors'>
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
  );
}

export default PDFModal;
