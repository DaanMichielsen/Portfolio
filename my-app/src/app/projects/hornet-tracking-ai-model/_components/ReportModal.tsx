import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';

function PDFModal() {
  return (
    <Dialog>
      <DialogTrigger className='bg-gray-100 dark:bg-slate-900 px-3 py-1.5 rounded-md mt-2'>
        View report
      </DialogTrigger>
      <DialogContent className='max-h-[90%] max-w-[90%] flex flex-col w-full h-full'>
        <DialogHeader className=''>
          <DialogTitle>Hornet tracking report</DialogTitle>
        </DialogHeader>
        <div className='w-full h-full'>
          <iframe
            className='w-full h-full'
            src='https://thomasmore365-my.sharepoint.com/personal/r0896365_student_thomasmore_be/_layouts/15/embed.aspx?UniqueId=6215bf3f-e126-4e93-8abd-2b1b1e3a9b8a'
            title='Hornet-tracking-report.pdf'
            allowFullScreen
            lang='en'
          ></iframe>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export default PDFModal;
