import { useContext } from 'react';
import styles from './App.module.css';
import { Form } from '../Form/Form';
import { TodoList } from '../TodoList/TodoList';
import { SearchBar } from '../SearchBar/SearchBar';
import { SortButton } from '../SortButton/SortButton';
import { TodoContext } from '../../TodoContext';

export const App = () => {
	const {
		todos,
		filterText,
		isSorted,
		isEditing,
		currentTodo,
		addTodoToList,
		deleteTodo,
		editTodo,
		handleEditInputChange,
		saveTodo,
		toggleSort,
		debouncedSearch,
	} = useContext(TodoContext);

	const sortedTodos = isSorted
		? [...todos].sort((a, b) => a.text.localeCompare(b.text))
		: todos.filter((todo) => todo.text.toLowerCase().includes(filterText.toLowerCase()));

	return (
		<div className={styles.app}>
			<div className={styles.todoListContainer}>
				<h1 className={styles.header}>Список дел</h1>
				<Form addTodoToList={addTodoToList} />
				<SearchBar onSearch={debouncedSearch} />
				<SortButton isSorted={isSorted} toggleSort={toggleSort} />
				<TodoList
					todos={sortedTodos}
					isEditing={isEditing}
					currentTodo={currentTodo}
					editTodo={editTodo}
					handleEditInputChange={handleEditInputChange}
					saveTodo={saveTodo}
					deleteTodo={deleteTodo}
				/>
			</div>
		</div>
	);
};
