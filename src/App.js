import './App.css';
import React, { useState } from 'react';

const useInput = (initialValue, validator) => {
  const [value, setValue] = useState(initialValue);
  const onChange = (event) => {
    const {
      target: { value },
    } = event;
    let willUpdate = true;
    if (typeof validator === 'function') {
      willUpdate = validator(value);
    }
    if (willUpdate) {
      setValue(value);
    }
  };
  return { value, onChange };
};

const App = () => {
  const maxLength = (value) => value.length <= 7;
  const specialSymbol = (value) => !value.includes('@');
  const name = useInput('소중한', specialSymbol);
  return (
    <div className="App">
      <h1>안녕하세요</h1>
      <input placeholder="이름" {...name} />
    </div>
  );
};

export default App;
