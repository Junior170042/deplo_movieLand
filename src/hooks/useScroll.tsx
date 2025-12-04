//hooks to know if there scroll on any page.
import { useState, useEffect, useRef } from 'react';
const useIsScrolling = () => {
    const [isScrolling, setIsScrolling] = useState(false);
    const scrollTimeoutRef = useRef<NodeJS.Timeout | null>(null);

    const handleScroll = (position: string) => {
        if (position === "top") {
            window.scrollTo({ top: 0, behavior: 'smooth' })
        } else {
            window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })
        }
    }

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolling(true);

            if (scrollTimeoutRef.current) {
                clearTimeout(scrollTimeoutRef.current);
            }

            scrollTimeoutRef.current = setTimeout(() => {
                setIsScrolling(false);
            }, 150);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
            if (scrollTimeoutRef.current) {
                clearTimeout(scrollTimeoutRef.current);
            }
        };
    }, []);

    return { isScrolling, handleScroll };
};

export default useIsScrolling;
