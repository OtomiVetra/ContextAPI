import { useContext } from 'react';
import styles from './SearchBar.module.css';
import { TodoContext } from '../../TodoContext';

export const SearchBar = () => {
	const { debouncedSearch } = useContext(TodoContext);

	const handleSearchInputChange = (e) => {
		debouncedSearch(e.target.value);
	};

	return (
		<input
			type='text'
			placeholder='Поиск...'
			onChange={handleSearchInputChange}
			className={styles.searchInput}
		/>
	);
};
