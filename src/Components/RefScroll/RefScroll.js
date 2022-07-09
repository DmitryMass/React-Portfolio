import { useRef } from 'react';

export const useScrollRef = () => {
  const ref = useRef(null);
  const logoRef = useRef(null);

  const handleClick = () => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };
  const handleLogoClick = () => {
    logoRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return {
    ref,
    logoRef,
    handleClick,
    handleLogoClick,
  };
};
