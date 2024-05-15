'use client';
import { faAnglesUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
export default function BackToTopButton() {
  const backToTopButton: HTMLElement | null =
    document.querySelector('#back-to-top-btn'); //back to top button seleceren en in variabele stoppen

  window.addEventListener('scroll', scrollFunction); //eventlistener op btt-button op scroll

  function scrollFunction() {
    if (backToTopButton) {
      //functie om knop te laten verschijnen bij 300px scroll
      if (window.scrollY > 300) {
        //als er 300 pixels vanaf top gescrollt zijn transitie om knop te tonen afspelen
        if (!backToTopButton.classList.contains('animate-exit')) {
          //als de button de class van de transition niet heef
          backToTopButton.classList.remove('animate-exit-reverse'); //class voor exit transition verwijderen
          backToTopButton.classList.add('animate-exit'); //class voor entrance transition toevoegen
          backToTopButton.style.display = 'block'; //back to top button displayen
        }
      } else if (!backToTopButton.classList.contains('animate-exit-reverse')) {
        //als er niet meer dan 300px gescrollt is
        const button = backToTopButton; // Explicitly type backToTopButton as HTMLElement
        button.classList.remove('animate-exit'); //class voor entrance transition verwijderen
        button.classList.add('animate-exit-reverse'); //class voor leave transition toevoegen
        setTimeout(() => {
          //250ms wachten voor de exit transition
          button.style.display = 'none'; //button verstoppen
        }, 250); //250 ms delay
      }
    }
  }

  function backToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    }); //als er op de knop geklikt word naar top scrollen
  }

  if (backToTopButton) {
    backToTopButton.addEventListener('click', backToTop); //eventlistener voor click toevoegen aan btt-button
  }
  return (
    <>
      <button
        id='back-to-top-btn'
        className='fixed bottom-[20px] right-[20px] w-[32px] h-[32px] md:w-[40px] md:h-[40px] lg:w-[50px] lg:h-[50px] bg-[#f6c101] text-[#fff897] border-[3px] border-[#df8d03] rounded-full transition-colors animate-exit-reverse duration-200 ease-in-out hover:bg-[#fff897] hover:text-[#df8d03]'
      >
        <FontAwesomeIcon className='w-6 h-6' icon={faAnglesUp} />
      </button>
    </>
  );
}
