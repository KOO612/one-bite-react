import React, { useState, useRef, useEffect } from 'react';

const Register = () => {
  // const [name, setName] = useState('');
  // const [birth, setBirth] = useState('');
  // const [country, setCountry] = useState('');
  // const [bio, setBio] = useState('');

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

  const onChangeName = (e) => {
    setInput({ ...input, name: e.target.value });
  };

  const onChangeBirth = (e) => {
    setInput({ ...input, birth: e.target.value });
  };

  const onChangeCountry = (e) => {
    setInput({ ...input, country: e.target.value });
  };
  const onChangeBio = (e) => {
    setInput({ ...input, bio: e.target.value });
  };

  return (
    <div>
      <div>
        <input placeholder={'이름'} onChange={onChangeName} value={input.name} />
      </div>
      <div>
        <input type="date" onChange={onChangeBirth} value={input.birth} />
      </div>
      <div>
        <select onChange={onChangeCountry} value={input.country}>
          <option></option>
          <option value="kr">한국</option>
          <option value="usa">미국</option>
          <option value="uk">영국</option>
        </select>
      </div>
      <div>
        <textarea value={input.bio} onChange={onChangeBio}></textarea>
      </div>
    </div>
  );
};

export default Register;
