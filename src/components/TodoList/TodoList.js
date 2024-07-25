import { TodoItem } from '../TodoItem/TodoItem';
import styles from './TodoList.module.css';

export const TodoList = ({
	todos,
	isEditing,
	currentTodo,
	editTodo,
	handleEditInputChange,
	saveTodo,
	deleteTodo,
}) => {
	return (
		<ul className={styles.todoList}>
			{todos.map((todo) => (
				<TodoItem
					key={todo.id}
					todo={todo}
					isEditing={isEditing}
					currentTodo={currentTodo}
					editTodo={editTodo}
					handleEditInputChange={handleEditInputChange}
					saveTodo={saveTodo}
					deleteTodo={deleteTodo}
				/>
			))}
		</ul>
	);
};
