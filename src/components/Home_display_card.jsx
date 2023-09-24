import { useEffect, useRef } from 'react';
import { BsArrowRight } from 'react-icons/bs';

const Home_display_card = ({ imageSrc, title, description, delay ,button}) => {
  const opacity_ref = useRef(null);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.2,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          opacity_ref.current.style.transition = `opacity 1s ease ${delay}s`;
          opacity_ref.current.style.opacity = 1;
          observer.unobserve(opacity_ref.current);
        }
      });
    }, options);

    if (opacity_ref.current) {
      observer.observe(opacity_ref.current);
    }
    return () => {
      if (opacity_ref.current) {
        observer.unobserve(opacity_ref.current);
      }
    };
  }, [delay]);

  return (
    <div ref={opacity_ref}>
      <img src={imageSrc} alt={title} />
      <h2 style={{"display":title? "block":"none"}}>{title}</h2>
      <p>{description}</p>
      <button>{button}<span><BsArrowRight /></span></button>
    </div>
  );
};

export default Home_display_card;
