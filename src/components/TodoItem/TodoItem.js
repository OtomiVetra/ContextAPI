import styles from './TodoItem.module.css';

export const TodoItem = ({
	todo,
	isEditing,
	currentTodo,
	editTodo,
	handleEditInputChange,
	saveTodo,
	deleteTodo,
}) => {
	return (
		<li className={styles.todoListItem}>
			{isEditing && currentTodo.id === todo.id ? (
				<form className={styles.editForm} onSubmit={saveTodo}>
					<input type='text' value={currentTodo.text} onChange={handleEditInputChange} />
					<button type='submit'>✔️</button>
				</form>
			) : (
				<>
					<span className={styles.todoText}>{todo.text}</span>
					<div className={styles.buttonGroup}>
						<button className={styles.button} onClick={() => editTodo(todo)}>
							✏️
						</button>
						<button className={styles.button} onClick={() => deleteTodo(todo.id)}>
							❌
						</button>
					</div>
				</>
			)}
		</li>
	);
};
