import React, { useEffect } from 'react';
import gsap from 'gsap';

const CustomCursor = () => {
  useEffect(() => {
    const handleMouseMove = (event) => {
      cursorMovingAnimation(event);
    };

    const cursorMovingAnimation = (event) => {
      try {
        const timing = gsap.timeline({
          defaults: {
            x: event.clientX,
            y: event.clientY,
          },
        });

        timing.to(
          '.cs_cursor_sm',
          {
            x: event.clientX,
            y: event.clientY,
            ease: 'power2.out',
          },
          '-=1.5',
        );
      } catch (err) {
        console.log(err);
      }
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <>
      <span className="cs_cursor_sm"></span>
    </>
  );
};

export default CustomCursor;
