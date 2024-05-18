import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import Image from 'next/image';
import { Image as ImageType } from './ImageGallery';

export default function TechnologyGallery({
  technologies,
}: {
  technologies: ImageType[];
}) {
  return (
    <div className='flex bg-slate-200 p-1 px-3 rounded-full gap-x-1 flex-wrap md:gap-x-2 mt-2'>
      <TooltipProvider>
        {technologies.map(technology => (
          <Tooltip key={technology.name}>
            <TooltipTrigger asChild>
              <Image
                src={technology.src}
                height={30}
                width={30}
                alt={technology.name}
              ></Image>
            </TooltipTrigger>
            <TooltipContent>
              <p>{technology.name}</p>
            </TooltipContent>
          </Tooltip>
        ))}
      </TooltipProvider>
    </div>
  );
}
