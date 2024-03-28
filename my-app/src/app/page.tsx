import process from 'process';
import { env } from 'process';
export default function Home() {
  const apiKey = env.MAPTILER_KEY;
  console.log('APIKEY', apiKey);
  return <main className='w-5/6 mx-auto my-8'></main>;
}
