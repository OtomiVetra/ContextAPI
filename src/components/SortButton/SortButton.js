import { useContext } from 'react';
import styles from './SortButton.module.css';
import { TodoContext } from '../../TodoContext';

export const SortButton = () => {
	const { isSorted, toggleSort } = useContext(TodoContext);

	return (
		<button className={styles.button} onClick={toggleSort}>
			{isSorted ? '🔼' : '🔽'}
		</button>
	);
};
