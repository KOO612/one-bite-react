import './App.css';
import Home from './pages/Home';
import New from './pages/New';
import Diary from './pages/Diary';
import Edit from './pages/Edit';
import { Routes, Route, Link, useNavigate } from 'react-router-dom';
import Notfound from './pages/Notfound';
import Button from './components/Button';
import Header from './components/Header';

// import { getEmotionImage } from './util/get-emotion-image';

// 1. "/" : 모든 일기를 조회하는 home 페이지
// 2. "/new" : 새로운 일기를 작성하는 New 페이지
// 3. "/diary" : 일기를 상세히 조회하는 Diary 페이지

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/new" element={<New />}></Route>
        <Route path="/edit/:id" element={<Edit />}></Route>
        <Route path="/diary/:id" element={<Diary />}></Route>
        <Route path="*" element={<Notfound />}></Route>
      </Routes>
    </>
  );
}

export default App;
