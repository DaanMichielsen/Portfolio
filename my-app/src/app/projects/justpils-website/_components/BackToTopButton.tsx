'use client';
import { useEffect } from 'react';
import { faAnglesUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function BackToTopButton() {
  useEffect(() => {
    const backToTopButton: HTMLElement | null =
      document.querySelector('#back-to-top-btn');

    function scrollFunction() {
      if (backToTopButton) {
        if (window.scrollY > 300) {
          if (!backToTopButton.classList.contains('animate-exit')) {
            backToTopButton.classList.remove('animate-exit-reverse');
            backToTopButton.classList.add('animate-exit');
            backToTopButton.style.display = 'block';
          }
        } else if (
          !backToTopButton.classList.contains('animate-exit-reverse')
        ) {
          backToTopButton.classList.remove('animate-exit');
          backToTopButton.classList.add('animate-exit-reverse');
          setTimeout(() => {
            backToTopButton.style.display = 'none';
          }, 250);
        }
      }
    }

    function backToTop() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    }

    if (backToTopButton) {
      backToTopButton.addEventListener('click', backToTop);
      window.addEventListener('scroll', scrollFunction);
    }

    return () => {
      if (backToTopButton) {
        backToTopButton.removeEventListener('click', backToTop);
        window.removeEventListener('scroll', scrollFunction);
      }
    };
  }, []);

  return (
    <>
      <button
        id='back-to-top-btn'
        className='fixed cursor-none bottom-[20px] right-[20px] w-[32px] h-[32px] md:w-[40px] md:h-[40px] lg:w-[50px] lg:h-[50px] bg-[#f6c101] text-[#fff897] border-[3px] border-[#df8d03] rounded-full transition-colors animate-exit duration-200 ease-in-out hover:bg-[#fff897] hover:text-[#df8d03]'
      >
        <FontAwesomeIcon className='w-6 h-6' icon={faAnglesUp} />
      </button>
    </>
  );
}
