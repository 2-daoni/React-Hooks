import React, { useEffect, useState } from 'react';

const useNetwork = (onChange) => {
  const [status, setStatus] = useState(navigator.onLine);
  const handleChange = () => {
    if (typeof onChange === 'function') {
      onChange(navigator.onLine);
    }
    setStatus(navigator.onLine);
  };
  useEffect(() => {
    window.addEventListener('online', handleChange);
    window.addEventListener('offline', handleChange);
    return () => {
      window.removeEventListener('online', handleChange);
      window.removeEventListener('offline', handleChange);
    };
  }, []);
  return status;
};

const Practice9 = () => {
  const handleNetworkChange = (onLine) => {
    console.log(onLine ? '온라인이에요!' : '오프라인이에요!');
  };
  const onLine = useNetwork(handleNetworkChange);
  return (
    <div>
      <h1>useNetwork 공부</h1>
      <h2>{onLine ? 'Online' : 'Offline'}</h2>
    </div>
  );
};

export default Practice9;
