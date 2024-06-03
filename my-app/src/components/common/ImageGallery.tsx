import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogHeader,
  DialogTrigger,
} from '@/components/ui/dialog';
import Image, { StaticImageData } from 'next/image';
import { cn } from '@/lib/utils';

export type Image = {
  src: StaticImageData;
  name: string;
};

export default function ImageGallery({ images }: { images: Image[] }) {
  return (
    <>
      <div
        className={cn(
          'grid gap-3 mt-8',
          images.length === 1
            ? 'grid-cols-1 w-5/6 mx-auto'
            : 'grid-cols-1 md:grid-cols-2',
        )}
      >
        {images.map((image, index) => (
          <div className='relative flex flex-col shadow-md' key={index}>
            <p className='font-bold mx-auto underline'>{image.name}</p>
            <Dialog>
              <DialogTrigger className='mx-auto'>
                <Image
                  className='mx-auto rounded-xl'
                  src={image.src}
                  alt={image.name}
                />
              </DialogTrigger>
              <DialogContent className='lg:max-w-[90%] lg:max-h-[90%] overflow-y-scroll'>
                <DialogHeader>
                  <DialogTitle>{image.name}</DialogTitle>
                </DialogHeader>
                <Image className='mx-auto' src={image.src} alt={image.name} />
              </DialogContent>
            </Dialog>
          </div>
        ))}
      </div>
    </>
  );
}
