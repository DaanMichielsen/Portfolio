import { cn } from '@/lib/utils';
export function H2({
  children,
  className,
  id,
}: {
  children: React.ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <h2
      className={cn(
        'scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0 mt-8 mb-4 text-primary-dark dark:text-primary-light',
        className,
      )}
    >
      {children}
    </h2>
  );
}
