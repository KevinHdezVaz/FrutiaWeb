import { useEffect } from 'react';

/**
 * Custom hook to reveal elements as they enter the viewport.
 * It searches for elements with the 'reveal' class and adds 'visible' when they are in view.
 */
const useScrollReveal = () => {
    useEffect(() => {
        const revealCallback = (entries, observer) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    // Optional: stop observing once visible for better performance
                    // observer.unobserve(entry.target);
                }
            });
        };

        const options = {
            root: null,
            rootMargin: '0px',
            threshold: 0.15, // Trigger when 15% of the element is visible
        };

        const observer = new IntersectionObserver(revealCallback, options);
        const revealElements = document.querySelectorAll('.reveal');

        revealElements.forEach((el) => observer.observe(el));

        return () => {
            revealElements.forEach((el) => observer.unobserve(el));
        };
    }, []);
};

export default useScrollReveal;
