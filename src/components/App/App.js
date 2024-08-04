import styles from './App.module.css';
import { Form } from '../Form/Form';
import { TodoList } from '../TodoList/TodoList';
import { SearchBar } from '../SearchBar/SearchBar';
import { SortButton } from '../SortButton/SortButton';

export const App = () => {
	return (
		<div className={styles.app}>
			<div className={styles.todoListContainer}>
				<h1 className={styles.header}>Список дел</h1>
				<Form />
				<SearchBar />
				<SortButton />
				<TodoList />
			</div>
		</div>
	);
};
