import { useContext } from 'react';
import { TodoItem } from '../TodoItem/TodoItem';
import styles from './TodoList.module.css';
import { TodoContext } from '../../TodoContext';

export const TodoList = () => {
	const { todos, filterText, isSorted } = useContext(TodoContext);

	const sortedTodos = isSorted
		? [...todos].sort((a, b) => a.text.localeCompare(b.text))
		: todos.filter((todo) => todo.text.toLowerCase().includes(filterText.toLowerCase()));

	return (
		<ul className={styles.todoList}>
			{sortedTodos.map((todo) => (
				<TodoItem key={todo.id} todo={todo} />
			))}
		</ul>
	);
};
