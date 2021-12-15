import React, { useEffect, useState } from 'react';

const useBeforeLeave = (onBefore) => {
  const handle = (event) => {
    const { clientY } = event;
    if (clientY <= 0) {
      onBefore();
    }
  };
  useEffect(() => {
    document.addEventListener('mouseleave', handle);
    return () => document.removeEventListener('mouseleave', handle);
  }, []);
  if (typeof onBefore !== 'function') {
    return;
  }
};

const Practice7 = () => {
  const stay = () => console.log('가지마세요,,');
  useBeforeLeave(stay);
  return (
    <div>
      <h1>useBeforeLeave 공부</h1>
    </div>
  );
};

export default Practice7;
