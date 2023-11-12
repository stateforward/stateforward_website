import { useState, useEffect } from 'react';

const Footer = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    let timeout;
    const handleScroll = () => {
      if (timeout) clearTimeout(timeout); // Clear the timeout on new scroll event
      setIsVisible(false); // Hide footer on scroll

      // Set a timeout to show the footer after a delay when scrolling stops
      timeout = setTimeout(() => {
        setIsVisible(true);
      }, 500); 
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (timeout) clearTimeout(timeout);
    };
  }, []);

  return (
    <footer className={`footer items-center p-4 text-neutral-content sm:px-8 bg-black justify-center ${isVisible ? 'visible' : 'invisible'}`}>
      <div className="flex w-full justify-center">
      <svg width="37" height="28" viewBox="0 0 37 28" fill="none" xmlns="http://www.w3.org/2000/svg">
           
           <path d="M26.9143 1C27.3967 1 27.7117 1.50622 27.4985 1.93899L25.9909 4.99983C25.8813 5.22238 25.6548 5.36332 25.4067 5.36332H15.8866C15.6261 5.36332 15.3906 5.51858 15.288 5.75803L14.6494 7.24797C14.5468 7.48742 14.3114 7.64267 14.0509 7.64267H10.3803C9.88303 7.64267 9.56923 7.10784 9.81181 6.67374L12.796 1.33355C12.9111 1.1276 13.1286 1 13.3645 1H26.9143Z" fill="white"/>
           <path d="M9.66582 27.5056C9.1834 27.5056 8.86844 26.9993 9.08159 26.5666L10.5892 23.5057C10.6988 23.2832 10.9253 23.1422 11.1734 23.1422H20.6935C20.954 23.1422 21.1895 22.987 21.2921 22.7475L21.9307 21.2576C22.0333 21.0181 22.2687 20.8629 22.5292 20.8629H26.1998C26.6971 20.8629 27.0109 21.3977 26.7683 21.8318L23.7841 27.172C23.669 27.378 23.4515 27.5056 23.2156 27.5056H9.66582Z" fill="white"/>
           <path d="M8.47234 8.74043C8.71349 8.30636 8.39962 7.77292 7.90305 7.77292H4.37555C4.1406 7.77292 3.92386 7.89947 3.80839 8.10409L0.492291 13.98C0.365251 14.2051 0.383366 14.484 0.538454 14.6908L1.84618 16.4344C1.96917 16.5984 2.1622 16.6949 2.36718 16.6949H28.716C29.2036 16.6949 29.5183 17.2112 29.2948 17.6446L28.1251 19.9132C27.9016 20.3466 28.2162 20.8629 28.7039 20.8629H32.5254C32.7629 20.8629 32.9816 20.7336 33.096 20.5255L36.3276 14.6499C36.4307 14.4624 36.4351 14.2362 36.3394 14.0448L35.4349 12.2357C35.3246 12.0151 35.0991 11.8757 34.8524 11.8757H7.8373C7.34074 11.8757 7.02686 11.3423 7.26801 10.9082L8.47234 8.74043Z" fill="white"/>
           <path d="M26.9143 1C27.3967 1 27.7117 1.50622 27.4985 1.93899L25.9909 4.99983C25.8813 5.22238 25.6548 5.36332 25.4067 5.36332H15.8866C15.6261 5.36332 15.3906 5.51858 15.288 5.75803L14.6494 7.24797C14.5468 7.48742 14.3114 7.64267 14.0509 7.64267H10.3803C9.88303 7.64267 9.56923 7.10784 9.81181 6.67374L12.796 1.33355C12.9111 1.1276 13.1286 1 13.3645 1H26.9143Z" fill="white"/>
           <path d="M9.66582 27.5056C9.1834 27.5056 8.86844 26.9993 9.08159 26.5666L10.5892 23.5057C10.6988 23.2832 10.9253 23.1422 11.1734 23.1422H20.6935C20.954 23.1422 21.1895 22.987 21.2921 22.7475L21.9307 21.2576C22.0333 21.0181 22.2687 20.8629 22.5292 20.8629H26.1998C26.6971 20.8629 27.0109 21.3977 26.7683 21.8318L23.7841 27.172C23.669 27.378 23.4515 27.5056 23.2156 27.5056H9.66582Z" fill="white"/>
           <path d="M8.47234 8.74043C8.71349 8.30636 8.39962 7.77292 7.90305 7.77292H4.37555C4.1406 7.77292 3.92386 7.89947 3.80839 8.10409L0.492291 13.98C0.365251 14.2051 0.383366 14.484 0.538454 14.6908L1.84618 16.4344C1.96917 16.5984 2.1622 16.6949 2.36718 16.6949H28.716C29.2036 16.6949 29.5183 17.2112 29.2948 17.6446L28.1251 19.9132C27.9016 20.3466 28.2162 20.8629 28.7039 20.8629H32.5254C32.7629 20.8629 32.9816 20.7336 33.096 20.5255L36.3276 14.6499C36.4307 14.4624 36.4351 14.2362 36.3394 14.0448L35.4349 12.2357C35.3246 12.0151 35.0991 11.8757 34.8524 11.8757H7.8373C7.34074 11.8757 7.02686 11.3423 7.26801 10.9082L8.47234 8.74043Z" fill="white"/>
           <path d="M0.538454 14.6908L1.84618 16.4344C1.96917 16.5984 2.1622 16.6949 2.36718 16.6949H28.716C29.2036 16.6949 29.5183 17.2112 29.2948 17.6446L28.1251 19.9132C27.9016 20.3466 28.2162 20.8629 28.7039 20.8629H32.5254C32.7629 20.8629 32.9816 20.7336 33.096 20.5255L36.3276 14.6499C36.4307 14.4624 36.4351 14.2362 36.3394 14.0448L35.4349 12.2357C35.3246 12.0151 35.0991 11.8757 34.8524 11.8757H7.8373C7.34074 11.8757 7.02686 11.3423 7.26801 10.9082L8.47234 8.74043C8.71349 8.30636 8.39962 7.77292 7.90305 7.77292H4.37555C4.1406 7.77292 3.92386 7.89947 3.80839 8.10409L0.492291 13.98C0.365251 14.2051 0.383366 14.484 0.538454 14.6908ZM21.2921 22.7475L21.9307 21.2576C22.0333 21.0181 22.2687 20.8629 22.5292 20.8629H26.1998C26.6971 20.8629 27.0109 21.3977 26.7683 21.8318L23.7841 27.172C23.669 27.378 23.4515 27.5056 23.2156 27.5056H9.66582C9.1834 27.5056 8.86844 26.9993 9.08159 26.5666L10.5892 23.5057C10.6988 23.2832 10.9253 23.1422 11.1734 23.1422H20.6935C20.954 23.1422 21.1895 22.987 21.2921 22.7475ZM15.288 5.75803L14.6494 7.24797C14.5468 7.48742 14.3114 7.64267 14.0509 7.64267H10.3803C9.88303 7.64267 9.56923 7.10784 9.81181 6.67374L12.796 1.33355C12.9111 1.1276 13.1286 1 13.3645 1H26.9143C27.3967 1 27.7117 1.50622 27.4985 1.93899L25.9909 4.99983C25.8813 5.22238 25.6548 5.36332 25.4067 5.36332H15.8866C15.6261 5.36332 15.3906 5.51858 15.288 5.75803Z" stroke="white" stroke-width="0.180412"/>
           </svg>
      </div>
      <p>© Copyright 2023 StateForward.org - All rights reserved</p>
    </footer>
  );
};

export default Footer;
