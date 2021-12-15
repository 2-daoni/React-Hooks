import React, { useRef } from 'react';

const useFullScreen = () => {
  const element = useRef();
  const makeFull = () => {
    if (element.current) {
      element.current.requestFullscreen();
    }
  };
  const exitFull = () => {
    const checkFullScreen = document.fullscreenElement;
    if (checkFullScreen !== null) {
      document.exitFullscreen();
    }
  };
  return { element, makeFull, exitFull };
};

const Practice11 = () => {
  const { element, makeFull, exitFull } = useFullScreen();
  return (
    <div style={{ height: '1000vh' }}>
      <div ref={element}>
        <img src="https://cdn.pixabay.com/photo/2017/07/28/00/57/bank-2547356_640.jpg" />
      </div>
      <button onClick={makeFull}>크게 보여줘!</button>
      <button onClick={exitFull}>풀스크린 그만!</button>
    </div>
  );
};

export default Practice11;
