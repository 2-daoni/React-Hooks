import React, { useEffect, useState } from 'react';

const useConfirm = (message = '', callback, rejection) => {
  const confrimAction = () => {
    if (window.confirm(message)) {
      callback();
    } else {
      rejection();
    }
  };
  if (!callback || typeof callback !== 'function') {
    return;
  }
  if (rejection && typeof rejection !== 'function') {
    return;
  }
  return confrimAction;
};

const Practice5 = () => {
  const study = () => console.log('useConfirm에 대해 학습중입니다!');
  const nope = () => console.log('안궁금해요!');
  const confirmStudy = useConfirm('궁금하신가요?', study, nope);
  return (
    <div>
      <button onClick={confirmStudy}>useConfirm 공부중</button>
    </div>
  );
};

export default Practice5;
