// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import '../styles/globals.css'
import { useEffect } from 'react';
import { useRouter } from 'next/router';

import DonateButton from "../components/common/DonateButton";


function MyApp({ Component, pageProps }) {

  const router = useRouter();

  useEffect(() => {
    const handlePopstate = () => {
      const scrollPosition = localStorage.getItem('scrollPosition');

      if (scrollPosition) {
        window.scrollTo(0, parseInt(scrollPosition, 10));
        localStorage.removeItem('scrollPosition');
      }
    };

    window.addEventListener('popstate', handlePopstate);

    return () => {
      window.removeEventListener('popstate', handlePopstate);
    };
  }, []);

  return (
  <>
  <Component {...pageProps} /> 
  <DonateButton />
  </>
  );
}

export default MyApp
