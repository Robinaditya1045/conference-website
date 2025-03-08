import '../styles/globals.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Navbar from '../components/Navbar/navbar';
import Footer from '../components/Footer/footer';
import { useState, useEffect } from 'react';
import ScrollToTop from '../components/Buttons/scrollToTop';

function MyApp({ Component, pageProps }) {
  const [showChild, setShowChild] = useState(false);
  useEffect(() => {
    setShowChild(true);
  }, []);
  if (!showChild) {
    return null;
  }
  if (typeof window === "undefined") {
    return <></>;
  }
  return (
      <div>
      <Navbar />
      
      <Component {...pageProps} />
      <ScrollToTop />
      <Footer />
      </div>
  );
}

export default MyApp
