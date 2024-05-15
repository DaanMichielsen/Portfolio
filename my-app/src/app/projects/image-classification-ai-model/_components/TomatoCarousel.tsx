'use client';
import { Image as ImageType } from '../../justpils-website/_components/ImageGallery';
import Image from 'next/image';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

export default function TomatoCarousel({ images }: { images: ImageType[] }) {
  return (
    <>
      <Carousel className='mx-auto'>
        <CarouselContent>
          {images.map((image: ImageType) => (
            <CarouselItem key={image.name} className='basis-1/3'>
              <Image
                className='rounded-xl mx-auto my-auto'
                src={image.src}
                alt={image.name}
                width={1280}
                height={853}
              />
              <p className='font-bold text-center'>{image.name}</p>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </>
  );
}
