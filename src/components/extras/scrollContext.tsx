// ScrollContext.tsx
import React, { createContext, useContext, useState, useEffect } from 'react';

const ScrollContext = createContext<number>(0);

export interface ScrollProviderProps {
    children: any
}

export const ScrollProvider = ({ children }: ScrollProviderProps) => {
  const [scrollPosition, setScrollPosition] = useState<number>(0);
  const bodySection = document.querySelector('.body_section');

  useEffect(() => {
    const handleScroll = () => {
      if (bodySection) {
        const classPositon = bodySection.getBoundingClientRect().top;
        setScrollPosition(classPositon);
        console.log(classPositon);
        
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <ScrollContext.Provider  value={scrollPosition}>
      <div className='postion'></div>
      {children}
    </ScrollContext.Provider>
  );
};

export const useScrollPosition = () => useContext(ScrollContext);