import React, { memo, useContext } from 'react';
import './TodoItem.css';
import { TodoContext } from '../App';

const TodoItem = ({ id, isDone, content, date }) => {
  const { onUpdate, onDelete } = useContext(TodoContext);
  const onChangeCheckbox = () => {
    onUpdate(id);
  };

  const onClickDeleteButton = () => {
    onDelete(id);
  };
  return (
    <div className="TodoItem">
      <input readOnly type="checkbox" checked={isDone} onChange={onChangeCheckbox} />
      <div className="content">{content}</div>
      <div className="date">{new Date(date).toLocaleDateString()}</div>
      <button onClick={onClickDeleteButton}>삭제</button>
    </div>
  );
};

// 고차 컴포넌트 (HOC)
// 두번째 인수로 함수
export default memo(TodoItem, (prevProps, nextProps) => {
  // 반환값에 따라 Props가 바뀌었는지 판단
  // T -> props 안바뀜 => 리렌더링 x
  // F -> props 바뀜 => 리렌터링 o
  if (prevProps.id !== nextProps.id) return false;
  if (prevProps.isDone !== nextProps.isDone) return false;
  if (prevProps.content !== nextProps.content) return false;
  if (prevProps.date !== nextProps.date) return false;

  return true;
});
