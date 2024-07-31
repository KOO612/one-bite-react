import React, { useEffect, useState } from 'react';

const Test = () => {
  const [counter, setCounter] = useState(0);

  const handleClick = () => {
    setCounter((prev) => prev + 1);
  };

  useEffect(() => {
    const addMouseEvent = () => {
      console.log(counter);
    };

    window.addEventListener('click', addMouseEvent);

    return () => {
      console.log('클린업 함수 실행!', counter);
      window.removeEventListener('click', addMouseEvent``);
    };
  }, [counter]);
  return (
    <>
      <h1>{counter}</h1>
      <button onClick={handleClick}>+</button>
    </>
  );
};

export default Test;
