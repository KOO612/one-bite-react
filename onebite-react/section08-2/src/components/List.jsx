import { useState } from 'react';
import './List.css';
import TodoItem from './TodoItem';

const List = ({ todos }) => {
  const [search, setSearch] = useState('');

  const [filteredSearch, setFilteredSearch] = useState('');

  const onChangeSearch = (e) => {
    setSearch(e.target.value);
  };

  const onSearch = () => {
    setFilteredSearch(search);
  };

  const onKeydownSearch = (e) => {
    if (e.keyCode === 13) {
      onSearch();
    }
  };

  const getFilteredData = () => {
    if (filteredSearch === '') {
      return todos;
    }
    return todos.filter((todo) => todo.content.toLowerCase().includes(filteredSearch.toLowerCase()));
  };

  const filteredTodos = getFilteredData();

  return (
    <div className="List">
      <h4>Todo List 🍀</h4>
      <input value={search} onKeyDown={onKeydownSearch} onChange={onChangeSearch} placeholder="검색어를 입력하세요." />
      <button onClick={onSearch}>검색</button>
      <div className="todos_wrapper">
        {filteredTodos.map((todo) => {
          return <TodoItem key={todo.id} {...todo} />;
        })}
      </div>
    </div>
  );
};

export default List;
