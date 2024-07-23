import { useState } from 'react';
import './App.css';
import Button from './components/Button';
// import Products from './components/Products';
// import User from './components/User';

function App() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };
  return (
    <>
      {/* <User></User> */}
      {/* <Products /> */}
      <Button count={count} onClick={handleClick} />
      <Button count={count} onClick={handleClick} />
    </>
  );
}

export default App;
