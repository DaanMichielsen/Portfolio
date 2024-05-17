'use client';
import { Image as ImageType } from '@/components/common/ImageGallery';
import Image from 'next/image';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

export default function LabelCarousel({ images }: { images: ImageType[] }) {
  return (
    <>
      <Carousel>
        <CarouselContent>
          {images.map((image: ImageType) => (
            <CarouselItem key={image.name}>
              <Image
                className='rounded-xl mx-auto my-auto'
                src={image.src}
                alt={image.name}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </>
  );
}
