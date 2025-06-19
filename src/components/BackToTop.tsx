import { useState, useEffect } from 'react';
import { Button } from './ui/button';
import { ArrowUp } from 'lucide-react';

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled down
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  // Scroll to top handler
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <Button
      className={`fixed bottom-6 right-6 bg-primary hover:bg-primary/90 text-white w-12 h-12 rounded-full flex items-center justify-center transition shadow-lg ${isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
      onClick={scrollToTop}
      size="icon"
      aria-label="Back to top"
    >
      <ArrowUp className="h-5 w-5" />
    </Button>
  );
};

export default BackToTop;
