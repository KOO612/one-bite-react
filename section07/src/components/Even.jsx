import React, { useEffect } from 'react';

const Even = () => {
  useEffect(() => {
    // useEffect의 반환하는 콜백함수 -> 클린업, 정리함수
    return () => {
      console.log('unmount');
    };
  }, []);
  return <div>짝수입니다.</div>;
};

export default Even;
