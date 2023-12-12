import TopSection from "../../elements/Navbar/TopSection";
import MiddleSection from "../../elements/Navbar/MiddleSection";
import BottomSection from "../../elements/Navbar/BottomSection";
import { useState, useEffect } from "react";


const NavbarLayout = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY;
      if (position > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    }
  })

  return (
    
      <div className={`${scrolled? "fixed top-0 left-0 right-0 z-[999]" : "sticky top-0 left-0 right-0 z-[999]"}  w-full bg-white border border-b-gray-200 flex flex-col`}>
        <TopSection />
        <MiddleSection />
        <BottomSection />
      </div>
    
  );
};

export default NavbarLayout;
