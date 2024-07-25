import styles from './SortButton.module.css';

export const SortButton = ({ isSorted, toggleSort }) => {
	return (
		<button className={styles.button} onClick={toggleSort}>
			{isSorted ? '🔼' : '🔽'}
		</button>
	);
};
