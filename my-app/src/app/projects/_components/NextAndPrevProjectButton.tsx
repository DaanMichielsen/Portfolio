import Link from 'next/link';
import { cn } from '@/lib/utils';

type NextAndPreviousProjectButtonProps = {
  nextProject: { title: string; href: string } | null;
  previousProject: { title: string; href: string } | null;
};

export default function NextAndPreviousProjectButton({
  nextProject,
  previousProject,
}: NextAndPreviousProjectButtonProps) {
  return (
    <div
      className={cn(
        'flex justify-between w-full mt-12',
        previousProject && nextProject
          ? 'justify-between'
          : previousProject && nextProject === null
            ? 'justify-start'
            : 'justify-end',
      )}
    >
      {previousProject && (
        <div className='flex flex-col justify-start gap-y-2 font-bold'>
          <p className='mr-auto'>Previous project</p>
          <Link
            className='px-4 py-2 rounded-lg bg-gray-200 hover:bg-gray-300 dark:bg-slate-800 dark:hover:bg-slate-900 transition-colors'
            href={previousProject?.href}
          >
            &larr; {previousProject?.title}
          </Link>
        </div>
      )}
      {nextProject && (
        <div className='flex flex-col justify-end gap-y-2 font-bold'>
          <p className='ml-auto'>Next project</p>
          <Link
            className='px-4 py-2 rounded-lg bg-gray-200 hover:bg-gray-300 dark:bg-slate-800 dark:hover:bg-slate-900 transition-colors'
            href={nextProject?.href}
          >
            {nextProject?.title} &rarr;
          </Link>
        </div>
      )}
    </div>
  );
}
