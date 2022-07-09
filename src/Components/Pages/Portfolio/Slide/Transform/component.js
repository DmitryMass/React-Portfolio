import { useState } from 'react';

const useTranformSlide = () => {
  const [slideTransform, setSlideTransform] = useState(0);

  const nextSlide = () => {
    setSlideTransform((prev) => {
      prev += 14.28;
      if (prev > 85.7) {
        prev = 0;
      }
      return prev;
    });
  };

  const prevSlide = () => {
    setSlideTransform((prev) => {
      prev -= 14.28;
      if (prev < 0) {
        prev = 85.7;
      }
      return prev;
    });
  };

  return {
    slideTransform,
    setSlideTransform,
    nextSlide,
    prevSlide,
  };
};

export default useTranformSlide;
