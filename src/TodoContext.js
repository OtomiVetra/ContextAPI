// src/contexts/TodoContext.js
import React, { createContext, useState, useEffect, useCallback } from 'react';
import { debounce } from 'lodash';

export const TodoContext = createContext();

export const TodoProvider = ({ children }) => {
	const [todos, setTodos] = useState([]);
	const [filterText, setFilterText] = useState('');
	const [isSorted, setIsSorted] = useState(false);
	const [isEditing, setIsEditing] = useState(false);
	const [currentTodo, setCurrentTodo] = useState({});

	useEffect(() => {
		fetch('http://localhost:3005/todos')
			.then((response) => response.json())
			.then((data) => setTodos(data))
			.catch((error) => console.error('что-то пошло не так:', error));
	}, []);

	const addTodoToList = (newTodo) => {
		setTodos((prevTodos) => [...prevTodos, newTodo]);
	};

	const updateTodoInList = (updatedTodo) => {
		setTodos((prevTodos) =>
			prevTodos.map((todo) => (todo.id === updatedTodo.id ? updatedTodo : todo)),
		);
	};

	const removeTodoFromList = (id) => {
		setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
	};

	const deleteTodo = (id) => {
		fetch(`http://localhost:3005/todos/${id}`, {
			method: 'DELETE',
		})
			.then((response) => {
				if (response.ok) {
					removeTodoFromList(id);
				} else {
					console.error('Не удалось удалить дело');
				}
			})
			.catch((error) => console.error('что-то пошло не так:', error));
	};

	const editTodo = (todo) => {
		setIsEditing(true);
		setCurrentTodo({ ...todo });
	};

	const handleEditInputChange = (e) => {
		setCurrentTodo({ ...currentTodo, text: e.target.value });
	};

	const saveTodo = (e) => {
		e.preventDefault();
		fetch(`http://localhost:3005/todos/${currentTodo.id}`, {
			method: 'PUT',
			headers: { 'Content-Type': 'application/json;charset=utf-8' },
			body: JSON.stringify(currentTodo),
		})
			.then((response) => response.json())
			.then((updatedTodo) => {
				updateTodoInList(updatedTodo);
				setIsEditing(false);
				setCurrentTodo({});
			})
			.catch((error) => console.error('что-то пошло не так:', error));
	};

	const filteredTodos = todos.filter((todo) =>
		todo.text.toLowerCase().includes(filterText.toLowerCase()),
	);

	const sortedTodos = isSorted
		? [...filteredTodos].sort((a, b) => a.text.localeCompare(b.text))
		: filteredTodos;

	const toggleSort = () => {
		setIsSorted((prevIsSorted) => !prevIsSorted);
	};

	const debouncedSearch = useCallback(
		debounce((value) => {
			setFilterText(value);
		}, 300),
		[],
	);

	return (
		<TodoContext.Provider
			value={{
				todos,
				filterText,
				isSorted,
				isEditing,
				currentTodo,
				addTodoToList,
				updateTodoInList,
				removeTodoFromList,
				deleteTodo,
				editTodo,
				handleEditInputChange,
				saveTodo,
				toggleSort,
				debouncedSearch,
			}}
		>
			{children}
		</TodoContext.Provider>
	);
};
