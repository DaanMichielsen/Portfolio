'use client';
import {
  CarouselItem,
  CarouselContent,
  CarouselPrevious,
  CarouselNext,
  Carousel,
} from '@/components/ui/carousel';
import Autoplay from 'embla-carousel-autoplay';
import { Project } from '@/app/projects/page';
import Image from 'next/image';
import {
  TooltipProvider,
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '../ui/tooltip';
import { cn } from '@/lib/utils';
import Link from 'next/link';

export function ProjectsCarousel({ projects }: { projects: Project[] }) {
  return (
    <main className='w-full max-w-6xl mx-auto px-4 py-8 md:px-6 md:py-12'>
      <h1 className='text-3xl font-bold mb-8'>Projects I have worked on</h1>
      <p className='leading-7 [&:not(:first-child)]:mt-6 text-lg mb-8'>
        These are the projects that I am proud of and stuck with me the most
        throughout my career in software development. I have worked on many more
        projects, but these are the ones that I have learned the most from and
        that I am most proud of.
      </p>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'>
        {projects.map((project, index: number) => (
          <>
            <div
              className='bg-white rounded-lg overflow-hidden shadow-lg dark:bg-gray-800'
              key={index}
            >
              <div className='relative'>
                <Carousel
                  className='w-full sm:h-72 md:h-64 group'
                  opts={{
                    align: 'center',
                    loop: true,
                  }}
                  plugins={[
                    Autoplay({
                      delay: 2500,
                    }),
                  ]}
                >
                  <CarouselContent>
                    {project.heroImages.map((image, index) => (
                      <CarouselItem key={index}>
                        <Image
                          alt={project.title + ' Image'}
                          className='w-full h-full object-cover'
                          height='320'
                          src={image.src}
                          style={{
                            aspectRatio: '480/320',
                            objectFit: 'cover',
                          }}
                          width='480'
                        />
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  {/* {project.heroImages.length > 1 && ()} */}
                  <CarouselPrevious
                    className={cn(
                      'translate-x-12 lg:hidden top-1/2',
                      project.heroImages.length > 1
                        ? 'lg:group-hover:inline-block'
                        : 'hidden',
                    )}
                  />
                  <CarouselNext
                    className={cn(
                      '-translate-x-12 lg:hidden top-1/2',
                      project.heroImages.length > 1
                        ? 'lg:group-hover:inline-block'
                        : 'hidden',
                    )}
                  />
                </Carousel>
              </div>
              <Link href={project.href}>
                <div className='p-4 md:p-6 hover:bg-gray-100 dark:hover:bg-slate-900 h-full'>
                  <h2 className='text-xl font-bold mb-2'>{project.title}</h2>
                  <p className='text-gray-500 dark:text-gray-400 mb-4'>
                    {project.description}
                  </p>
                  <div className='flex items-center space-x-2 mb-4 flex-wrap'>
                    <TooltipProvider>
                      {project.technologies.map(technology => (
                        <>
                          <Tooltip key={technology.name}>
                            <TooltipTrigger asChild>
                              <Image
                                alt={technology.name}
                                className='w-6 h-6'
                                height={24}
                                src={technology.src}
                                style={{
                                  aspectRatio: '24/24',
                                  objectFit: 'cover',
                                }}
                                width={24}
                              />
                            </TooltipTrigger>
                            <TooltipContent>{technology.name}</TooltipContent>
                          </Tooltip>
                        </>
                      ))}
                    </TooltipProvider>
                  </div>
                </div>
              </Link>
            </div>
          </>
        ))}
      </div>
    </main>
  );
}
