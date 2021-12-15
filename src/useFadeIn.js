import React, { useEffect, useRef } from 'react';

const useFadeIn = (duration = 1, delay = 0) => {
  const element = useRef();
  useEffect(() => {
    if (element.current) {
      const { current } = element;
      current.style.transition = `opacity ${duration}s ease-in-out ${delay}s`;
      current.style.opacity = 1;
    }
  }, []);
  if (typeof duration !== 'number') {
    return;
  }
  return { ref: element, style: { opacity: 0 } };
};

const Practice8 = () => {
  const fadeInH1 = useFadeIn(2, 1);
  const fadeInP = useFadeIn(5, 3);
  return (
    <div>
      <h1 {...fadeInH1}>useFadeIn 공부</h1>
      <p {...fadeInP}>이런거구나,,,</p>
    </div>
  );
};

export default Practice8;
