import React, { useEffect, useRef, useState } from 'react';

const useHover = (onHover) => {
  const element = useRef();

  useEffect(() => {
    if (element.current) {
      element.current.addEventListener('mouseenter', onHover);
    }
    return () => {
      if (element.current) {
        element.current.removeEventListener('mouseenter', onHover);
      }
    };
  }, []);
  if (typeof onHover !== 'function') {
    return;
  }

  return element;
};

const Practice4 = () => {
  const sayHello = () => console.log('안뇽!');
  const title = useHover(sayHello);
  return (
    <div>
      <h1 ref={title}>Hi</h1>
    </div>
  );
};

export default Practice4;
