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
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { TagIcon, FilterIcon } from 'lucide-react';
import { ProjectTag } from '@/app/projects/page';
import { Badge } from '../ui/badge';
import { H1 } from '../common/typography/H1';
import { H2 } from '../common/typography/H2';

const filterOptions: ProjectTag[] = [
  'AI/ML/DL',
  'BI',
  'Internship',
  'Scripting',
  'Web development',
  'Team',
];

export function ProjectsCarousel({ projects }: { projects: Project[] }) {
  const { theme } = useTheme(); // Get the current theme
  const [currentTheme, setCurrentTheme] = useState<string | null>(null);
  const [selectedFilters, setSelectedFilters] = useState<ProjectTag[]>([]);

  useEffect(() => {
    setCurrentTheme(theme!);
  }, [theme]);

  if (!currentTheme) return null; // Render nothing until theme is initialized

  const handleFilterClick = (filter: ProjectTag) => {
    setSelectedFilters(prevFilters => {
      if (prevFilters.includes(filter)) {
        return prevFilters.filter(f => f !== filter);
      } else {
        return [...prevFilters, filter];
      }
    });
  };

  const filteredProjects = projects
    .map(project => {
      const filteredTechnologies = project.technologies.filter(tech => {
        const techName = tech.name.toLowerCase(); // Convert name to lowercase to ensure case-insensitive comparison
        return (
          (!techName.includes('dark') && !techName.includes('light')) ||
          (currentTheme === 'light' && techName.includes('light')) ||
          (currentTheme === 'dark' && techName.includes('dark'))
        );
      });

      return {
        ...project,
        technologies: filteredTechnologies,
      };
    })
    .filter(project => {
      // If no filters are selected, show all projects
      if (selectedFilters.length === 0) {
        return true;
      }
      // Otherwise, filter based on the selected tags
      return project.tags.some(tag => selectedFilters.includes(tag));
    });
  return (
    <main>
      <H1>Projects I have worked on</H1>
      <p className='leading-7 [&:not(:first-child)]:mt-6 text-lg mb-8'>
        These are the projects that I am proud of and stuck with me the most
        throughout my career in software development. I have worked on many more
        projects, but these are the ones that I have learned the most from and
        that I am most proud of.
      </p>
      <h4 className='scroll-m-20 text-xl font-semibold tracking-tight mb-2'>
        Filters
      </h4>
      <div className='flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-4'>
        <div className='flex-1 flex flex-wrap gap-2'>
          {filterOptions.map((option, index) => (
            <button
              key={index}
              className={`justify-start px-4 py-2 border dark:border-slate-500 rounded flex items-center transition-colors ${
                selectedFilters.includes(option)
                  ? 'bg-gray-100 dark:bg-slate-700 hover:bg-gray-300 border-green-500 dark:border-green-500 hover:border-red-500'
                  : 'bg-white dark:bg-slate-900 hover:bg-gray-300'
              }`}
              onMouseDown={() => handleFilterClick(option)}
            >
              {option}
            </button>
          ))}
          {selectedFilters.length > 0 && (
            <button
              className={`justify-center px-4 py-2 border dark:border-slate-500 rounded flex items-center`}
              onMouseDown={() => setSelectedFilters([])}
            >
              <FilterIcon className='w-6 h-6 mx-auto text-red-500' />
            </button>
          )}
        </div>
      </div>
      <h4 className='scroll-m-20 text-xl font-semibold tracking-tight mb-2'>
        Projects({filteredProjects.length})
      </h4>
      {filteredProjects.length === 0 && (
        <p className='text-lg text-gray-500 dark:text-gray-400'>
          Maybe one day I will work on a project that fits the selected
          filters...
        </p>
      )}
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'>
        {filteredProjects.map((project, index: number) => (
          <>
            <div
              className='bg-white rounded-lg overflow-hidden shadow-lg dark:bg-gray-800 hover:scale-105 transition-transform duration-300 ease-in-out'
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
                <div className='p-4 md:p-6 hover:bg-gray-100 dark:hover:bg-slate-900 transition-colors h-full'>
                  <H2 className='text-xl font-bold mb-2 border-none'>
                    {project.title}
                  </H2>
                  <div className='flex items-center flex-wrap gap-2 text-sm mb-2'>
                    {project.tags.map((tag, index: number) => (
                      <Badge
                        key={index}
                        variant='outline'
                        className='dark:border-slate-500'
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <p className='text-gray-500 dark:text-gray-400 mb-4'>
                    {project.description}
                  </p>
                  <div className='grid grid-cols-7 gap-2'>
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
                            <TooltipContent>
                              {technology.name
                                .replace('^dark', '')
                                .replace('^light', '')}
                            </TooltipContent>
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
