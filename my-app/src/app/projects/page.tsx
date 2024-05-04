import { ProjectCarousel } from '@/components/Carousel';
export const metadata = {
  title: 'Daan Michielsen',
  description: 'Welcome to my portfolio!',
};
export default function Projects() {
  return (
    <div className='mx-auto max-w-7xl px-6 pb-24 pt-16 sm:pt-16 lg:px-8 lg:pt-16'>
      <ProjectCarousel></ProjectCarousel>
    </div>
  );
}
