import React, { useEffect, useRef, useState } from 'react';

const Practice3 = () => {
  const refPractice = useRef();
  setTimeout(() => refPractice.current.focus(), 5000);
  return (
    <div>
      <div>Hi</div>
      <input ref={refPractice} placeholder="공부" />
    </div>
  );
};

export default Practice3;
