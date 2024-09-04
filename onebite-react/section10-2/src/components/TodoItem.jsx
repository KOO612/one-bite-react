import './TodoItem.css';
const TodoItem = ({ id, isDone, content, date, onUpdate, onDelete }) => {
  const onChangeCheckBox = () => {
    onUpdate(id);
  };

  const onClickDeleteBtn = () => {
    onDelete(id);
  };

  return (
    <div className="TodoItem">
      <input checked={isDone} type="checkbox" onChange={onChangeCheckBox} />
      <div className="content">{content}</div>
      <div className="date">{new Date(date).toLocaleDateString()}</div>
      <button onClick={onClickDeleteBtn}>삭제</button>
    </div>
  );
};

export default TodoItem;