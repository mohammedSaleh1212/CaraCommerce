import { useState,useEffect } from "react";
const useNav = () => {

    const [showNavbar, setShowNavbar] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const handleScroll = () => {
        const currentScrollY = window.scrollY;
    
        // If scrolling down, hide the navbar
        if (currentScrollY > lastScrollY) {
          setShowNavbar(false);
        } else {
          // If scrolling up, show the navbar
          setShowNavbar(true);
        }
    
        // Remember the current scroll position for the next move
        setLastScrollY(currentScrollY);
      };
    
    
    
    // Remember the current scroll position for the next move
    
    useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    
    // Cleanup: remove the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
    
    
    }, [lastScrollY]
    )
    return {showNavbar}
}
export default useNav