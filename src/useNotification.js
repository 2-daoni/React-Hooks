import React from 'react';

const useNotification = (title, options) => {
  if (!('Notification' in window)) {
    return;
  }
  const sendNoti = () => {
    if (Notification.permission !== 'granted') {
      Notification.requestPermission().then((permission) => {
        if (permission === 'granted') {
          new Notification(title, options);
        } else {
          return;
        }
      });
    } else {
      new Notification(title, options);
    }
  };
  return sendNoti;
};

const Practice12 = () => {
  const popNoti = useNotification('notification이다! 성공!');
  return (
    <div>
      <h1>useNotification 공부</h1>
      <button onClick={popNoti}>알아보자</button>
    </div>
  );
};

export default Practice12;
