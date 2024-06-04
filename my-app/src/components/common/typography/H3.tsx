import { cn } from '@/lib/utils';
export function H3({
  children,
  className,
  id,
}: {
  children: React.ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <h3
      className={cn(
        'scroll-m-20 text-2xl font-semibold tracking-tight mt-6 text-primary-dark dark:text-primary-light',
        className,
      )}
    >
      {children}
    </h3>
  );
}
