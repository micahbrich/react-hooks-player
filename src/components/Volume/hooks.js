import {useState} from 'react';

export const useVolume = () => {
	const [isOpened, setOpened] = useState(false);

	const toggleOpen = () => setOpened(!isOpened);

	return {
		isOpened,
		toggleOpen
	};
};
