import { useState } from 'react';

const useTranformSlide = () => {
  const [slideTransform, setSlideTransform] = useState(0);

  const nextSlide = () => {
    setSlideTransform((prev) => {
      prev += 11.11;
      if (prev > 88.88) {
        prev = 0;
      }
      return prev;
    });
  };

  const prevSlide = () => {
    setSlideTransform((prev) => {
      prev -= 11.11;
      if (prev < 0) {
        prev = 88.88;
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
