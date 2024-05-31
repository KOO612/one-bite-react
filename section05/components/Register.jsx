import React, { useState, useRef } from 'react';

const Register = () => {
  const [input, setInput] = useState({
    name: '',
    birth: '',
    country: '',
    bio: '',
  });

  const countRef = useRef(0);
  const inputRef = useRef();

  // 통합 이벤트 핸들러
  const onChange = (e) => {
    countRef.current++;
    console.log(countRef.current);
    setInput({
      ...input,
      // name과 value 필수
      // js 객체 관련 내용
      // 객체 생성 시 키 위치에 [변수]를 사용하면 키로 설정됨
      // 동적으로 결정하기 위해 [] 대괄호 사용
      // name 속성의 값을 적용
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = () => {
    if (input.name === '') {
      // 이름 입력 돔 요소에 포커스
      inputRef.current.focus();
    }
  };

  return (
    <div>
      <div>
        <input ref={inputRef} name="name" type="text" value={input.name} onChange={onChange} placeholder={'이름'} />
      </div>
      <div>
        <input name="birth" type="date" onChange={onChange} value={input.birth} />
      </div>
      <div>
        <select name="country" value={input.country} onChange={onChange}>
          <option value=""></option>
          <option value="kr">한국</option>
          <option value="us">미국</option>
          <option value="uk">영국</option>
        </select>
      </div>
      <div>
        <textarea name="bio" value={input.bio} onChange={onChange} />
      </div>

      <button onClick={onSubmit}>제출</button>
    </div>
  );
};

export default Register;
