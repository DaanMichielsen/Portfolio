import { Skeleton } from '../ui/skeleton';
function ImagesLoading() {
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <div className='grid grid-cols-4 md:grid-cols-6 gap-3'>
      {numbers.map((number: number, index: number) => (
        <div
          key={number}
          className='rounded-lg border aspect-square border-slate-200 bg-white text-slate-950 shadow-sm dark:border-slate-800 dark:bg-slate-950 dark:text-slate-50 flex justify-center items-center position-relative'
        >
          <div className='w-full h-full flex flex-col items-center justify-center relative'>
            <Skeleton className='w-[100%] h-[100%]'></Skeleton>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ImagesLoading;
