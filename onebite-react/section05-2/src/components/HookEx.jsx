// 함수 컴포넌트, 커스텀 훅 내부에서만 호출 가능
// 조건부로 호출 x 반복문 안에서 호출 불가능하다
// 커스텀 훅을 만들수 있다.
// 컴포넌트마다 반복하고 훅을 사용하는 로직이라면 커스텀 훅으로 사용 가능

import React from 'react';
import useInput from '../hooks/useInput';

// const state = useState();
// 에러

// // function getInput() {
// // 오류 발생 use 키워드 사용하면 커스텀 훅으로 인식
// function useInput() {
//   const [input, setInput] = useState('');

//   const onChange = (e) => {
//     setInput(e.target.value);
//   };

//   return [input, onChange];
// }

const HookEx = () => {
  // if (true) {
  //   const state = useState();
  // } 에러

  const [input, onChange] = useInput();
  // 구조분해할당

  const [input2, onChange2] = useInput();

  return (
    <div>
      <input value={input} onChange={onChange} />
      <input value={input2} onChange={onChange2} />
    </div>
  );
};

export default HookEx;
