import { useState, useContext } from 'react';
import styles from './Form.module.css';
import { TodoContext } from '../../TodoContext';

export const Form = () => {
	const [value, setValue] = useState('');
	const { addTodoToList } = useContext(TodoContext);

	const addTodo = (e) => {
		e.preventDefault();
		const newTodoItem = { text: value };
		fetch('http://localhost:3005/todos', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json;charset=utf-8' },
			body: JSON.stringify(newTodoItem),
		})
			.then((response) => response.json())
			.then((response) => {
				console.log('Ответ сервера, дело добавлено', response);
				addTodoToList(response);
				setValue('');
			});
	};

	return (
		<form className={styles.form} onSubmit={addTodo}>
			<input
				type='text'
				placeholder='введите текст'
				value={value}
				onChange={(e) => setValue(e.target.value)}
			/>
			<button className={styles.button} type='submit'>
				Добавить
			</button>
		</form>
	);
};
