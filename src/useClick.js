import React, { useEffect, useRef, useState } from 'react';

const useClick = (onClick) => {
  const element = useRef();

  useEffect(() => {
    if (element.current) {
      element.current.addEventListener('click', onClick);
    }
    return () => {
      if (element.current) {
        element.current.removeEventListener('click', onClick);
      }
    };
  }, []);
if (typeof onClick !== 'function') {
  return;
}
  return element;
};

const Practice3 = () => {
  const sayHello = () => console.log('안뇽!');
  const title = useClick(sayHello);
  return (
    <div>
      <h1 ref={title}>Hi</h1>
    </div>
  );
};

export default Practice3;
