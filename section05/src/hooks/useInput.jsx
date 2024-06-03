import React, { useState } from 'react';

// function getInput() {
// 오류 발생 use 키워드 사용하면 커스텀 훅으로 인식
function useInput() {
  const [input, setInput] = useState('');

  const onChange = (e) => {
    setInput(e.target.value);
  };

  return [input, onChange];
}

export default useInput;
