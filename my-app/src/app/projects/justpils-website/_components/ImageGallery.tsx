import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogHeader,
  DialogTrigger,
} from '@/components/ui/dialog';
import Image, { StaticImageData } from 'next/image';

export type Image = {
  src: StaticImageData;
  name: string;
};

export default function ImageGallery({ images }: { images: Image[] }) {
  return (
    <>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-3 mt-8'>
        {images.map((image, index) => (
          <div className='relative flex flex-col' key={index}>
            <p className='font-bold mx-auto underline'>{image.name}</p>
            <Dialog>
              <DialogTrigger>
                <Image src={image.src} alt={image.name} />
              </DialogTrigger>
              <DialogContent className='lg:max-w-[90%] lg:max-h-[90%] overflow-y-scroll'>
                <DialogHeader>
                  <DialogTitle>{image.name}</DialogTitle>
                </DialogHeader>
                <Image src={image.src} alt={image.name} />
              </DialogContent>
            </Dialog>
          </div>
        ))}
      </div>
    </>
  );
}
