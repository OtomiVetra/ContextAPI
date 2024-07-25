import styles from './SearchBar.module.css';

export const SearchBar = ({ onSearch }) => {
	const handleSearchInputChange = (e) => {
		onSearch(e.target.value);
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
