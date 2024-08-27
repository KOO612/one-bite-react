import React, { useState, useRef, useEffect } from 'react';

const Register = () => {
  const [input, setInput] = useState({
    name: '',
    birth: '',
    country: '',
    bio: '',
  });

  useEffect(() => {
    // 현재 날짜를 YYYY-MM-DD 형식으로 변환
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const day = String(today.getDate()).padStart(2, '0');

    const formattedDate = `${year}-${month}-${day}`;
    setInput({ ...input, birth: formattedDate });
  }, []);

  const countRef = useRef(0);
  const inputRef = useRef();

  const onChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = () => {
    if (input.name === '') {
      inputRef.current.focus();
    }
  };

  return (
    <div>
      <div>
        <input placeholder={'이름'} onChange={onChange} value={input.name} name="name" ref={inputRef} />
      </div>
      <div>
        <input type="date" onChange={onChange} value={input.birth} name="date" />
      </div>
      <div>
        <select onChange={onChange} value={input.country} name="country">
          <option></option>
          <option value="kr">한국</option>
          <option value="usa">미국</option>
          <option value="uk">영국</option>
        </select>
      </div>
      <div>
        <textarea value={input.bio} onChange={onChange} name="bio" />
      </div>
      <button onClick={onSubmit}>제출</button>
    </div>
  );
};

export default Register;
