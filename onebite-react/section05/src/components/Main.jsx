import React from 'react';

const Main = () => {
  const user = {
    name: 'koo',
    isLogin: true,
  };

  return <main>{user.isLogin ? <div>로그아웃</div> : <div>로그인</div>}</main>;
};

export default Main;
