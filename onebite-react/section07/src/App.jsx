import { useEffect, useRef, useState } from 'react';
import './App.css';
import Controller from './components/Controller';
import Viewer from './components/Viewer';
import Even from './components/Even';

function App() {
  // state lifting (state 끌어 올리기)
  const [count, setCount] = useState(0);
  const [input, setInput] = useState('');

  const isMount = useRef(false);

  // 두번째 인수 []의 값이 변하면 첫번째인수 () => {} 콜백 함수를 실행
  // useEffect(() => {
  //   console.log(`count: ${count} ${input}`);
  // }, [count, input]);
  // 의존성 배열, dependency array -> deps

  // 마운트 탄생
  useEffect(() => {
    console.log('mount');
  }, []);
  // 마운트 시 최초 1회만 실행하고 싶다면 useEffect 에서 빈배열 deps를 설정

  // 업데이트 변화, 리렌더링
  useEffect(() => {
    if (!isMount.current) {
      isMount.current = true;
      return;
    }
    console.log('update');
  });

  // 언마운트 죽음

  const onClickButton = (value) => {
    setCount(count + value);
  };
  return (
    <div className="App">
      <h1>Simple Counter</h1>
      <section>
        <input
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
          }}
        />
      </section>
      <section>
        <Viewer count={count} />
        {count % 2 === 0 ? <Even /> : null}
      </section>
      <section>
        <Controller onClickButton={onClickButton} />
      </section>
    </div>
  );
}

export default App;
