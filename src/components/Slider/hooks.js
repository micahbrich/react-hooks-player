import {useState, useRef} from 'react';

export const useSlider = ({onSeek}) => {
	const refTarget = useRef(null);
	const [isDraging, setIsDraging] = useState(false);
	const [manualPosition, setManualPosition] = useState(0);
	const positionRef = useRef(0);

	const handleClick = e => {
		if (e.target.classList.contains('pin')) return;
		const {left, width} = e.target.getBoundingClientRect();
		const offsetX = e.clientX - left;
		const position = offsetX / width;

		positionRef.current = position * 100;

		onSeek(position);
	};

	const handleMouseMove = e => {
		const {left, width} = refTarget.current.getBoundingClientRect();
		const manualPosition = (e.clientX - left) / width * 100;
		const position = Math.min(Math.max(manualPosition, 0), 100);

		positionRef.current = position;
		setManualPosition(position);
	};

	const handleTouchMove = e => {
		const {left, width} = refTarget.current.getBoundingClientRect();
		const manualPosition = (e.touches[0].clientX - left) / width * 100;
		const position = Math.min(Math.max(manualPosition, 0), 100);

		positionRef.current = position;
		setManualPosition(position);
	};

	const handleMouseUp = () => {
		const position = positionRef.current / 100;

		onSeek(position);
		setIsDraging(false);
		window.removeEventListener('mousemove', handleMouseMove, false);
	};

	const handleTouchEnd = () => {
		const position = positionRef.current / 100;

		onSeek(position);
		setIsDraging(false);
		window.removeEventListener('touchmove', handleTouchMove, false);
	};

	const handleMouseDown = e => {
		const {left, width} = refTarget.current.getBoundingClientRect();
		const manualPosition = (e.clientX - left) / width * 100;
		const position = Math.min(Math.max(manualPosition, 0), 100);

		setManualPosition(position);
		setIsDraging(true);
		window.addEventListener('mousemove', handleMouseMove);
		window.addEventListener('mouseup', handleMouseUp, {once: true});
	};

	const handleTouchStart = e => {
		const {left, width} = refTarget.current.getBoundingClientRect();
		const manualPosition = (e.touches[0].clientX - left) / width * 100;
		const position = Math.min(Math.max(manualPosition, 0), 100);

		setManualPosition(position);
		setIsDraging(true);
		window.addEventListener('touchmove', handleTouchMove);
		window.addEventListener('touchend', handleTouchEnd, {once: true});
	};

	return {
		isDraging,
		refTarget,
		handleClick,
		manualPosition,
		handleMouseDown,
		handleTouchStart
	};
};
