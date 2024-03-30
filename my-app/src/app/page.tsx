
import Image from "next/image";
export default function Home() {
  return <main className='w-5/6 mx-auto'>
    <div className='mx-auto max-w-2xl gap-x-14 pt-16 lg:mx-0 lg:flex lg:max-w-none lg:items-center'>
  <div className='w-auto max-w-xl xl:max-w-2xl min-w-xl z-0'>
    <h1 className='text-4xl font-bold tracking-tight text-gray-900 dark:text-slate-100 sm:text-6xl'>
      Welcome to my portfolio
    </h1>
    <p className='relative mt-6 text-lg leading-8 text-gray-600 dark:text-slate-200 sm:max-w-md lg:max-w-none z-0'>
      This page will give you a brief introduction about who I am, what
      I&apos;m passionate about and what I&apos;m currently working on.
      I&apos;m a software engineer with a passion for creating beautiful
      and functional applications.
    </p>
  </div>
  <div className='mt-14 flex justify-end gap-8 sm:-mt-44 sm:justify-start sm:pl-20 lg:mt-0 lg:pl-0'>
    <div className='ml-auto w-44 flex-none space-y-8 pt-32 sm:ml-0 sm:pt-80 lg:pt-80 xl:pt-80'>
      <div className='z-0'>
        <Image
          src={'/daan.jpg'}
          alt='Daan'
          width={176}
          height={264}
          className='aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg'
          style={{ zIndex: 0 }}
        />
      </div>
    </div>
    <div className='mr-auto w-44 flex-none space-y-8 sm:mr-0 sm:pt-52 lg:pt-36'>
  <div className=' bg-[#c86e14] rounded-xl z-0'>
    <Image
      src={'/justpils.png'}
      alt='JustPils'
      width={176}
      height={264}
      className='aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg'
      style={{ zIndex: 0 }} // Added z-index here
    />
  </div>
  <div className='z-0'>
    <Image
      src={'/thomas-more.png'}
      alt='JustPils'
      width={176}
      height={264}
      className='aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-contain shadow-lg'
      style={{ zIndex: 0 }} // Added z-index here
    />
  </div>
</div>

    {/* <div className='w-44 flex-none space-y-8 pt-32 sm:pt-0'>
      <div className='relative'>
        <img
          src='https://images.unsplash.com/photo-1670272504528-790c24957dda?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=left&w=400&h=528&q=80'
          alt=''
          className='aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg'
        />
        <div className='pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10' />
      </div>
      <div className='relative'>
        <img
          src='https://images.unsplash.com/photo-1670272505284-8faba1c31f7d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&h=528&q=80'
          alt=''
          className='aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg'
        />
        <div className='pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10' />
      </div>
    </div> */}
  </div>
</div></main>;
}
