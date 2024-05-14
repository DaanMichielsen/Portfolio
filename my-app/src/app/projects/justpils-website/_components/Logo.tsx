import Image from 'next/image';
import JustPilsLogo from '../../../../../public/justpils.png';
export default function Logo() {
  return (
    <>
      <div className='relative w-[120px] h-[120px]'>
        <Image src={JustPilsLogo} alt='justpils logo' fill />
      </div>
    </>
  );
}
